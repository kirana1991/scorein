import { createSlice } from "@reduxjs/toolkit";
import { HOST, MATCH_INFO } from './../../../utils/network'

export const initialState = {
    loading: false,
    info: [],
    squads: [],
    hasErrors: false,
}

const matchInfoScreen = createSlice({
    name: 'matchInfoScreen',
    initialState,
    reducers: {
        getMatchInfoData: state => {
            state.loading = true
        },

        getMatchesInfoSuccess: (state, {payload}) => {
            state.info = payload.info
            state.squads = payload.squads
            state.loading = false
            state.hasErrors = false
        },

        getMatchesInfoFailure: state => {
            state.loading = false
            state.hasErrors = true
        },
    },
});

export const { getMatchInfoData, getMatchesInfoSuccess, getMatchesInfoFailure} = matchInfoScreen.actions

export default matchInfoScreen.reducer

export function fetchMatchInfoData(matchId){
    return async dispatch => {
        dispatch(getMatchInfoData())
        try{
            const response = await fetch(HOST+MATCH_INFO(matchId))
            const data = await response.json()
            dispatch(getMatchesInfoSuccess(data))
            
        } catch(error){
            dispatch(getMatchesInfoFailure)
        }
    }
}
