import * as todoActions from "../actions/todoActionTypes"

const initialState = {
    loading: true,
    todoData: [],
    error: ''
}

function todoReducer(state = initialState, action) {
    switch (action.type) {
        case todoActions.ALL_TODOS: return {
            loading: false,
            todoData: action.payload,
            error: ''
        }
        case todoActions.ADD_TODO: return {
            loading: false,
            todoData: {
                ...state,
                description: action.payload.description,
            },
            error: ''
        }
        case todoActions.EDIT_TODO: return {
            loading: false,
            todoData: {
                ...state,
                id: action.payload.id,
                description: action.payload.description,
                status: action.payload.status
            },
            error: ''
        }
        case todoActions.TOGGLE_TODO: return {
            loading: false,
            todoData: {
                ...state,
                id: action.payload.id,
                status: action.payload.status
            },
            error: ''

        }
        case todoActions.DELETE_TODO: return {
            loading: false,
            todoData: {
                ...state,
                id: action.payload.id
            }
        }
        case todoActions.FETCH_FAIL: return {
            loading: false,
            todoData: [],
            error: action.payload
        }
        default: return state
    }
}

export default todoReducer