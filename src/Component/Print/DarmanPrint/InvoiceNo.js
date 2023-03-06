import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    invoiceNoContainer: {
        flexDirection: 'row',
        marginTop: -75,
        marginRight: -63,
        justifyContent: 'flex-end'
    },
    invoiceDateContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: -40,
        marginRight: -50,
        marginBottom: 100,

    },
    invoicePacketContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: -70,
        marginRight: -65,
        marginBottom: 50,

    },
    invoiceDate: {
        fontSize: 9,
        // fontStyle: 'bold',
    },
    label: {
        width: 100,
        fontSize: 9
    }

});


const InvoiceNo = ({ pageNumber,packetNumber,packetDate }) => (
    <Fragment>
        <View style={styles.invoiceNoContainer}>
            <Text style={styles.invoiceDate}>{pageNumber}</Text>
            <Text style={styles.label}>  شماره صفحه:  </Text>
        </View >
        <View style={styles.invoiceDateContainer}>
            <Text style={styles.invoiceDate} >{packetDate}</Text>
            <Text style={styles.label}>  تاریخ تهیه گزارش:  </Text>
        </View >
        <View style={styles.invoicePacketContainer}>
            <Text style={styles.invoiceDate} >{packetNumber}</Text>
            <Text style={styles.label}>  شماره بسته:  </Text>
        </View >
    </Fragment>
);

export default InvoiceNo