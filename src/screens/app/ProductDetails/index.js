import React from 'react';
import { View, Text, ScrollView, Image, Pressable, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import Button from '../../../components/Button';
import ImageCarousel from '../../../components/ImageCarousel';

const ProductDetails = ({navigation, route}) => {
    const {product} = route.params || {};

    const onBackPress = () => {
        navigation.goBack();
    };

    const onContact = () => {
        //phone call
        let phone = '56947941';
        Linking.openURL(`tel:${phone}`);
        //email
        let email = 'raikko.prants@gmail.com';
        Linking.openURL(`mailto:${email}`);
    };

    return (
        <SafeAreaView style={styles.save}>
            <ScrollView>
                {product?.images?.length ? (
                    <ImageCarousel images={product?.images}/>
                ) : (
                    <Image style={styles.image} source={{uri: product?.image}}/>
                )}
                <View style={styles.content}>
                    <Text style={styles.title}>{product?.title}</Text>
                    <Text style={styles.price}>{product?.price}</Text>
                    <Text style={styles.description}>{product?.description}</Text>
                </View>
                <Pressable onPress={onBackPress} style={styles.backContainer}>
                    <Image style={styles.backIcon} source={require('../../../assets/images/back.png')}/>
                </Pressable>
            </ScrollView>
            <View style={styles.footer}>
                <Pressable style={styles.bookmarkContainer}>
                    <Image style={styles.bookmarkIcon} source={require('../../../assets/images/favorites.png')}/>
                </Pressable>
                <Button onPress={onContact} title="Contact Seller"/>
            </View>
        </SafeAreaView>
    );
};

export default React.memo(ProductDetails);
