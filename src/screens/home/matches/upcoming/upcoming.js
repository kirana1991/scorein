import React, {useEffect, useState } from 'react'
import { View , SectionList, Text } from 'react-native'
import { useSelector } from 'react-redux'
import style from './styles'
import NoDataView from '../../../../components/noDataView'
import MatchCard from '../../../../components/matchCard'
import Loader from '../../../../components/loader'

export default function Upcoming(props) {

    const  matches  = useSelector((state) => state.matchesScreen.upcoming);
    const [upcomingMatches,setUpcomingMatches] = useState();

    useEffect(() => {
        if (matches &&
            matches.length > 0) {
                setUpcomingMatches(matches.map((item) => {
                    return ({
                        title: item.tournament_name,
                        data: item.matches
                    })
                }));
        }
    }, [matches])

    const renderMatchItem = ( data ) => {
        return <MatchCard summary={data.item}
            showTournament={false}
            onPress={() => viewMatch(data.match_id, data.match_header)} />
    }

    viewMatch = (id, matchHeader) => {
        props.navigation.navigate('Match',{ matchId : id, header:  matchHeader});
    }

    const renderMatchHeader = ({ section: { title } }) => {
        return (<View style={style.matchHeader}>
            <Text style={style.matchHeaderTitle}>{title}</Text>
        </View>)
    }

    return (
        <View style={style.container}>
            { matches.loading && <Loader />}
            {upcomingMatches &&
                <SectionList
                    renderItem={renderMatchItem}
                    renderSectionHeader={renderMatchHeader}
                    sections={upcomingMatches}
                    keyExtractor={(item, index) => item + index}
                />
            }  

            {!upcomingMatches &&     
                <NoDataView message={"No Matches Scheduled"} />
            }
            
        </View>
    )
}


