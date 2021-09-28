import React, {useEffect} from 'react'
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import style from './styles'
import { useDispatch, useSelector } from 'react-redux'		
import { fetchStatsScreenData } from './statsReducer'

export default function Stats(props) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchStatsScreenData(props.route.params.tournamentId));
    }, [props])

    const stats = useSelector((state) => state.statsScreen.stats);

    const separator = () => <View style={style.separator} />

    const renderStats = ({ item, index }) => (
        <TouchableOpacity activeOpacity={1} onPress={() => onStatClick(index, item.stats_name)}>
            <View style={style.statContainer}>
                <Text style={style.statText}>{item.stats_name}</Text>
            </View>
            {separator}
        </TouchableOpacity>
    )

    const onStatClick = (index, name) => {
        props.navigation.navigate('Stat',{index, name})
    }

    return (
        <View style={style.container}>
            <FlatList
                data={stats}
                renderItem={renderStats}
                keyExtractor={(item, index) => (index.toString())}
               
            />
        </View>
    )
}
