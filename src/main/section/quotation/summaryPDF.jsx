import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

export default function RenderBrochure({ pdfData }) {
    return (
        <Document>
            {/* Front Page */}
            <Page size="A4" style={front.page}>
                <View style={front.front}>
                    {/* Title and Subtitle */}
                    <Text style={front.h1}>Your Quotation Summary</Text>
                    <Text style={front.h2}>For Your Referencing</Text>

                    {/* Contact Information */}
                    <View style={front.contactInfo}>
                        <Text style={front.p}>By CodifyWeb</Text>
                        <Text style={front.p}>Email: contact@codifyweb.com</Text>
                        <Text style={front.p}>Phone: +123 456 7890</Text>
                        <Text style={front.p}>Website: www.codifyweb.com</Text>
                    </View>
                </View>
            </Page>

            {/* Table of Contents */}
            <Page size="A4" style={toc.page}>
                <View style={toc.container}>
                    <Text style={toc.title}>Table of Contents</Text>
                    <View style={toc.items}>
                        <Text style={toc.item}>1. Introduction</Text>
                        <Text style={toc.item}>2. Quotation Summary</Text>
                        <Text style={toc.item}>3. Additional Products</Text>
                        <Text style={toc.item}>4. Conclusion</Text>
                        <Text style={toc.item}>5. Contact Information</Text>
                    </View>
                </View>
            </Page>

            {/* Introduction */}
            <Page size="A4" style={intro.page}>
                <View style={intro.container}>
                    <Text style={intro.title}>Introduction</Text>
                    <Text style={intro.text}>
                        {/* Introduction text goes here */}
                        Welcome to your quotation summary. This document provides a comprehensive overview of the quotation details and additional information you might need.
                    </Text>
                </View>
            </Page>

            {/* Quotation Summary */}
            <Page size="A4" style={summary.page}>
                <View style={summary.container}>
                    {pdfData.summaryData.map((item, index) => (
                        <View key={index} style={summary.item}>
                            <Text style={summary.question}>{item.question}</Text>
                            {item.details.map((detail, i) => (
                                <View key={i} style={summary.detail}>
                                    <Text style={summary.title}>{detail.title}</Text>
                                    {detail.description && <Text style={summary.description}>{detail.description}</Text>}
                                    {detail.cost && <Text style={summary.cost}>Price: {detail.cost}</Text>}
                                </View>
                            ))}
                        </View>
                    ))}
                </View>
            </Page>

            {/* Additional Products */}
            <Page size="A4" style={additionalProducts.page}>

            </Page>

            {/* Conclusion */}
            <Page size="A4" style={conclusion.page}>
                <View style={conclusion.container}>
                    <Text style={conclusion.title}>Conclusion</Text>
                    <Text style={conclusion.text}>
                        {/* Conclusion text goes here */}
                        Thank you for considering our quotation. If you have any questions or need further information, please do not hesitate to contact us.
                    </Text>
                </View>
            </Page>

            {/* Contact Information */}
            <Page size="A4" style={contact.page}>
                <View style={contact.container}>
                    <Text style={contact.title}>Contact Information</Text>
                    <Text style={contact.text}>For any queries or further assistance, please contact us:</Text>
                    <Text style={contact.p}>Email: contact@codifyweb.com</Text>
                    <Text style={contact.p}>Phone: +123 456 7890</Text>
                    <Text style={contact.p}>Website: www.codifyweb.com</Text>
                </View>
            </Page>
        </Document>
    );
}


const front = StyleSheet.create({
    page: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        height: '100%',
    },
    front: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
    h1: {
        fontSize: 24,
        marginBottom: 12,
        textAlign: 'center',
    },
    h2: {
        fontSize: 16,
        marginBottom: 12,
        textAlign: 'center',
    },
    p: {
        fontSize: 12,
        textAlign: 'center',
    },
    contactInfo: {
        marginTop: 20,
    },
});

const toc = StyleSheet.create({
    page: {
        padding: 20,
    },
    container: {
        flexDirection: 'column',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    items: {
        flexDirection: 'column',
    },
    item: {
        fontSize: 14,
        marginBottom: 5,
    },
});

const intro = StyleSheet.create({
    page: {
        padding: 20,
    },
    container: {
        flexDirection: 'column',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 12,
        lineHeight: 1.5,
    },
});

const summary = StyleSheet.create({
    page: {
        padding: 20,
    },
    container: {
        flexDirection: 'column',
    },
    item: {
        marginBottom: 10,
    },
    question: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    detail: {
        marginLeft: 10,
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
});

const additionalProducts = StyleSheet.create({
    page: {
        padding: 20,
    },
    container: {
        flexDirection: 'column',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    item: {
        marginBottom: 10,
    },
    productTitle: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    productDescription: {
        fontSize: 12,
    },
    productPrice: {
        fontSize: 12,
        fontStyle: 'italic',
    },
});

const conclusion = StyleSheet.create({
    page: {
        padding: 20,
    },
    container: {
        flexDirection: 'column',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 12,
        lineHeight: 1.5,
    },
});

const contact = StyleSheet.create({
    page: {
        padding: 20,
    },
    container: {
        flexDirection: 'column',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 12,
        marginBottom: 10,
    },
    p: {
        fontSize: 12,
    },
});
