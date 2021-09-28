import { createSlice } from "@reduxjs/toolkit";
import { HOST, TOURNAMENT } from './../../../utils/network'

export const initialState = {
    loading: false,
    overarm: [],
    underarm: [],
    hasErrors: false,
}

const tournamentHomeScreen = createSlice({
    name: 'tournamentHomeScreen',
    initialState,
    reducers: {
        getTournamentData: state => {
            state.loading = true
        },

        getTournamentDataSuccess: (state, {payload}) => {
            state.overarm = payload.overarm
            state.underarm = payload.underarm
            state.loading = false
            state.hasErrors = false
        },

        getTournamentDataFailure: state => {
            state.loading = false
            state.hasErrors = true
        },
    },
});

export const { getTournamentData, getTournamentDataSuccess, getTournamentDataFailure} = tournamentHomeScreen.actions

export default tournamentHomeScreen.reducer

export function fetchTournamentHomeScreenData(){
    return async dispatch => {
        dispatch(getTournamentData())
        try{
            const response = await fetch(HOST+TOURNAMENT)
            const data = await response.json()
            dispatch(getTournamentDataSuccess(data))
            
        } catch(error){
            
            dispatch(getTournamentDataFailure)
        }
    }
}