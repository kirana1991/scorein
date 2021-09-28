import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop : 5
    },
    teamContainer: {
        flexDirection: 'row',
        marginVertical: 5,
        marginHorizontal: 10,
    },
    teamName: {
        flex: 2,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16
    },
    teamScore: {
        flex: 1,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16
    },
    matchStatusText: {
        color: 'green',
        padding: 10,
        fontWeight: 'bold',
        fontSize: 16
    },
    playerOfTheMatchContainer: {
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderWidth: 0.5,
        borderColor: '#f2f0f0',
    },
    playerOfTheMatchLabel: {
        color: 'black',
        paddingVertical: 5,
        fontSize: 14
    },
    playerOfTheMatchInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    playerOfTheMatchImage: {
        width: 50,
        height: 50,
        borderRadius: 30
    },
    playerOfTheMatchName: {
        fontSize: 14,
        color: 'black',
        paddingHorizontal: 16
    },
    comentoryContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 8
    },
    comentoryOver: {
        flex: 1,
        color: 'black'
    },
    comentoryScoreContainer: {
        flex: 1
    },
    comentoryScoreBackground: {
        justifyContent: 'center',
        // borderColor: 'balck',
        borderRadius: 30,
        width: 20,
        height: 20
    },
    comentoryScoreText: {
        color: 'white',
        textAlign: 'center'
    },
    comentoryText: {
        flex: 5,
        color: 'black'
    },
    separator: {
        flex: 1,
        height: 1,
        backgroundColor: 'black'
    }
})