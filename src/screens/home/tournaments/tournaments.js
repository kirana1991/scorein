import React, { useEffect }  from 'react'
import { useDispatch } from 'react-redux'		
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Overarm from './overarm';
import Underarm from './underarm';
import { fetchTournamentHomeScreenData } from './tournamentHomeScreenReducer';

export default function Tournament()
{
    const dispatch = useDispatch()
    const Tab = createMaterialTopTabNavigator();

    useEffect(() => {
        dispatch(fetchTournamentHomeScreenData())
    }, [])

    return (
        <Tab.Navigator>
            <Tab.Screen name="Overarm" component={Overarm} />
            <Tab.Screen name="Underarm" component={Underarm} />
        </Tab.Navigator>
    )
}