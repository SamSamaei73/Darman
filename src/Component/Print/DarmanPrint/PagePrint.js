import React, { Fragment } from 'react';
import { Page, Font, Document, Image, StyleSheet } from '@react-pdf/renderer';
import InvoiceTitle from './InvoiceTitle'
import BillTo from './BillTo'
import InvoiceNo from './InvoiceNo'
import InvoiceItemsTable from './InvoiceItemsTable'
import InvoiceThankYouMsg from './InvoiceThankYouMsg'
import logo from '../../../images/logo.png'



const styles = StyleSheet.create({
    page: {
        fontFamily: 'vazirfont',
        fontSize: 13,
        paddingTop: 30,
        paddingLeft: 43,
        paddingRight: 40,
        lineHeight: 1.5,
        flexDirection: 'column',
    },
    logo: {
        width: 120,
        height: 40,

        justifyContent: 'flex-start'
    },

});


const PagePrint = ({ invoice, totalSum }) =>
(
    <Document>
        <Page size="A4" orientation="landscape" style={styles.page}>
            <Image style={styles.logo} src={logo} />
            <InvoiceTitle style={styles.titleMoshanir} title='مشانیر-شرکت سهامی خدمات مهندسی برق ' />
            <InvoiceNo invoice={invoice} />
            <BillTo invoice={invoice} />
            <InvoiceItemsTable items={invoice.items} totalSum={totalSum} />
        </Page>
    </Document>);


export default PagePrint;
