import React, { useContext, useState } from 'react';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { styles } from './style';
import { UserContext } from '../../../../App';
import { Text, View, Alert } from 'react-native';
import Checkbox from '../../../components/Checkbox';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Signup = ({ navigation }) => {

    const [checked, setChecked] = useState(false);
    const [values, setValues] = useState({});
    const {user, setUser} = useContext(UserContext);

    const onBack = () => {
        navigation.goBack();
    };

    const onSignin = () => {
        navigation.navigate('Signin');
    };

    const onChange = (key, value) => {
        setValues(v => ({...v, [key]: value}));
    };

    const  onSubmit = async () => {
        if (!values?.fullName || !values?.email || !values?.password){
            Alert.alert('All fields are required');
            return;
        }
        if (!checked){
            Alert.alert('Please agree with the terms');
            return;
        }
        console.log(values);
        axios.post('http://192.168.18.4/api/user/register', values)
        .then(response => {
            console.log('signup => ', response);
            const [email, password] = values;
            axios.post('http://192.168.18.4/api/user/login', values)
            .then(async response => {
                console.log('signin => ', response);
                const accessToken = response?.data?.accessToken;
                console.log('accessToken => ', accessToken);
                setUser({accessToken});
                if (response?.data?.token) {
                    await AsyncStorage.setItem('auth_token', `${response?.data?.accessToken}`)
                }
            })
            .catch(error => {
                console.log(error);
            });
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <AuthHeader title="Sign up" onBackPress={onBack} />
                <Input value={values.fullName} onChangeText={(v) => onChange('fullName', v)} placeholder="John Doe" label="Name" />
                <Input value={values.email} onChangeText={(v) => onChange('email', v)} placeholder="example@gmail.com" label="Email" />
                <Input value={values.password} onChangeText={(v) => onChange('password', v)} isPassword placeholder="************" label="Password" />
                <View style={styles.agreeRow}>
                    <Checkbox checked={checked} onCheck={setChecked} />
                    <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms</Text> & <Text style={styles.agreeTextBold}>Privacy</Text></Text>
                </View>
                <Button onPress={onSubmit} title={'Sign up'} addedStyle={styles.button} />
                <Seperator text="Or sign up with" />
                <GoogleLogin />
                <Text onPress={onSignin} style={styles.footerText}>Already have an account?
                    <Text style={styles.footerLink}> Sign In</Text>
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default React.memo(Signup);
