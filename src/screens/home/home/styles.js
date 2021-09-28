import { StyleSheet } from 'react-native'
import { THEME_PRIMARY } from './../../../utils/constant'
import { BACKGROUND_COL } from './../../../utils/constant'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUND_COL,
    },


    newsContainer: {
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal: 10,
        elevation: 3,
        backgroundColor: 'white',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.7
    },
    newsImage: {
        flex: 1,
        height: 170
    },
    viewpager: {
        marginHorizontal: 5,
        height: 170
    },
    newsHeadertext: {
        fontWeight: 'bold',
        color: 'black',
        marginVertical: 7
    },
    newsContentText: {
        color: '#969997'
    },
    storiesText: {
        color: 'black',
        marginHorizontal: 15,
        marginVertical: 5,
        fontSize: 14,
        fontWeight: 'bold'
    },
    storiesTextMatch:{
        color: 'black',
        marginHorizontal: 15,
        marginTop: 10,
        fontSize: 14,
        fontWeight: 'bold'
    },

    matchesText: {
        color: 'black',
        marginHorizontal: 15,
        marginVertical: 5,
        fontSize: 14,
        fontWeight: 'bold'
    }
})