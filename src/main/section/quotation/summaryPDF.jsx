import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

export default function RenderBrochure({ pdfData }) {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.heading}>Summary of Your Quotation</Text>
                    {pdfData.summaryData.map((item, index) => (
                        <View key={index} style={styles.item}>
                            <Text style={styles.question}>{item.question}</Text>
                            {item.details.map((detail, i) => (
                                <View key={i} style={styles.detail}>
                                    <Text style={styles.title}>{detail.title}</Text>
                                    {detail.description && <Text style={styles.description}>{detail.description}</Text>}
                                    {detail.cost && <Text style={styles.cost}>Price: {detail.cost}</Text>}
                                </View>
                            ))}
                        </View>
                    ))}
                </View>

                {/* Total Price Section */}
                <View style={styles.totalPriceSection}>
                    <Text style={styles.totalPriceText}>Total Price: {pdfData.totalPrice}</Text>
                    <Text style={styles.italicText}>Estimation of cost</Text>
                </View>

                {/* Uncertainty Section */}
                {pdfData.uncertainty.length > 0 && (
                    <View style={styles.uncertaintySection}>
                        <Text style={styles.uncertaintyTitle}>Uncertainty:</Text>
                        <Text style={styles.italicText}>Price might change with Notice</Text>
                        {pdfData.uncertainty.map((item, index) => (
                            <View key={index} style={styles.uncertaintyItem}>
                                <Text style={styles.question}>{item.question}:</Text>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.description}>{item.description}</Text>
                                <Text style={styles.cost}>Price: {item.price}</Text>
                            </View>
                        ))}
                    </View>
                )}
            </Page>
        </Document>
    );
}

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4',
        padding: 10,
    },
    section: {
        marginBottom: 10,
    },
    heading: {
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center',
    },
    item: {
        marginBottom: 5,
    },
    question: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    detail: {
        marginLeft: 10,
        marginBottom: 5,
    },
    title: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 12,
    },
    cost: {
        fontSize: 12,
        fontStyle: 'italic',
    },
    totalPriceSection: {
        marginTop: 10,
        borderTop: '1px solid #000',
        paddingTop: 10,
    },
    totalPriceText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    italicText: {
        fontSize: 12,
        fontStyle: 'italic',
    },
    uncertaintySection: {
        marginTop: 10,
        paddingTop: 10,
        borderTop: '1px solid #000',
    },
    uncertaintyTitle: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 5,
    },
    uncertaintyItem: {
        marginLeft: 10,
        marginBottom: 5,
    },
});
