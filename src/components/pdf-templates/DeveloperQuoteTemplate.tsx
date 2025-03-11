import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import { FooterRoot } from './FooterRoot';

// Utilisons Roboto qui est plus stable avec react-pdf
Font.register({
    family: 'Roboto',
    fonts: [
        {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf',
            fontWeight: 'normal',
        },
        {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf',
            fontWeight: 'bold',
        },
    ],
});

const createStyles = (documentSettings: any) => StyleSheet.create({
    page: {
        padding: 40,
        fontFamily: 'Roboto',
        backgroundColor: '#ffffff',
        color: '#1f2937',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 60,
        paddingBottom: 20,
        borderBottom: 2,
        borderBottomColor: documentSettings?.primaryColor || '#3b82f6',
    },
    companySection: {
        marginBottom: 40,
    },
    companyName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#3b82f6',
    },
    companyDetails: {
        fontSize: 10,
        color: '#6b7280',
        lineHeight: 1.6,
    },
    quoteInfo: {
        alignItems: 'flex-end',
    },
    quoteTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#3b82f6',
    },
    quoteNumber: {
        fontSize: 12,
        color: '#6b7280',
    },
    clientSection: {
        marginBottom: 40,
        padding: 24,
        backgroundColor: '#f8fafc',
        borderRadius: 12,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#3b82f6',
    },
    clientInfo: {
        fontSize: 11,
        lineHeight: 1.6,
    },
    table: {
        marginBottom: 40,
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#3b82f6',
        borderRadius: 8,
        padding: 12,
        marginBottom: 8,
    },
    tableHeaderText: {
        color: '#ffffff',
        fontSize: 11,
        fontWeight: 'bold',
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb',
        padding: 12,
    },
    tableCell: {
        fontSize: 11,
        color: '#4b5563',
    },
    totalSection: {
        alignSelf: 'flex-end',
        width: '40%',
        marginTop: 20,
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        fontSize: 11,
    },
    totalRowBold: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderTopWidth: 2,
        borderTopColor: '#3b82f6',
        marginTop: 8,
    },
    totalLabel: {
        fontWeight: 'bold',
        color: '#1f2937',
    },
    totalAmount: {
        fontWeight: 'bold',
        color: '#3b82f6',
    },
    footer: {
        position: 'absolute',
        bottom: 30,
        left: 40,
        right: 40,
        textAlign: 'center',
        color: '#6b7280',
        fontSize: 10,
        paddingTop: 20,
        borderTopWidth: 1,
        borderTopColor: '#e5e7eb',
    },
});

export function DeveloperQuoteTemplate({ fileName, client, dataDesignation, total, documentSettings }: { fileName: string, client: any, dataDesignation: any, total: number, documentSettings: any }) {
    const date = new Date().toLocaleDateString();
    const styles = createStyles(documentSettings);

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={[styles.header, { borderBottomColor: documentSettings?.backgroundColor || '#3b82f6' }]}>
                    <View style={styles.companySection}>
                        <Text style={[styles.companyName, { color: documentSettings?.backgroundColor || '#3b82f6' }]}>VOTRE ENTREPRISE</Text>
                        <Text style={[styles.companyDetails, { color: documentSettings?.backgroundColor || '#3b82f6' }]}>690394365</Text>
                        <Text style={[styles.companyDetails, { color: documentSettings?.backgroundColor || '#3b82f6' }]}>sharaco@gmail.com</Text>
                        <Text style={[styles.companyDetails, { color: documentSettings?.backgroundColor || '#3b82f6' }]}>Paris, France</Text>
                    </View>
                    <View style={styles.quoteInfo}>
                        <Text style={[styles.quoteTitle, { color: documentSettings?.backgroundColor || '#3b82f6' }]}>DEVIS</Text>
                        <Text style={[styles.quoteNumber, { color: documentSettings?.backgroundColor || '#3b82f6' }]}>#{fileName}</Text>
                        <Text style={[styles.quoteNumber, { color: documentSettings?.backgroundColor || '#3b82f6' }]}>{date}</Text>
                    </View>
                </View>

                <View style={styles.clientSection}>
                    <Text style={[styles.sectionTitle, { color: documentSettings?.backgroundColor || '#3b82f6' }]}>INFORMATIONS CLIENT</Text>
                    <Text style={[styles.clientInfo, { color: documentSettings?.backgroundColor || '#3b82f6' }]}>{client?.client_name || 'Client'}</Text>
                    <Text style={[styles.clientInfo, { color: documentSettings?.backgroundColor || '#3b82f6' }]}>{client?.client_email || ''}</Text>
                    <Text style={[styles.clientInfo, { color: documentSettings?.backgroundColor || '#3b82f6' }]}>{client?.phone_number || ''}</Text>
                </View>

                <View style={styles.table}>
                    <View style={[styles.tableHeader, { backgroundColor: documentSettings?.backgroundColor || '#3b82f6' }]}>
                        <Text style={[styles.tableHeaderText, { flex: 2 }]}>Description</Text>
                        <Text style={[styles.tableHeaderText, { flex: 1 }]}>Quantité</Text>
                        <Text style={[styles.tableHeaderText, { flex: 1 }]}>Prix</Text>
                        <Text style={[styles.tableHeaderText, { flex: 1 }]}>Total</Text>
                    </View>

                    {dataDesignation.map((item: any, index: number) => (
                        <View key={index} style={styles.tableRow}>
                            <Text style={[styles.tableCell, { flex: 2 }]}>{item.title}</Text>
                            <Text style={[styles.tableCell, { flex: 1 }]}>{item.quantity}</Text>
                            <Text style={[styles.tableCell, { flex: 1 }]}>{item.price}€</Text>
                            <Text style={[styles.tableCell, { flex: 1 }]}>{item.total}€</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.totalSection}>
                    <View style={styles.totalRow}>
                        <Text style={[styles.totalLabel, { color: documentSettings?.backgroundColor || '#3b82f6' }]}>Sous-total</Text>
                        <Text>{total}€</Text>
                    </View>
                    {documentSettings?.includeVAT && (
                        <View style={styles.totalRow}>
                            <Text style={[styles.totalLabel, { color: documentSettings?.backgroundColor || '#3b82f6' }]}>TVA ({documentSettings.vatRate}%)</Text>
                            <Text style={[styles.totalAmount, { color: documentSettings?.backgroundColor || '#3b82f6' }]}>{(total * documentSettings.vatRate / 100).toFixed(2)}€</Text>
                        </View>
                    )}
                    <View style={[styles.totalRowBold, { borderTopColor: documentSettings?.backgroundColor || '#3b82f6' }]}>
                        <Text style={[styles.totalLabel, { color: documentSettings?.backgroundColor || '#3b82f6' }]}>TOTAL {documentSettings?.includeVAT ? 'TTC' : 'HT'}</Text>
                        <Text style={[styles.totalAmount, { color: documentSettings?.backgroundColor || '#3b82f6' }]}>
                            {documentSettings?.includeVAT ?
                                (total * (1 + documentSettings.vatRate / 100)).toFixed(2) :
                                total.toFixed(2)}€
                        </Text>
                    </View>
                </View>

                <View style={styles.footer}>
                    <Text>Merci de votre confiance</Text>
                </View>
            </Page>
        </Document>
    );
}