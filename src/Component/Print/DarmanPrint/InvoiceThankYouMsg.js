import React from 'react';
import { Text, Font, View, StyleSheet } from '@react-pdf/renderer';


const styles = StyleSheet.create({

    titleContainer: {
        flexDirection: 'row',
        marginTop: 12,

    },
    reportTitle: {
        fontFamily: 'vazirfont',
        fontSize: 12,
        textAlign: 'center',
        textTransform: 'uppercase',
    }
});



const InvoiceThankYouMsg = () => (
    <View style={styles.titleContainer}>
        <Text style={styles.reportTitle}></Text>
    </View>
);

export default InvoiceThankYouMsg