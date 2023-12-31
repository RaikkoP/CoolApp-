import React, {useContext} from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import { styles } from './style';
import Button from '../../../components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserContext } from '../../../../App';

const Splash = ({ navigation }) => {
    const user = useContext(UserContext);
    console.log('user => ', user);


    const onSignup = () => {
        navigation.navigate('Signup');
    };

    const onSignin = () => {
        navigation.navigate('Signin');
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image resizeMode="contain" style={styles.image}
                    source={require('../../../assets/images/splash.png')} />

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>You'll Find</Text>
                    <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
                    <Text style={styles.title}>Here!</Text>
                </View>

                <Button onPress={onSignup} title="Sign Up" />

                <Pressable onPress={onSignin} hitSlop={20}>
                    <Text style={styles.footerText}>Sign In</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default React.memo(Splash);
