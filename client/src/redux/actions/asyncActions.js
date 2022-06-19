import axios from "axios"

const baseURL = "http://localhost:5000"

const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST'
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'


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

const fetchData = () => {
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

export { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, fetchData }