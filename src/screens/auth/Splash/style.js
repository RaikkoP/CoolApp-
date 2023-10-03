import { StyleSheet } from "react-native";

import { colors } from '../../../utils/colors';

export const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: colors.black,
        textAlign: 'center',
    },
    innerTitle: {
        color: colors.orange,
        textDecorationLine: 'underline',
    },
    titleContainer: {
        marginVertical: 54,
    },
    footerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.blue,
        paddingVertical: 30,
    },
    container: {
        backgroundColor: colors.white,
        padding: 24,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        borderWidth: 1,
    }
})