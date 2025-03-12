import { Document, Page, Text, View, StyleSheet, Image, Font, Svg, Polygon, Path } from '@react-pdf/renderer';
import logo from "/logo.png";
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


// Définir les styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: "white",
    },
    container: {
        position: "relative",
        width: "100%",
        height: "100%",
    },
    headerBackground: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
    },
    invoiceTitle: {
        position: "absolute",
        top: 40,
        left: 40,
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        letterSpacing: 1,
    },
    brandContainer: {
        position: "absolute",
        top: 40,
        right: 40,
        flexDirection: "column",
        alignItems: "flex-end",
    },
    brandLogo: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 16,
    },
    diamondShape: {
        width: 16,
        height: 16,
        marginRight: 8,
    },
    brandName: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",

    },
    brandTagline: {
        fontSize: 7,
        color: "#666",
        marginTop: 2,
    },
    contentArea: {
        paddingHorizontal: 40,
        paddingTop: 120, // Espace pour l'en-tête
        paddingBottom: 40,
    },
    invoiceInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 30,
    },
    billTo: {
        flex: 1,
        marginTop: 12,
    },
    billToTitle: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 5,
    },
    billToText: {
        fontSize: 9,
        color: "#666",
        marginBottom: 2,
    },
    invoiceDetails: {
        width: 200,
        alignItems: "flex-end",
        marginTop: 12,
    },
    invoiceDetailsRow: {
        flexDirection: "row",
        marginBottom: 4,
    },
    invoiceDetailsLabel: {
        fontSize: 10,
        color: "#333",
        width: 60,
        textAlign: "left",
    },
    invoiceDetailsValue: {
        fontSize: 10,
        color: "#666",
        width: 80,
        textAlign: "right",
    },
    table: {
        borderWidth: 1,
        borderColor: "#e0e0e0",
        marginBottom: 30,
    },
    tableHeader: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
        backgroundColor: "#f9f9f9",
    },
    tableRow: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
    },
    tableCell: {
        padding: 8,
        fontSize: 9,
        color: "#333",
    },
    slCell: {
        width: "10%",
        textAlign: "center",
    },
    descriptionCell: {
        width: "40%",
    },
    priceCell: {
        width: "15%",
        textAlign: "right",
    },
    qtyCell: {
        width: "15%",
        textAlign: "center",
    },
    totalCell: {
        width: "20%",
        textAlign: "right",
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },
    footerLeft: {
        width: "50%",
    },
    footerRight: {
        width: "40%",
        marginLeft: "auto",
    },
    thankYouText: {
        fontSize: 11,
        fontWeight: "bold",
        marginBottom: 15,
    },
    paymentInfo: {
        marginBottom: 20,
    },
    paymentInfoTitle: {
        fontSize: 10,
        fontWeight: "bold",
        marginBottom: 5,
    },
    paymentInfoRow: {
        fontSize: 9,
        color: "#666",
        marginBottom: 2,
    },
    termsTitle: {
        fontSize: 10,
        fontWeight: "bold",
        marginBottom: 5,
    },
    termsText: {
        fontSize: 8,
        color: "#666",
    },
    totals: {
        marginBottom: 20,
    },
    totalRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 4,
    },
    totalLabel: {
        fontSize: 10,
        fontWeight: "bold",
    },
    totalValue: {
        fontSize: 10,
        textAlign: "right",
    },
    divider: {
        borderTopWidth: 1,
        borderTopColor: "#e0e0e0",
        marginVertical: 5,
    },
    grandTotal: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
    },
    grandTotalLabel: {
        fontSize: 12,
        fontWeight: "bold",
    },
    grandTotalValue: {
        fontSize: 12,
        fontWeight: "bold",
        textAlign: "right",
    },
    signatureSection: {
        marginTop: 40,
        borderTopWidth: 1,
        borderTopColor: "#e0e0e0",
        paddingTop: 8,
        alignItems: "center",
    },
    signatureText: {
        fontSize: 10,
        color: "#333",
    },
    footerTriangle: {
        position: "absolute",
        bottom: 0,
        right: 0,
    },
})

