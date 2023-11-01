import React, { useContext, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import { styles } from './style';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserContext } from '../../../../App';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Signin = ({ navigation }) => {
    const [values, setValues] = useState({});
    const {user, setUser} = useContext(UserContext);

    const onBack = () => {
        navigation.goBack();
    };

    const onSignUp = () => {
        navigation.navigate('Signup');
    };

    const onChange = (key, value) => {
        setValues(v => ({...v, [key]: value}));
    };

    const onSignin = () => {
        console.log('Login values => ', values);
        if (!values?.email || !values?.password){
            Alert.alert('All fields are required!');
            return;
        }
        axios.post('http://192.168.18.4/api/user/login', values)
        .then(async (response) => {
            console.log(response?.data?.accesToken);
            const accesToken = response.data?.accesToken;
            setUser({ accesToken});

            if (response?.data?.token){
                await AsyncStorage.setItem('auth_token', `${response?.data?.token}`);
            }
        })
        .catch(error => {
            console.log('Login error => ', error.response.data);
        });
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <AuthHeader title={'Sign In'} onBackPress={onBack} />
                <Input value={values.email} onChangeText={(v) => onChange('email', v)} label={'E-mail'} placeholder={'exmaple@gmail.com'} />
                <Input value={values.password} onChangeText={(v) => onChange('password', v)} label={'Password'} placeholder={'***********'} isPassword />
                <Button title={'Sign in'} addedStyle={styles.button} />
                <Seperator text={'Or sign in with'} />
                <GoogleLogin />
                <Text onPress={onSignUp} style={styles.footerText}>
                    Don't have an account? <Text style={styles.footerLink}>Sign up</Text>
                </Text>
            </View>
        </SafeAreaView>
    )
};


export default React.memo(Signin);
