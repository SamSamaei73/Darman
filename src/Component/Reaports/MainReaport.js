import React, { useRef, useState, useContext, useEffect, useMemo } from "react";
import "../../css/Reaport.css";
import Header from "../Navbar";
import { useReactToPrint } from "react-to-print";
import { ComponentToPrint } from "./ComponentToPrint";
import MeetingContext from "../../Context/meetingContext";
import Select from "react-select";
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

const MainReaport = () => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const meetingContext = useContext(MeetingContext);
  const { GetPacketList, GetPacketData, packetListData, packetDataList } =
    meetingContext;
  useEffect(async () => {
    await GetPacketList();
    GetPacketData(SelectedPackeNo);
  }, []);

  const [SelectedPackeNo, setSelectedPackeNo] = useState(null);
  const [PacketNoList, setPacketNoList] = useState([]);
  const [reportData, setReportData] = useState([]);
  const [DataOfReaport, setDataOfReaport] = useState([]);
  const [totalSum, setTotalSum] = useState(null);
  const [Relation, setRelation] = useState(null);
  const [countData, setcountData] = useState([]);
  const [AllCount, setAllCount] = useState([]);
  const [TotalPrice, setTotalPrice] = useState();

  



  useEffectSkipFirst(async () => {
    if (packetDataList) {
      console.log("dataofpackets", packetDataList);
      setReportData(packetDataList.VisitData);
    }
  }, [packetDataList]);
  useEffectSkipFirst(() => {
    if (packetListData) {
      let packets = packetListData.map((o) => {
        let rObj = {};
        rObj.label = o.MahBachNo;
        rObj.value = o.MahBachNo;
        return rObj;
      });
      setPacketNoList(packets);
    }
  }, [packetListData]);

  useEffectSkipFirst(() => {
    if (packetDataList) {
      let data = packetDataList;
      data.items = packetDataList.VisitData;
      setTotalSum(packetDataList.totalSum);
      setRelation(packetDataList.VisitData);
    }
  }, [packetDataList]);


  useEffectSkipFirst(() => {
    if (packetDataList) {
      let newData = packetDataList.VisitData.map((item) => {
        let newItem = {};
        newItem.prsCode = item.prsCode;
        newItem.explainedCost = item.explainedCost;
        // setTotalPrice(item.explainedCost);
        newItem.patientRelative = item.patientRelative.includes("صل");

        return newItem;
      });
      setDataOfReaport(newData);
      let mainarr=newData.filter((item)=>item.patientRelative);
      setcountData(mainarr.length);
      setAllCount(newData.length);
      setTotalPrice((newData.reduce((a,v) =>  a = a + v.explainedCost , 0 )));


    }
  }, [packetDataList]);



  return (
    <div className="MainReaport">
      <Header />
      <div className="FilterReaport">
        <div className="SearchBox">
          <h4>شماره بسته</h4>
          <Select
            isSearchable
            value={SelectedPackeNo}
            options={PacketNoList}
            onChange={(e) => {
              console.log(`Option selected:`, e);
              setSelectedPackeNo(e);
              GetPacketData(e.value);
            }}
            className="ContractNo"
          />
        </div>

        <div className="infoReaport">
          <div className="item">
            <h4>افراد اصلی :</h4>
            <h4>{countData}</h4>
          </div>
          <div className="item">
            <h4>افراد فرعی :</h4>
            <h4>{AllCount - countData}</h4>
          </div>
          <div className="item">
            <h4>  مبلغ نسخ :</h4>
            <h4>
              <CurrencyInput
                name="input-name"
                placeholder="0"
                maxLength="10"
                value={TotalPrice}
                decimalsLimit={2}
                className="currencyStylePrice"
              />
            </h4>
          </div>
        </div>
        <button className="PrintReaport" onClick={handlePrint}>
          پرینت
        </button>
      </div>
      <ComponentToPrint ref={componentRef} />
    </div>
  );
};

export default MainReaport;
