import React, {useEffect, useState } from 'react'
import { View , SectionList, Text } from 'react-native'
import { useSelector } from 'react-redux'
import style from './styles'
import NoDataView from '../../../../components/noDataView'
import MatchCard from '../../../../components/matchCard'
import Loader from '../../../../components/loader'

export default function Recent(props) {

    const [recentMatches,setRecentMatches] = useState();

    const  matches  = useSelector((state) => state.matchesScreen.recent);

    useEffect(() => {
        console.log('recent');
        if (matches &&
            matches.length > 0) {
                setRecentMatches(matches.map((item) => {
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
            onPress={() => viewMatch(data.item.match_id, data.item.match_header)} />
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
            {recentMatches &&
                <SectionList
                    renderItem={renderMatchItem}
                    renderSectionHeader={renderMatchHeader}
                    sections={recentMatches}
                    keyExtractor={(item, index) => item + index}
                />
            }       
            
            {!recentMatches &&     
                <NoDataView message={"No Matches Found"} />
            }
            
        </View>
    )
}


