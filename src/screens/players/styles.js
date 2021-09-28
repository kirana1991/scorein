import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    teamContainer: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 5,
        marginVertical : 3
    },
    playerImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    playerRole: {
        color: 'black',
        marginHorizontal: 16,
        fontSize: 12,
    },
    playerName: {
        color: 'black',
        marginHorizontal: 18,
        fontSize: 14,
    },
    playerInfo: {
        justifyContent: 'center'
    },
    separator: {
        flex: 1,
        height: 0.5,
        backgroundColor: '#f2f0f0'
    }
})