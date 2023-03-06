import React, { useRef, useState, useContext, useEffect } from "react";
import MeetingContext from "../../Context/meetingContext";
import "../../css/Addprice.css";
import Select from "react-select";
import Swal from "sweetalert2";
import axios from "axios";
import { SERVER_URL } from "../../Constant/constant";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import CurrencyInput from "react-currency-input-field";

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

const Addprice = (props) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const meetingContext = useContext(MeetingContext);
  const {
    GetInsuranceList,
    insuranceListData,
    GetPacketIsOpenList,
    GetSpecificPersonWithContracts,
    specificPersonWithContracts,
    SetSpecificPersonWithContractData,
    DeletSpecificPersonWithContracts,
    DeleteSpecificPersonContractById,
    packetIsOpenListData,
    GetRecipePropByContractNo,
    recipePropByContractNoData,
    CreateOrUpdateHealthVisit,
    createdOrUpdatedHealthVisitData,
  } = meetingContext;
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const [Name, setName] = useState(null);
  const [SelectedContractInsurance, setSelectedContractInsurance] =
    useState(null);

  const [Prsnum, setPrsnum] = useState(null);

  // const [recordData, setRecordData] = useState(null);
  const [PacketNoList, setPacketNoList] = useState([]);
  const [SelectedPackeNo, setSelectedPackeNo] = useState(null);
  const [SelectedRecipeKind, setSelectedRecipeKind] = useState(null);
  const [SelectedRelative, setSelectedRelative] = useState(null);
  const [SelectedMinusValue, setSelectedMinusValue] = useState(null);
  const [SelectedPlusValue, setSelectedPlusValue] = useState(null);
  const [ShowModal, setShowModal] = useState(false);
  const [PrescriptionCost, setPrescriptionCost] = useState(null);
  const [VisitDate, setVisitDate] = useState(null);
  const [SelectedConfirmedValue, setSelectedConfirmedValue] = useState(null);
  const [faranshiz, setFaranshiz] = useState(null);
  const [ghireTahod, setGhireTahod] = useState(null);
  const [finalCost, setFinalCost] = useState(null);
  const GetPacketIsOpenList2 = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        SERVER_URL + "/Therapy/GetPacketIsOpen/",
        config
      );
      console.log("packetsisopen List:", res.data);
      var pactIsOpenData = res.data
        ? res.data.map((o) => {
            var newObj = {};
            newObj.value = o.ObjectId;
            newObj.label = o.MahBachNo;
            return newObj;
          })
        : null;
      setPacketNoList(pactIsOpenData);
    } catch (err) {
      console.log("error:" + err);
    }
  };
  useEffect(async () => {
    await GetPacketIsOpenList();
  }, []);

  useEffectSkipFirst(() => {
    let value = parseInt(PrescriptionCost) - parseInt(finalCost);
    console.log("minusvalue", value);
    if (!isNaN(value)) {
      setSelectedMinusValue(value);
    }
  }, [finalCost, PrescriptionCost, SelectedMinusValue]);

  useEffectSkipFirst(() => {
    var pactIsOpenData = packetIsOpenListData
      ? packetIsOpenListData.map((o) => {
          var newObj = {};
          newObj.value = o.ObjectId;
          newObj.label = o.MahBachNo;
          return newObj;
        })
      : null;
    setPacketNoList(pactIsOpenData);
  }, [packetIsOpenListData]);
  useEffectSkipFirst(() => {
    if (createdOrUpdatedHealthVisitData.Insert) {
      Swal.fire({
        icon: "success",
        title: "بسته جدید با موفقیت ثبت شد",
        showConfirmButton: false,
        timer: 1500,
      });
      // console.log('After Insert To Db:', new Date(),createdOrUpdatedHealthVisitData);
      setSelectedPackeNo(null);
      setSelectedRecipeKind(null);
      setSelectedRelative(null);
      setVisitDate(null);
      setPrescriptionCost(0);
      setSelectedConfirmedValue(0);
      setFaranshiz(0);
      setGhireTahod(0);
      setFinalCost(0);
      props.refreshInsuranceData();
    } else if (createdOrUpdatedHealthVisitData.Update) {
    } else {
      Swal.fire({
        icon: "warning",
        title: "ثبت بسته با مشکل مواجه شد",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }, [createdOrUpdatedHealthVisitData]);

  const toggleShowModal = (showMode) => {
    setShowModal(showMode);
  };

  const onChanged = (e, Type, maxNum) => {
    switch (Type) {
      case "PrescriptionCostEdit":
        setPrescriptionCost(e);

        break;
      case "ghireTahodEdit":
        setGhireTahod(e);
        break;
      case "faranshizEdit":
        setFaranshiz(e);
        break;
      case "FinalCostEdit":
        setFinalCost(e);

        break;
      case "PrsEdit":
        SetSpecificPersonWithContractData(null);
        if (e.target.value.length > maxNum)
          e.target.value = e.target.value.slice(0, maxNum);

        console.log("prsnum", e.target, e.target.value);
        setPrsnum(e.target.value);
        GetSpecificPersonWithContracts(e.target.value);
        GetInsuranceList(e.target.value, "");
        break;
      case "SelectedMinusValueEdit":
        if (e.target.value.length > maxNum)
          e.target.value = e.target.value.slice(0, maxNum);

        setSelectedMinusValue(e.target.value);
        break;
      case "SelectedPlusValueEdit":
        if (e.target.value.length > maxNum)
          e.target.value = e.target.value.slice(0, maxNum);

        setSelectedPlusValue(e.target.value);
        break;
      case "SelectedConfirmedValueEdit":
        setSelectedConfirmedValue(e);
        break;
      case "SelectedInsuranceContractChanged":
        setSelectedContractInsurance(e);
        GetInsuranceList(Prsnum, e.label);
        GetRecipePropByContractNo(e.label);
        // GetHealthRecipesByContract
        break;

      default:
        break;
    }
  };

  const CreateItemInDb = async () => {
    let CreateOrUpdateHealthVisitData = {
      Id: 0,
      BatchId: SelectedPackeNo.value,
      //   PrsNum: Prsnum,
      PrsNum: props.Prsnum,
      PatientId: SelectedRelative.value,
      RecipePropertiesId: SelectedRecipeKind.value,
      ContractId: props.SelectedContractId,
      RecipeMoney: PrescriptionCost,
      ApprovedMoney: SelectedConfirmedValue,
      RecipeDate: VisitDate.format(),
      Franshiz: faranshiz,
      OutofContractMoney: ghireTahod,
      FinalCost: finalCost,
    };
    console.log(
      "HealthVisitData For Insert To Db:",
      new Date(),
      CreateOrUpdateHealthVisitData
    );

    await CreateOrUpdateHealthVisit(CreateOrUpdateHealthVisitData, false);
  };

  return (
    <div id="addprice">
      <div className="PriceForm">
        <div className="tittlePrice">
          <h3>وارد کردن نسخه ها</h3>
        </div>
        <div className="selectPrite">
          <div className="inputPrices selectori">
            <label>شماره بسته</label>
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
          <div className="inputPrices selectori">
            <label>نوع نسخه</label>
            <Select
              value={SelectedRecipeKind}
              options={
                recipePropByContractNoData ? recipePropByContractNoData : []
              }
              onChange={(e) => {
                console.log(`Option selected:`, e);
                setSelectedRecipeKind(e);
              }}
              className="ContractNo"
            />
          </div>
          <div className="inputPrices selectori">
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
          <div className="inputPrices selectori">
            <label>تاریخ</label>
            <DatePicker
              placeholder="تاریخ  "
              calendar={persian}
              locale={persian_fa}
              value={VisitDate}
              onChange={(value) => {
                setVisitDate(value);
              }}
              calendarPosition="bottom-right"
              style={{
                height: "2.5rem",
                width: "10rem",
                textAlign: "center",
                marginTop: "2rem",
              }}
              className="CalanderStyle"
            />
          </div>
          <div className="inputPrices">
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
          <div className="inputPrices">
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
         
          <div className="inputPrices">
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
     
          <div className="inputPrices">
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
        </div>

        <div className="buttonPrice">
          <button
            id="ButtonAccept"
            type="button"
            
            onClick={(e) => {
              CreateItemInDb();
            }}
          >
            ثبت
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addprice;
