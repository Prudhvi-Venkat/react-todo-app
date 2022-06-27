import * as todoActions from "../actions/todoActionTypes"
import { useReducer } from "react";

const initialState = {
    loading: true,
    todoData: [],
    error: ''
}

function todoReducer(state = initialState, action) {
    switch (action.type) {
        case todoActions.ALL_TODOS: return Object.assign({}, state, {
            ...state,
            todoData: action.payload,
        })
        case todoActions.ADD_TODO: return Object.assign({}, state, {
            ...state,
            todoData:
            {
                description: action.payload,
            }
        })
        case todoActions.EDIT_TODO: return {
            loading: false,
            todoData: {
                id: action.id,
                description: action.description,
                status: action.status
            },
            error: ''
        }
        case todoActions.TOGGLE_TODO: return {
            loading: false,
            todoData: {
                id: action.id,
                status: action.status
            },
            error: ''

        }
        case todoActions.DELETE_TODO: return Object.assign({}, state, {
            ...state,
            todoData: {
                id: action.payload
            }
        })
        case todoActions.FETCH_FAIL: return {
            loading: false,
            todoData: [],
            error: action
        }
        default: return state
    }
}

export function useApiCallReducer() {
    return useReducer(todoReducer, initialState);
}
export default todoReducer