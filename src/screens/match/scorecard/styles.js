import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    inningContainer: {

    },
    separator: {
        flexDirection: 'column',
        height: 0.5,
        backgroundColor: '#f2f0f0'
    },
    matchStatus: {
        padding: 10,
        color: '#a3343d'
    },
    inningHeaderContainer: {
        flexDirection: 'row',
        backgroundColor: '#6781ab',
        paddingVertical: 10
    },
    inningHeaderTeamName: {
        color: 'white',
        paddingHorizontal: 10,
        flex: 3
    },
    inningHeaderScore: {
        color: 'black',
        flex: 1
    },
    battingContainer: {

    },
    bowlingContainer: {

    },
    wicketsContainer: {

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
    batsmanName: {
        color: 'black',
        fontSize: 13
    },
    playerName: {
        flex: 3,
        color: 'black',
        fontSize: 14
    },
    battingStatus: {
        color: '#babfbc',
        fontSize: 10
    },
    inningExtraContainer: {
        flexDirection: 'row',
        padding: 10,
    },
    extraTitle: {
        flex: 3,
        color: 'black',
        fontSize: 13
    },
    extraScore: {
        flex: 1,
        textAlign: 'center',
        color: 'black',
        fontSize: 12
    },
    extraDetails: {
        flex: 4,
        color: 'black',
        textAlign: 'center',
        fontSize: 14,
        textTransform: 'capitalize'
    },
    inningTotalText:{
        flex: 3,
        color: 'black',
        fontSize: 14,
    },
    inningTotalContainer:{
        flexDirection: 'row',
        padding: 10,
    },
    yetToBatContainer:{
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    yetToBatPlayerContainer:{
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingBottom: 10,
        paddingTop: 5,
    },
    yetToBatHeaderRole:{
        flex:1,
        color:'black'
    },
    yetToBatPlayersList:{
        flex:1,
        color:'#babfbc'
    },
    inningHeaderTeamScore: {
        color: 'white',
        flex: 1
    },
    parentHr:{
        height:1,
        color: 'white',
        width:'100%'
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        backgroundColor: 'grey',
    },
    active: {
    backgroundColor: 'rgba(255,255,255,1)',
    },
    inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
    },
    header: {
        backgroundColor: '#F5FCFF',
        padding: 10,
      },
      headerText: {
       
        fontSize: 16,
        fontWeight: '500',
      },


})