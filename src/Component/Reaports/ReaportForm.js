import React, { useRef, useState, useContext, useEffect, useMemo } from "react";
import "../../css/Reaport.css";
import Logo from "../../images/logo.png";
import MeetingContext from "../../Context/meetingContext";
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

const ReaportForm = () => {
  const meetingContext = useContext(MeetingContext);
  const { GetPacketList, GetPacketData, packetListData, packetDataList } =
    meetingContext;

  const [PacketNoList, setPacketNoList] = useState([]);
  const [DataOfReaport, setDataOfReaport] = useState([]);
  const [totalSum, setTotalSum] = useState(null);
  const [NumberPack, setNumberPack] = useState(null);
  const [DatePack, setDatePack] = useState(null);
  const [TotalPrice, setTotalPrice] = useState();

  

  useEffect(async () => {
    await GetPacketList();
  }, []);

  useEffectSkipFirst(() => {
    if (packetDataList) {
      let newData = packetDataList.VisitData.map((item) => {
        let newItem = {};
        newItem.prsCode = item.prsCode;
        newItem.Nam = item.Nam;
        newItem.lastName = item.lastName;
        newItem.patientName = item.patientName;
        newItem.patientRelative = item.patientRelative;
        newItem.description = item.description;
        newItem.nationalId = item.nationalId;
        newItem.prescriptionDate = item.prescriptionDate;
        newItem.paidValue = item.paidValue;
        newItem.explainedCost = item.explainedCost;

        return newItem;
      });
      setDataOfReaport(newData);
      setTotalPrice((newData.reduce((a,v) =>  a = a + v.explainedCost , 0 )));

    }
  }, [packetDataList]);

  useEffectSkipFirst(() => {
    if (packetDataList) {
      let data = packetDataList;
      data.items = packetDataList.VisitData;
      setTotalSum(packetDataList.totalSum);
      setNumberPack(packetDataList.packetNumber);
      setDatePack(packetDataList.packetDate);
    }
  }, [packetDataList]);

  return (
    <div className="ReaportForm">
      <div className="PaperBorder">
        <div className="headerReaport">
          <img className="LogoReaport" src={Logo} alt="Logo" />
          <div className="titleRea">
            <h4>شرکت سهامی خدمات مهندسی برق - مشانیر</h4>
            <h6>لیست خسارت اولبه ارسال به بیمه</h6>
          </div>
          <div className="date">
            <h6>تاریخ: {DatePack}</h6>
            <h6>شماره بسته : {NumberPack}</h6>
          </div>
        </div>
        <div className="MainReaportNew">
          <div className="headRow">
            <h5 className="dataHead">ردیف</h5>
            <h5 className="dataHead">پرسنلی</h5>
            <h5 className="dataHead">نام</h5>
            <h5 className="dataHead">نام خانوادگی</h5>
            <h5 className="dataHead">نام بیمار</h5>
            <h5 className="dataHead">کدملی</h5>
            <h5 className="dataHead">نسبت</h5>
            <h5 className="dataHead">تاریخ نسخه</h5>
            <h5 className="dataHead">مبلغ نسخه</h5>
            <h5 className="dataHead">شرح درمان</h5>
            <h5 className="dataHead">کسورات</h5>
            <h5 className="dataHead">مبلغ تایید</h5>
          </div>

          {DataOfReaport.map((item, id) => (
            <div className="Row">
              <h5 className="dataHead">{id + 1}</h5>
              <h5 className="dataHead">{item.prsCode}</h5>
              <h5 className="dataHead">{item.Nam}</h5>
              <h5 className="dataHead">{item.lastName}</h5>
              <h5 className="dataHead"> {item.patientName}</h5>
              <h5 className="dataHead">{item.nationalId}</h5>
              <h5 className="dataHead">{item.patientRelative}</h5>
              <h5 className="dataHead">{item.prescriptionDate}</h5>
              <h5 className="dataHead">
                <CurrencyInput
                  name="input-name"
                  placeholder="0"
                  maxLength="10"
                  value={item.explainedCost}
                  decimalsLimit={2}
                  className="tableInput"
                  style={{ color: "black" }}
                />
              </h5>
              <h5 className="dataHead">{item.description}</h5>
              <h5 className="dataHead">
              <CurrencyInput
                  name="input-name"
                  placeholder="0"
                  maxLength="10"
                  value={item.explainedCost - item.paidValue}
                  decimalsLimit={2}
                  className="tableInput"
                  style={{ color: "black" }}
                />
              </h5>
              <h5 className="dataHead"> 
              <CurrencyInput
                  name="input-name"
                  placeholder="0"
                  maxLength="10"
                  value={item.paidValue}
                  decimalsLimit={2}
                  className="tableInput"
                  style={{ color: "black" }}
                  readOnly
                />
              </h5>
            </div>
          ))}
        </div>
      </div>
      <div className="totalPrice">
        <div className="total">
          <h3>مجموع هزینه ها :</h3>
          <h3>
            <CurrencyInput
              name="input-name"
              placeholder="0"
              maxLength="10"
              value={TotalPrice}
              decimalsLimit={2}
              className="currencyStylePrice"
              style={{ color: "black" }}
            />
            ریال
          </h3>
        </div>
        <div className="payIt">
          <h3>مجموع پرداختی :</h3>
          <h3><CurrencyInput
              name="input-name"
              placeholder="0"
              maxLength="10"
              value={totalSum}
              decimalsLimit={2}
              className="currencyStylePrice"
              style={{ color: "black" }}
            />
            ریال</h3>
        </div>
      </div>
    </div>
  );
};

export default ReaportForm;
