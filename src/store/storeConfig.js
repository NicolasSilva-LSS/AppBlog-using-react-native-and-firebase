/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
//import { combineReducers } from "redux"
import {configureStore, combineReducers, compose, applyMiddleware } from '@reduxjs/toolkit'
import userReducer from './reducers/user'
import postsReducer from './reducers/posts'
import thunk from 'redux-thunk'

const reducers = combineReducers({
    user: userReducer,
    posts: postsReducer,
})

const storeConfig = () => {
    return configureStore({
        reducer: reducers,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        })
    }, compose(applyMiddleware(thunk)))
}

export default storeConfig