import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = 'black'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomColor: '#6a6a6a',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        textAlign: 'center',
        //   fontStyle: 'bold',
    },
    rowNumber: {
        width: '40',
        textAlign: 'center',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        bordeLeftColor: 'black',
        borderLeftWidth: 1,
        paddingLeft: 8,
        fontSize: 9,
    },
    prsCode: {
        width: '70',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'center',
        bordeLeftColor: 'black',
        borderLeftWidth: 1,
        fontSize: 9,
    },
    Nam: {
        width: '8.3%',
        borderRightColor: 'black',
        bordeLeftColor: 'black',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        textAlign: 'center',

        fontSize: 9,
    },
    lastName: {
        width: '8.3%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'center',
        fontSize: 9,
        bordeLeftColor: 'black',
        borderLeftWidth: 1,
    },
    codemelli: {
        width: '100',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'center',
        fontSize: 7,
        bordeLeftColor: 'black',
        borderLeftWidth: 1,
    },
    patientName: {
        borderRightColor: borderColor,
        borderRightWidth: 1,
        width: '120',
        textAlign: 'center',
        fontSize: 9,
        bordeLeftColor: 'black',
        borderLeftWidth: 1,
    },
    patientRelative: {
        borderRightColor: borderColor,
        borderRightWidth: 1,
        width: '50',
        textAlign: 'center',
        fontSize: 9,
        bordeLeftColor: 'black',
        borderLeftWidth: 1,
    },
    prescriptionDate: {
        borderRightColor: borderColor,
        borderRightWidth: 1,
        width: '8.3%',
        textAlign: 'center',
        fontSize: 9,
        bordeLeftColor: 'black',
        borderLeftWidth: 1,
    },
    explainedCost: {
        borderRightColor: borderColor,
        borderRightWidth: 1,
        width: '8.3%',
        textAlign: 'center',
        fontSize: 9,
        bordeLeftColor: 'black',
        borderLeftWidth: 1,
    },
    confirmedCost: {
        borderRightColor: borderColor,
        borderRightWidth: 1,
        width: '8.3%',
        textAlign: 'center',
        fontSize: 9,
        bordeLeftColor: 'black',
        borderLeftWidth: 1,
    },
    outOfContractCost: {
        borderRightColor: borderColor,
        borderRightWidth: 1,
        width: '8.3%',
        textAlign: 'center',
        fontSize: 9,
        bordeLeftColor: 'black',
        borderLeftWidth: 1,
    },
    faranshizCost: {
        borderRightColor: borderColor,
        borderRightWidth: 1,
        width: '8.3%',
        textAlign: 'center',
        fontSize: 9,
        width: '8.3%',
        bordeLeftColor: 'black',
        borderLeftWidth: 1,
    },
    paidValue: {
        borderRightColor: borderColor,
        borderRightWidth: 1,
        width: '8.3%',
        textAlign: 'center',
        fontSize: 9,
        bordeLeftColor: 'black',
        borderLeftWidth: 1,
    },
    description: {
        borderRightColor: borderColor,
        borderRightWidth: 1,
        width: '100',
        textAlign: 'center',
        fontSize: 9,
        bordeLeftColor: 'black',
        borderLeftWidth: 1,
    },
    negative: {
        borderRightColor: borderColor,
        borderRightWidth: 1,
        width: '80',
        textAlign: 'center',
        fontSize: 9,
        bordeLeftColor: 'black',
        borderLeftWidth: 1,
    },
    acceptPrice: {
        borderRightColor: borderColor,
        borderRightWidth: 1,
        width: '80',
        textAlign: 'right',
        fontSize: 9,
        bordeLeftColor: 'black',
        borderLeftWidth: 1,
        color: 'white'

    },
});

function numberWithCommas(x) {
    if (x) {

        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }
}
const InvoiceTableRow = ({ items }) => {
    const rows = items.map(item =>
        <View style={styles.row} key={item.rowNumber}>
            <Text style={styles.acceptPrice}>.{numberWithCommas(item.acceptPrice)}</Text>
            <Text style={styles.negative}>{numberWithCommas(item.negative)}</Text>
            <Text style={styles.description}>{item.description}</Text>
            {/* <Text style={styles.paidValue}>{numberWithCommas(item.paidValue)}</Text> */}
            {/* <Text style={styles.outOfContractCost}>{numberWithCommas(item.outOfContractCost)}</Text> */}
            {/* <Text style={styles.confirmedCost}>{numberWithCommas(item.confirmedCost)}</Text> */}
            <Text style={styles.explainedCost}>{numberWithCommas(item.explainedCost)}</Text>
            <Text style={styles.prescriptionDate}>{item.prescriptionDate}</Text>
            <Text style={styles.patientRelative}>{item.patientRelative}</Text>
            <Text style={styles.codemelli}>{item.nationalId}</Text>
            <Text style={styles.patientName}>{item.patientName}</Text>
            <Text style={styles.lastName}>{item.lastName}</Text>
            <Text style={styles.Nam}>{item.Nam}</Text>
            <Text style={styles.prsCode}>{item.prsCode.toString()}</Text>
            <Text style={styles.rowNumber}>{item.rowNumber.toString()}</Text>
        </View>
    )
    return (<Fragment>{rows}</Fragment>)
};

export default InvoiceTableRow