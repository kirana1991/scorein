import React, {useEffect} from 'react'
import { Text, View } from "react-native";
import { useDispatch } from 'react-redux'		
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import  Live  from './live'
import  Upcoming  from './upcoming'
import  Recent  from './recent'
import { fetchMatchesScreenData } from './matchesReducer';

export default function matches() {
    const dispatch = useDispatch()
    const Tab = createMaterialTopTabNavigator();

    useEffect(() => {
        dispatch(fetchMatchesScreenData())
    })
    
    return (
        <Tab.Navigator>
            <Tab.Screen name="Live" component={Live} />
            <Tab.Screen name="Upcoming" component={Upcoming} />
            <Tab.Screen name="Recent" component={Recent} />
        </Tab.Navigator>
    )
}
