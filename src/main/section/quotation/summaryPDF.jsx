import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Link } from '@react-pdf/renderer';
import codifyweb from "./assets/codifyweb.png";
import qrPage from "./assets/qrPage.png";
import qrWhatapps from "./assets/qrWhatapps.png";
import frontImg from "./assets/front.jpeg";
import speedTest from "./assets/speedtest.png";

export default function RenderBrochure({ pdfData }) {
    return (
        <Document>
            {/* Front Page */}
            <Page size="A4" style={front.page}>
                <View style={front.top}>
                    <Link src="https://uat.wilfredcty.com">
                        <Image src={codifyweb} style={{ width: '44', height: '44' }} /> {/* Adjust size as needed */}
                    </Link> 
                    <Link src="https://uat.wilfredcty.com" style={front.linkText}>
                        <Text style={front.p}>CodifyWeb</Text>  
                    </Link>
                </View>
                <View style={front.front}>
                    <View>
                        <Image src={frontImg} style={{width: '300', height: '300'}} />
                    </View>
                    {/* Title and Subtitle */}
                    <View style={front.title}>
                        <Text style={front.h1}>Website Quotation Summary</Text>
                        <Text style={front.h2}>Based On Your Needs</Text>
                    </View>

                    {/* Contact Information */}
                    <View style={front.contactInfo}>
                        <View>
                            <Text style={front.p}>From: </Text>
                        </View>
                        <View>
                            <Text style={front.p}>CodifyWeb</Text>
                            <Link src="mailto:webapp.tc@gmail.com" style={front.linkText}>
                                <Text style={front.p}>webapp-tc@gmail.com</Text>
                            </Link>
                            <Link src="https://uat.wilfredcty.com" style={front.linkText}>
                                <Text style={front.p}>https://www.codifyweb.com</Text>
                            </Link>
                        </View>
                        <View style={front.qr}>
                            <View>
                                <Link src="https://uat.wilfredcty.com">
                                    <Image src={qrPage} style={{ width: 60, height: 60 }} /> {/* Adjust size as needed */}
                                </Link>
                                <Text style={front.p}>CodifyWeb</Text>
                            </View>
                            <View>
                                <Link src="https://wa.me/+601121823390">
                                    <Image src={qrWhatapps} style={{ width: 60, height: 60 }} /> {/* Adjust size as needed */}
                                </Link>
                                <Text style={front.p}>WhatApps</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Page>

            {/* Table of Contents */}
            <Page size="A4" style={toc.page}>
                <View style={front.top}>
                    <Link src="https://uat.wilfredcty.com">
                        <Image src={codifyweb} style={{ width: '44', height: '44' }} /> {/* Adjust size as needed */}
                    </Link> 
                    <Link src="https://uat.wilfredcty.com" style={front.linkText}>
                        <Text style={front.p}>CodifyWeb</Text>  
                    </Link>
                </View>
                <View style={toc.container}>
                    <Text style={toc.title}>Table of Contents</Text>
                    <View style={toc.items}>
                        <Link src="#intro" style={toc.tocItem}>
                            <Text>1. Introduction</Text>
                            <Text>1</Text>
                        </Link>
                        <Link src="#summary" style={toc.tocItem}>
                            <Text>2. Quotation Summary</Text>
                            <Text>2</Text>
                        </Link>
                        <Link src="#conclusion" style={toc.tocItem}>
                            <Text>3. Conclusion</Text>
                            <Text>3</Text>
                        </Link>
                        <Link src="#extras" style={toc.tocItem}>
                            <Text>4. Extras Products</Text>
                            <Text>4</Text>
                        </Link>
                    </View>
                </View>
                <View style={toc.bottom}>
                    <Link src="https://uat.wilfredcty.com" style={front.linkText}>
                        <Text style={front.p}>Codify Web 2024. All rights reserved.</Text>  
                    </Link>
                </View>
            </Page>

            {/* Introduction */}
            <Page size="A4" style={intro.page} id="intro">
                <View style={front.top}>
                    <Link src="https://uat.wilfredcty.com">
                        <Image src={codifyweb} style={{ width: '44', height: '44' }} /> {/* Adjust size as needed */}
                    </Link> 
                    <Link src="https://uat.wilfredcty.com" style={front.linkText}>
                        <Text style={front.p}>CodifyWeb</Text>  
                    </Link>
                </View>
                <View style={intro.container}>
                    <View>
                        <Text style={intro.title}>Introduction</Text>
                        <Text style={intro.text}>
                            {/* Introduction text goes here */}
                            Welcome to <Text style={intro.highlight}>Codify Web</Text>, where we specialize in delivering <Text style={intro.highlight}>Top-Notch Web Development</Text> and <Text style={intro.highlight}>Digital Solutions</Text>. 
                            {'\n'}
                            We are pleased to present this <Text style={intro.highlight}>Quotation Summary</Text>, which provides a detailed outline of our proposed Solutions and Associated Costs tailored to your specific Needs. 
                            {'\n'}
                            Our Aim is to give you a Clear and Comprehensive understanding of the project to support your Decision-Making process.
                        </Text>
                    </View>
                    <View style={intro.question}>
                        <View style={intro.know}>
                            <Text style={intro.title}>
                                Did You Know ?
                            </Text>
                            <Text style={intro.text}>
                                Our products are designed to run <Text style={intro.highlight}>Smoothly</Text> and <Text style={intro.highlight}>Efficiently</Text>?
                                {'\n'}
                                For example, our Landing Page are Optimized to be <Text style={intro.highlight}>Fast</Text> and <Text style={intro.highlight}>Lightweight</Text>, ensuring a <Text style={intro.highlight}>Seamless User Experience</Text>.
                            </Text>
                        </View>
                        <Image src={speedTest} style={intro.speedTestImage} /> {/* Add the speed test image here */}
                    </View>
                    <View>
                        <Text style={intro.title}>
                            Our Benefits
                        </Text>
                        <Text style={intro.text}>
                            Unlike many others, We build our products from <Text style={intro.highlight}>Scratch with Clean Code</Text>. Optimization each Action Manually.
                            {'\n'}
                            We <Text style={intro.highlight}>DON'T</Text> use WordPress, Drupal, or Any other CMS.
                            {'\n'}
                            Which means our projects are less likely to be <Text style={intro.highlight}>Bogged Down</Text> by <Text style={intro.highlight}>Plugins</Text> and <Text style={intro.highlight}>Bloat</Text>.
                        </Text>
                        <Text style={intro.choose}>
                            By <Text style={intro.highlight}>Choosing Us</Text>, you can Explore the Benefits of a tailored solution that prioritizes <Text style={intro.highlight}>Speed</Text> and <Text style={intro.highlight}>Efficiency</Text>.
                            {'\n'}
                            We are committed to delivering <Text style={intro.highlight}>High-Quality</Text>, <Text style={intro.highlight}>High-Performance</Text> results for your Needs.
                        </Text>
                    </View>
                </View>
                <View style={intro.bottom}>
                    <Link src="https://uat.wilfredcty.com" style={front.linkText}>
                        <Text style={front.p}>Codify Web 2024. All rights reserved.</Text>
                    </Link>
                    <Text style={intro.text}>1</Text>  
                </View>
            </Page>

            {/* Quotation Summary */}
            <Page size="A4" style={summary.page} id="summary">
                <View style={front.top}>
                    <Link src="https://uat.wilfredcty.com">
                        <Image src={codifyweb} style={{ width: '44', height: '44' }} /> {/* Adjust size as needed */}
                    </Link> 
                    <Link src="https://uat.wilfredcty.com" style={front.linkText}>
                        <Text style={front.p}>CodifyWeb</Text>  
                    </Link>
                </View>
                <View style={summary.container}>
                    <Text style={intro.title}>Quotation Summary</Text>
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
                    <View>
                        <Text style={summary.price}>Estimation Total Price: {pdfData.totalPrice}</Text>
                        <View style={summary.dottedLine} /> {/* Bottom dotted line */}
                        <Text style={intro.title}>Uncertainty:</Text>
                        {pdfData.uncertainty.map((item, index) => (
                            <View key={index} style={summary.uncertainty}>
                                <Text style={summary.title}>{item.title}: </Text>
                                <Text style={summary.title}>{item.price}</Text>
                            </View>
                        ))}
                        <Text style={intro.description}>Price May change and we will Notify you</Text>
                    </View>
                </View>
                <View style={intro.bottom}>
                    <Link src="https://uat.wilfredcty.com" style={front.linkText}>
                        <Text style={front.p}>Codify Web 2024. All rights reserved.</Text>
                    </Link>
                    <Text style={intro.text}>2</Text>  
                </View>
            </Page>

            {/* Conclusion */}
            <Page size="A4" style={conclusion.page} id="conclusion">
                <View style={front.top}>
                    <Link src="https://uat.wilfredcty.com">
                        <Image src={codifyweb} style={{ width: '44', height: '44' }} /> {/* Adjust size as needed */}
                    </Link> 
                    <Link src="https://uat.wilfredcty.com" style={front.linkText}>
                        <Text style={front.p}>CodifyWeb</Text>  
                    </Link>
                </View>
                <View style={conclusion.container}>
                    <Text style={conclusion.title}>Summary & Contact</Text>
                        <Text style={conclusion.text}>
                            At Codify Web, our mission is to deliver innovative web solutions that drive success and exceed expectations. 
                            {'\n'}We are dedicated to providing exceptional service and value to our clients.
                        </Text>
                        <Text style={conclusion.text}>
                            Thank you once again for considering our quotation. We are excited about the opportunity to work with you.
                            {'\n'}
                            To move forward, please follow these steps:
                            {'\n'}
                            1. Review the details and let us know if you have any questions.
                            {'\n'}
                            2. Schedule a follow-up meeting to finalize the project scope.
                            {'\n'}
                            3. Finalize, and Kick-Start the Project!
                            {'\n\n'}
                            Our team is ready to begin work as soon as we receive your confirmation. Please reach out to us to discuss any final details or to get started on your project.
                        </Text>
                </View>
                <View style={conclusion.container}>
                    <Text style={conclusion.title}>Contact Information</Text>
                    <Text style={conclusion.text}>For any queries or further assistance, please contact us:</Text>
                    <Text style={conclusion.p}>Email: webapp-tc@gmail.com</Text>
                    <Text style={conclusion.p}>Website: https://uat.wilfredcty.com</Text>
                </View>
                <View style={intro.bottom}>
                    <Link src="https://uat.wilfredcty.com" style={front.linkText}>
                        <Text style={front.p}>Codify Web 2024. All rights reserved.</Text>
                    </Link>
                    <Text style={intro.text}>3</Text>  
                </View>
            </Page>

            {/* Additional Products */}
            <Page size="A4" style={additionalProducts.page} id="extras">

            </Page>
        </Document>
    );
}


