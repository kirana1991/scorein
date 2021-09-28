import React,{useEffect} from 'react'
import { ScrollView,View,Text,RefreshControl,Image,FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'		
import { fetchMatchLiveData } from './matchLiveReducer';
import style from './styles'

export default function Live(props) {
  
    const liveScore  = useSelector((state) => state.matchLiveScreen);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMatchLiveData(props.route.params.matchId))
    }, [props])

    const renderTeams = (teams) => {
        if (!teams) {
            return
        }
        return teams.map((team, index) => (
            <View key={index.toString()} style={style.teamContainer}>
                <Text style={style.teamName}>{team.team_name}</Text>
                <Text style={style.teamScore}>
                    {`${team.runs}-${team.wicket} (${team.overs})`}
                </Text>
            </View>
        ))
    }

    const renderMatchStat = (matchStat) => {
        if (!matchStat) {
            return
        }
        return matchStat.map((stat, index) => (
            <View key={index.toString()} style={style.playerOfTheMatchContainer}>
                <Text style={style.playerOfTheMatchLabel}>{stat.title}</Text>
                <View style={style.playerOfTheMatchInfo}>
                    <Image style={style.playerOfTheMatchImage}
                        source={stat.player.image_url ? { uri: stat.player.image_url }
                            : require('./../../../../assets/images/player.png')} />
                    <Text style={style.playerOfTheMatchName}>{stat.player.player_name}</Text>
                </View>
            </View>
        ))
    }

    const renderComentory = ({ item }) => {
        return (
            <View style={style.comentoryContainer}>

                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={style.comentoryOver}>{item.overs}</Text>
                    {item.score != null && item.score.toString().length > 0 &&
                        <View style={[
                            style.comentoryScoreBackground,
                            {
                                backgroundColor: item.text_color
                            }]}>
                            <Text style={style.comentoryScoreText}>{item.score}</Text>
                        </View>
                    }
                </View>
                <Text style={style.comentoryText}>{item.commentary}</Text>
            </View>
        )
    }

    const _Separator = () => <View style={style.separator} />

    const onRefresh = () => {
        dispatch(fetchMatchLiveData(props.matchId));
    }

    return (
        <ScrollView style={style.container}
                refreshControl={
                    <RefreshControl refreshing={liveScore.refreshing} onRefresh={onRefresh} />
                }>
                {renderTeams(liveScore.live.team_details)}
                <Text style={style.matchStatusText}>{liveScore.live.match_status}</Text>
                <View style={style.separator} />
                {renderMatchStat(liveScore.live.match_stats)}
                <FlatList
                    data={liveScore.live.commentatory}
                    renderItem={renderComentory}
                    ItemSeparatorComponent={_Separator}
                    keyExtractor={(item, index) => (index.toString())} />
            </ScrollView>
    )
}
