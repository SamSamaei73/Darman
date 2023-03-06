import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import InvoiceTableHeader from './InvoiceTableHeader'
import InvoiceTableRow from './InvoiceTableRow'
import InvoiceTableBlankSpace from './InvoiceTableBlankSpace'
import InvoiceTableFooter from './InvoiceTableFooter'

const tableRowsCount = 11;

const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 24,
        borderWidth: 2,
        borderColor: '#6a6a6a',
        width: 830,
        marginLeft: -40,
    },
});
function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}
const InvoiceItemsTable = ({ items, totalSum, lastPage }) => (
    <View style={styles.tableContainer}>
        <InvoiceTableHeader />
        <InvoiceTableRow items={items} />
        {/* <InvoiceTableBlankSpace rowsCount={tableRowsCount - invoice.items.length} /> */}
        {(lastPage) ? <InvoiceTableFooter totalSum={numberWithCommas(totalSum)} /> : null}
    </View>
);

export default InvoiceItemsTable