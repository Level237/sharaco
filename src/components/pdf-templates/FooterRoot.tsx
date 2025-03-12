import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";
import logo from "../../assets/img/logo.png";


export function FooterRoot() {

    const styles = StyleSheet.create({
        footer: {
            position: 'absolute',
            bottom: 10,
            left: 40,
            right: 40,
            textAlign: 'center',
            color: '#64748b',
            fontSize: 10,

            borderTopWidth: 1,
            borderTopColor: '#e2e8f0',
        },
        logo: {
            width: 70,
            height: 20,
        },
        logoContainer: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 16,
        },
        logoText: {
            fontSize: 12,
            color: 'black',
        }
    })
    return (
        <>
            <View style={styles.footer}>
                <View style={styles.logoContainer}>
                    <Text style={styles.logoText}>Build with</Text>
                    <Image src={logo} style={styles.logo} />
                </View >

            </View >
        </>
    )
}