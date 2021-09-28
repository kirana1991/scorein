import { StyleSheet } from 'react-native'
import { BACKGROUND_COL } from './../../../../utils/constant'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUND_COL,
    },
    matchHeader: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        backgroundColor: '#e6eefc'
    },
    matchHeaderTitle: {
        color: 'black',
        fontWeight: 'bold'
    }
})