import React, { useEffect } from 'react'
import { View, Text, Image, FlatList} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { fetchPlayerProfileData } from './playerProfileReducer'
import style from './styles'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/loader'
export default function PlayerProfile(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        console.log('coming inside')
       dispatch(fetchPlayerProfileData(props.route.params.player))
    },[props.route.params.player])

    const playerInfo = useSelector((state) => state.playerProfileScreen);

    const renderPlayerStats = (matches) => {
        return(
            <View>
                <View style={style.sectionHeaderContainer}>
                    <Text style={style.sectionHeaderRole}>Against</Text>
                    <Text style={style.sectionHeaderPoint}>Runs</Text>
                    <Text style={style.sectionHeaderPoint}>Wickets</Text>
                </View>
                <FlatList
                    data={matches}
                    renderItem={renderMatchDetails}
                    ItemSeparatorComponent={separator}
                    keyExtractor={(item, index) => (index.toString())} />
            </View>
            )
    }

    const renderMatchDetails = ({ item }) => (
        <View style={style.pointsContainer}>
            <View style={style.battingPlayer}>
                <Text style={style.batsmanName}>{item.against_team}</Text>
            </View>
            <Text style={style.points}>{item.batting}</Text>
            <Text style={style.points}>{item.bowling}</Text>
        </View>
    )

    const separator = () => <View style={style.separator} />
    
    return (
        <ScrollView>
            <View style={style.container}> 
                { playerInfo.loading &&  <Loader/>}
                <View style={style.headerContent}>
                    <Image style={style.avatar}
                            source={ playerInfo.player.player_info.player_image !== '' ? { uri: playerInfo.player.player_info.player_image }
                            : require('./../../../assets/images/player.png')}/>
                    <Text style={style.name}>{ playerInfo.player.player_info.player_name}</Text>
                    <Text style={style.teamName}>{ playerInfo.player.player_info.team_name}</Text>
                </View>
                <View style={style.tournamentHeaderContainer}>
                        <Text style={style.tournamentHeader}>{ playerInfo.player.player_info.tournament_name}</Text>
                </View>
                { renderPlayerStats(playerInfo.player.matches) }
            </View>
        </ScrollView>
    )
}
