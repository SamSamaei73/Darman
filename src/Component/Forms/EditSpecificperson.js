import React, { useRef, useState, useContext, useEffect } from "react";
import "../../css/EditSpecificperson.css";
import DatePicker from "react-multi-date-picker";
import Popup from "../Popup";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import persian_en from "react-date-object/locales/persian_en";
import Select from "react-select";
import MeetingContext from "../../Context/meetingContext";
import CurrencyInput from "react-currency-input-field";
import Swal from "sweetalert2";
import axios from "axios";
import { SERVER_URL } from "../../Constant/constant";
import DateObject from "react-date-object";

function useEffectSkipFirst(fn, arr) {
  const isFirst = useRef(true);
  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    fn();
  }, arr);
}

const EditSpecificperson = (props) => {
  const meetingContext = useContext(MeetingContext);
  const {
    GetPacketIsOpenList,
    packetIsOpenListData,
    recipePropByContractNoData,
    specificPersonWithContracts,
    CreateOrUpdateSpecificperson,
    CreateOrUpdateSpecificpersonData,
    GetSpecificpersonList,
    CreateOrUpdateHealthVisit,
    createdOrUpdatedHealthVisitData,
  } = meetingContext;

  const [isOpen, setIsOpen] = useState(false);
  const [SelectedPackeNo, setSelectedPackeNo] = useState(null);
  const [PacketNoList, setPacketNoList] = useState([]);
  const [SelectedRecipeKind, setSelectedRecipeKind] = useState(null);
  const [SelectedRelative, setSelectedRelative] = useState(null);
  const [PersianVisitDate, setPersianVisitDate] = useState(null);
  const [PrescriptionCost, setPrescriptionCost] = useState(null);
  const [VisitDate, setVisitDate] = useState(null);
  const [SelectedConfirmedValue, setSelectedConfirmedValue] = useState(null);
  const [faranshiz, setFaranshiz] = useState(null);
  const [ghireTahod, setGhireTahod] = useState(null);
  const [finalCost, setFinalCost] = useState(null);
  const [minusValueCost, setMinusValueCost] = useState(null);
  const [contractId, setContractId] = useState(null);

  useEffect(async () => {
    GetPacketIsOpenList();
    console.log("Data send by props:", props.Data.original);
    if (props.Data) {
      setPrescriptionCost(props.Data.original.مبلغ_نسخه);
      setFaranshiz(props.Data.original.فرانشیز);
      setGhireTahod(props.Data.original.مبلغ_غیر_تعهد);
      setFinalCost(props.Data.original.مبلغ_نهایی);
      setMinusValueCost(props.Data.original.مبلغ_کسرشده);
      setContractId(props.contractId);

      var mah = new DateObject();

      mah
        .setCalendar(persian)
        .setLocale(persian_fa)
        .setFormat("YYYY/MM/DD")
        .parse(props.Data.original.RecipeDate);

      setPersianVisitDate(mah.format());
      setVisitDate(mah);
    }

    var pactIsOpenData = packetIsOpenListData
      ? packetIsOpenListData.map((o) => {
          var newObj = {};
          newObj.value = o.ObjectId;
          newObj.label = o.MahBachNo;
          return newObj;
        })
      : null;
    setPacketNoList(pactIsOpenData);
    setSelectedPackeNo(
      pactIsOpenData.filter((item) => {
        return item.label == props.Data.original.ShomareParvande;
      })
    );

    setSelectedRecipeKind(
      recipePropByContractNoData.filter(
        (item) => item.label == props.Data.original.RecipeDesc
      )
    );

    console.log("recipePropByContractNoData Data:", recipePropByContractNoData);
    // console.log('Relative:', props.Data.original.NamkhanevadegiBimar + props.Data.original.NamBimar);
    let RelativeName = specificPersonWithContracts
      ? specificPersonWithContracts.lstRelatives.filter(
          (item) =>
            item.label ==
            props.Data.original.NamBimar +
              " " +
              props.Data.original.NamkhanevadegiBimar
        )
      : null;
    setSelectedRelative(RelativeName);
    setIsOpen(true);
    // console.log('isOpen data:', props.isopen);
  }, []);

  const togglePopup = () => {
    setIsOpen(!isOpen);

    props.toggleShowModal(!isOpen);
  };

  const UpdateSpecificpersone = async () => {
    let CreateOrUpdateHealthVisitData = {
      Id: props.Data.original.ObjectId,
      BatchId: SelectedPackeNo[0].value,
      PrsNum: props.Data.original.Prsnum,
      PatientId: SelectedRelative[0].value,
      RecipePropertiesId: SelectedRecipeKind.value,
      RecipeMoney: PrescriptionCost,
      RecipeDate: PersianVisitDate,
      Franshiz: faranshiz,
      OutofContractMoney: ghireTahod,
      FinalCost: finalCost,
      ApprovedMoney: SelectedConfirmedValue,
      DeletedMoney: minusValueCost,
      ContractId:contractId
    };
    console.log(
      "HealthVisitData For Update To Db:",
      new Date(),
      CreateOrUpdateHealthVisitData
    );

    await CreateOrUpdateHealthVisit(CreateOrUpdateHealthVisitData, true);
  };

  useEffectSkipFirst(() => {
    if (createdOrUpdatedHealthVisitData.Update) {
      Swal.fire({
        icon: "success",
        title: "بسته جدید با موفقیت ویرایش شد",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(
        "After Update To Db:",
        new Date(),
        createdOrUpdatedHealthVisitData
      );
      setSelectedPackeNo(null);
      setSelectedRecipeKind(null);
      setSelectedRelative(null);
      setVisitDate(null);
      setPrescriptionCost(0);
      setSelectedConfirmedValue(0);
      setFaranshiz(0);
      setGhireTahod(0);
      setFinalCost(0);
      setMinusValueCost(0);

      props.refreshInsuranceData();
    } else if (createdOrUpdatedHealthVisitData.Insert) {
    } else {
      Swal.fire({
        icon: "warning",
        title: "ویرایش بسته با مشکل مواجه شد",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }, [createdOrUpdatedHealthVisitData]);

  const onChanged = (e, Type, maxNum) => {
    switch (Type) {
      case "SelectedConfirmedValueEdit":
        setSelectedConfirmedValue(e);
        break;
      case "PrescriptionCostEdit":
        setPrescriptionCost(e);
        setMinusValueCost(e - finalCost);
        break;
      case "ghireTahodEdit":
        setGhireTahod(e);
        break;
      case "faranshizEdit":
        setFaranshiz(e);
        break;
      case "FinalCostEdit":
        setFinalCost(e);
        setMinusValueCost(PrescriptionCost - e);
      case "MinusValueCostEdit":
        break;
    }
  };

  return (
    <div id="Edit-specification">
      {isOpen && (
        <Popup
          content={
            <>
              <div id="Edit-form">
                <div className="container">
                  <div className="Input-Nstyle">
                    <div className="edit-info3">
                      <div className="Tittle-Edit">
                        <h2>ویرایش نسخه های وارده</h2>
                      </div>
                      <div className="edit-input">
                        <label> شماره بسته</label>
                        <Select
                          value={SelectedPackeNo}
                          options={PacketNoList}
                          // options={options}
                          onChange={(e) => {
                            console.log(`Option selected:`, e);
                            setSelectedPackeNo(e);
                            // onChanged(e, 'SelectedInsuranceContractChanged');
                          }}
                          className="ContractNo"
                        />
                      </div>
                      <div className="edit-input">
                        <label> نوع نسخه</label>
                        <Select
                          value={SelectedRecipeKind}
                          options={
                            recipePropByContractNoData
                              ? recipePropByContractNoData
                              : []
                          }
                          onChange={(e) => {
                            console.log(`Option selected:`, e);
                            setSelectedRecipeKind(e);
                          }}
                          className="ContractNo"
                        />
                      </div>
                      <div className="edit-input">
                        <label>نام بیمار</label>
                        <Select
                          value={SelectedRelative}
                          options={
                            specificPersonWithContracts
                              ? specificPersonWithContracts.lstRelatives
                              : []
                          }
                          onChange={(e) => {
                            console.log(`Option selected:`, e);
                            setSelectedRelative(e);
                          }}
                          className="ContractNo"
                        />
                      </div>
                      <div className="edit-input">
                        <label> تاریخ نسخه</label>
                        <DatePicker
                          placeholder="تاریخ  "
                          calendar={persian}
                          locale={persian_fa}
                          value={VisitDate}
                          onChange={(value) => {
                            var pdata = value.toLocaleString();
                            setPersianVisitDate(pdata);
                            setVisitDate(value);
                          }}
                          calendarPosition="bottom-right"
                          style={{
                            height: "2.5rem",
                            width: "10rem",
                            textAlign: "center",
                            marginTop: "2rem !important",
                          }}
                          className="CalanderStyle"
                        />
                      </div>
                      <div className="edit-input">
                        <label>مبلغ نسخه</label>
                        <CurrencyInput
                          id="input-example"
                          name="input-name"
                          placeholder="0"
                          maxLength="12"
                          value={PrescriptionCost}
                          decimalsLimit={2}
                          onValueChange={(value, name) =>
                            onChanged(value, "PrescriptionCostEdit", 20)
                          }
                          className="newStyleInput"
                        />
                      </div>
                      <div className="edit-input">
                        <label>مبلغ درخواستی</label>
                        <CurrencyInput
                          id="input-example"
                          name="input-name"
                          placeholder="0"
                          maxLength="12"
                          value={SelectedConfirmedValue}
                          decimalsLimit={2}
                          onValueChange={(value, name) =>
                            onChanged(value, "SelectedConfirmedValueEdit", 20)
                          }
                          className="newStyleInput"
                        />
                      </div>
                      <div className="edit-input">
                        <label>غیرتعهد</label>
                        <CurrencyInput
                          id="input-example"
                          name="input-name"
                          placeholder="0"
                          maxLength="12"
                          value={ghireTahod}
                          decimalsLimit={2}
                          onValueChange={(value, name) =>
                            onChanged(value, "ghireTahodEdit", 20)
                          }
                          className="newStyleInput"
                        />
                      </div>
                      <div className="edit-input">
                        <label>فرانشیز</label>
                        <CurrencyInput
                          id="input-example"
                          name="input-name"
                          placeholder="0"
                          maxLength="12"
                          value={faranshiz}
                          decimalsLimit={2}
                          onValueChange={(value, name) =>
                            onChanged(value, "faranshizEdit", 20)
                          }
                          className="newStyleInput"
                        />
                      </div>
                      <div className="edit-input">
                        <label>مبلغ کسر شده</label>
                        <CurrencyInput
                          className="newStyleInput"
                          id="input-example"
                          name="input-name"
                          placeholder="0"
                          maxLength="12"
                          decimalsLimit={2}
                          value={minusValueCost}
                          onValueChange={(value, name) =>
                            onChanged(value, "MinusValueCostEdit", 20)
                          }
                        ></CurrencyInput>
                      </div>
                      <div className="edit-input">
                        <label>مبلغ نهایی</label>
                        <CurrencyInput
                          className="newStyleInput"
                          id="input-example"
                          name="input-name"
                          placeholder="0"
                          maxLength="12"
                          decimalsLimit={2}
                          value={finalCost}
                          onValueChange={(value, name) =>
                            onChanged(value, "FinalCostEdit", 20)
                          }
                        ></CurrencyInput>
                      </div>

                      <div className="buttomStyle">
                        <button
                          type="submit"
                          name="btn-contract"
                          onClick={(e) => UpdateSpecificpersone(e)}
                        >
                          به روز رسانی
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
};

export default EditSpecificperson;

// const config = {
//   headers: {
//     'Content-Type': 'multipart/form-data',
//   },
// };

// var fm = new FormData();
// fm.append('BatchId', CreateOrUpdateHealthVisitData.BatchId);
// fm.append('PrsNum', CreateOrUpdateHealthVisitData.PrsNum);
// fm.append('PatientId', CreateOrUpdateHealthVisitData.PatientId);
// fm.append('RecipeDate', CreateOrUpdateHealthVisitData.RecipeDate);
// fm.append('RecipeMoney', CreateOrUpdateHealthVisitData.RecipeMoney);
// fm.append('RecipePropertiesId', CreateOrUpdateHealthVisitData.RecipePropertiesId);
// fm.append('Franshiz', CreateOrUpdateHealthVisitData.Franshiz);
// fm.append('OutofContractMoney', CreateOrUpdateHealthVisitData.OutofContractMoney);
// fm.append('FinalCost', CreateOrUpdateHealthVisitData.FinalCost);

// //  console.log('recipie  data is:', CreateOrUpdateHealthVisitData);

// const res = await axios.post(
//   SERVER_URL + '/Therapy/CreateOrUpdateHealthVisit/' + CreateOrUpdateHealthVisitData.Id,
//   fm,
//   config
// );

// if (res.data) {

// }
