import {combineReducers} from '@reduxjs/toolkit';
import homeScreen from './screens/home/home/homeReducer'
import matchesScreen from './screens/home/matches/matchesReducer'
import tournamentHomeScreen from './screens/home/tournaments/tournamentHomeScreenReducer';
import matchInfoScreen from './screens/match/info/matchInfoReducer';
import matchLiveScreen from './screens/match/live/matchLiveReducer';
import matchScorecardScreen from './screens/match/scorecard/matchScorecardReducer';
import matchDetailScreen from './screens/tournament/matches/matchDetailReducer';
import teamsScreen from './screens/tournament/teams/teamsReducer';
import pointsScreen from './screens/tournament/pointsTable/pointsTableReducer';
import statsScreen from './screens/tournament/stats/statsReducer';
import playerProfileScreen from './screens/playerProfile/playerProfileReducer';

const rootReducer = combineReducers({
    homeScreen : homeScreen,
    matchesScreen : matchesScreen,
    tournamentHomeScreen: tournamentHomeScreen,
    matchInfoScreen: matchInfoScreen,
    matchLiveScreen:matchLiveScreen,
    matchScorecardScreen:matchScorecardScreen,
    matchDetailScreen:matchDetailScreen,
    teamsScreen:teamsScreen,
    pointsScreen:pointsScreen,
    statsScreen:statsScreen,
    playerProfileScreen:playerProfileScreen,
});

export default rootReducer;