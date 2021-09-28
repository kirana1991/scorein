import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    matchHeader: {
        paddingHorizontal: 12,
        paddingVertical: 7,
        backgroundColor: '#80CBC4'
    },
    matchHeaderTitle: {
        color: 'black',
        fontWeight: 'bold'
    },
    teamContainer: {
        flexDirection: 'row',
        elevation: 3,
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 5
    },
    teamLogo: {
        margin: 10,
        borderRadius: 30,
        alignSelf: 'center',
        height: 60,
        width: 60
    },
    teamName: {
        textTransform: 'uppercase',
        fontSize: 16,
        alignSelf: 'center',
        color: 'black',
        fontWeight: 'bold'
    }
})