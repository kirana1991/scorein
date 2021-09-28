import React, { useEffect, useState } from 'react'
import {View, SectionList, Text} from 'react-native'
import { fetchMatchDetailScreenData } from './matchDetailReducer'
import { useDispatch, useSelector } from 'react-redux'		
import style from './styles'
import MatchCard from './../../../components/matchCard'
import Loader from '../../../components/loader'

export default function Matches(props) {

    const [recentMatches,setRecentMatches] = useState();

    const dispatch = useDispatch()

    useEffect(() => {
        console.log('tournamentMatches')
        dispatch(fetchMatchDetailScreenData(props.route.params.tournamentId))  
    }, [props.route.params.tournamentId])

    const  {matches, loading}  = useSelector((state) => state.matchDetailScreen);

    useEffect(() => {
        if (matches &&
            matches.length > 0) {
                setRecentMatches(matches.map((item) => {
                    return ({
                        title: item.match_date,
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
        props.navigation.navigate('Match',{ matchId : id, header: matchHeader });
    }

    const renderMatchHeader = ({ section: { title } }) => {
        return (<View style={style.matchHeader}>
            <Text style={style.matchHeaderTitle}>{title}</Text>
        </View>)
    }

    return (
        <View style={style.container}>
            { loading && <Loader />}
            {recentMatches && !loading &&
                <SectionList
                    renderItem={renderMatchItem}
                    renderSectionHeader={renderMatchHeader}
                    sections={recentMatches}
                    keyExtractor={(item, index) => item + index}
                    
                />
            }
        </View>
    )
}
