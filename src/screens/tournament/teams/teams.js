import React, {useEffect} from 'react'
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native'
import { fetchTeamScreenData } from './teamsReducer'
import { useDispatch, useSelector } from 'react-redux'		
import style from './styles'

export default function Teams(props) {

    const dispatch = useDispatch()

    useEffect(() => {
        console.log('teams');
        dispatch(fetchTeamScreenData(props.route.params.tournamentId))
    }, [props])

    const teams = useSelector((state) => state.teamsScreen.teams);

    const renderTeam = ({ item }) => (
        <TouchableOpacity style={style.teamContainer} onPress={() => viewPlayers(item.players,item.team_name)}>
            <Image style={style.teamLogo} source={{ uri: item.logo }} />
            <Text style={style.teamName}>{item.team_name}</Text>

        </TouchableOpacity>
    )

    const viewPlayers = (players, team) => {
        props.navigation.navigate('Players', { players:players, teamName: team})
    }

    console.log(teams);

    return (
        <View style={style.container}>
            <FlatList
                data={teams}
                renderItem={renderTeam}
                keyExtractor={(item, index) => (index.toString())} />
        </View>
    )
}
