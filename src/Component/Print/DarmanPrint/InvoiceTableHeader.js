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
        <Text style={styles.acceptPrice}>???????? ??????????</Text>
        <Text style={styles.negative}>????????????</Text>
        <Text style={styles.AboutIllness}>?????? ??????????</Text>
        {/* <Text style={styles.prescriptionPay}>??????????????</Text> */}
        {/* <Text style={styles.outOfContractCost}>?????? ????????</Text> */}
        {/* <Text style={styles.confirmedCost}>?????????? ??????</Text> */}
        <Text style={styles.explainedCost}>???????? ????????</Text>
        <Text style={styles.prescriptionDate}>?????????? ????????</Text>
        <Text style={styles.patientRelative}>???????? </Text>
        <Text style={styles.codemelli}>?????????? ?????????? </Text>
        <Text style={styles.patientName}>?????? ??????????</Text>
        <Text style={styles.lastName}>?????? ????????????????</Text>
        <Text style={styles.Nam}>?????? </Text>
        <Text style={styles.prsCode}> ????????????</Text>
        <Text style={styles.rowNumber}>????????</Text>
    </View>
);

export default InvoiceTableHeader