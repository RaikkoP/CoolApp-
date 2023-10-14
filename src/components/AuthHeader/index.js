import React from 'react';
import { Pressable, View, Image, Text } from 'react-native';
import { styles } from "./style";

const AuthHeader = ({title, onBackPress}) => {

    return (
        <View style={styles.container}>
            <Pressable hitSlop={20} onPress={onBackPress}>
                <Image style={styles.image} source={require('../../assets/images/authArrow.png')} />
            </Pressable>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

export default AuthHeader;
