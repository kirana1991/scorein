import { createSlice } from "@reduxjs/toolkit";
import { HOST, PLAYER_PROFILE } from './../../utils/network'

export const initialState = {
    loading: false,
    player: [],
    hasErrors: false,
}

const playerProfileScreen = createSlice({
    name: 'playerProfileScreen',
    initialState,
    reducers: {
        getPlayerProfileScreenData: state => {
            state.loading = true
        },

        getPlayerProfileScreenSuccess: (state, {payload}) => {
            state.player = payload
            state.loading = false
            state.hasErrors = false
        },

        getPlayerProfileScreenFailure: state => {
            state.loading = false
            state.hasErrors = true
        },
    },
});

export const { getPlayerProfileScreenData, getPlayerProfileScreenSuccess, getPlayerProfileScreenFailure} = playerProfileScreen.actions

export default playerProfileScreen.reducer

export function fetchPlayerProfileData(id){
    return async dispatch => {
        dispatch(getPlayerProfileScreenData())
        try{
            const response = await fetch(HOST+PLAYER_PROFILE(id))
            const data = await response.json()
            dispatch(getPlayerProfileScreenSuccess(data))
        } catch(error){
            dispatch(getPlayerProfileScreenFailure)
        }
    }
}