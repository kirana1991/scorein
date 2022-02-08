import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'		
import { Text, SafeAreaView, FlatList, View, Image, TouchableOpacity } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import MatchCarousel from '../../../components/carousel/matchCarousel';
import { fetchHomeScreenData } from './homeReducer'	;
import MatchCard from './../../../components/matchCard';	
import style from './styles'
import Loader from '../../../components/loader/loader';

export default function Home({navigation}) {

    const dispatch = useDispatch()		
    
    useEffect(() => {
        console.log('home');
        dispatch(fetchHomeScreenData())
    }, [matches])

    const { matches, news, loading }  = useSelector((state) => state.homeScreen);

    renderNews = ({ item }) => {
        return (
            <TouchableOpacity activeOpacity={0.7} onPress={() => viewNews(item)}>
                <View style={style.newsContainer} key={item.id}>
                    <Image style={style.newsImage} source={{ uri: item.image }} resizeMode="stretch"/>
                    <Text style={style.newsHeadertext}>{item.news_headline}</Text>
                    <Text style={style.newsContentText}>{item.news_description}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    viewMatch = (id, matchHeader) => {
        navigation.navigate('Match',{ matchId : id, header:  matchHeader});
    }

    getMatchSummaries = (matches) => {
        return matches.map((match) => (
            <MatchCard summary={match} showTournament={true} onPress={() => viewMatch(match.match_id,match.match_header)} />
        ))
    }

    viewNews = (news) => {
        navigation.navigate('News',{news});
    }
   
    return (
        <SafeAreaView>
            <ScrollView>
                { loading &&  <Loader/>}
                {matches && <Text style={style.storiesTextMatch}>Matches</Text>}
                {matches && <MatchCarousel  data={getMatchSummaries(matches)} style={style.viewpager}  />}
                {news && <Text style={style.storiesText}>Stories</Text>}
                <FlatList
                    data={news}
                    renderItem={renderNews}
                    keyExtractor={(item, _index) => (item.id.toString())} />
            </ScrollView>
        </SafeAreaView>
    )
}
