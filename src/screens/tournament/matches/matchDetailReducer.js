import { createSlice } from "@reduxjs/toolkit";
import { HOST, TOURNAMENT_MATCH_LIST } from './../../../utils/network'

export const initialState = {
    loading: false,
    matches: [],
    hasErrors: false,
}

const matchDetialScreen = createSlice({
    name: 'matchDetialScreen',
    initialState,
    reducers: {
        getMatchesData: state => {
            state.loading = true
        },

        getMatchesDataSuccess: (state, {payload}) => {
            state.matches = payload
            state.loading = false
            state.hasErrors = false
        },

        getMatchesDataFailure: state => {
            state.loading = false
            state.hasErrors = true
        },
    },
});

export const { getMatchesData, getMatchesDataSuccess, getMatchesDataFailure} = matchDetialScreen.actions

export default matchDetialScreen.reducer

export function fetchMatchDetailScreenData(id){
    return async dispatch => {
        dispatch(getMatchesData())
        try{
            const response = await fetch(HOST+TOURNAMENT_MATCH_LIST(id))
            const data = await response.json()
            dispatch(getMatchesDataSuccess(data))
            
        } catch(error){
            dispatch(getMatchesDataFailure)
        }
    }
}