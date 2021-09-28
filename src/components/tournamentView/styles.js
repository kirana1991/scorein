import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    tournamentContainer: {
        flexDirection: 'row',
        elevation: 3,
        backgroundColor: 'white',
        marginVertical: 4,
        borderRadius: 5,
        marginHorizontal : 10
    },
    tournamentLogo: {
        margin: 10,
        alignSelf: 'center',
        height: 80,
        width: 80,
    },
    tournamentInfoContainer: {
        flex: 1,
        marginVertical: 10,
        marginEnd: 10
    },
    tournamentName: {
        textTransform: 'uppercase',
        fontSize: 12,
        color: 'black',
        fontWeight: 'bold',
        marginBottom : 3
    },
    tournamentDate: {
        marginVertical: 3,
        fontSize: 12,
        color: 'black',
    },
    tournamentVenue: {
        marginVertical: 3,
        fontSize: 12,
        color: 'black',
    },
    tournamentContact: {
        marginVertical: 3,
        fontSize: 12,
        color: 'black',
    }
})