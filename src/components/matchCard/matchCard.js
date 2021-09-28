import React, { useEffect } from 'react'
import { View , Text, TouchableOpacity } from 'react-native';
import styles from './styles'
import { getInitials } from './../../utils/helper'


export default function MatchCard(props) {

    const summary = props.summary;
    
    return (summary ?
        <TouchableOpacity style={styles.container} onPress={props.onPress} activeOpacity={0.5}>
            <View style={styles.matchInfoContainer}>
                <Text style={styles.matchTitleText}>{
                    `${props.showTournament ? `${summary.tournament_name} - ` : ''}${summary.league_stage}`}
                </Text>

                <View style={styles.matchTypeContainer}>
                    <Text style={styles.matchTypeText}>{summary.match_type}</Text>
                </View>
            </View>
            <View>
                <View style={styles.teamScoreContainer}>
                    <View style={styles.teamAvatarBackground}>
                        <Text style={[styles.teamAvatarText, {
                            fontWeight: summary.team_details[0].highlight ? 'bold' : 'normal'
                        }]}>{getInitials(summary.team_details[0].team_name)}</Text>
                    </View>
                    <Text style={[styles.teamNameText, {
                        fontWeight: summary.team_details[0].highlight ? 'bold' : 'normal'
                    }]}>{summary.team_details[0].team_name}</Text>
                    <Text style={[styles.teamScoreText, {
                        fontWeight: summary.team_details[0].highlight ? 'bold' : 'normal'
                    }]}>{`${summary.team_details[0].runs}/${summary.team_details[0].wicket} (${summary.team_details[0].wicket})`}</Text>
                </View>

                <View style={styles.teamScoreContainer}>
                    <View style={styles.teamAvatarBackground}>
                        <Text style={[styles.teamAvatarText, {
                            fontWeight: summary.team_details[1].highlight ? 'bold' : 'normal'
                        }]}>{getInitials(summary.team_details[1].team_name)}</Text>
                    </View>
                    <Text style={[styles.teamNameText, {
                        fontWeight: summary.team_details[1].highlight ? 'bold' : 'normal'
                    }]}>{summary.team_details[1].team_name}</Text>
                    <Text style={[styles.teamScoreText, {
                        fontWeight: summary.team_details[1].highlight ? 'bold' : 'normal'
                    }]}>{`${summary.team_details[1].runs}/${summary.team_details[1].wicket} (${summary.team_details[1].wicket})`}</Text>
                </View>
                <Text style={styles.matchSummaryText}>{summary.match_status}</Text>
            </View>
        </TouchableOpacity > : null
    );
}
