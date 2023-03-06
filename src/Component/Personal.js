import React, { useMemo, useRef, useState, useContext, useEffect } from "react";
import MeetingContext from "../Context/meetingContext";
import "../css/Personal.css";
import LogoPersonal from "../images/imageedit_12_8352376165.png";
import { PersonalColumns } from "./Common/Columns";
import CustomTable from "./Common/CustomTable";
import Back from "../images/icons8-shutdown-48.png";
import { NavLink } from "react-router-dom";
import { PersonalTitle } from "../Constant/constant";
import HashLoader from "react-spinners/HashLoader";
import Popup from "./Popup";
import { css } from "@emotion/react";
import PersonalAelemandi from "./PersonalAelemandi";

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

const Personal = () => {
  document.title = PersonalTitle;
  const [loading, setLoading] = useState(false);
  const [stautsfilter, setStatusfilter] = useState(null);
  const [monthfilter, setMonthfilter] = useState(null);
  const [prsCode, setPrsCode] = useState(null);
  const [yearfilter, setYearfilter] = useState(null);
  const [sumPaidValue, setSumPaidValue] = useState("");
  const [sumReciepentValue, setSumReciepentValue] = useState("");
  const [healthRecipiesData, setHealthRecipiesData] = useState(null);
  const [persondata, setPersonData] = useState(null);

  //   const [searchParams] = useSearchParams();

  const KartableColumnsForAdmin = useMemo(
    () => [PersonalColumns],

    []
  );

  const meetingContext = useContext(MeetingContext);
  const {
    GetHealthRecipiesByPrsNumber,
    healthRecipiesByPrsNumberData,
    GetDecodePrsCodeForTherapy,
    decodePrsCodeForTherapyData,
    // packetListData,
    // GetPacketList,
  } = meetingContext;
  useEffect(() => {
    //  console.log('data')
    setLoading(true);
    setYearfilter(1401);
    setMonthfilter(13);
    setStatusfilter("پرداخت شده");
    const params = new URLSearchParams(window.location.search); // id=123
    let hashprscode = params.get("pc"); // 123

    // const decodedPrsnumber = searchParams.get("pc");

    if (hashprscode) {
      // '  0rJF5PcBXwrF8q0NIc8Ew=='
      let decodedPrsnumber1 = hashprscode.replace(" ", "+");
      decodedPrsnumber1 = decodedPrsnumber1.substring(
        decodedPrsnumber1.indexOf(" +") + 1
      );
      //  console.log('pc=',decodedPrsnumber1.substring(decodedPrsnumber1.indexOf( ' +')+1 ));
      console.log("prscodehash", hashprscode);
      GetDecodePrsCodeForTherapy(decodedPrsnumber1);
    }
  }, []);
  function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }
  useEffectSkipFirst(() => {
    if (decodePrsCodeForTherapyData) {
      console.log("data", decodePrsCodeForTherapyData);
      //setLoading(false)
      setPrsCode(decodePrsCodeForTherapyData.PrsCode);
      GetHealthRecipiesByPrsNumber(decodePrsCodeForTherapyData.PrsCode);
    }
  }, [decodePrsCodeForTherapyData]);

  useEffectSkipFirst(() => {
    if (healthRecipiesByPrsNumberData) {
      setLoading(false);
      let data = healthRecipiesByPrsNumberData.VisitData;
      let sumValue = 0;
      let sumReciepentValue = 0;
      if (data.length > 0) {
        sumValue = data.reduce((a, b) => ({
          paidValue: a.paidValue + b.paidValue,
        }));
        setSumPaidValue(numberWithCommas(sumValue.paidValue));
        sumReciepentValue = data.reduce((a, b) => ({
          explainedCost: a.explainedCost + b.explainedCost,
        }));
        setSumReciepentValue(
          numberWithCommas(sumReciepentValue.explainedCost)
        );
        // console.log('sumrecipentvalue',sumReciepentValue,data);
      }
      else{
        setSumPaidValue(0);
        setSumReciepentValue(
         0
        );
      }
      if (stautsfilter) {
        data = data.filter((o) => o.status === stautsfilter);
        if (data.length > 0) {
          sumValue = data.reduce((a, b) => ({
            paidValue: a.paidValue + b.paidValue,
          }));
          setSumPaidValue(numberWithCommas(sumValue.paidValue));
          sumReciepentValue = data.reduce((a, b) => ({
            explainedCost: a.explainedCost + b.explainedCost,
          }));
          setSumReciepentValue(
            numberWithCommas(sumReciepentValue.explainedCost)
          );
        }else{
          setSumPaidValue(0);
          setSumReciepentValue(
           0
          );
        }
      }
      if (yearfilter && monthfilter != "همه") {
        const monthdata = data.map((o) => ({
          year: o.prescriptionDate.split("/")[0],
          month: o.prescriptionDate.split("/")[1],
          day: o.prescriptionDate.split("/")[2],
          data: o,
        }));
        const yeardatafilter = monthdata.filter(
          (o) => o.year.indexOf(yearfilter) > -1
        );

        data = yeardatafilter.map((o) => o.data);
        if (data.length > 0) {
          sumValue = data.reduce((a, b) => ({
            paidValue: a.paidValue + b.paidValue,
          }));
          setSumPaidValue(numberWithCommas(sumValue.paidValue));
          sumReciepentValue = data.reduce((a, b) => ({
            explainedCost: a.explainedCost + b.explainedCost,
          }));
          setSumReciepentValue(
            numberWithCommas(sumReciepentValue.explainedCost)
          );
        }
        else{
          setSumPaidValue(0);
          setSumReciepentValue(
           0
          );
        }
      }
      if (monthfilter && monthfilter != 13) {
        const monthdata = data.map((o) => ({
          year: o.prescriptionDate.split("/")[0],
          month: o.prescriptionDate.split("/")[1],
          day: o.prescriptionDate.split("/")[2],
          data: o,
        }));
        const monthdatafilter = monthdata.filter(
          (o) => parseInt(o.month) === parseInt(monthfilter)
        );
        data = monthdatafilter.map((o) => o.data);
        if (data.length > 0) {
          sumValue = data.reduce((a, b) => ({
            paidValue: a.paidValue + b.paidValue,
          }));
          sumReciepentValue = data.reduce((a, b) => ({
            explainedCost: a.explainedCost + b.explainedCost,
          }));
          setSumReciepentValue(
            numberWithCommas(sumReciepentValue.explainedCost)
          );
          setSumPaidValue(numberWithCommas(sumValue.paidValue));
          console.log("monthfilterdata", monthdatafilter);
        }
        else{
          setSumPaidValue(0);
          setSumReciepentValue(
           0
          );
        }
      }
      setHealthRecipiesData(data);
      //  console.log('data', healthRecipiesByPrsNumberData);
    }
  }, [healthRecipiesByPrsNumberData]);

  const onStatusChange = (event) => {
    //let data = healthRecipiesData.filter(o => o.status === event.target.value);
    setStatusfilter(event.target.value);
    GetHealthRecipiesByPrsNumber(prsCode);
  };
  const onYearChange = (event) => {
    //let data = healthRecipiesData.filter(o => o.status === event.target.value);
    setYearfilter(event.target.value);
    GetHealthRecipiesByPrsNumber(prsCode);
  };
  const onMonthChange = (event) => {
    console.log(event.target.value);
    setMonthfilter(event.target.value);
    GetHealthRecipiesByPrsNumber(prsCode);
  };

  const override = css`
    margin: 15rem 0;
  `;

  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const getPersonData = (prscod) => {
    setPersonData(null);
    GetHealthRecipiesByPrsNumber(prscod);
  };

  return (
    <div id="Personal-style">
      {loading ? (
        <HashLoader
          color={"#081540"}
          loading={loading}
          css={override}
          size={150}
        />
      ) : (
        <div className="personal-info">
          <div className="headPersonal">
            <div className="personal-nav">
              <img src={LogoPersonal} />
            </div>

            <div className="back-btn">
              <a href="http://intranet.moshanir.com">
                <img src={Back} />
              </a>
            </div>
          </div>
          <div id="personalTitle">
            <h3>سامانه مشاهده مطالبات درمان</h3>
          </div>
          <div className="info-search">
            <div className="serchDiv">
              <h5>سال</h5>
              <select
                value={yearfilter}
                onChange={(event) => onYearChange(event)}
              >
                <option value={1397}>1397</option>
                <option value={1398}>1398</option>
                <option value={1399}>1399</option>
                <option value={1400}>1400</option>
                <option value={1401}>1401</option>
                <option value={0}>همه</option>
              </select>
            </div>
            <div className="serchDiv">
              <h5>ماه</h5>
              <select
                value={monthfilter}
                onChange={(event) => onMonthChange(event)}
              >
                <option value={1}>فروردین</option>
                <option value={2}>اردیبهشت</option>
                <option value={3}>خرداد</option>
                <option value={4}>تیر</option>
                <option value={5}>مرداد</option>
                <option value={6}>شهریور</option>
                <option value={7}>مهر</option>
                <option value={8}>آبان</option>
                <option value={9}>آذر</option>
                <option value={10}>دی</option>
                <option value={11}>بهمن</option>
                <option value={12}>اسفند</option>
                <option value={13}>همه</option>
              </select>
            </div>
            <div className="serchDiv">
              <h5>وضعیت نسخه</h5>
              <select
                value={stautsfilter}
                onChange={(event) => onStatusChange(event)}
              >
                <option>پرداخت شده</option>
                <option>در دست اقدام</option>
              </select>
            </div>
            <div className="serchDiv">
              <button
                onChange={(e) => {
                  getPersonData(e.target.value);
                }}
                onClick={togglePopup}
                className="BtnPersonal"
              >
                افراد تحت تکفل شما
              </button>
              {isOpen && (
                <Popup
                  content={
                    <>
                    <div className="stylePopStyle">
                      <PersonalAelemandi prsCode={prsCode} />
                      </div>
                    </>
                  }
                  handleClose={togglePopup}
                />
              )}
            </div>
          </div>
          <div className="table-personal">
            <CustomTable
              columns={KartableColumnsForAdmin}
              data={healthRecipiesData ? healthRecipiesData : []}
            />
          </div>

          <div className="totalPerson">
            <div className="totalShow">
              <div className="totalPrice">
                <h5>ریال</h5>
                <input
                  type="text"
                  value={sumPaidValue}
                  readOnly
                  className="totalInput"
                ></input>
              </div>
              <h5>مجموع پرداختی ها</h5>
            </div>
            <div className="totalShow">
              <div className="totalPrice">
                <h5>ریال</h5>
                <input
                  type="text"
                  value={sumReciepentValue}
                  readOnly
                  className="totalInput"
                ></input>
              </div>
              <h5>مجموع نسخه ها</h5>
            </div>
          </div>
       
        </div>
      )}
    </div>
  );
};

export default Personal;
