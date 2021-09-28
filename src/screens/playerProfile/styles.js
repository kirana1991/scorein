import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContent:{
	    padding:15,
	    alignItems: 'center',
	    backgroundColor:'white',
	  },
	  avatar: {
	    width: 130,
	    height: 130,
	    borderRadius: 10,
	    borderWidth: 4,
	    borderColor: "white",
	    marginBottom:10,
	  },
	  name:{
	    fontSize:22,
	    color:"#000000",
	    fontWeight:'600',
	  },
	  sectionHeaderContainer: {
        flexDirection: 'row',
        backgroundColor: '#e6eefc',
        paddingHorizontal: 10,
        paddingVertical: 7
    },
    sectionHeaderRole: {
        flex: 4,
        color: 'black'
    },
    sectionHeaderPoint: {
        flex: 1,
        color: 'black',
        textAlign: 'center'
    },
    pointsContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: 'center'
    },
    battingPlayer: {
        flex: 4
    },
    points: {
        flex: 1,
        textAlign: 'center',
        color: 'black',
        fontSize: 12
    },
    teamName:{
    	fontSize:14,
	    color:"#a39d9d",
	    fontWeight:'300',
    },
    tournamentHeaderContainer:{
    	flexDirection: 'row',
        backgroundColor: '#486a96',
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    tournamentHeader:{
    	flex: 1,
        color: 'white'
    },
    separator: {
        flex: 1,
        height: 0.5,
        backgroundColor: '#f2f0f0'
    }
    
})