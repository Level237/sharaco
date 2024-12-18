import React from 'react'
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

Font.register({
  family: 'Helvetica-Bold',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/fonts/fontawesome-webfont.woff2',
  fontWeight: 'bold',
});


Font.register({
  family: 'Helvetica',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/fonts/fontawesome-webfont.woff2',
});
const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: '#ffffff',
      padding: 30,
      fontFamily: 'Helvetica',

    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    title: {
      fontSize: 30,
      textAlign: 'center',
      marginBottom: 10,
      fontWeight: 'bold',
    },
    clientInfo: {
      marginBottom: 20,
    },
    section: {
      marginBottom: 20,
      marginTop:30,
      flex:1,
    },
    table: {
      marginTop:30,
      width: '100%',
      borderCollapse: 'collapse',
    },
    tableRow: {
      flexDirection: 'row',
      borderBottom: '0.6px solid #000',
    },
    textBold:{
      fontFamily: 'Helvetica-Bold',
    },
    tableCell: {
      flex: 1,
      padding: 8,
      border: '0.6px solid #000',
      textAlign: 'center',
      fontSize:12,
    },
    tableCellHeader: {
      flex: 1,
      padding: 8,
      border: '0.6px solid #000000',
      textAlign: 'center',
      backgroundColor:"#02abee",
      color:"#fff",
      fontSize:12,
    },
    footer: {
      marginTop: 30,
      bottom:0,
      textAlign: 'center',
      fontSize: 12,
      fontStyle: 'italic',
    },
    boldText: {  
      fontWeight: 'bold',  
      fontSize: 14, // Ajustez la taille selon vos besoins  
    }, 
  });
  
export default function TestPdf() {
  return (
    <Document>
    <Page  size="A4" style={styles.page}>
      <View  style={styles.header}>
        <View style={{flexDirection:"column"}}>
            <Text style={{ fontSize: 14, fontWeight: 'ultrabold',marginBottom:"16",fontFamily:"Helvetica-Bold" }}>Balep Martin</Text>
            <Text style={{ fontSize: 12 }}>2e rue Douala</Text>
            <Text style={{ fontSize: 12 }}>Beedi Cité Douala</Text>
            <Text style={{ fontSize: 12 }}>Cameroun</Text>
            <Text style={{ fontSize: 12 }}>690394365</Text>
        </View>
        <View style={{flexDirection:"column"}}>
            <Text style={{ fontSize: 14,fontWeight:"ultrabold",marginBottom:"16",fontFamily:"Helvetica-Bold" }}>Nom du client</Text>
            <Text style={{ fontSize: 12 }}>2e rue Douala</Text>
            <Text style={{ fontSize: 12 }}>Beedi Cité Douala</Text>
            <Text style={{ fontSize: 12 }}>Cameroun</Text>
            <Text style={{ fontSize: 12 }}>690394365</Text>
        </View>
      </View>
      
      <View style={{ marginTop:30 }} >
      <Text style={[styles.textBold,{fontSize:12}]}>Devis DZJZTRA</Text>
      </View>
      <View style={{ display:"flex",alignItems:'flex-end' }}>
        <View style={{ display:"flex",flexDirection:'column',gap:2 }}>
          <Text style={[{fontSize:10,color:"#313131FF",fontStyle:"italic"}]}>Emis le 18 Janv 2024</Text>
          <Text style={[{fontSize:10,color:"#313131FF",fontStyle:"italic"}]}>Valide jusqu'au 18 Janv 2024</Text>
        </View>
      </View>
      <View style={styles.section}>
        
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableCellHeader}>Description</Text>
            <Text style={styles.tableCellHeader}>Quantité</Text>
            <Text style={styles.tableCellHeader}>Prix Unitaire</Text>
            <Text style={styles.tableCellHeader}>Total</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Service 1</Text>
            <Text style={styles.tableCell}>1</Text>
            <Text style={styles.tableCell}>100€</Text>
            <Text style={styles.tableCell}>100€</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Service 2</Text>
            <Text style={styles.tableCell}>2</Text>
            <Text style={styles.tableCell}>50€</Text>
            <Text style={styles.tableCell}>100€</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell,styles.textBold]}>Total</Text>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.tableCell}></Text>
            <Text style={[styles.tableCell,styles.textBold]}>200€</Text>
          </View>
        </View>
      </View>
      <View style={[styles.footer,styles.textBold,{display:"flex",flexDirection:"row",justifyContent:'center',fontSize:14}]}><Text >Made in</Text> <Text style={{ color:"#02abee" }}> Sharaco</Text> </View>
      
    </Page>
  </Document>
  )
}
