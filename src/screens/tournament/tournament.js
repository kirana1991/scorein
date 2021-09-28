import React, { useEffect } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Matches from './matches'
import Teams from './teams'
import PointsTable from './pointsTable'
import Stats from './stats'

export default function Tournament(props) {

    useEffect(() => {
        props.navigation.setOptions({
            title: props.route.params.tournamentName,
          });
    }, [])

    const Tab = createMaterialTopTabNavigator();
    
    return (
        <Tab.Navigator>
            <Tab.Screen name="Matches" component={Matches} initialParams={{tournamentId: props.route.params.tournamentId}}/>
            <Tab.Screen name="Teams" component={Teams} initialParams={{tournamentId: props.route.params.tournamentId}} />
            <Tab.Screen name="Points Table" component={PointsTable} initialParams={{tournamentId: props.route.params.tournamentId}}/>
            <Tab.Screen name="Stats" component={Stats}  initialParams={{tournamentId: props.route.params.tournamentId}}/>
        </Tab.Navigator>
    )
}
