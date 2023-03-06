import React, { useRef, useState, useContext, useEffect } from "react";
import "../css/Aelemandi.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MeetingContext from "../Context/meetingContext";
import Swal from "sweetalert2";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
import Accept from "../images/icons8-accept-67.png";
import Ignore from "../images/icons8-multiply-30.png";

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

const Aelemandi = () => {
  const meetingContext = useContext(MeetingContext);
  const { aelemandiDataPerson, GetAelemandi } = meetingContext;
  const [AeleData, setAeleData] = useState([]);
  const [persondata, setPersonData] = useState(null);
  const [PrsCode, setPrsCode] = useState(null);
  const [Name, setName] = useState(null);
  const [LastName, setLastName] = useState(null);
  const [DadyName, setDadyName] = useState(null);
  const [Shenasnameh, setShenasnameh] = useState(null);
  const [NationalId, setNationalId] = useState(null);
  const [Connect, setConnect] = useState(null);
  const [Location, setLocation] = useState(null);
  const [Birthday, setBirthday] = useState(null);
  const [BimehDate, setBimehDate] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectBirthday, setselectBirthday] = useState(null);
  const [selectBimeh, setselectBimeh] = useState(null);
  const [Takafol, setTakafol] = useState(null);
  const [BimehCondition, setBimehCondition] = useState(null);

  useEffectSkipFirst(() => {
    if (aelemandiDataPerson) {
      if (aelemandiDataPerson.length > 0) {
        setPersonData(aelemandiDataPerson[0]);
      }
    }
  }, [aelemandiDataPerson]);

  const getPersonData = (prscod) => {
    setPersonData(null);
    GetAelemandi(prscod);
  };

  useEffectSkipFirst(() => {
    if (aelemandiDataPerson) {
      let newData = aelemandiDataPerson.lstPrsAelemandi.map((item) => {
        let newItem = {};
        newItem.Nam = item.Nam;
        newItem.NamKhanevadegi = item.NamKhanevadegi;
        newItem.NamPedar = item.NamPedar;
        newItem.ShomareShenasNameh = item.ShomareShenasNameh;
        newItem.Tarikh_Tavalot = item.Tarikh_Tavalot;
        newItem.Nesbat = item.Nesbat;
        newItem.Tahttakafol = item.Tahttakafol;
        newItem.BimehShodehYaNashode = item.BimehShodehYaNashode;
        newItem.Tarikh_Bimeh = item.Tarikh_Bimeh;
        newItem.CodeMeli = item.CodeMeli;
        newItem.Tarikh_AraeeMadarek = item.Tarikh_AraeeMadarek;

        return newItem;
      });
      setAeleData(newData);
      //   newData = newData.sort((a, b) => b.ID - a.ID);
    }
  }, [aelemandiDataPerson]);

  const getNesbatText = (Nesbat) => {
    switch (Nesbat) {
      case 0:
        return "اصلی";
        break;
      case 1:
        return "پسر";
        break;
      case 2:
        return "دختر";
        break;
      case 3:
        return "همسر";
        break;
      case 4:
        return "مادر";
        break;
      case 5:
        return "پدر";
        break;

      case 6:
        return "برادر";
        break;

      case 7:
        return "خواهر";
        break;
      case 8:
        return "عروس";
        break;
      case 9:
        return "نوه";
        break;

      default:
        break;
    }
  };

  const SendInfo = () => {
    let prsData = {};
    prsData.PrsNum = PrsCode;
    prsData.Nam = Name;
    prsData.NamKhanevadegi = LastName;
    prsData.ShomareShenasNameh = Shenasnameh;
    prsData.NamPedar = DadyName;
    prsData.Nesbat = Connect;
    prsData.Tarikh_Bimeh = BimehDate;
    prsData.CodeMeli = NationalId;
    prsData.Tarikh_Tavalot = BimehDate;
    prsData.MahalSodorID = Location;

    Swal.fire({
      text: "نفر جدید ثبت شد",
      icon: "success",
      confirmButtonText: "باشه",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
  };

  const EditAelemandi =(data)=>{
    setName(data.Nam);
    setLastName(data.NamKhanevadegi);
    setPersonData(data.Tarikh_Tavalot);
    setDadyName(data.NamPedar);
    setShenasnameh(data.ShomareShenasNameh);
    setNationalId(data.CodeMeli);
    setConnect(data.Nesbat);
    setTakafol(data.Tahttakafol);
    setBimehCondition(data.BimehShodehYaNashode);
    


  }

  return (
    <div className="Aelemandi">
      <Navbar />
      <div className="MainAele">
        <div className="prsBox">
          <label className="lableStyle" htmlFor="">
            شماره پرسنلی
          </label>
          <input
            onChange={(e) => {
              setPrsCode(e.target.value);
              getPersonData(e.target.value);
            }}
            className="inputAele"
            type="text"
            maxLength={6}
          />
        </div>
        <div className="AddpersonAele">
          <div className="itemPrs">
            <label className="lableStyle" htmlFor="">
              نام
            </label>
            <input
              value={Name}
              onChange={(e) => setName(e.target.value)}
              className="inputAele"
              type="text"
            />
          </div>
          <div className="itemPrs">
            <label
              
              className="lableStyle"
              htmlFor=""
            >
              نام خانوادگی
            </label>
            <input className="inputAele" type="text" value={LastName}
              onChange={(e) => setLastName(e.target.value)}/>
          </div>
          <div className="itemPrs">
            <label className="lableStyle" htmlFor="">
              نام پدر
            </label>
            <input
              value={DadyName}
              onChange={(e) => setDadyName(e.target.value)}
              className="inputAele"
              type="text"
            />
          </div>
          <div className="itemPrs">
            <label className="lableStyle" htmlFor="">
              شماره شناسنامه
            </label>
            <input
              value={Shenasnameh}
              onChange={(e) => setShenasnameh(e.target.value)}
              className="inputAele"
              type="text"
            />
          </div>
          <div className="itemPrs">
            <label className="lableStyle" htmlFor="">
              کد ملی
            </label>
            <input
              value={NationalId}
              onChange={(e) => setNationalId(e.target.value)}
              className="inputAele"
              type="text"
            />
          </div>
          <div className="itemPrs">
            <label className="lableStyle" htmlFor="">
              محل صدور
            </label>
            <input
              value={Location}
              onChange={(e) => setLocation(e.target.value)}
              className="inputAele"
              type="text"
            />
          </div>
          <div className="itemPrs">
            <label className="lableStyle" htmlFor="">
              نسبت
            </label>
            <select className="SelectAele" value={Connect}>
              <option value={0}>اصلی</option>
              <option value={1}>پسر</option>
              <option value={2}>دختر</option>
              <option value={3}>همسر</option>
              <option value={4}>مادر</option>
              <option value={5}>پدر</option>
              <option value={6}>برادر</option>
              <option value={7}>خواهر</option>
            </select>
          </div>
          <div className="itemPrs">
            <label className="lableStyle" htmlFor="">
              تاریخ تولد
            </label>
            <DatePicker
              value={selectBirthday}
              onChange={setselectBirthday}
              shouldHighlightWeekends
              locale="fa" // add this
              className="dataStyle"
            />
          </div>
          <div className="itemPrs">
            <label className="lableStyle" htmlFor="">
              تاریخ بیمه
            </label>
            <DatePicker
              value={selectBimeh}
              onChange={setselectBimeh}
              shouldHighlightWeekends
              locale="fa" // add this
            />
          </div>
          <div className="itemPrs">
            <label className="lableStyle" htmlFor="">
              تاریخ روز
            </label>
            <DatePicker
              value={selectedDay}
              onChange={setSelectedDay}
              shouldHighlightWeekends
              locale="fa" // add this
            />
          </div>
          <div className="itemPrs">
            <label className="lableStyle" htmlFor="">
              وضعیت بیمه
            </label>
            <label class="switch">
              <input type="checkbox" checked={BimehCondition == true ? true : false} />
              <span class="slider round"></span>
            </label>
          </div>
          <div className="itemPrs">
            <label className="lableStyle" htmlFor="">
              وضعیت تکفل
            </label>
            <label class="switch">
              <input type="checkbox" checked={Takafol == true ? true : false} />
              <span class="slider round"></span>
            </label>
          </div>
          <div className="btnPlace">
            <button
              onClick={(e) => {
                SendInfo(e);
              }}
              className="btnStylE"
            >
              ثبت
            </button>
          </div>
        </div>
        <div className="tableAele">
          <table className="aeleTable">
            <tr className="HeadAele">
              <th className="celAele">نام</th>
              <th className="celAele LastName">نام خانوادگی</th>
              <th className="celAele">نام پدر</th>
              <th className="celAele">نسبت</th>
              <th className="celAele">شماره ملی</th>
              <th className="celAele">شماره شناسنامه</th>
              <th className="celAele">تاریخ تولد</th>
              <th className="celAele">تاریخ بیمه</th>
              <th className="celAele">تاریخ روز</th>
              <th className="celAele">وضعیت بیمه</th>
              <th className="celAele">وضعیت تکفل</th>
              <th className="celAele">ویرایش</th>
            </tr>
            {AeleData.map((item) => (
              <tr>
                <td className="celAele">{item.Nam}</td>
                <td className="celAele">{item.NamKhanevadegi}</td>
                <td className="celAele">{item.NamPedar}</td>
                <td className="celAele">{getNesbatText(item.Nesbat)}</td>
                <td className="celAele">{item.CodeMeli}</td>
                <td className="celAele">{item.ShomareShenasNameh}</td>
                <td className="celAele">{item.Tarikh_Tavalot}</td>
                <td className="celAele">{item.Tarikh_Bimeh}</td>
                <td className="celAele">{item.Tarikh_AraeeMadarek}</td>
                <td className="celAele">
                {item.BimehShodehYaNashode == true ? (
                    <img className="Condition" src={Accept} alt="Accept" />
                  ) : (
                    <img className="Condition" src={Ignore} alt="Accept" />
                  )}
                </td>
                <td className="celAele">
                {item.Tahttakafol == true ? (
                    <img className="Condition" src={Accept} alt="Accept" />
                  ) : (
                    <img className="Condition" src={Ignore} alt="Accept" />
                  )}
                </td>
                <td className="celAele">
                  <button className="btnAele" onClick={(e)=>{EditAelemandi(item)}} >ویرایش</button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Aelemandi;
