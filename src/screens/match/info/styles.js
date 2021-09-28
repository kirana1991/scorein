import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    titleText: {
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: '#e6eefc',
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    squadContainer: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'
    },
    squadImage: {
        width: 46,
        height: 46
    },
    squadLabel: {
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',
        paddingHorizontal: 16
    },
    separator: {
        flexDirection: 'column',
        height: 0.5,
        backgroundColor: 'grey'
    },
    infoContainer: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'
    },
    infoLabel: {
        flex: 1,
        color: 'black',
        fontSize: 14,
        textTransform: 'capitalize'
    },
    infoValue: {
        flex: 2,
        color: 'black',
        fontSize: 14
    }
})