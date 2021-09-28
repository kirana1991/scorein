import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    hearderPlayer: {
        flex: 4,
        color: 'black',
        fontWeight: 'bold'
    },
    hearderStat: {
        flex: 1,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold'
    },
    headerView: {
        flexDirection: 'row',
        backgroundColor: '#e6eefc',
        paddingVertical: 8,
        paddingHorizontal: 10,
    },
    statContainer: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        flex: 1,
        flexDirection: 'row'
    },
    playerDeatilsView: {
        flex: 4
    },
    playerName: {
        color: 'black',
        fontSize: 15
    },
    playerTeam: {
        color: 'grey',
        fontSize: 12
    },
    pointText: {
        alignSelf: 'center',
        textAlign: 'center',
        color: 'black',
        flex: 1,
        fontSize: 14
    },
    separator: {
        flex: 1,
        height: 0.5,
        backgroundColor: '#f2f0f0'
    }
})