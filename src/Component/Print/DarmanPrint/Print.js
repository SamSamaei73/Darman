import React, { useEffect } from "react";
import { Page, Document, Image, StyleSheet } from "@react-pdf/renderer";
import InvoiceTitle from "./InvoiceTitle";
import BillTo from "./BillTo";
import InvoiceNo from "./InvoiceNo";
import InvoiceItemsTable from "./InvoiceItemsTable";
import InvoiceThankYouMsg from "./InvoiceThankYouMsg";
import logo from "../../../images/logo.png";
import PagePrint from "./PagePrint";

const styles = StyleSheet.create({
  page: {
    fontFamily: "vazirfont",
    fontSize: 13,
    paddingTop: 30,
    paddingLeft: 43,
    paddingRight: 40,
    lineHeight: 1.5,
    flexDirection: "column",
  },
  logo: {
    width: 120,
    height: 40,

    justifyContent: "flex-start",
  },
});
const printPages = (invoice, totalSum, packetNumber, packetDate) => {
  // console.log('invoiceitems', invoice.items);
  let pageCount = 1; // parseInt(invoice.items.length / 10);
  console.log("pagecount", pageCount);
  let pageItem = 16;
  let arr = [];
  return page(
    invoice,
    invoice.items,
    1,
    totalSum,
    1,
    packetNumber,
    packetDate
  );
//   for (let i = 0; i <= pageCount; i++) {
//     // let items = invoice.items
//     // .filter(function (item, index) {
//     //     let minnum = parseInt((this.page - 1) * this.pageItem) + 1;
//     //     let maxnum = parseInt((this.page) * this.pageItem);
//     //     console.log('minnum', minnum, 'maxnum', maxnum);
//     //     return (item.index >= minnum) && item.index <= maxnum

//     // }, { pageItem, page: i + 1 });
//     let items = invoice.items;
//     //pageData.data.items = items;
//     // console.log(items);
//     console.log("pageindex", i, "items", items);
//     let lastPage = i + 1 == pageCount ? true : false;
//     if (items.length > 0)
//       arr.push(
//         // <Print1 invoice={invoice} items={invoice.items} totalSum={totalSum} />
//         // <Print1 invoice={invoice} totalSum={totalSum} />
//         page(
//           invoice,
//           items,
//           i + 1,
//           totalSum,
//           lastPage,
//           packetNumber,
//           packetDate
//         )
//       );
//     items = [];
//   }
//   return arr;

};

const page = (
  invoice,
  items,
  pageNumber,
  totalSum,
  lastPage,
  packetNumber,
  packetDate
) => (
  <Page size="A4" orientation="landscape" style={styles.page}>
    <Image style={styles.logo} src={logo} />
    <InvoiceTitle
      style={styles.titleMoshanir}
      title="مشانیر-شرکت سهامی خدمات مهندسی برق "
    />
    <InvoiceNo
      pageNumber={pageNumber}
      packetNumber={packetNumber}
      packetDate={packetDate}
    />
    <BillTo invoice={invoice} />
    <InvoiceItemsTable items={items} totalSum={totalSum} lastPage={lastPage} />
  </Page>
);
const Invoice = ({ invoice, totalSum, packetNumber, packetDate }) => (
  // const printPages = () => {
  //     // console.log('invoiceitems', invoice.items);
  //     let pageCount = parseInt(invoice.items.length / 10);
  //     console.log('pagecount', pageCount);
  //     let pageItem = 10;
  //     let arr = [];

  //     for (let i = 0; i <= pageCount; i++) {
  //         let items = invoice.items.filter(function (item, index) {
  //             let minnum = parseInt((this.page - 1) * this.pageItem) + 1;
  //             let maxnum = parseInt((this.page) * this.pageItem);
  //             console.log('minnum', minnum, 'maxnum', maxnum);
  //             return (item.index >= minnum) && item.index <= maxnum

  //         }, { pageItem, page: i + 1 });
  //         //pageData.data.items = items;
  //         // console.log(items);
  //         console.log('pageindex', i, 'items', items);

  //         arr.push(
  //             // <Print1 invoice={invoice} items={invoice.items} totalSum={totalSum} />
  //             <Print1 invoice={invoice} totalSum={totalSum} />
  //         );
  //     }
  //     return arr;

  // }
  // const Print1 = ({ invoice, totalSum }) =>
  // (<Page size="A4" orientation="landscape" style={styles.page}>
  //     <Image style={styles.logo} src={logo} />
  //     <InvoiceTitle style={styles.titleMoshanir} title='مشانیر-شرکت سهامی خدمات مهندسی برق ' />
  //     <InvoiceNo invoice={invoice} />
  //     <BillTo invoice={invoice} />
  //     {/* <InvoiceItemsTable items={items} totalSum={totalSum} /> */}
  // </Page>
  // );

  <Document>
    {/* {page(invoice, totalSum)} */}
    {printPages(invoice, totalSum, packetNumber, packetDate)}
  </Document>
);

// const Invoice1 = ({ invoice, totalSum }) => {
//     const printPages = () => {
//         console.log('invoiceitems', invoice.items);
//         let pageCount = parseInt(invoice.items.length / 10);
//         console.log('pcount', pageCount);
//         // let pageItem = 10;
//         // let arr = [];

//         // for (let i = 0; i <= pageCount; i++) {
//         //     let items = invoice.items.filter(function (item, index) {
//         //         let minnum = parseInt((this.page - 1) * this.pageItem) + 1;
//         //         let maxnum = parseInt((this.page) * this.pageItem);
//         //         console.log('minnum', minnum, 'maxnum', maxnum);
//         //         return (item.index >= minnum) && item.index <= maxnum

//         //     }, { pageItem, page: i + 1 });

//         //     console.log('pageindex', i, 'items', items);
//         //     if (items.length > 0)
//         //         arr.push(
//         //             <Print1 invoice={invoice} items={items} totalSum={totalSum} />
//         //         );
//         // }
//         return 1;

//     }
//     useEffect(() => {
//         printPages();
//     }, []);

//     return <div>11</div>;
// }

export default Invoice;
