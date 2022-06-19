import { ADD_TODO, EDIT_TODO, TOGGLE_TODO, DELETE_TODO } from "../actions/actions"

const initialState = {
    loading: false,
    data: [],
    error: ''
}

const todoReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case ADD_TODO: return {

        }
        case EDIT_TODO: return {

        }
        case TOGGLE_TODO: return {

        }
        case DELETE_TODO: return {

        }
        default: return state
    }
}

export default todoReducer