import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import Header from '../../../components/Header';
import ListItem from '../../../components/ListItem';
import Button from '../../../components/Button';
import { UserContext } from '../../../../App';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {
    const {user, setUser} = useContext(UserContext);
    const num = 10;


    const onLogout = async () => {
        console.log(user);
        console.log('Logout is cliccked');
        await AsyncStorage.removeItem('auth_token');
        setUser(null);
    };

    const onSettingsPress = () => {
        navigation.navigate('Settings');
    };

    const onNewListingPress = () => {
        navigation.navigate('CreateListing');
    };

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Header title="Profile" showLogout onLogout={onLogout} />
                    <Text style={styles.name}>User name</Text>
                    <Text style={styles.email}>User email</Text>
                    <ListItem title="My Listing" subtitle={`Already have ${num} listings`} />
                    <ListItem title="Settings" subtitle="Account, FAQ, Contact" onPress={onSettingsPress} />
                </View>
            </View>
            <Button onPress={onNewListingPress} title="Add New Listing" />
        </SafeAreaView>
    );
};

export default React.memo(Profile);
