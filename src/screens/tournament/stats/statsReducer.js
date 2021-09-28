import { createSlice } from "@reduxjs/toolkit";
import { HOST, TOURNAMENT_STATS } from './../../../utils/network'

export const initialState = {
    loading: false,
    stats: [],
    hasErrors: false,
}

const statsScreen = createSlice({
    name: 'statsScreen',
    initialState,
    reducers: {
        getStatsData: state => {
            state.loading = true
        },

        getStatsSuccess: (state, {payload}) => {
            state.stats = payload
            state.loading = false
            state.hasErrors = false
        },

        getStatsFailure: state => {
            state.loading = false
            state.hasErrors = true
        },
    },
});

export const { getStatsData, getStatsSuccess, getStatsFailure} = statsScreen.actions

export default statsScreen.reducer

export function fetchStatsScreenData(id){
    return async dispatch => {
        dispatch(getStatsData())
        try{
            const response = await fetch(HOST+TOURNAMENT_STATS(id))
            const data = await response.json()
            dispatch(getStatsSuccess(data))
            
        } catch(error){  
            dispatch(getStatsFailure)
        }
    }
}