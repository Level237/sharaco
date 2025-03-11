import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

Font.register({
    family: 'Helvetica',
    fonts: [
        {
            src: 'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
            fontWeight: 'normal',
        },
        {
            src: 'https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2',
            fontWeight: 'bold',
        },
    ],
});

const styles = StyleSheet.create({
    page: {
        padding: 40,
        fontFamily: 'Helvetica',
        backgroundColor: '#ffffff',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 40,
        borderBottom: 1,
        paddingBottom: 20,
        borderBottomColor: '#e5e7eb',
    },
    companyInfo: {
        width: '50%',
    },
    companyName: {
        fontSize: 20,
        marginBottom: 10,
        color: '#1f2937',
    },
    companyDetails: {
        fontSize: 9,
        color: '#6b7280',
        lineHeight: 1.5,
    },
    quoteInfo: {
        alignItems: 'flex-end',
    },
    quoteTitle: {
        fontSize: 24,
        color: '#2563eb',
        marginBottom: 10,
    },
    quoteDetails: {
        fontSize: 10,
        color: '#6b7280',
        lineHeight: 1.5,
    },
    twoColumnSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    column: {
        width: '45%',
    },
    sectionTitle: {
        fontSize: 12,
        color: '#1f2937',
        marginBottom: 8,
        fontWeight: 'bold',
    },
    clientInfo: {
        fontSize: 10,
        color: '#4b5563',
        lineHeight: 1.6,
    },
    table: {
        marginTop: 30,
        color: "white"
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#f3f4f6',
        padding: 8,
        color: "white",
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb',
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb',
        padding: 8,
    },
    tableCell: {
        fontSize: 10,
        color: '#4b5563',
    },
    summarySection: {
        marginTop: 30,
        alignItems: 'flex-end',
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 5,
    },
    summaryLabel: {
        width: 100,
        textAlign: 'right',
        paddingRight: 10,
        fontSize: 10,
        color: '#6b7280',
    },
    summaryValue: {
        width: 100,
        textAlign: 'right',
        fontSize: 10,
        color: '#1f2937',
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10,
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#e5e7eb',
    },
    footer: {
        position: 'absolute',
        bottom: 30,
        left: 40,
        right: 40,
        textAlign: 'center',
        color: '#9ca3af',
        fontSize: 9,
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#e5e7eb',
    },
});

export function SimpleQuoteTemplate({ fileName, client, dataDesignation, total, documentSettings }: { fileName: string, client: any, dataDesignation: any, total: number, documentSettings: any }) {
    const date = new Date().toLocaleDateString('fr-FR');
    const dueDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('fr-FR');

    // Informations par défaut
    const defaultCompany = {
        name: "VOTRE ENTREPRISE",
        address: "123 Rue du Commerce",
        city: "75001 Paris",
        phone: "+33 1 23 45 67 89",
        email: "contact@votreentreprise.fr",
        website: "www.votreentreprise.fr",
        siret: "123 456 789 00001",
        tva: "FR 12 345 678 901"
    };

    const defaultClient = {
        name: client?.name || "Client par défaut",
        address: client?.address || "456 Rue du Client",
        city: client?.city || "75002 Paris",
        email: client?.email || "client@email.com",
    };

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.headerContainer}>
                    <View style={styles.companyInfo}>
                        <Text style={styles.companyName}>{defaultCompany.name}</Text>
                        <Text style={styles.companyDetails}>{defaultCompany.address}</Text>
                        <Text style={styles.companyDetails}>{defaultCompany.city}</Text>
                        <Text style={styles.companyDetails}>{defaultCompany.phone}</Text>
                        <Text style={styles.companyDetails}>{defaultCompany.email}</Text>
                    </View>
                    <View style={styles.quoteInfo}>
                        <Text style={styles.quoteTitle}>DEVIS #{1}</Text>
                        <Text style={styles.quoteDetails}>Date: {date}</Text>
                        <Text style={styles.quoteDetails}>Validité: {dueDate}</Text>
                    </View>
                </View>

                <View style={styles.twoColumnSection}>
                    <View style={styles.column}>
                        <Text style={styles.sectionTitle}>FACTURER À</Text>
                        <Text style={styles.clientInfo}>{defaultClient.name}</Text>
                        <Text style={styles.clientInfo}>{defaultClient.address}</Text>
                        <Text style={styles.clientInfo}>{defaultClient.city}</Text>
                        <Text style={styles.clientInfo}>{defaultClient.email}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.sectionTitle}>INFORMATIONS</Text>
                        <Text style={styles.clientInfo}>SIRET: {defaultCompany.siret}</Text>
                        <Text style={styles.clientInfo}>TVA: {defaultCompany.tva}</Text>
                    </View>
                </View>

                <View style={styles.table}>
                    <View style={[styles.tableHeader, { backgroundColor: documentSettings?.backgroundColor || '#1e40af', color: "white" }]}>
                        <Text style={[styles.tableCell, { flex: 2 }]}>Description</Text>
                        <Text style={[styles.tableCell, { flex: 1 }]}>Quantité</Text>
                        <Text style={[styles.tableCell, { flex: 1 }]}>Prix unitaire</Text>
                        <Text style={[styles.tableCell, { flex: 1 }]}>Total HT</Text>
                    </View>

                    {dataDesignation.map((item: any, index: number) => (
                        <View key={index} style={styles.tableRow}>
                            <Text style={[styles.tableCell, { flex: 2 }]}>{item.description}</Text>
                            <Text style={[styles.tableCell, { flex: 1 }]}>{item.quantity}</Text>
                            <Text style={[styles.tableCell, { flex: 1 }]}>{item.unitPrice}€</Text>
                            <Text style={[styles.tableCell, { flex: 1 }]}>{item.total}€</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.summarySection}>
                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryLabel}>Sous-total HT:</Text>
                        <Text style={styles.summaryValue}>{total}€</Text>
                    </View>
                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryLabel}>TVA (20%):</Text>
                        <Text style={styles.summaryValue}>{(total * 0.2).toFixed(2)}€</Text>
                    </View>
                    <View style={styles.totalRow}>
                        <Text style={[styles.summaryLabel, { fontWeight: 'bold' }]}>Total TTC:</Text>
                        <Text style={[styles.summaryValue, { fontWeight: 'bold' }]}>{(total * 1.2).toFixed(2)}€</Text>
                    </View>
                </View>

                <Text style={styles.footer}>
                    {defaultCompany.name} - SIRET: {defaultCompany.siret} - TVA: {defaultCompany.tva}{'\n'}
                    Ce devis est valable 30 jours à compter de sa date d'émission. Merci de votre confiance.
                </Text>
            </Page>
        </Document>
    );
} 