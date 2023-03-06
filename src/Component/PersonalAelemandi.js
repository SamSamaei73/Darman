import React, { useRef, useState, useContext, useEffect } from "react";
import MeetingContext from "../Context/meetingContext";

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

const PersonalAelemandi = ({ prsCode }) => {
  const meetingContext = useContext(MeetingContext);
  const { aelemandiDataPerson, GetAelemandi } = meetingContext;
  const [AeleData, setAeleData] = useState([]);
  const [persondata, setPersonData] = useState(null);

  useEffect(() => {
    console.log("prscode", prsCode);
    getPersonData(prsCode);
  }, []);

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
      console.log('aelemandidata',aelemandiDataPerson);
      let newData = aelemandiDataPerson.map((item) => {
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

  return (
    <div className="tableAele">
      <table className="aeleTable">
        <tr className="HeadAele">
          <th className="celAele">نام</th>
          <th className="celAele">نام خانوادگی</th>
          <th className="celAele">نام پدر</th>
          <th className="celAele">نسبت</th>
          <th className="celAele">شماره ملی</th>
          <th className="celAele">شماره شناسنامه</th>
          <th className="celAele">تاریخ بیمه</th>
          <th className="celAele">تاریخ تولد</th>
        </tr>
        {AeleData.map((item) => (
          <tr>
            <td className="celAele">{item.Nam}</td>
            <td className="celAele">{item.NamKhanevadegi}</td>
            <td className="celAele">{item.NamPedar}</td>
            <td className="celAele">{getNesbatText(item.Nesbat)}</td>
            <td className="celAele">{item.CodeMeli}</td>
            <td className="celAele">{item.ShomareShenasNameh}</td>
            <td className="celAele">{item.Tarikh_Bimeh}</td>
            <td className="celAele">{item.Tarikh_Tavalot}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default PersonalAelemandi;