const front = StyleSheet.create({
    page: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#080808',
        height: '100%',
        position: 'relative', // Ensure the page has relative positioning for absolute children
    },
    top: {
        position: 'absolute', // Use absolute positioning to place it at the top right
        top: 12, // Adjust as needed
        right: 12, // Adjust as needed
        color: '#F5F5F5',
        flexDirection: 'row', // Align items horizontally
        alignItems: 'center',
    },
    front: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        color: '#F5F5F5',
        gap: 20,
    },
    title: {
        width: '100%',
        backgroundColor: '#1a1a1a',
        padding: 20,
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
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
        padding: 28,
        width: '100%',
        gap: 28,
        justifyContent: 'center',
        alignItems: 'center',
    },
    qr: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        gap: 20,
        width: '50%',
        padding: 12,
    },
    linkText: {
        textDecoration: 'none', // Default link styling might be applied by the PDF viewer
        color: '#F5F5F5', // Ensure the link text color matches
    }
});

const toc = StyleSheet.create({
    page: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#080808',
        height: '100%',
        position: 'relative',
    },
    container: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 20,
        width: '100%',
        gap: 28,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#F5F5F5',
        marginBottom: 10,
    },
    items: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '100%',
        gap: 20,
    },
    item: {
        fontSize: 14,
        marginBottom: 5,
    },
    tocItem: {
        textDecoration: 'none',
        color: '#F5F5F5',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginVertical: 2, // Add vertical margin for spacing
    },
    bottom: {
        position: 'absolute',
        bottom: 20, // Adjust as needed
        left: 20,
    },
});

