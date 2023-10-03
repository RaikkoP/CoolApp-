import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import {styles} from './styles';

const Button = ({title, onPress}) => {

    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;
