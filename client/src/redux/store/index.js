import { configureStore } from '@reduxjs/toolkit'
import asyncReducer from '../reducers/asyncReducer'
import { applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import { fetchData } from "../actions/asyncActions"

const store = configureStore({ reducer: asyncReducer }, applyMiddleware(thunk))
store.subscribe(() => console.log(store.getState()))
store.dispatch(fetchData())
export default store;
