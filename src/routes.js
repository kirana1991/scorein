import React from 'react'
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home';
import SplashScreen from './screens/splash'
import MatchScreen from './screens/match'
import Tournament from './screens/tournament';
import Stat from './screens/stat';
import PlayerProfile from './screens/playerProfile'
import Players from './screens/players';
import { THEME_PRIMARY } from './utils/constant'

const Stack = createNativeStackNavigator();

function LogoTitle(){
  return (
    <Image
      style={{ width: 50, height: 50, marginHorizontal: 5, marginVertical: 5 }}
      source={require('./../assets/images/logo.png')}
    />
  );
}

export default function App() {

  
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: THEME_PRIMARY,
          paddingHorizontal: 10,
        },
        headerTintColor: 'white',
      }}>
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}}/> 
        <Stack.Screen name="Home" component={HomeScreen} options={{headerTitle: (props) => <LogoTitle {...props} />, headerBackVisible: false}}/>
        <Stack.Screen name="Match" component={MatchScreen} />
        <Stack.Screen name="Tournament" component={Tournament} />
        <Stack.Screen name="Stat" component={Stat} />
        <Stack.Screen name="PlayerProfile" component={PlayerProfile} options={{ title: 'Profile' }}/>
        <Stack.Screen name="Players" component={Players} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}