import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import { fetchTodoData } from "../actions/todoActions"
import rootReducer from '../reducers'

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk))
store.subscribe(() => console.log(store.getState().toDo.todoData))
store.dispatch(fetchTodoData())
export default store;
