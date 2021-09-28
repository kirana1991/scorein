import React from 'react'
import styles from './styles'
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'

export const TournamentView = (props) => {

    const data = props.data;

    return <TouchableOpacity activeOpacity={0.5} onPress={() => props.onClick(data.tournament_id)}>
        <View style={styles.tournamentContainer}>
            <Image style={styles.tournamentLogo} source={{ uri: data.logo }} resizeMode="stretch"/>
            <View style={styles.tournamentInfoContainer}>
                <Text style={styles.tournamentName}>{data.tournament_name}</Text>
                <Text style={styles.tournamentDate}>{`${data.tournament_from_date} - ${data.tournament_to_date}`}</Text>
                <Text style={styles.tournamentVenue}>{`Venue: ${data.tournament_place}`}</Text>
                <Text style={styles.tournamentContact}>Contact No. : {data.contact_details && data.contact_details }</Text>
            </View>
        </View>
    </TouchableOpacity>
}