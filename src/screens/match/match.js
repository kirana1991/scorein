import React, { useEffect }  from 'react'		
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Info from './info';
import Live from './live';
import Scorecard from './scorecard'

export default function MatchScreen(props)
{
    const Tab = createMaterialTopTabNavigator();

    useEffect(() => {
        props.navigation.setOptions({
            title: props.route.params.header,
          });
    }, [])
   
    return (
        <Tab.Navigator>
            <Tab.Screen name="Info" component={Info} initialParams={{matchId: props.route.params.matchId}}/>
            <Tab.Screen name="Live" component={Live} initialParams={{matchId: props.route.params.matchId}} />
            <Tab.Screen name="Scorecard" component={Scorecard} initialParams={{matchId: props.route.params.matchId}} />
        </Tab.Navigator>
    )
}