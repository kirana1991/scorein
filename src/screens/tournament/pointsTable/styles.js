import { StyleSheet } from 'react-native'
import { THEME_PRIMARY } from './../../../utils/appConstants'
export default StyleSheet.create({
    container: {
        flex: 1,
    },
    pointsHeaderTeamName: {
        flex: 4,
        flexWrap: 'wrap',
        fontWeight: 'bold',
        color: 'black'
    },
    pointsTeamName: {
        flex: 4,
        flexWrap: 'wrap',
        color: 'black'
    },
    pointsHeaderTitle: {
        flex: 1,
        flexWrap: 'wrap',
        textAlign: 'right',
        fontWeight: 'bold',
        color: 'black'
    },
    pointsHeaderRunRateTitle:{
        flex: 2,
        flexWrap: 'wrap',
        textAlign: 'right',
        fontWeight: 'bold',
        color: 'black'
    },
    points: {
        flex: 1,
        flexWrap: 'wrap',
        textAlign: 'right',
        color: 'black',
    },
    pointsRunRate: {
        flex: 2,
        flexWrap: 'wrap',
        textAlign: 'right',
        color: 'black',
    },
    groupHeader: {
        fontWeight: 'bold',
        paddingVertical: 7,
        paddingHorizontal:12,
        backgroundColor: '#e6eefc',
        fontSize: 14,
        color: 'black'
    },
    pointHeaderView: {
        paddingVertical: 7,
        flexDirection: 'row',
        backgroundColor: '#e6eefc',
        paddingHorizontal:12,
    },
    pointView: {
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal:12,
    },
    separator: {
        flex: 1,
        height: 1.5,
        backgroundColor: 'red'
    }
})