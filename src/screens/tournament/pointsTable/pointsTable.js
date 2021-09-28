import React, {useEffect} from 'react'
import {View, Text, FlatList} from 'react-native'
import style from './styles'
import { useDispatch, useSelector } from 'react-redux'		
import { fetchPointsTableScreenData } from './pointsTableReducer'

export default function PointsTable(props) {

    
    const dispatch = useDispatch()

    useEffect(() => {
        console.log('pointsTable');
        dispatch(fetchPointsTableScreenData(props.route.params.tournamentId));
    }, [props])

    const pointsTable = useSelector((state) => state.pointsScreen.pointsTable);

    const renderPoints = ({ item }) => (
        <View>
            {item.group_name &&
            <Text style={style.groupHeader}>{item.group_name}</Text> }
            {
                item.teams.map(point => {
                    return <Points key={point.team_name} points={point} />
                })
            }
        </View>
    )


    const Points = (props) => {
        const {
            team_name,
            matches_played,
            won,
            loss,
            tie,
            points,
            run_rate
        } = props.points

        return (
    
            <View style={style.pointView}>
                <Text style={style.pointsTeamName}>{team_name}</Text>
                <Text style={style.points}>{matches_played}</Text>
                <Text style={style.points}>{won}</Text>
                <Text style={style.points}>{loss}</Text>
                <Text style={style.points}>{tie}</Text>
                <Text style={style.points}>{points}</Text>
                <Text style={style.pointsRunRate}>{run_rate}</Text>
            </View>

        )
    }

    const Header = () => (
        <View style={style.pointHeaderView}>
            <Text style={style.pointsHeaderTeamName}>Teams</Text>
            <Text style={style.pointsHeaderTitle}>P</Text>
            <Text style={style.pointsHeaderTitle}>W</Text>
            <Text style={style.pointsHeaderTitle}>L</Text>
            <Text style={style.pointsHeaderTitle}>Tie</Text>
            <Text style={style.pointsHeaderTitle}>Pts</Text>
            <Text style={style.pointsHeaderRunRateTitle}>NRR</Text>
        </View>
    )

    return (
        <View style={style.container}>
            <Header />
            <FlatList
                data={pointsTable}
                renderItem={renderPoints}
            />
        </View>
    )
}