// Composant de facture PDF
export function CreativeQuoteTemplate({ fileName, client, dataDesignation, total, documentSettings }: { fileName: string, client: any, dataDesignation: any, total: number, documentSettings: any }) {
    const date = new Date().toLocaleDateString();


    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.container}>
                    {/* En-tête avec triangle rose */}
                    <View style={styles.headerBackground}>
                        <Svg width="595" height="120">
                            <Path d="M 0,0 L 695,0 L 0,120 L 0,120 Z" fill={documentSettings?.backgroundColor || '#f06292'} />
                        </Svg>
                    </View>

                    <Text style={styles.invoiceTitle}>Devis</Text>

                    <View style={styles.brandContainer}>
                        <View style={styles.brandLogo}>
                            <Image src={logo} style={{ width: 30, height: 30 }} />
                            <Text style={styles.brandName}>Brand Name</Text>
                        </View>
                        <Text style={styles.brandTagline}>CREATIVE DESIGN AGENCY</Text>
                    </View>

                    {/* Contenu principal */}
                    <View style={styles.contentArea}>
                        {/* Informations de facturation */}
                        <View style={styles.invoiceInfo}>
                            <View style={styles.billTo}>
                                <Text style={styles.billToTitle}>Invoice to:</Text>
                                <Text style={styles.billToText}>{client?.client_name ? client?.client_name : " Client name"}</Text>
                                <Text style={styles.billToText}>{client?.client_email ? client?.client_email : "Email client"}</Text>
                                <Text style={styles.billToText}>{client?.phone_number ? client?.phone_number : "Phone client"}</Text>

                            </View>
                            <View style={styles.invoiceDetails}>
                                <View style={styles.invoiceDetailsRow}>
                                    <Text style={styles.invoiceDetailsLabel}>Invoice#</Text>
                                    <Text style={styles.invoiceDetailsValue}>52148</Text>
                                </View>
                                <View style={styles.invoiceDetailsRow}>
                                    <Text style={styles.invoiceDetailsLabel}>Date</Text>
                                    <Text style={styles.invoiceDetailsValue}>01 / 02 / 2020</Text>
                                </View>
                            </View>
                        </View>

                        {/* Tableau des articles */}
                        <View style={styles.table}>
                            <View style={styles.tableHeader}>

                                <Text style={[styles.tableCell, styles.descriptionCell]}>Item Description</Text>
                                <Text style={[styles.tableCell, styles.priceCell]}>Price</Text>
                                <Text style={[styles.tableCell, styles.qtyCell]}>Qty.</Text>
                                <Text style={[styles.tableCell, styles.totalCell]}>Total</Text>
                            </View>

                            {dataDesignation.map((item: any) => (
                                <View style={styles.tableRow}>
                                    <Text style={[styles.tableCell, styles.descriptionCell]}>{item.title}</Text>
                                    <Text style={[styles.tableCell, styles.priceCell]}>{item.price}€</Text>
                                    <Text style={[styles.tableCell, styles.qtyCell]}>{item.quantity}</Text>
                                    <Text style={[styles.tableCell, styles.totalCell]}>{item.total}€</Text>
                                </View>
                            ))}


                        </View>

                        {/* Pied de page avec informations de paiement et totaux */}
                        <View style={styles.footer}>


                            <View style={styles.footerRight}>
                                <View style={styles.totals}>
                                    <View style={styles.totalRow}>
                                        <Text style={styles.totalLabel}>Sub Total:</Text>
                                        <Text style={styles.totalValue}>{total}€</Text>
                                    </View>
                                    {documentSettings?.includeVAT && (
                                        <View style={styles.totalRow}>
                                            <Text style={styles.totalLabel}>Tax:</Text>
                                            <Text style={styles.totalValue}>{documentSettings?.vatRate}%</Text>
                                        </View>
                                    )}
                                    <View style={styles.divider} />
                                    <View style={styles.grandTotal}>
                                        <Text style={styles.grandTotalLabel}>Total:</Text>
                                        <Text style={styles.grandTotalValue}>{documentSettings?.includeVAT ? (total * (1 + documentSettings.vatRate / 100)).toFixed(2) : total.toFixed(2)}€</Text>
                                    </View>
                                </View>

                                <View style={styles.signatureSection}>
                                    <Text style={styles.signatureText}>Authorised Sign</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Triangle rose en bas */}
                    <View style={styles.footerTriangle}>
                        <Svg width="595" height="60">
                            <Path d="M 595,0 L 595,60 L 0,60 L 350,100 Z" fill={documentSettings?.backgroundColor || '#f06292'} />
                        </Svg>
                    </View>
                </View>
            </Page>
        </Document>
    );
}