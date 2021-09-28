import { createSlice } from "@reduxjs/toolkit";
import { HOST, TOURNAMENT_POINTS_TABLE } from './../../../utils/network'

export const initialState = {
    loading: false,
    pointsTable: [],
    hasErrors: false,
}

const pointsTableScreen = createSlice({
    name: 'pointsTableScreen',
    initialState,
    reducers: {
        getPointsTableData: state => {
            state.loading = true
        },

        getPointsTableSuccess: (state, {payload}) => {
            state.pointsTable = payload
            state.loading = false
            state.hasErrors = false
        },

        getPointsTableFailure: state => {
            state.loading = false
            state.hasErrors = true
        },
    },
});

export const { getPointsTableData, getPointsTableSuccess, getPointsTableFailure} = pointsTableScreen.actions

export default pointsTableScreen.reducer

export function fetchPointsTableScreenData(id){
    return async dispatch => {
        dispatch(getPointsTableData())
        try{
            const response = await fetch(HOST+TOURNAMENT_POINTS_TABLE(id))
            const data = await response.json()
            dispatch(getPointsTableSuccess(data))
            
        } catch(error){  
            dispatch(getPointsTableFailure)
        }
    }
}