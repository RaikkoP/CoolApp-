/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Signup';
import Signin from './src/screens/auth/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/app/Home';
import Favorites from './src/screens/app/Favorites';
import Profile from './src/screens/app/Profile';
import Settings from './src/screens/app/Settings';
import CreateListing from './src/screens/app/CreateListing';
import { Image } from 'react-native';
import { colors } from './src/utils/colors';
import ProductDetails from './src/screens/app/ProductDetails';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const isSignedIn = true;

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
      <Stack.Screen name="Settings" component={Settings} options={{headerShown: false}}/>
      <Stack.Screen name="CreateListing" component={CreateListing} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};

const theme = {
  colors: {
    background: colors.white,
  },
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon;

        if (route.name === 'Home') {
          icon = focused
            ? require('./src/assets/images/home_active.png')
            : require('./src/assets/images/home.png');
        } else if (route.name === 'Favorites') {
          icon = focused
            ? require('./src/assets/images/favorites_active.png')
            : require('./src/assets/images/favorites.png');
        } else if (route.name === 'Profile') {
          icon = focused
            ? require('./src/assets/images/profile_active.png')
            : require('./src/assets/images/profile.png');
        }

        return <Image style={{ width: 24, height: 24 }} source={icon}/>;
        },
        headerShown: false,
        tabBatShowLabel: false,
        tabBarStyle: {borderTopColor: colors.lightGrey, backgroundColor: 'white'},
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};



const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          {
            isSignedIn ? (
              <>
                <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
                <Stack.Screen name="ProductDetails" component={ProductDetails} options={{headerShown: false}}/>
              </>
            ) : (
              <>
                <Stack.Screen name="Splash" options={{ headerShown: false }} component={Splash} />
                <Stack.Screen name="Signup" options={{ headerShown: false }} component={Signup} />
                <Stack.Screen name="Signin" options={{ headerShown: false }} component={Signin} />
              </>
            )
          }
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default React.memo(App);
