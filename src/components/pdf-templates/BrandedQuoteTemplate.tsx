import { Document, Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';
import { FooterRoot } from './FooterRoot';

Font.register({
    family: 'Poppins',
    fonts: [
        {
            src: 'https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJbecmNE.woff2',
            fontWeight: 'normal',
        },
        {
            src: 'https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2',
            fontWeight: 'bold',
        }
    ]
});

const styles = StyleSheet.create({
    page: {
        padding: 40,
        fontFamily: 'Helvetica',
        backgroundColor: '#ffffff',
    },
    headerBand: {
        backgroundColor: '#1e40af',
        padding: 30,
        marginLeft: -40,
        marginRight: -40,
        marginTop: -40,
        marginBottom: 30,
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        color: 'white',
        marginBottom: 20,
    },
    companyInfo: {
        fontSize: 11,
        lineHeight: 1.4,
    },
    quoteNumber: {
        fontSize: 11,
        textAlign: 'right',
        lineHeight: 1.4,
    },
    documentTitle: {
        fontSize: 24,
        color: 'white',
        marginBottom: 5,
    },
    documentNumber: {
        fontSize: 12,
        color: '#e2e8f0',
    },
    infoSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 40,
        padding: 20,
        backgroundColor: '#f8fafc',
        borderRadius: 8,
    },
    clientInfo: {
        flex: 1,
    },
    quoteInfo: {
        flex: 1,
        alignItems: 'flex-end',
    },
    table: {
        marginTop: 20,
        marginBottom: 30,
        borderRadius: 8,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#e2e8f0',
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#e2e8f0',
    },
    tableHeader: {
        backgroundColor: '#1e40af',
        color: 'white',
    },
    tableCell: {
        padding: 12,
        fontSize: 10,
    },
    totalSection: {
        marginTop: 30,
        padding: 25,
        backgroundColor: '#f8fafc',
        borderRadius: 8,
        alignSelf: 'flex-end',
        width: '40%',
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
        fontSize: 11,
    },
    footer: {
        position: 'absolute',
        bottom: 40,
        left: 40,
        right: 40,
        textAlign: 'center',
        color: '#64748b',
        fontSize: 10,
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#e2e8f0',
    },
});

export function BrandedQuoteTemplate({ fileName, client, dataDesignation, total }: { fileName: string, client: any, dataDesignation: any, total: number }) {
    const date = new Date().toLocaleDateString();

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.headerBand}>
                    <View style={styles.headerContent}>
                        <View style={styles.companyInfo}>
                            <Text style={{ fontWeight: 'bold', marginBottom: 8 }}>VOTRE ENTREPRISE</Text>
                            <Text>690394365</Text>
                            <Text>sharaco@gmail.com</Text>
                        </View>
                        <View style={styles.quoteNumber}>
                            <Text style={{ fontWeight: 'bold', marginBottom: 8 }}>DEVIS N°</Text>
                            <Text>#{fileName}</Text>
                            <Text>{date}</Text>
                        </View>
                    </View>
                    <Text style={styles.documentTitle}>Devis</Text>
                </View>

                <View style={styles.infoSection}>
                    <View style={styles.clientInfo}>
                        <Text style={{ fontSize: 12, color: '#1e40af', fontWeight: 'bold', marginBottom: 8 }}>INFORMATIONS CLIENT</Text>
                        <Text style={{ fontSize: 11, marginBottom: 4 }}>{client?.client_name || 'Client'}</Text>
                        <Text style={{ fontSize: 11, marginBottom: 4 }}>{client?.phone_number || ''}</Text>
                        <Text style={{ fontSize: 11, color: '#64748b' }}>{client?.client_email || ''}</Text>
                    </View>
                    <View style={styles.quoteInfo}>
                        <Text style={{ fontSize: 11, marginBottom: 4 }}>Date: {date}</Text>
                        <Text style={{ fontSize: 11, marginBottom: 4 }}>Validité: 30 jours</Text>
                    </View>
                </View>

                <View style={styles.table}>
                    <View style={[styles.tableRow, styles.tableHeader]}>
                        <Text style={[styles.tableCell, { flex: 2, color: 'white' }]}>Description</Text>
                        <Text style={[styles.tableCell, { flex: 1, color: 'white' }]}>Quantité</Text>
                        <Text style={[styles.tableCell, { flex: 1, color: 'white' }]}>Prix unitaire</Text>
                        <Text style={[styles.tableCell, { flex: 1, color: 'white' }]}>Total</Text>
                    </View>

                    {dataDesignation.map((item: any, index: number) => (
                        <View key={index} style={[styles.tableRow, { backgroundColor: index % 2 === 0 ? '#f8fafc' : 'white' }]}>
                            <Text style={[styles.tableCell, { flex: 2 }]}>{item.description}</Text>
                            <Text style={[styles.tableCell, { flex: 1 }]}>{item.quantity}</Text>
                            <Text style={[styles.tableCell, { flex: 1 }]}>{item.unitPrice}€</Text>
                            <Text style={[styles.tableCell, { flex: 1 }]}>{item.total}€</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.totalSection}>
                    <View style={styles.totalRow}>
                        <Text>Sous-total HT</Text>
                        <Text>{total}€</Text>
                    </View>
                    <View style={styles.totalRow}>
                        <Text>TVA (20%)</Text>
                        <Text>{(total * 0.2).toFixed(2)}€</Text>
                    </View>
                    <View style={[styles.totalRow, { marginTop: 15, paddingTop: 15, borderTopWidth: 1, borderTopColor: '#e2e8f0' }]}>
                        <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Total TTC</Text>
                        <Text style={{ fontSize: 13, fontWeight: 'bold' }}>{(total * 1.2).toFixed(2)}€</Text>
                    </View>
                </View>

                <FooterRoot />
            </Page>
        </Document>
    );
} 