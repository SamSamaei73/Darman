import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 0
    },
    billTo: {
        marginTop: -10,
        marginLeft: 5,
        paddingBottom: 3,
        textAlign: 'center'
        //  fontFamily: 'Helvetica-Oblique'
    },
});


const BillTo = ({ invoice }) => (
    <View style={styles.headerContainer}>
        <Text style={styles.billTo}>لیست خسارت اولیه ارسال به بیمه</Text>
        {/* <Text>{invoice.company}</Text> */}
        {/* <Text>{invoice.address}</Text> */}
        {/* <Text>{invoice.email}</Text> */}
    </View>
);

export default BillTo