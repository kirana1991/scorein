import React, { useState , useEffect, useRef } from 'react'
import { View, TouchableOpacity, Text, FlatList, StyleSheet, LayoutAnimation, Platform, UIManager} from "react-native";
import styles from './styles'
import Icon from "react-native-vector-icons/MaterialIcons";


export default function ScorecardAccordian(props) {

    const data = props.data;
    const content = useRef(null);
    console.log(data);
    const [expanded, setExpanded] = useState(true);

    useEffect(() => {
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }, [])

    toggleExpand=()=>{
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded)
    }


    return (
        <View>
             <TouchableOpacity ref={content} style={styles.row} onPress={()=>toggleExpand()}>
                 <Text style={[styles.title, styles.font]}>{props.title}</Text>
                 <Icon name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30}  />
             </TouchableOpacity>
             <View style={styles.parentHr}/>
             {
                expanded &&
                 <View style={styles.child}>
                     <Text>{data}</Text>    
                 </View>
             }
             
        </View>
     )
}
