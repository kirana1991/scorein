import { createSlice } from '@reduxjs/toolkit'
import { HOST, HOME } from './../../../utils/network'

export const initialState = {
  loading: false,
  hasErrors: false,
  matches: [],
  news: [],
}

// A slice for recipes with our three reducers
const homeScreen = createSlice({
  name: 'homeScreen',
  initialState,
  reducers: {
    getHomeData: state => {
      state.loading = true
    },
    getHomeDataSuccess: (state, { payload }) => {
      state.matches = payload.matches
      state.news = payload.news
      state.loading = false
      state.hasErrors = false
    },
    getHomeDataFailure: state => {
      state.loading = false
      state.hasErrors = true
    },
  },
})

// Three actions generated from the slice
export const { getHomeData, getHomeDataSuccess, getHomeDataFailure } = homeScreen.actions

//export const matches = state => state.homeScreen.matches;


// The reducer
export default homeScreen.reducer

// Asynchronous thunk action
export function fetchHomeScreenData() {
  return async dispatch => {
    dispatch(getHomeData())

    try {
      const response = await fetch(HOST+HOME)
      const data = await response.json()
      console.log(data);
      dispatch(getHomeDataSuccess(data))
    } catch (error) {
      dispatch(getHomeDataFailure())
    }
  }
}