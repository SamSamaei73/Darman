import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = 'black'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        fontSize: 12,
        backgroundColor: '#6a6a6a',
        color: "#fff"
        // fontStyle: 'bold',
    },
    description: {
        width: '85%',
        textAlign: 'right',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        paddingRight: 8,
    },
    total: {
        width: '15%',
        textAlign: 'right',
        paddingRight: 8,

    },
});


const InvoiceTableFooter = ({ totalSum }) => {
    // const total = items.map(item => item.paidValue)
    //     .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    return (
        <View style={styles.row}>
            <Text style={styles.description}>{totalSum}</Text>
            <Text style={styles.total}>مجموع</Text>
        </View>
    )
};

export default InvoiceTableFooter