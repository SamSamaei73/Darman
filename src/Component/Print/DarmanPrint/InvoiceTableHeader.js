import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = 'black'
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomColor: 'black',
        backgroundColor: '#444444',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        textAlign: 'center',
        // fontStyle: 'bold',
        flexGrow: 1,
        color: '#fff',

    },
    rowNumber: {
        width: '40',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        fontSize: 10, order: 13
    },
    prsCode: {
        width: '8.3%',
        fontSize: 10,
        borderRightColor: borderColor,
        borderRightWidth: 1,
        order: 2
    },
    Nam: {
        width: '8.3%',
        fontSize: 10, borderRightColor: borderColor,
        borderRightWidth: 1,
        order: 3

    },
    lastName: {
        width: '8.3%',
        fontSize: 10, borderRightColor: borderColor,
        borderRightWidth: 1,
        order: 4
    },
    codemelli: {
        width: '100',
        fontSize: 8, borderRightColor: borderColor,
        borderRightWidth: 1,
        order: 4
    },
    patientName: {
        width: '120', fontSize: 10, borderRightColor: borderColor,
        borderRightWidth: 1,
        order: 5
    },
    patientRelative: {
        width: '50', fontSize: 10, borderRightColor: borderColor,
        borderRightWidth: 1,
        order: 6
    },
    prescriptionDate: {
        width: '8.3%', fontSize: 10, borderRightColor: borderColor,
        borderRightWidth: 1,
        order: 7
    },
    explainedCost: {
        width: '8.3%', fontSize: 10, borderRightColor: borderColor,
        borderRightWidth: 1,
        order: 8
    },
    confirmedCost: {
        width: '8.3%', fontSize: 10, borderRightColor: borderColor,
        borderRightWidth: 1,
        order: 9
    },
    outOfContractCost: {
        width: '8.3%', fontSize: 10, borderRightColor: borderColor,
        borderRightWidth: 1,
        order: 10
    },
    OutPrice: {
        width: '8.3%', fontSize: 10, borderRightColor: borderColor,
        borderRightWidth: 1,
        order: 11
    },
    prescriptionPay: {
        width: '8.3%', fontSize: 10, borderRightColor: borderColor,
        borderRightWidth: 1,
        order: 12
    },
    AboutIllness: {
        width: '100', fontSize: 10, borderRightColor: borderColor,
        borderRightWidth: 1,
        order: 1

    },
    negative: {
        width: '80', fontSize: 10, 
        borderRightColor: 'black',
        borderRightWidth: 1,
        order: 1

    },
    acceptPrice: {
        width: '80', fontSize: 10, 
        borderRightColor: 'black',
        borderRightWidth: 1,
        order: 1

    },

});

const InvoiceTableHeader = () => (
    <View style={styles.container}>
        <Text style={styles.acceptPrice}>مبلغ تایید</Text>
        <Text style={styles.negative}>کسورات</Text>
        <Text style={styles.AboutIllness}>شرح درمان</Text>
        {/* <Text style={styles.prescriptionPay}>پرداختی</Text> */}
        {/* <Text style={styles.outOfContractCost}>غیر تعهد</Text> */}
        {/* <Text style={styles.confirmedCost}>تایید شده</Text> */}
        <Text style={styles.explainedCost}>مبلغ نسخه</Text>
        <Text style={styles.prescriptionDate}>تاریخ نسخه</Text>
        <Text style={styles.patientRelative}>نسبت </Text>
        <Text style={styles.codemelli}>کدملی بیمار </Text>
        <Text style={styles.patientName}>نام بیمار</Text>
        <Text style={styles.lastName}>نام خانوادگی</Text>
        <Text style={styles.Nam}>نام </Text>
        <Text style={styles.prsCode}> پرسنلی</Text>
        <Text style={styles.rowNumber}>ردیف</Text>
    </View>
);

export default InvoiceTableHeader