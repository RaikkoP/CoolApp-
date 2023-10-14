import React, { useState } from 'react';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { styles } from './style';
import { Text, View } from 'react-native';
import Checkbox from '../../../components/Checkbox';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';
import { SafeAreaView } from 'react-native-safe-area-context';


const Signup = ({ navigation }) => {

    const [checked, setChecked] = useState(false);

    const onBack = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <AuthHeader title="Sign up" onBackPress={onBack} />
                <Input placeholder="John Doe" label="Name" />
                <Input placeholder="example@gmail.com" label="Email" />
                <Input isPassword placeholder="************" label="Password" />
                <View style={styles.agreeRow}>
                    <Checkbox checked={checked} onCheck={setChecked} />
                    <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms</Text> & <Text style={styles.agreeTextBold}>Privacy</Text></Text>
                </View>
                <Button title={'Sign in'} addedStyle={styles.button} />
                <Seperator text="Or sign up with" />
                <GoogleLogin />
                <Text style={styles.footerText}>Already have an account?
                    <Text style={styles.footerLink}> Sign In</Text>
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default React.memo(Signup);
