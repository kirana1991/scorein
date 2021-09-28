import React from 'react';
import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './home';
import Matches from './matches';
import Tournament from './tournaments'

export default function HomeScreen(){
    const Tab = createBottomTabNavigator();
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Tab.Navigator
                screenOptions={{
                tabBarActiveTintColor: {
                    color :'#FFF',
                    fontsize : 15
                },
                headerBackTitleStyle: {
                    color: 'white'
                  }
                }}>
                <Tab.Screen name="Home" component={Home} 
                    options={{headerShown: false, 
                            tabBarIcon: ({ color, size }) => (<Image 
                            source={require('./../../../assets/images/home.png')} 
                            style={{
                                width: 20,
                                height: 20
                            }}
                            />),}}/>
                <Tab.Screen name="Matches" component={Matches} options={{headerShown: false, tabBarIcon: ({ color, size }) => (<Image
                            source={require('./../../../assets/images/match.png')}
                            style={{
                                width: 20,
                                height: 20
                            }} />),}}/>
                <Tab.Screen name="Tournaments" component={Tournament} options={{headerShown: false, tabBarIcon: ({ color, size }) => (<Image
                            source={require('./../../../assets/images/trophy.png')}
                            style={{
                                width: 20,
                                height: 20
                            }} />)}}/>
            </Tab.Navigator>
        </View>
    )
}