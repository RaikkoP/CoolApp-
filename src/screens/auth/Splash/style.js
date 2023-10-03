import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    innerTitle: {
        color: '#FCA34D',
        textDecorationLine: 'underline',
    },
    titleContainer: {
        marginVertical: 54,
    },
    footerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4f63AC',
        paddingVertical: 30,
    },
    container: {
        backgroundColor: 'white',
        padding: 24,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        borderWidth: 1,
    }
})