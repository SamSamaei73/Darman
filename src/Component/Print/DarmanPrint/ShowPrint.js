
import React, { useContext, Fragment, useRef, useState, useEffect } from 'react';
import { PDFViewer, Font } from '@react-pdf/renderer'
import Print from './Print';
import vazirfont from '../VazirBokd.ttf';
import vazirDigit from '../vazirdigit.ttf';
import qs from 'query-string';
import MeetingContext from '../../../Context/meetingContext';

import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";
Font.register({
    family: 'vazirDigit',
    src: vazirDigit,
});
Font.register({
    family: 'vazirfont',
    src: vazirfont,
});
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

const ShowPrint = (props) => {
    const [invoiceData, setinvoiceData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [totalSum, setTotalSum] = useState(null);
    const [packetNumber, setPacketNumber] = useState(null);
    const [packetDate, setPacketDate] = useState(null);
    useEffect(async () => {
        setLoading(true);
        let id = props.match.params.Id;
        await GetPacketData(id);
    }, [])
    const meetingContext = useContext(MeetingContext);

    const {
        GetPacketData,
        packetDataList, error
    } = meetingContext;

    useEffectSkipFirst(() => {
        if (packetDataList) {
            let data = invoiceData1;
            data.items = packetDataList.VisitData;
            setinvoiceData(data);
            setTotalSum(packetDataList.totalSum);
            
            setPacketNumber(packetDataList.packetNumber);
            setPacketDate(packetDataList.packetDate);
            setLoading(false);
            // console.log(data);
        }

    }, [packetDataList]);
    const invoiceData1 = {
        invoice_no: "1",
        company: "شرکت سهامی خدمات مهندسی برق - مشانیر",
        email: "",
        phone: "+1 (872) 588-3809",
        address: "سیستم - لیست خسارت اولیه اعلام به بیمه",
        trans_date: "1400/10/19",
        trans_packet: '658',
        items: [
            {
                rowNumber: 1,
                prsCode: 412203,
                Nam: 'علی',
                lastName: 'علی',
                patientName: 'مریم ',
                patientRelative: 'دختر',
                prescriptionDate: '1400/10/08',
                explainedCost: 1400,
                confirmedCost: 1400,
                outOfContractCost: 1400,
                faranshizCost: 1400,
                paidValue: 1400,
                description: 'ویزیت -متخصص',
            },
            {
                rowNumber: 2,
                prsCode: 412203,
                Nam: 'علی',
                lastName: 'علی',
                patientName: 'ابراهیم شفیعی نژاد بیجار گفشه ',
                patientRelative: 'دختر',
                prescriptionDate: '1400/10/08',
                explainedCost: 1400,
                confirmedCost: 1400,
                outOfContractCost: 1400,
                faranshizCost: 1400,
                paidValue: 1400,
                description: 'دارو - عمومی',
            },
            {
                rowNumber: 3,
                prsCode: 412203,
                Nam: 'علی',
                lastName: 'علی',
                patientName: 'مریم ',
                patientRelative: 'دختر',
                prescriptionDate: '1400/10/08',
                explainedCost: 1400,
                confirmedCost: 1400,
                outOfContractCost: 1400,
                faranshizCost: 1400,
                paidValue: 1400,
                description: 'ویزیت - فوق تخصصی',
            }
        ],
    };
    const override = css`
    margin: 15rem 0;
    
  `;
    return (
        <Fragment>

            {
                loading ?
                    <HashLoader color={'#081540'} loading={loading} css={override} size={150} />
                    :
                    <PDFViewer width="100%" height="600" className="app" >
                        {/* <PagePrint invoice={invoiceData} totalSum={totalSum} /> */}
                        {invoiceData ? <Print invoice={invoiceData} totalSum={totalSum} packetNumber={packetNumber} packetDate={packetDate} /> : null}
                    </PDFViewer>
            }
        </Fragment>

    )
}

export default ShowPrint
