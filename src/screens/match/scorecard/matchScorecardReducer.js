import { createSlice } from "@reduxjs/toolkit";
import { HOST, MATCH_SCORE_CARD } from './../../../utils/network'

export const initialState = {
    loading: false,
    scorecard: [],
    hasErrors: false,
    refreshing:false,
}

const matchScorecardScreen = createSlice({
    name: 'matchScorecardScreen',
    initialState,
    reducers: {
        getMatchScorecardData: state => {
            state.loading = true
            state.refreshing=true
        },

        getMatchesScorecardSuccess: (state, {payload}) => {
            state.scorecard = payload
            state.loading = false
            state.hasErrors = false
            state.refreshing = false
        },

        getMatchesScorecardFailure: state => {
            state.loading = false
            state.hasErrors = true
            state.refreshing = false
        },
    },
});

export const { getMatchScorecardData, getMatchesScorecardSuccess, getMatchesScorecardFailure} = matchScorecardScreen.actions

export default matchScorecardScreen.reducer

export function fetchMatchScorecardData(matchId){
    
    return async dispatch => {
        dispatch(getMatchScorecardData())
        try{
            const response = await fetch(HOST+MATCH_SCORE_CARD(matchId))
            const data = await response.json()
            dispatch(getMatchesScorecardSuccess(data))
            
        } catch(error){
            dispatch(getMatchesScorecardFailure)
        }
    }
}
