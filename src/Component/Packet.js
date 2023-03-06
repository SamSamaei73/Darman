import React, { useMemo, useState, useContext, useEffect } from "react";
import MeetingContext from "../Context/meetingContext";
import { PacketColumns } from "./Common/Columns";
import CustomTable from "./Common/CustomTable";
import "../css/Packet.css";
import Navbar from "./Navbar";
import Popup from "./Popup";
import { Button } from "bootstrap";
import TableLogo from "../images/icons8-data-sheet-96.png";
import Footer from "./Footer";
import DatePicker from "react-multi-date-picker";
import Select from "react-select";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Swal from 'sweetalert2';
import Editpacket from '../Component/Forms/Editpacket';
import {ContractPacket,ContractPosition} from './Common/DropDown'
import {PacketTitle} from "../Constant/constant";


const Packet = () => {
  document.title=PacketTitle;
  const [SelectedContractPacket, setSelectedContractPacket] = useState(null);
  const [SelectedContractPosition, setSelectedContractPosition] =  useState(null);  
  const [isOpen, setIsOpen] = useState(false);
  const [IsNotValid, setIsNotValid] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [SendPacketDate, setSendPacketDate] = useState(new Date());
  const [PersianSelectedDate, setPersianSelectedDate] = useState();
  const [MahBachNo, setMahBachNo] = useState("");
  const [ShomareParvande, setShomareParvande] = useState("");
  
  const meetingContext = useContext(MeetingContext);
  
  
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const {
    currentUser,
    GetMeetingById,
    SetSelectedPersonData,
    selectedPersonData,
    GetInsuranceList,
    packetListData,
    GetPacketList,
    createdOrUpdatedHealthShoParBachData,
    CreateOrUpdateHealthShoParBach,
    DeleteHealthShoParBachById,
    deletedHealthShoParBachData,
    
    deletedShoParBachContractData,
  } = meetingContext;
  useEffect(() => {
    GetPacketList();
  }, []);
  const onChanged = (e, Type, maxNum) => {
    switch (Type) {
      case "ShomareParvandeEdit":
        if (e.target.value.length > maxNum)
          e.target.value = e.target.value.slice(0, maxNum);       
        setShomareParvande(e.target.value);
        break;
      case "MahBachNoEdit":
        if (e.target.value.length > maxNum)
          e.target.value = e.target.value.slice(0, maxNum);        
        setMahBachNo(e.target.value);
        break;     

      default:
        break;
    }
  };

  const InsertHealthShoParBach = async (e) => {
    
    let HealthShoParBachItemData = {
      Id: 0,
      Mah: PersianSelectedDate,
      MahBachNo: MahBachNo,
      ShomareParvande: ShomareParvande,
      ToBimeAvalie: SelectedContractPacket ? SelectedContractPacket.value : 0,
      VaziatBaste: SelectedContractPosition
        ? SelectedContractPosition.value
        : 0,
    };
    console.log("InsertedHealthShoParBach Data :", HealthShoParBachItemData);
    await CreateOrUpdateHealthShoParBach(HealthShoParBachItemData, false);
    Swal.fire({
      icon: 'success',
      title: 'بسته جدید با موفقیت ثبت شد',
      showConfirmButton: false,
      timer: 1500
    });
    setSelectedContractPacket(null);
      setSelectedContractPosition(null);
      setSendPacketDate(new Date());
      setPersianSelectedDate(null);
      setMahBachNo("");
      setShomareParvande("");
      GetPacketList();
    
    console.log(' before checking created:',createdOrUpdatedHealthShoParBachData);
    if (createdOrUpdatedHealthShoParBachData) {
      if (createdOrUpdatedHealthShoParBachData.Insert) {
      //   setSelectedContractPacket(null);
      //   setSelectedContractPosition(null);
      //   setSendPacketDate(new Date());
      //   setPersianSelectedDate(null);
      //   setMahBachNo("");
      //   setShomareParvande("");
      //   GetPacketList();
       }
    }
  };
  const RefreshGridAfterDeleteItem=async () => {
    console.log("deletedResponse is:", deletedHealthShoParBachData);
    if (deletedHealthShoParBachData) {
      if (deletedHealthShoParBachData.Deleted) {
       setIsOpen(!isOpen);
       await GetPacketList();
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
            <div className="Operations">
              <Editpacket Data={row.original} />
              <button
                type="button"
                id="Print"
                className="editBtn"
                data-toggle="modal"
                data-target=".bd-example-modal-lg2"
                onClick={async (e) => {
                  Swal.fire({
                    title: "آیا مطمئن از حذف بسته هستید ؟",
                    text: "بسته به صورت کامل حذف میشود",
                    icon: "question",
                    iconColor:"red",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "حذف",
                    cancelButtonText: "انصراف"
                    
                    
                  }).then(async (result) => {
                    if (result.isConfirmed) {
                      console.log("healthShoParBachData :", row.original);
                      await DeleteHealthShoParBachById(row.original.Id);
                     await GetPacketList();
                     // RefreshGridAfterDeleteItem();
                     console.log("deletedResponse is:", deletedShoParBachContractData);
                     if (deletedShoParBachContractData) {
                       if (deletedShoParBachContractData.Deleted) {
                        
                       }
                     }
                      Swal.fire(
                        "!حذف",
                        ".بسته شما با موفقیت حذف شد",
                        "success"
                      );
                    }
                  });
                }}
              >
                حذف
              </button>





            </div>
          </div>
        ),
      },
    ],
  };
  const KartableColumnsForAdmin = useMemo(
    () => [kartableActionsAdmin, PacketColumns],

    []
  );
  return (
    <div className="PocketCustom">
        <Navbar />
        <div className="BimeStyle">
          <div className="InputBimeh">
            <div className="form_put1">
              <div id="NewStylePack">
                <DatePicker
                  placeholder="تاریخ ارسال بسته"
                  calendar={persian}
                  locale={persian_fa}
                  calendarPosition="bottom-right"
                  style={{ height: "38px", textAlign: "center" }}
                  value={SendPacketDate}
                  onChange={(value) => {                   
                    console.log("selected date is :", value.toLocaleString());
                    var pdata=value.toLocaleString();
                    // let Year=(pdata.split("/")[0]);
                    // let Month=(pdata.split("/")[1]);
                    // let Day=(pdata.split("/")[2]);
                    // let PDate=Year +'/'+Month+'/'+Day;
                    // console.log('PDate is:',PDate);

                    setPersianSelectedDate(pdata);
                   
                    setSendPacketDate(value);
                  }}
                />
                
              </div>
              <div id="NewStylePack">
                <input
                  style={{ width: "150px", height: "38px" }}
                  type="text"
                  placeholder="شماره بسته ارسالی"
                  value={MahBachNo}
                  onChange={(e) => {
                    onChanged(e, 'MahBachNoEdit', 900);
                  }}
                  className="text-center form-control"
                />
              </div>
              <div id="NewStylePack">
                <input
                  style={{ width: "160px", height: "38px" }}
                  type="text"
                  placeholder="شماره پرونده بیمه "
                  value={ShomareParvande}
                  onChange={(e) => {
                    onChanged(e, 'ShomareParvandeEdit', 900);
                  }}
                  className="text-center form-control"
                />
              </div>
              <div id="NewStylePack">
                <Select
                  value={SelectedContractPosition}
                  options={ContractPosition}
                  // options={options}
                  onChange={(e) => {
                    console.log(`Option selected:`, e);
                    setSelectedContractPosition(e);
                    // onChanged(e, 'SelectedInsuranceContractChanged');
                  }}
                  className="ContractNo"
                  placeholder="وضعیت بسته"
                />
              </div>
              <div id="NewStylePack">
                <Select
                  value={SelectedContractPacket}
                  options={ContractPacket}
                  // options={options}
                  onChange={(e) => {
                    console.log(`Option selected:`, e);
                    setSelectedContractPacket(e);
                    // onChanged(e, 'SelectedInsuranceContractChanged');
                  }}
                  className="ContractNo"
                  placeholder="بسته"
                />
              </div>
              
            </div>
            <div >
               {IsNotValid?<p style={{color:'red'}}>{ErrorMessage}</p>:null}
              </div>
            <div className="buttunForm_Bime">

            <button
                          id="ButtonNew"
                          className="ButtonNew"
                          type="button"
                          onClick={(e) => 
                            InsertHealthShoParBach()}
                        >
                          ثبت
                        </button>



              {/* <button
                type="button"
                onClick=""
                id="ButtonNew"
                className="ButtonNew"
                onClick={ (e)=>InsertHealthShoParBach().fire({
                  icon: 'error',
                  title: 'اخطار',
                  text: 'تمامی فیلدها باید پر شوند',
                })}
                
              >
                ذخیره
              </button> */}
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
                      data={packetListData ? packetListData : []}
                    />
                  </>
                }
                handleClose={togglePopup}
              />
            )}
          </div>
        </div>
      <Footer />
    </div>
  );
};

export default Packet;
