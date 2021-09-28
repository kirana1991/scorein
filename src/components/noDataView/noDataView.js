import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

export default function NoDataView(props) {
    
    return (
        <View style={styles.container} >
            <Text style={styles.text} >
                {props.message} <Image
                style={[styles.smiley, { paddingHorizontal: 10 }]}
                source={require('./../../../assets/images/upside-down-face_1f643.png')} />
            </Text>
        </View>
    )
}
