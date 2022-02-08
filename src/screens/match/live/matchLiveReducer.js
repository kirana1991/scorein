import { createSlice } from "@reduxjs/toolkit";
import { HOST, MATCH_LIVE } from './../../../utils/network'

export const initialState = {
    loading: false,
    live: [],
    hasErrors: false,
    refreshing:false,
}

const matchLiveScreen = createSlice({
    name: 'matchLiveScreen',
    initialState,
    reducers: {
        getMatchLiveData: state => {
            state.loading = true
            state.refreshing=true
        },

        getMatchesLiveSuccess: (state, {payload}) => {
            state.live = payload
            state.loading = false
            state.hasErrors = false
            state.refreshing = false
        },

        getMatchesLiveFailure: state => {
            state.loading = false
            state.hasErrors = true
            state.refreshing = false
        },
    },
});

export const { getMatchLiveData, getMatchesLiveSuccess, getMatchesLiveFailure} = matchLiveScreen.actions

export default matchLiveScreen.reducer

export function fetchMatchLiveData(matchId){
    
    return async dispatch => {
        dispatch(getMatchLiveData())
        try{
            const response = await fetch(HOST+MATCH_LIVE(matchId))
            const data = await response.json()
            dispatch(getMatchesLiveSuccess(data))
            
            
        } catch(error){
            console.log(error)
            dispatch(getMatchesLiveFailure)
        }
    }
}
