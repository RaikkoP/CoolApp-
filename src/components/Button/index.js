import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import {styles} from './styles';

const Button = ({title, addedStyle, onPress}) => {

    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={[styles.button, addedStyle]}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;
