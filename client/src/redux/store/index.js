import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const store = configureStore(
    { reducer: rootReducer },
    (applyMiddleware(thunk)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
store.subscribe(() => { })
export default store;
