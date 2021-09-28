import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 5,
        marginHorizontal: 10,
        padding: 10,
        elevation: 3,
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.7
    },
    matchInfoContainer: {
        flexDirection: 'row'
    },
    matchTitleText: {
        flex: 1,
        color: '#424242',
        fontSize: 12,
        color: 'black',
        marginBottom: 5
    },
    matchTypeContainer: {
        backgroundColor: '#2196F3',
        alignItems: 'center',
        borderRadius: 30,
        paddingHorizontal: 8,
        paddingVertical: 3,
        alignSelf: 'flex-start'
    },
    matchTypeText: {
        color: '#fff',
        textTransform: 'uppercase',
        fontSize: 10,
    },
    teamScoreContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    teamAvatarBackground: {
        backgroundColor: '#4b807a',
        height: 30,
        width: 30,
        justifyContent: 'center',
        borderRadius: 30
    },
    teamAvatarText: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 12
    },
    teamNameText: {
        padding: 10,
        flex: 1,
        color: 'black',
    },
    teamScoreText: {
        padding: 10,
        color: 'black',
    },
    matchSummaryText: {
        margin: 2,
        color: 'red',
        fontSize: 12,
    }
});