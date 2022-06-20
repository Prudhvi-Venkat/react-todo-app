import * as asyncActions from "../actions/ayncActionTypes"


const initialState = {
    loading: false,
    datafromAPI: [],
    error: ''
}
function asyncReducer(state = initialState, action) {
    switch (action.type) {
        case asyncActions.FETCH_DATA_REQUEST: return {
            ...state,
            loading: true
        }
        case asyncActions.FETCH_DATA_SUCCESS: return {
            loading: false,
            datafromAPI: action.payload,
            error: ''
        }
        case asyncActions.FETCH_DATA_FAILURE: return {
            loading: false,
            datafromAPI: [],
            error: action.payload
        }
        default: return state
    }
}

export default asyncReducer;