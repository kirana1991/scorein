import React from 'react'
import Routes from './routes'
import { store } from './store'
import { Provider } from 'react-redux'

export default function app(){
    return(
        <Provider store={store}>
            <Routes />
        </Provider>
        
    )
}