const intro = StyleSheet.create({
    page: {
        padding: 20,
        position: 'relative',
        backgroundColor: '#080808',
    },
    container: {
        flexDirection: 'column',
        paddingTop: 60,
        gap: 32,
    },
    question:{
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        gap: 12,
    },
    know:{
        width: '60%',
    },
    title: {
        fontSize: 18,
        color: '#F5F5F5',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        color: '#cdcdcd',
        fontSize: 12,
        lineHeight: 1.5,
        paddingTop: 6,
    },
    highlight: {
        color: '#F5F5F5',  // Highlight color
        fontWeight: 'bold', // Optional: to make the highlighted text stand out more
    },
    choose: {
        color: '#cdcdcd',
        fontSize: 12,
        lineHeight: 1.5,
        paddingTop: 12,
    },
    speedTestImage: {
        width: 300,
        height: 240,
        marginVertical: 10,
    },
    bottom: {
        position: 'absolute',
        bottom: 20, // Adjust as needed
        left: 20,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
});

const summary = StyleSheet.create({
    page: {
        padding: 20,
        position: 'relative',
        backgroundColor: '#080808',
    },
    container: {
        flexDirection: 'column',
        gap: 14,
    },
    item: {
        marginBottom: 10,
    },
    question: {
        fontSize: 11,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#F5F5F5',
    },
    detail: {
        marginLeft: 11,
        color: '#F5F5F5',
    },
    title: {
        fontSize: 9,
        fontWeight: 'bold',
        color: '#F5F5F5',
    },
    description: {
        fontSize: 9,
        color: '#cdcdcd',
    },
    cost: {
        fontSize: 9,
        fontStyle: 'italic',
        color: '#F5F5F5',
        paddingTop: 4,
    },
    price:{
        fontSize: 13,
        color: '#F5F5F5',
    },
    dottedLine: {
        borderBottomWidth: 1,
        borderBottomColor: '#F5F5F5',
        borderStyle: 'dotted',
        marginVertical: 2, // Adjust spacing between lines and text
    },
    uncertainty: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        textAlign:'left',
        width: '100%',
    }
});

const additionalProducts = StyleSheet.create({
    page: {
        color: '#F5F5F5',
        padding: 20,
        position: 'relative',
        backgroundColor: '#080808',
    },
    container: {
        flexDirection: 'column',
        paddingTop: 60,
        gap: 20,
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
        color: '#F5F5F5',
        padding: 20,
        position: 'relative',
        backgroundColor: '#080808',
    },
    container: {
        flexDirection: 'column',
        paddingTop: 60,
        gap: 20,
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