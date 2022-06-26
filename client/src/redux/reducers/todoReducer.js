import * as todoActions from "../actions/todoActionTypes"

const initialState = {
    loading: true,
    todoData: [],
    error: ''
}

function todoReducer(state = initialState, action) {
    switch (action.type) {
        case todoActions.ALL_TODOS: return {
            ...state,
            loading: false,
            todoData: action.payload,
            error: ''
        }
        case todoActions.ADD_TODO: return {
            loading: false,
            todoData: [
                ...state.todoData,
                {
                    description: action.payload.description,
                }
            ],
            error: ''
        }
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
        case todoActions.DELETE_TODO: return {
            ...initialState,
            loading: false,
            todoData: state.todoData.values.filter((todoItem) => todoItem.todo_id !== action.id),
            error: ''
        }
        case todoActions.FETCH_FAIL: return {
            loading: false,
            todoData: [],
            error: action
        }
        default: return state
    }
}

export default todoReducer