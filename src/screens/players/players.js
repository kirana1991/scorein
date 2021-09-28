import React, { useEffect } from 'react'
import { View, Text, Image, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import style from './styles'

export default function Players(props) {

    const players = props.route.params.players;
    
    useEffect(() => {
        props.navigation.setOptions({
            title: props.route.params.teamName,
        });
    }, [props.route.params.teamName])

    const _Separator = () => <View style={style.separator} />

    const renderPlayers = ({ item }) => (
        <TouchableOpacity activeOpacity={0.5} onPress={() => viewPlayerStats(item.player_id)}>
            <View style={style.teamContainer}>

                <Image style={style.playerImage}
                    source={item.image_url ? { uri: item.image_url }
                        : require('./../../../assets/images/player.png')} />
                <View style={style.playerInfo} >
                    <Text style={style.playerName}>{item.player_name}</Text>
                    {item.role != null && item.role.length > 0 &&
                        <Text style={style.playerRole}>{item.role}</Text>}
                </View>

            </View>
        </TouchableOpacity>
    )

    const viewPlayerStats = (player) => {
        props.navigation.navigate('PlayerProfile', { player })
    }
    console.log(players);
    return (
        <SafeAreaView style={style.safeArea}>
            <View style={style.container}>
                <FlatList
                    data={players}
                    renderItem={renderPlayers}
                    ItemSeparatorComponent={_Separator}
                    keyExtractor={(item, index) => (index.toString())} />
            </View>
        </SafeAreaView>
    )
}
