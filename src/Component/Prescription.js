import React, { useMemo ,useRef, useState, useContext, useEffect } from "react";
import MeetingContext from "../Context/meetingContext";
import Navbar from "./Navbar";
import "../css/Prescription.css";
import Popup from "./Popup";
import LogoPrescription from "../images/prescription.png";
import { PrescriptionColumns } from "./Common/Columns";
import PrescriptionCulom from "./PrescriptionCulom";
import CustomTable from "./Common/CustomTable";
import PopImg from "../images/icons8-data-sheet-96.png";
import Insurance from "../images/unnamed.png";
import DatePicker from "react-multi-date-picker";
import { Calendar } from "react-multi-date-picker";
import Footer from "./Footer";
import Select from "react-select";
import Swal from 'sweetalert2';
import UpdateRecipie from "./UpdateRecipie";
import { PrescriptionTitle } from "../Constant/constant";
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
const Prescription = () => {
  document.title = PrescriptionTitle;
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const meetingContext = useContext(MeetingContext);

  const [Prsnum, setPrsnum] = useState(null);
  const [topInFamily, setTopInFamily] = useState(null);
  const [topForPerson, setTopForPerson] = useState(null);
  const [faranshiz, setFaranshiz] = useState(null);
  const [RecipieDescData, setRecipieDescData] = useState("");
  const [SelectedContract, setSelectedContract] = useState(null);
  const [SelectedRecipieKind, setSelectedRecipieKind] = useState(null);
  const [SelectRelatives, setSelectRelatives] = useState(null);
  const [SelectedContractDoctor, setSelectedContractDoctor] = useState(null);
  const {
    GetHealthContracts,
    contractListData,
    recepiesKindListData,
    GetHealthRecipesByContract,
    CreateOrUpdateRecipie,
    GetRelativeList,
    allRelativeListData,
    CreateInsuranceProcess,
    deletedRecipieKindData,
    DeleteRecipieKindById,
    createRecipieData,

  } = meetingContext;
  const ContractDoctor = [
    {
      value: "0",
      label: "عمومی",
    },
    {
      value: "1",
      label: " متخصص",
    },
    {
      value: "2",
      label: "فوق تخصص ",
    },
    {
      value: "3",
      label: "دندانپزشک  ",
    },
  ];
  useEffect(() => {
    GetHealthContracts();
    GetHealthRecipesByContract();
    GetRelativeList();
  }, []);
  useEffectSkipFirst(() => {
    if (createRecipieData) {
      if (createRecipieData) {
        GetHealthRecipesByContract();
        setRecipieDescData("");
      }
    }

}, [createRecipieData]);
  useEffectSkipFirst(() => {
    if (deletedRecipieKindData) {
      if (deletedRecipieKindData) {
    
         GetHealthRecipesByContract();
      }
    }
    Swal.fire(
      "Deleted!",
      "Your file has been deleted.",
      "success"
    );

}, [deletedRecipieKindData]);

  const onChanged = (e, Type, maxNum) => {
    switch (Type) {
      case "RecipieDescEdit":
        if (e.target.value.length > maxNum)
          e.target.value = e.target.value.slice(0, maxNum);
        //  setIsChangeTel(true);
        setRecipieDescData(e.target.value);
        break;

      case "PrsEdit":
        if (e.target.value.length > maxNum)
          e.target.value = e.target.value.slice(0, maxNum);
        //  setIsChangeTel(true);
        setPrsnum(e.target.value);
        break;
      case "TopInFamilyEdit":
        if (e.target.value.length > maxNum)
          e.target.value = e.target.value.slice(0, maxNum);

        setTopInFamily(e.target.value);
        break;
      case "TopForPersonEdit":
        if (e.target.value.length > maxNum)
          e.target.value = e.target.value.slice(0, maxNum);
        setTopForPerson(e.target.value);
        break;
      case "FaranshizEdit":
        if (e.target.value.length > maxNum)
          e.target.value = e.target.value.slice(0, maxNum);
        setFaranshiz(e.target.value);
        break;
      case "SelectedInsuranceContractChanged":
        setSelectedContract(e);
        GetHealthRecipesByContract(e.value);
        break;

      default:
        break;
    }
  };

  const OnNewRecipe = async () => {
    let recipieData = { RecipieDesc: RecipieDescData };
    await CreateOrUpdateRecipie(recipieData, false);
    
  };

  const RefreshGridAfterDeleteItem = () => {
    console.log("deletedResponse is:", deletedRecipieKindData);
    if (deletedRecipieKindData) {
      if (deletedRecipieKindData.Deleted) {

        GetHealthRecipesByContract();
      }

    }
  }
  const kartableActionsAdmin = {
    Header: "عملیات",
    columns: [
      {
        Header: ".",
        Cell: ({ row }) => (
          <div className="Operations">
            <UpdateRecipie recipeData={row.original}></UpdateRecipie>

            <button
              type="button"
              id="Print"
              className="editBtn"
              data-toggle="modal"
              data-target=".bd-example-modal-lg2"
              onClick={async (e) => {
                Swal.fire({
                  title: "آیا مطمئن از حذف نوع نسخه هستید ؟",
                  text: "نوع نسخه به صورت کامل حذف میشود",
                  icon: "question",
                  iconColor: "red",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "حذف",
                  cancelButtonText: "انصراف"

                }).then(async (result) => {
                  if (result.isConfirmed) {
                    console.log("healthShoParBachData :", row.original);
                    await DeleteRecipieKindById(row.original.Id);
                    // RefreshGridAfterDeleteItem();
                    console.log("deletedResponse is:", deletedRecipieKindData);
                   
                  }
                });
              }}
            >
              حذف
            </button>





          </div>
        ),
      },
    ],
  };
  const PrescriptionColumnsForAdmin = useMemo(
    () => [kartableActionsAdmin, PrescriptionColumns],

    []
  );
  const InsertInsuranceProcess = () => {
    let insuranceProcessData = {
      KindId: SelectedRecipieKind.value,
      DoctorId: SelectedContractDoctor.value,
      MaxMoney4Pay: topInFamily,
      MinMoney4Pay: topForPerson,
      ContractId: SelectedContract.value,
      Faranshiz: faranshiz,
      Kardex: "false",
      ChandNafar: "2",
    };
    console.log("insuranceProcessData is :", insuranceProcessData);
    CreateInsuranceProcess(insuranceProcessData);
  };

  return (
    <div className="PrescriptionCustom">
      <div className="Container">
        <Navbar />
        <div className="TittleFirst">
          <div className="TittleStyle">
            <h3 id="HeaderStyle">ثبت نسخه های جدید</h3>
          </div>
        </div>

        <div className="NewPrescription">
          <div className="NewInput">
            <div id="Object">
              <input
                type="text"
                name="NameP"
                value={RecipieDescData}
                onChange={(e) => {
                  onChanged(e, "RecipieDescEdit");
                }}
                id="InputNameP"
                placeholder="نام نسخه"
              />
            </div>
            <div className="BtnOb">
              <button
                id="ButtonNew"
                className="ButtonNew"
                type="button"
                style={{ marginLeft: "8.8em" }}
                onClick={(e) =>{
                                    Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'نسخه جدید با موفقیت ثبت شد',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  OnNewRecipe(e);
                }}
              >
                جدید
              </button>

            </div>
          </div>
          <div className="TableFirst">
            {

            }
            <CustomTable
              columns={PrescriptionColumnsForAdmin}
              data={recepiesKindListData ? recepiesKindListData : []}
            />
          </div>
        </div>

        <div className="TittleSecond">
          <div className="TittleStyle">
            <h3 id="HeaderStyle"> تعیین نحوه عملکرد بیمه</h3>
          </div>
          <div id="Logo">
            <img id="ImageStyle" src={Insurance} />
          </div>
        </div>
        <div className="NewPrice">
          <div className="NewInput2">
            <div id="Object2">
              <Select
                value={SelectedRecipieKind}
                options={
                  recepiesKindListData
                    ? recepiesKindListData.map((o) => {
                      return { value: o.Id, label: o.Desc };
                    })
                    : null
                }
                onChange={(e) => {
                  setSelectedRecipieKind(e);
                }}
                className="ContractNo"
                placeholder="نام نسخه"
              />
              <Select
                value={SelectedContract}
                options={
                  contractListData
                    ? contractListData.map((o) => {
                      return { value: o.ObjectId, label: o.ContractNo };
                    })
                    : null
                }
                onChange={(e) => {
                  onChanged(e, "SelectedInsuranceContractChanged");
                }}
                className="ContractNo"
                placeholder="شماره قرارداد"
              />

              <Select
                value={SelectedContractDoctor}
                options={ContractDoctor}
                onChange={(e) => {
                  console.log(`Option selected:`, e);
                  setSelectedContractDoctor(e);
                }}
                className="ContractNo"
                placeholder="نوع تخصص پزشک"
              />
            </div>
            <div id="Object2">
              <input
                type="text"
                name="NameP"
                id="InputNameP2"
                value={topInFamily}
                onChange={(e) => {
                  onChanged(e, "TopInFamilyEdit");
                }}
                placeholder="سقف خانوار "
              />
              <input
                type="text"
                name="NameP"
                id="InputNameP2"
                value={topForPerson}
                onChange={(e) => {
                  onChanged(e, "TopForPersonEdit");
                }}
                placeholder="سقف هر نفر "
              />
              <input
                type="text"
                name="NameP"
                id="InputNameP2"
                value={faranshiz}
                onChange={(e) => {
                  onChanged(e, "FaranshizEdit");
                }}
                placeholder="مبلغ فرانشیز "
              />
            </div>
            <div id="Object2">
              <Select
                value={SelectRelatives}
                options={
                  allRelativeListData
                    ? allRelativeListData.map((key, o) => {
                      return { value: o, label: key };
                    })
                    : null
                }
                // options={options}
                onChange={(e) => {
                  console.log(`Selected Relatives is:`, e);
                  setSelectRelatives(e);
                }}
                className="ContractNo"
                placeholder="عائله - غیرتکفل"
                style={{ textAlign: "center" }}
              />
            </div>
            <div className="BtnOb">

              <button
                id="ButtonNew"
                className="ButtonNew"
                type="button"
                style={{ marginLeft: "8.8em" }}
                onClick={(e) =>
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'نسخه جدید با موفقیت ثبت شد',
                    showConfirmButton: false,
                    timer: 1500
                  }).nNewRecipe(e)}
              >
                جدید
              </button>

            </div>
          </div>
          <div className="btnStyleP">
            <PrescriptionCulom />

          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default Prescription;
