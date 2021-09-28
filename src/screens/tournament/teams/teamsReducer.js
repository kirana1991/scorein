import { createSlice } from "@reduxjs/toolkit";
import { HOST, TOURNAMENT_TEAMS } from './../../../utils/network'

export const initialState = {
    loading: false,
    teams: [],
    hasErrors: false,
}

const teamScreen = createSlice({
    name: 'teamScreen',
    initialState,
    reducers: {
        getTeamsData: state => {
            state.loading = true
        },

        getTeamsDataSuccess: (state, {payload}) => {
            state.teams = payload
            state.loading = false
            state.hasErrors = false
        },

        getTeamsDataFailure: state => {
            state.loading = false
            state.hasErrors = true
        },
    },
});

export const { getTeamsData, getTeamsDataSuccess, getTeamsDataFailure} = teamScreen.actions

export default teamScreen.reducer

export function fetchTeamScreenData(id){
    return async dispatch => {
        dispatch(getTeamsData())
        try{
            const response = await fetch(HOST+TOURNAMENT_TEAMS(id))
            const data = await response.json()
            dispatch(getTeamsDataSuccess(data))
            
        } catch(error){
            
            dispatch(getTeamsDataFailure)
        }
    }
}