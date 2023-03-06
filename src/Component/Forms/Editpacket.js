import React, { useMemo, useState, useContext, useEffect } from "react";
import MeetingContext from "../../Context/meetingContext";
import "../../css/Editforms.css";
import DatePicker from "react-multi-date-picker";
import Popup from "../Popup";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import persian_en from "react-date-object/locales/persian_en";
import { ContractPacket, ContractPosition } from "../Common/DropDown";
import Select from "react-select";
import Swal from "sweetalert2";

const Editforms = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [MahBachNo, setMahBachNo] = useState("");
  const [ShomareParvande, setShomareParvande] = useState("");
  const [Mah, setMah] = useState(new Date());
  const [PersianMahDate, setPersianMahDate] = useState();
  const [SelectedContractPosition, setSelectedContractPosition] = useState([
    { value: "2", label: "انتخاب" },
  ]);
  const [SelectedContractPacket, setSelectedContractPacket] = useState([
    { value: "2", label: "انتخاب" },
  ]);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const meetingContext = useContext(MeetingContext);

  const {
    GetPacketList,
    createdOrUpdatedHealthShoParBachData,
    CreateOrUpdateHealthShoParBach,
  } = meetingContext;
  useEffect(() => {
    // console.log("Edit Data For Packet:", props.Data);
    setMahBachNo(props.Data.MahBachNo);
    setShomareParvande(props.Data.ShomareParvande);
    var mah = new DateObject();

    mah
      .setCalendar(persian)
      .setLocale(persian_en)
      .setFormat("YYYY/MM/DD")
      .parse(props.Data.Mah);

    setPersianMahDate(mah.format());

    setMah(mah);
    let vaziat = ContractPosition.filter(
      (e) => e.value == props.Data.VaziatBasteValue
    );
    console.log("vaziate", vaziat);
    setSelectedContractPosition(vaziat[0]);
    //console.log('SelectedContractPosition',SelectedContractPosition);

    let active = ContractPacket.filter(
      (e) => e.value == props.Data.PacketActive
    );
    console.log("active", active);
    setSelectedContractPacket(active[0]);
  }, []);

  const onChanged = (e, Type, maxNum) => {
    switch (Type) {
      case "MahBachNoEdit":
        if (e.target.value.length > maxNum)
          e.target.value = e.target.value.slice(0, maxNum);
        //  setIsChangeTel(true);
        setMahBachNo(e.target.value);
        break;
      case "ShomareParvandeEdit":
        if (e.target.value.length > maxNum)
          e.target.value = e.target.value.slice(0, maxNum);
        //  setIsChangeTel(true);
        setShomareParvande(e.target.value);
        break;

      default:
        break;
    }
  };
  const UpdatePacket = async () => {
    // setSelectedContractPosition(SelectedContractPosition.value);
    // setSelectedContractPacket(SelectedContractPacket.value);
    let updatepacket = {
      Id: props.Data.Id,
      MahBachNo: MahBachNo.toString().trim(),
      ShomareParvande: ShomareParvande.toString().trim(),
      // PacketActive:PacketActive,
      Mah: PersianMahDate,
      // SelectedContractPacket
      VaziatBaste: SelectedContractPosition.value,

      ToBimeAvalie: SelectedContractPacket.value,
    };
    console.log("jadid :", updatepacket);

    await CreateOrUpdateHealthShoParBach(updatepacket, true);
    Swal.fire({
      icon: "success",
      title: "بسته جدید با موفقیت ویرایش شد",
      showConfirmButton: false,
      timer: 1500,
    });
    // console.log(' before checking updated:',createdOrUpdatedHealthShoParBachData);
    GetPacketList();
    if (createdOrUpdatedHealthShoParBachData) {
      if (createdOrUpdatedHealthShoParBachData.Update) {
        //   setSelectedContractPacket(null);
        //   setSelectedContractPosition(null);
        //   setSendPacketDate(new Date());
        //   setPersianSelectedDate(null);
        //   setMahBachNo("");
        //   setShomareParvande("");
      }
    }
  };

  return (
    <div id="Edity">
      <input
        id="PopupInput"
        value="ویرایش"
        type="button"
        onClick={togglePopup}
      />

      {isOpen && (
        <Popup
          content={
            <>
              <div id="Edit-form">
                <div className="container">
                  <div className="edit-info">
                    <div className="edit-input">
                      <label> تاریخ</label>
                      <DatePicker
                        calendar={persian}
                        locale={persian_fa}
                        calendarPosition="bottom-right"
                        style={{ height: "2rem", textAlign: "center" }}
                        value={Mah}
                        onChange={(value) => {
                          console.log(
                            "selected date is :",
                            value.toLocaleString()
                          );
                          var pdata = value.toLocaleString();
                          setPersianMahDate(pdata);
                          //setMiladiContractEndDate(value)
                          setMah(value);
                        }}
                      ></DatePicker>
                    </div>
                    <div className="edit-input">
                      <label>شماره بسته</label>
                      <input
                        type="text"
                        name="numcontract"
                        value={MahBachNo}
                        onChange={(e) => {
                          onChanged(e, "MahBachNoEdit", 900);
                        }}
                      />
                    </div>
                    <div className="edit-input">
                      <label>شماره پرونده</label>
                      <input
                        type="text"
                        name="ShomareParvande"
                        value={ShomareParvande}
                        onChange={(e) => {
                          onChanged(e, "ShomareParvandeEdit", 900);
                        }}
                      />
                    </div>
                    <div className="edit-input">
                      <label> وضعیت بسته</label>
                      <Select
                        value={SelectedContractPosition}
                        options={ContractPosition}
                        // options={options}
                        onChange={(e) => {
                          // console.log(`وضعیت:`, e);
                          setSelectedContractPosition(e);
                          // onChanged(e, 'SelectedInsuranceContractChanged');
                        }}
                        className="ContractNo"
                        placeholder="بسته"
                      />
                    </div>
                    <div className="edit-input">
                      <label>بسته</label>
                      <Select
                        value={SelectedContractPacket}
                        options={ContractPacket}
                        // options={options}
                        onChange={(e) => {
                          // console.log(`Option selected:`, e);
                          setSelectedContractPacket(e);
                          // onChanged(e, 'SelectedInsuranceContractChanged');
                        }}
                        className="ContractNo"
                        placeholder="بسته"
                      />
                    </div>

                    <button
                      type="submit"
                      name="btn-contract"
                      onClick={(e) => UpdatePacket(e)}
                    >
                      به روز رسانی
                    </button>
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

export default Editforms;
