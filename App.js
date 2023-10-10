import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import Splash from './src/screens/auth/Splash';
import AuthHeader from './src/components/AuthHeader';
import Signup from './src/screens/auth/Signup';
import Signin from './src/screens/auth/SignIn';

const iOS_ID = '108854599678-31c42etjget37igcrqi2oijjpfi4pv1k.apps.googleusercontent.com';
const WEB_ID = '108854599678-ahd1d8p554c19hd1l7fe6c8jb2nefsqb.apps.googleusercontent.com';


const App = () => {
  return (
    <SafeAreaView>
      <Signin/>
    </SafeAreaView>
  );
};
export default App;
