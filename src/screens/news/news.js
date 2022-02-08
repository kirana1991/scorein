import React, {useEffect} from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import style from './styles'

export default function News(props) {
    console.log(props);
    const news = props.route.params.news;

    useEffect(() => {
        props.navigation.setOptions({
            title: props.route.params.news.news_headline,
        });
    }, [props])
    return (
        <ScrollView style={style.container}>
            <View style={style.container}>
            <Image style={style.newsImage} source={{ uri: news.image }} resizeMode="stretch"/>
                <Text style={style.newsHeadertext}>{news.news_headline}</Text>
                <Text style={style.newsDateText}>{news.news_date}</Text>
                <Text style={style.newsContentText}>{news.news_description}</Text>
            </View>
        </ScrollView>
    )
}
