import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    newsImage: {
        flex: 1,
        height: 270
    },
    newsHeadertext: {
        fontWeight: 'bold',
        fontSize : 16,
        color: 'black',
        marginVertical: 7,
        marginHorizontal: 10,
    },
    newsContentText: {
        color: '#969997',
        marginHorizontal: 10,
    },
    newsDateText:{
        fontSize : 12,
        fontStyle : 'italic',
        color: '#969997',
        marginVertical: 8,
        marginHorizontal: 10,
    }
})