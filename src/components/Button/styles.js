import {StyleSheet} from 'react-native';

import { colors } from '../../utils/colors';


export const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.blue,
        paddingVertical: 20,
        paddingHorizontal: 8,
        borderRadius: 8,
        width: '100%',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign:  'center',
        color: colors.white,
    },
})