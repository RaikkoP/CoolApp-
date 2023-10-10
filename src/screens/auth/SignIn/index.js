import React from 'react';
import { View, Text } from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import { styles } from './style';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';

const Signin = () => {
    return (
        <View style={styles.container}>
            <AuthHeader title={'Sign In'}/>
            <Input label={'E-mail'} placeholder={'exmaple@gmail.com'}/>
            <Input label={'Password'} placeholder={'***********'} isPassword/>
            <Button title={'Sign in'} addedStyle={styles.button}/>
            <Seperator text={'Or sign in with'}/>
            <GoogleLogin/>
            <Text style={styles.footerText}>
                Don't have an account? <Text style={styles.footerLink}>Sign up</Text>
            </Text>
        </View>
    )
};


export default Signin;
