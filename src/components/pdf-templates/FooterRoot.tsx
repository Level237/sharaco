import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";
import logo from "../../assets/img/logo.png";


export function FooterRoot() {

    const styles = StyleSheet.create({
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
        logo: {
            width: 80,
            height: 40,
        },
        logoContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            color: 'white',
            marginBottom: 20,
        },
        logoText: {
            fontSize: 14,
            color: 'black',
        }
    })
    return (
        <>
            <Text style={styles.footer}>
                <View style={styles.logoContainer}>
                    <Text style={styles.logoText}>made with</Text>
                    <Image src={logo} style={styles.logo} />
                </View >

            </Text >
        </>
    )
}