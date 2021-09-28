import React,{useEffect} from 'react'
import { View,
    Text,
    FlatList,
    ScrollView,
    TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'	
import { fetchMatchScorecardData } from './matchScorecardReducer'
import style from './styles'

export default function Scorecard(props) {

    const scorecard  = useSelector((state) => state.matchScorecardScreen);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMatchScorecardData(props.route.params.matchId))
    }, [props])

    const renderInnings = (innings) => {
        return innings.map((inning) => {
            const {
                team_name,
                wicket,
                runs,
                overs,
                batting,
                yet_to_bat,
                bowling,
                fall_of_wickets,
                extra
            } = inning
            const yetToBatPlayers = yet_to_bat.toString()
            return (
                <View key={team_name} style={style.inningContainer}>
                    {renderInningsHeader({
                        team_name,
                        wicket,
                        runs,
                        overs,
                    })}
                    {renderBatting(batting)}
                    {renderExtras(extra)}
                    {renderTotal({
                        wicket, 
                        runs, 
                        overs
                    })}
                    {renderYetToBat(yetToBatPlayers.replace(/,/g,', '))}
                    {renderBowling(bowling)}
                    {renderFallOfWickets(fall_of_wickets)}
                </View>
            )
        })
    }

    const renderInningsHeader = (data) => {
        return (
            <View style={style.inningHeaderContainer}>
                <Text style={style.inningHeaderTeamName}>{data.team_name}</Text>
                <Text style={style.inningHeaderTeamScore}>{`${data.runs}-${data.wicket} (${data.overs})`}</Text>
            </View>
        )
    }

    const renderExtras = (extra) => {
        return (
            <View >
                {_Separator()}
                <View style={style.inningExtraContainer}>
                    <Text style={style.extraTitle}>Extras</Text>
                    <Text style={style.extraScore}>{extra.extra_score}</Text>
                    <Text style={style.extraDetails}>{extra.extra_detail}</Text>
                </View>
                {_Separator()}
            </View>
        )
    }

    const renderTotal = (data) => {
        return (
            <View style={style.inningTotalContainer}>
                <Text style={style.inningTotalText}>Total</Text>
                <Text style={style.inningHeaderScore}>
                {`${data.runs}-${data.wicket} (${data.overs})`}</Text>
            </View>
        )
    }

    const renderYetToBat = (data) => {
        return (
            <View>
                {_Separator()}
                <View style={style.yetToBatContainer}>
                    <Text style={style.yetToBatHeaderRole}>Did Not Bat</Text>
                </View>
                <View style={style.yetToBatPlayerContainer}>
                    <Text style={style.yetToBatPlayersList}>{data}</Text>
                </View>
                {_Separator()}
            </View>
        )
    }

    const viewPlayerStats = (player) => {
        props.navigation.navigate('PlayerProfile', { player })
    }


    const renderBatting = (data) => {
        return (
            <View>
                <View style={style.sectionHeaderContainer}>
                   
                    <Text style={style.sectionHeaderRole}>Batsman</Text>
                    
                    <Text style={style.sectionHeaderPoint}>R</Text>
                    <Text style={style.sectionHeaderPoint}>B</Text>
                    <Text style={style.sectionHeaderPoint}>4s</Text>
                    <Text style={style.sectionHeaderPoint}>6s</Text>
                    <Text style={style.sectionHeaderPoint}>SR</Text>
                </View>
                <FlatList
                    data={data}
                    renderItem={renderBattingPoints}
                    ItemSeparatorComponent={_Separator}
                    keyExtractor={(item, index) => (index.toString())} />
            </View>
        )
    }

    const renderFallOfWickets = (data) => {
        return (
            <View>
                <View style={style.sectionHeaderContainer}>
                    <Text style={style.sectionHeaderRole}>Fall of Wickets</Text>
                    <Text style={style.sectionHeaderPoint}>Srore</Text>
                    <Text style={style.sectionHeaderPoint}>Over</Text>
                </View>
                <FlatList
                    data={data}
                    renderItem={renderWicketsFall}
                    ItemSeparatorComponent={_Separator}
                    keyExtractor={(item, index) => (index.toString())} />
            </View>
        )
    }

    const renderBowling = (data) => {
        return (
            <View>
                <View style={style.sectionHeaderContainer}>
                    <Text style={style.sectionHeaderRole}>Bowler</Text>
                    <Text style={style.sectionHeaderPoint}>O</Text>
                    <Text style={style.sectionHeaderPoint}>M</Text>
                    <Text style={style.sectionHeaderPoint}>R</Text>
                    <Text style={style.sectionHeaderPoint}>W</Text>
                    <Text style={style.sectionHeaderPoint}>ER</Text>
                </View>
                <FlatList
                    data={data}
                    renderItem={renderBowlingPoints}
                    ItemSeparatorComponent={_Separator}
                    keyExtractor={(item, index) => (index.toString())} />
            </View>
        )
    }

    const _Separator = () => <View style={style.separator} />

    const renderBattingPoints = ({ item }) => (
        <View style={style.pointsContainer}>
        
            <TouchableOpacity style={style.battingPlayer} activeOpacity={0.5} onPress={() => viewPlayerStats(item.player_id)}>
                <Text style={style.batsmanName}>{item.player_name}</Text>
                <Text style={style.battingStatus}>{item.batting_status}</Text>
            </TouchableOpacity>
                
    
            <Text style={style.points}>{item.runs}</Text>
            <Text style={style.points}>{item.balls}</Text>
            <Text style={style.points}>{item['4s']}</Text>
            <Text style={style.points}>{item['6s']}</Text>
            <Text style={style.points}>{item.strike_rate}</Text>
        </View>
    )

    const renderBowlingPoints = ({ item }) => (
        <View style={style.pointsContainer}>
            <Text style={style.playerName}>{item.player_name}</Text>
            <Text style={style.points}>{item.overs}</Text>
            <Text style={style.points}>{item.maiden}</Text>
            <Text style={style.points}>{item.runs}</Text>
            <Text style={style.points}>{item.wicket}</Text>
            <Text style={style.points}>{item.economy_rate}</Text>
        </View>
    )

    const renderWicketsFall = ({ item }) => (
        <View style={style.pointsContainer}>
            <Text style={style.playerName}>{item.player_name}</Text>
            <Text style={style.points}>{item.score}</Text>
            <Text style={style.points}>{item.overs}</Text>
        </View>
    )
    
    return (
        <ScrollView style={{ flex: 1 }}>
            <Text style={style.matchStatus}>
                {scorecard.scorecard.match_status}
            </Text>
            {
                scorecard.scorecard.innings && renderInnings(scorecard.scorecard.innings)
            }
            
        </ScrollView>
    )
}
