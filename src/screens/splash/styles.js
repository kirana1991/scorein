import { StyleSheet } from 'react-native'
import { THEME_PRIMARY } from './../../utils/constant'

export default StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: THEME_PRIMARY
    },
    container: {
        flex: 1,
        backgroundColor: THEME_PRIMARY,
        justifyContent: 'center',
        alignItems: 'center'
    },
    scoreIn: {
        marginTop: -60
    },
    logo: {
        width: 100,
        height: 100
    }
})