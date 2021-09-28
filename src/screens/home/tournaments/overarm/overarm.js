import React from 'react'
import { View,
    Image,
    Text,
    FlatList,
    TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import TournamentView from './../../../../components/tournamentView'
import style from './styles'
import Loader from '../../../../components/loader'

export default function Overarm({navigation}) {

    const  tournaments  = useSelector((state) => state.tournamentHomeScreen);

    const renderTournament = ({ item }) => (
        <TournamentView
            data={item}
            onClick={() => viewTournamentDetails(item.tournament_id, item.tournament_name)} />
    );

    const viewTournamentDetails = (tournamentId, tournamentName) => {
        navigation.navigate('Tournament',{ tournamentId : tournamentId, tournamentName: tournamentName })
    }

    return (
        <View style={style.container}>
            { tournaments.loading && <Loader />}
                < FlatList
                    data={tournaments.overarm}
                    renderItem={renderTournament}
                    keyExtractor={(item, index) => (index.toString())} />
            </View>
    )
}
