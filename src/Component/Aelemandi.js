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
        return "????????";
        break;
      case 1:
        return "??????";
        break;
      case 2:
        return "????????";
        break;
      case 3:
        return "????????";
        break;
      case 4:
        return "????????";
        break;
      case 5:
        return "??????";
        break;

      case 6:
        return "??????????";
        break;

      case 7:
        return "??????????";
        break;
      case 8:
        return "????????";
        break;
      case 9:
        return "??????";
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
      text: "?????? ???????? ?????? ????",
      icon: "success",
      confirmButtonText: "????????",
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
            ?????????? ????????????
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
              ??????
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
              ?????? ????????????????
            </label>
            <input className="inputAele" type="text" value={LastName}
              onChange={(e) => setLastName(e.target.value)}/>
          </div>
          <div className="itemPrs">
            <label className="lableStyle" htmlFor="">
              ?????? ??????
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
              ?????????? ????????????????
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
              ???? ??????
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
              ?????? ????????
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
              ????????
            </label>
            <select className="SelectAele" value={Connect}>
              <option value={0}>????????</option>
              <option value={1}>??????</option>
              <option value={2}>????????</option>
              <option value={3}>????????</option>
              <option value={4}>????????</option>
              <option value={5}>??????</option>
              <option value={6}>??????????</option>
              <option value={7}>??????????</option>
            </select>
          </div>
          <div className="itemPrs">
            <label className="lableStyle" htmlFor="">
              ?????????? ????????
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
              ?????????? ????????
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
              ?????????? ??????
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
              ?????????? ????????
            </label>
            <label class="switch">
              <input type="checkbox" checked={BimehCondition == true ? true : false} />
              <span class="slider round"></span>
            </label>
          </div>
          <div className="itemPrs">
            <label className="lableStyle" htmlFor="">
              ?????????? ????????
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
              ??????
            </button>
          </div>
        </div>
        <div className="tableAele">
          <table className="aeleTable">
            <tr className="HeadAele">
              <th className="celAele">??????</th>
              <th className="celAele LastName">?????? ????????????????</th>
              <th className="celAele">?????? ??????</th>
              <th className="celAele">????????</th>
              <th className="celAele">?????????? ??????</th>
              <th className="celAele">?????????? ????????????????</th>
              <th className="celAele">?????????? ????????</th>
              <th className="celAele">?????????? ????????</th>
              <th className="celAele">?????????? ??????</th>
              <th className="celAele">?????????? ????????</th>
              <th className="celAele">?????????? ????????</th>
              <th className="celAele">????????????</th>
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
                  <button className="btnAele" onClick={(e)=>{EditAelemandi(item)}} >????????????</button>
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
