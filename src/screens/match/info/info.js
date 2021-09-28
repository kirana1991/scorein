import React,{useEffect} from 'react'
import { ScrollView,View,Text,TouchableOpacity,Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'		
import { fetchMatchInfoData } from './matchInfoReducer';
import style from './styles'
import Loader from './../../../components/loader'

export default function Info(props) {
    console.log(props);
    const  matchInfo  = useSelector((state) => state.matchInfoScreen);
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMatchInfoData(props.route.params.matchId))
    }, [props])

    const renderInfoView = (info) => {
        if (!info) {
            return <View></View>
        }

        return Object.keys(info).map((key) => {
            return (
                <View key={key} style={style.infoContainer}>
                    <Text style={style.infoLabel}>{key}</Text>
                    <Text style={style.infoValue}>{info[key]}</Text>
                </View>
            )
        })

    }
    const renderSquads = (squads) => {
        if (!squads) {
            return <View></View>
        }

        return squads.map((squad, index) => {
            return (
                <View key={index.toString()}>
                    <TouchableOpacity style={style.squadContainer} onPress={() => viewPlayers(squad.players, squad.team_name)}>
                        <Image style={style.squadImage}
                            source={{ uri: squad.image_url }}/>
                        <Text style={style.squadLabel}>{squad.team_name}</Text>
                    </TouchableOpacity>
                    <View style={index < squads.length - 1 ? style.separator : null} />
                </View>
            )
        });
    }

    const viewPlayers = (players, team) => {
        props.navigation.navigate('Players', { players:players, teamName: team});
    }
    
    return (
        <ScrollView>
            { matchInfo.loading &&  <Loader/>}
            { !matchInfo.loading &&
                <View style={style.container}>
                    {matchInfo.squads && <Text style={style.titleText}>SQUADS</Text>}
                    {renderSquads(matchInfo.squads)}
                    {matchInfo.info && <Text style={style.titleText}>INFO</Text>}
                    {renderInfoView(matchInfo.info)}
                </View>
            }
        </ScrollView>
    )
}
