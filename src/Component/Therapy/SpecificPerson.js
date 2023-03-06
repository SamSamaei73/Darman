import React, { useRef, useMemo, useState, useContext, useEffect } from "react";
import MeetingContext from "../../Context/meetingContext";
import { InsuranceColumns } from "../Common/Columns";
import CustomTable from "../Common/CustomTable";
import "../../css/SpecificPerson.css";
import Navbar from "../Navbar";
import Popup from "../Popup";
import "../../css/Forms.css";
import Select from "react-select";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Footer from "../Footer";
import "../../css/Spinner.module.css";
import Swal from "sweetalert2";
import { SpecificPersonTitle } from "../../Constant/constant";
import EditSpecificperson from "../Forms/EditSpecificperson";
import axios from "axios";
import { SERVER_URL } from "../../Constant/constant";
import CurrencyInput from "react-currency-input-field";
import Addprice from "../Forms/Addprice";
import ColumnGroup from "antd/lib/table/ColumnGroup";

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

const SpecificPerson = () => {
  const meetingContext = useContext(MeetingContext);
  const {
    GetInsuranceList,
    insuranceListData,

    GetSpecificPersonWithContracts,
    specificPersonWithContracts,
    SetSpecificPersonWithContractData,

    GetRecipePropByContractNo,

    DeleteHealthVisitById,
    deleteHealthVisitByIdData,
  } = meetingContext;
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const [SelectedContractInsurance, setSelectedContractInsurance] =
    useState(null);

  const [Prsnum, setPrsnum] = useState(null);

  const [healthVisitList, setHealthVisitList] = useState([]);
  const [PrescriptionCost, setPrescriptionCost] = useState(null);
  const [VisitDate, setVisitDate] = useState(null);
  const [SelectedMinusValue, setSelectedMinusValue] = useState(null);
  const [SelectedPlusValue, setSelectedPlusValue] = useState(null);
  const [SelectedConfirmedValue, setSelectedConfirmedValue] = useState(null);
  const [ShowModal, setShowModal] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [faranshiz, setFaranshiz] = useState(null);
  const [ghireTahod, setGhireTahod] = useState(null);

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
      case "PrsEdit":
        SetSpecificPersonWithContractData(null);
        if (e.target.value.length > maxNum)
          e.target.value = e.target.value.slice(0, maxNum);

        console.log("prsnum", e.target, e.target.value);
        setPrsnum(e.target.value);
        GetSpecificPersonWithContracts(e.target.value);
        console.log("PP", GetSpecificPersonWithContracts);
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
        // if (e.target.value.length > maxNum)
        //   e.target.value = e.target.value.slice(0, maxNum);

        setSelectedConfirmedValue(e);
        break;
      case "SelectedInsuranceContractChanged":
        setSelectedContractInsurance(e);
        GetInsuranceList(Prsnum, e.label);
        GetRecipePropByContractNo(e.label);
        break;

      default:
        break;
    }
  };

  const kartableActionsAdmin = {
    Header: "عملیات",
    columns: [
      {
        Header: "وضعیت بسته",
        Cell: ({ row }) =>
          row.original.VaziatBaste === 0 ? (
            <div className="Operations">
              <button
                type="button"
                id="Print"
                className="editBtn1"
                data-toggle="modal"
                data-target=".bd-example-modal-lg2"
                onClick={async (e) => {
                  setShowModal(true);
                  setSelectedRowData(row);
                }}
              >
                ویرایش
              </button>

              <button
                type="button"
                id="Print"
                className="editBtn"
                data-toggle="modal"
                data-target=".bd-example-modal-lg2"
                onClick={async (e) => {
                  // console.log('data for delete:', row.original.ObjectId);
                  Swal.fire({
                    title: "آیا مطمئن از حذف نسخه هستید ؟",
                    text: "نسخه به صورت کامل حذف میشود",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "حذف",
                    cancelButtonText: "انصراف",
                  }).then(async (result) => {
                    // console.log('data for delete2:', row.original.ObjectId);
                    if (result.isConfirmed) {
                      console.log();
                      // const config = {
                      //   headers: {
                      //     'Content-Type': 'multipart/form-data',
                      //   },
                      // };
                      // var fm = new FormData();
                      //fm.append('ObjectId', row.original.ObjectId);
                      await DeleteHealthVisitById(row.original.ObjectId);
                      // const res = await axios.post(
                      //   SERVER_URL + '/Therapy/DeleteHealthVisitById',
                      //   fm,
                      //   config
                      //   );

                      // if (res.data) {

                      // }
                    }
                  });
                }}
              >
                حذف
              </button>
            </div>
          ) : (
            <div>بسته</div>
          ),
      },
    ],
  };

  const KartableColumnsForAdmin = useMemo(
    () => [kartableActionsAdmin, InsuranceColumns],

    []
  );

  const refreshInsuranceData = async () => {
    /// console.log('prsnum', Prsnum, 'SelectedContractInsurance', SelectedContractInsurance);
    await GetInsuranceList(Prsnum, SelectedContractInsurance.label);
  };
  useEffectSkipFirst(async () => {
    if (deleteHealthVisitByIdData.Deleted) {
      await GetInsuranceList(Prsnum, SelectedContractInsurance.label);
      setIsOpen(!isOpen);
      setIsOpen(!isOpen);
      Swal.fire("حذف", "آیتم با موفقیت حذف شد", "success");
    } else {
      Swal.fire("Deleted!", "حذف با مشکل مواجه گردید", "warning");
    }
  }, [deleteHealthVisitByIdData]);

  useEffectSkipFirst(() => {
    if (insuranceListData) {
      console.log("after delete or insert item:", insuranceListData);
      setHealthVisitList(insuranceListData);
    }
  }, [insuranceListData]);

  return (
    <div className="SpecificCustom ">
      <div className="BodyStyle">
        <Navbar />

        <div className="personBox">
          <div className="personInfo">
            <div className="boxItem">
              <h6>شماره پرسنلی</h6>
              <input
                className="personInput"
                type="text"
                maxLength="6"
                value={Prsnum}
                onChange={(e) => {
                  onChanged(e, "PrsEdit", 900);
                }}
              ></input>
            </div>

            <div className="boxItem">
              <h6>شماره قرارداد</h6>
              {specificPersonWithContracts ? (
                specificPersonWithContracts.lstContrtacts ? (
                  <Select
                    value={SelectedContractInsurance}
                    options={specificPersonWithContracts.lstContrtacts}
                    // options={options}
                    onChange={(e) => {
                      console.log(`Option selected:`, e);
                      onChanged(e, "SelectedInsuranceContractChanged");
                    }}
                  />
                ) : null
              ) : null}
            </div>

            <div className="boxItem">
              <h6>نام خانوادگی </h6>
              <input
                className="personInput"
                readOnly
                type="text"
                value={
                  specificPersonWithContracts
                    ? specificPersonWithContracts.NameKhanevadeghi
                    : ""
                }
                onChange={(e) => {
                  onChanged(e, "LastNameEdit", 900);
                }}
                id="inputStyle"
              ></input>
            </div>

            <div className="boxItem">
              <h6>نام</h6>
              <input
                className="personInput"
                readOnly
                type="text"
                value={
                  specificPersonWithContracts
                    ? specificPersonWithContracts.Nam
                    : ""
                }
                onChange={(e) => {
                  onChanged(e, "NameEdit", 900);
                }}
                id="inputStyle"
              ></input>
            </div>

            <div className="boxItem">
              <h6>شغل</h6>
              <input
                className="personInput fonty"
                readOnly
                type="text"
                value={
                  specificPersonWithContracts
                    ? specificPersonWithContracts.Moavenat
                    : ""
                }
                onChange={(e) => {
                  onChanged(e, "NameEdit", 900);
                }}
                id="inputStyle"
              ></input>
            </div>
            <div className="boxItem">
              <h6>واحد سازمانی</h6>
              <input
                className="personInput"
                readOnly
                type="text"
                value={
                  specificPersonWithContracts
                    ? specificPersonWithContracts.VahehdSazemani
                    : ""
                }
                onChange={(e) => {
                  onChanged(e, "NameEdit", 900);
                }}
                id="inputStyle"
              ></input>
            </div>
            <div className="boxItem">
              <h6>تاریخ استخدام</h6>
              <input
                className="personInput"
                readOnly
                type="text"
                value={
                  specificPersonWithContracts
                    ? specificPersonWithContracts.TarikhEstekhdam
                    : ""
                }
                onChange={(e) => {
                  onChanged(e, "NameEdit", 900);
                }}
                id="inputStyle"
              ></input>
            </div>
            <div className="boxItem">
              <h6>نوع استخدام</h6>
              <input
                className="personInput"
                readOnly
                type="text"
                value={
                  specificPersonWithContracts
                    ? specificPersonWithContracts.Desc_Noe_Estekhdam
                    : ""
                }
                onChange={(e) => {
                  onChanged(e, "NameEdit", 900);
                }}
                id="inputStyle"
              ></input>
            </div>
          </div>
        </div>

        <div className="CalumPopup">
          <input
            id="PopupInput"
            value="مشاهده جدول"
            type="button"
            onClick={togglePopup}
          />
          {isOpen && (
            <Popup
              content={
                <>
                  <CustomTable
                    columns={KartableColumnsForAdmin}
                    data={healthVisitList ? healthVisitList : []}
                  />
                </>
              }
              handleClose={togglePopup}
            />
          )}
          {ShowModal ? (
            <EditSpecificperson
              Data={selectedRowData}
              refreshInsuranceData={refreshInsuranceData}
              isopen={true}
              toggleShowModal={toggleShowModal}
              contractId={SelectedContractInsurance.value}
            />
          ) : null}
        </div>
        <Addprice
          Prsnum={Prsnum}
          SelectedContractId={
            SelectedContractInsurance ? SelectedContractInsurance.value : 0
          }
          refreshInsuranceData={refreshInsuranceData}
        />

        <Footer />
      </div>
    </div>
  );
};

export default SpecificPerson;
