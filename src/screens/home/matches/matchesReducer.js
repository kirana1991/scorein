import { createSlice } from "@reduxjs/toolkit";
import { HOST, MATCHES } from './../../../utils/network'

export const initialState = {
    loading: false,
    live: [],
    upcoming: [],
    recent: [],
    hasErrors: false,
}

const matchesScreen = createSlice({
    name: 'matchesScreen',
    initialState,
    reducers: {
        getMatchesData: state => {
            state.loading = true
        },

        getMatchesDataSuccess: (state, {payload}) => {
            state.live = payload.live
            state.upcoming = payload.upcoming
            state.recent = payload.recent
            state.loading = false
            state.hasErrors = false
        },

        getMatchesDataFailure: state => {
            state.loading = false
            state.hasErrors = true
        },
    },
});

export const { getMatchesData, getMatchesDataSuccess, getMatchesDataFailure} = matchesScreen.actions

export default matchesScreen.reducer

export function fetchMatchesScreenData(){
    return async dispatch => {
        dispatch(getMatchesData())
        try{
            const response = await fetch(HOST+MATCHES)
            const data = await response.json()
            dispatch(getMatchesDataSuccess(data))
            
        } catch(error){
            
            dispatch(getMatchesDataFailure)
        }
    }
}