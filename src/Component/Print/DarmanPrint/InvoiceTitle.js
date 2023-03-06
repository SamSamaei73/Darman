import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({

    titleContainer: {
        flexDirection: 'row',
        marginTop: 23,
    },
    reportTitle: {
        color: '#001e64',
        letterSpacing: 0,
        fontSize: 15,
        textAlign: 'center',
        marginLeft: 255,
    }
});


const InvoiceTitle = ({ title }) => (
    <View style={styles.titleContainer}>
        <Text style={styles.reportTitle}>{title}</Text>
    </View>
);

export default InvoiceTitle