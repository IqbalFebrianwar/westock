import { combineReducers, configureStore } from '@reduxjs/toolkit'
import imageReducer from '../(public)/(main)/imageReducer'

export const store = configureStore({
    reducer: combineReducers({
        imageReducer
    })
})