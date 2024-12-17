import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: '#ffffff',
      padding: 30,
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
    },
    table: {
      marginTop:30,
      width: '100%',
      borderCollapse: 'collapse',
    },
    tableRow: {
      flexDirection: 'row',
      borderBottom: '1px solid #000',
    },
    tableCell: {
      flex: 1,
      padding: 8,
      border: '1px solid #000',
      textAlign: 'center',
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
    <Page size="A4" style={styles.page}>
      <View  style={styles.header}>
        <View style={{flexDirection:"column"}}>
            <Text style={{ fontSize: 14, fontWeight: 'ultrabold',marginBottom:"16" }}>Balep Martin</Text>
            <Text style={{ fontSize: 12 }}>2e rue Douala</Text>
            <Text style={{ fontSize: 12 }}>Beedi Cité Douala</Text>
            <Text style={{ fontSize: 12 }}>Cameroun</Text>
            <Text style={{ fontSize: 12 }}>690394365</Text>
        </View>
        <View style={{flexDirection:"column"}}>
            <Text style={{ fontSize: 14,fontWeight:"ultrabold",marginBottom:"16" }}>Nom du client</Text>
            <Text style={{ fontSize: 12 }}>2e rue Douala</Text>
            <Text style={{ fontSize: 12 }}>Beedi Cité Douala</Text>
            <Text style={{ fontSize: 12 }}>Cameroun</Text>
            <Text style={{ fontSize: 12 }}>690394365</Text>
        </View>
      </View>
      
      <View style={{ marginTop:30 }} >
      <Text style={{ fontWeight:"extrabold",fontSize:14}}>Devis</Text>
      </View>
      <View style={styles.section}>
        
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Description</Text>
            <Text style={styles.tableCell}>Quantité</Text>
            <Text style={styles.tableCell}>Prix Unitaire</Text>
            <Text style={styles.tableCell}>Total</Text>
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
            <Text style={styles.tableCell}>Total</Text>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.tableCell}>200€</Text>
          </View>
        </View>
      </View>
      <Text style={styles.footer}>Made in Sharaco</Text>
    </Page>
  </Document>
  )
}
