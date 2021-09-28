import React, {useEffect} from 'react'
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import style from './styles'
import {  useSelector } from 'react-redux'	

export default function Stat(props) {

    const stats = useSelector((state) => state.statsScreen.stats);
    const statsData = stats[props.route.params.index];
    
    useEffect(() => {
        
        props.navigation.setOptions({
            title: props.route.params.name,
          });
    }, [])

    const separator = () => <View style={style.separator} />

    const renderStats = ({ item }) => (
        <TouchableOpacity activeOpacity={0.5} onPress={() => viewPlayerStats(item.player_id)}>
            <View style={style.statContainer}>
                <View style={style.playerDeatilsView} >
                    <Text style={style.playerName}>{item.player_name}</Text>
                    <Text style={style.playerTeam}>{item.team_name}</Text>
                </View>
                <Text style={style.pointText}>{item.matches_played}</Text>
                <Text style={style.pointText}>{item.wicket || item.runs}</Text>
            </View>
        </TouchableOpacity>
    )

    const viewPlayerStats = (player) => {
        props.navigation.navigate('PlayerProfile', { player })
    }

    const Headers = (props) => {
        let header = ['Batsman', 'M', 'R']
        if (props.name) {
            if (props.name.toLowerCase().includes('runs')) {
                header = ['Batsman', 'M', 'R']
            } if (props.name.toLowerCase().includes('wickets')) {
                header = ['Bowler', 'M', 'W']
            }
        }
        return (
            <View style={style.headerView}>
                <Text style={style.hearderPlayer}>{header[0]}</Text>
                <Text style={style.hearderStat}>{header[1]}</Text>
                <Text style={style.hearderStat}>{header[2]}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={style.safeArea}>
            <View style={style.container}>
                <Headers name={statsData.stats_name} />
                <FlatList
                    data={statsData.players}
                    renderItem={renderStats}
                    ItemSeparatorComponent={separator}
                    keyExtractor={(item, index) => (index.toString())} />
            </View>
        </SafeAreaView>
    )
}
