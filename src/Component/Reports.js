/* eslint-disable */
import React, { useRef, useState, useContext, useEffect, useMemo } from "react";
import MeetingContext from "../Context/meetingContext";
import Select from "react-select";
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import '../css/Reports.css';
import { SearchReportColumns } from './Common/Columns';
import CustomTable from './Common/CustomTable';
import { Link } from "react-router-dom";


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
const Reports = () => {
  const meetingContext = useContext(MeetingContext);
  const {
    GetPacketList,
    GetPacketData,
    packetListData,
    packetDataList,


  } = meetingContext;
  useEffect(async () => {
    await GetPacketList();


  }, [])
  const SpersonColumnsForReport = useMemo(
    () => [SearchReportColumns],

    []
  );
  const [SelectedPackeNo, setSelectedPackeNo] = useState(null);
  const [PacketNoList, setPacketNoList] = useState([]);
  const [reportData, setReportData] = useState([]);

  useEffectSkipFirst(async () => {
    if (packetDataList) {   
      console.log('dataofpackets', packetDataList);
      setReportData(packetDataList.VisitData);
    }
  }, [packetDataList]);
  useEffectSkipFirst(() => {
    if (packetListData) {
      let packets = packetListData.map(o => {
        let rObj = {}; rObj.label = o.MahBachNo;
        rObj.value = o.MahBachNo;
        return rObj;
      });
      setPacketNoList(packets);
     // console.log('dataofpackets', packetListData.VisitData);

     // setReportData(packetListData.VisitData);


    }
  }, [packetListData]);


  return (
    <div id='Report-page'>
      <nav className='navbar-report'>
        <Navbar />
      </nav>

      <div className="reportTools">
        <div className="selectReport">
          <div className="tittleReport">
            <h2>گزارش بسته انتخابی</h2>
          </div>
          <div className='inputPrices selectori'>
            <label>شماره بسته</label>
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
            <div className="reportInfo">
              {SelectedPackeNo ? <Link label="فایل گزارش" to={'/ShowPrint/' + SelectedPackeNo.value} > پرینت گزارش </Link> : null}
            </div>
          </div>

        </div>
      </div>
      <div className="reportTable">
        {<>
          <CustomTable
            columns={SpersonColumnsForReport}
            data={reportData ? reportData : []}
          />
        </>}
      </div>

      <Footer />
    </div>
  )
}

export default Reports
