import axios from "axios"
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './ayncActionTypes'

const baseURL = "http://localhost:5000"

const fetchDataRequest = () => {
    return {
        type: FETCH_DATA_REQUEST,

    }
}

const fetchDataSuccess = (datafromAPI) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: datafromAPI

    }
}
const fetchDataFailure = (error) => {
    return {
        type: FETCH_DATA_FAILURE,
        payload: error

    }
}

export const fetchData = () => {
    return function (dispatch, getState) {
        dispatch(fetchDataRequest())
        axios.get(baseURL + "/todos")
            .then(response => {
                const datafromAPI = response.data
                dispatch(fetchDataSuccess(datafromAPI))
            })
            .catch(error => {
                dispatch(fetchDataFailure(error.message))
            })
    }
}
