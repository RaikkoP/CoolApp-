import React, { useState } from 'react';
import { FlatList, Image, View, Dimensions } from 'react-native';

import { styles } from './styles';

const { width } = Dimensions.get('window');

const ImageCarousel = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScrollEnd = (event) => {
        console.log('event => ', event.nativeEvent);
        const horizontalOffset = event.nativeEvent.contentOffset.x;
        console.log('offset => ', horizontalOffset);
        console.log('width -> ', width);
        const index = horizontalOffset / width;
        console.log('index => ', index);
        setActiveIndex(index);
    };

    const renderImage = ({ item }) => {
        return (
            <Image style={styles.image} source={{ uri: item }} />
        );
    };

    return (
        <View>
            <FlatList pagingEnabled horizontal style={styles.list} data={images} renderItem={renderImage}
                onMomentumScrollEnd={handleScrollEnd} />
            <View style={styles.paggination}>
                {images?.map((_, i) => (
                    <View key={i} style={[styles.pagginationLine, i === 
                        activeIndex ? styles.activeLine : {}]}/>
                ))}
            </View>
        </View>
    );

};

export default React.memo(ImageCarousel);

