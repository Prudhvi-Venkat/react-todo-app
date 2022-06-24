import { FETCH_ALL_TODOS, ALL_TODOS, ADD_TODO, EDIT_TODO, TOGGLE_TODO, DELETE_TODO, FETCH_FAIL } from "./todoActionTypes";
import axios from "axios";


const todoApi = axios.create({
    baseURL: "http://localhost:5000"
})


const fecthAllTodo = () => {
    return {
        type: FETCH_ALL_TODOS,
    }
}

const allTodos = (response) => {
    return {
        type: ALL_TODOS,
        payload: response
    }
}
const fetchFail = (error) => {
    return {
        type: FETCH_FAIL,
        payload: error
    }
}
const addTodo = description => {
    return {
        type: ADD_TODO,
        payload: description
    }
}

const editTodo = (id, description, status) => {
    return {
        type: EDIT_TODO,
        payload: {
            id, description, status
        }
    }
}

const toggleTodo = (id, status) => {
    return {
        type: TOGGLE_TODO,
        payload: {
            id, status
        },
    }
}

const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}
export const fetchTodoData = () => {
    return async function (dispatch) {
        await dispatch(fecthAllTodo())
        todoApi.get("/todos")
            .then(response => {
                dispatch(allTodos(response.data))
            })
            .catch(error => {
                dispatch(fetchFail(error.message))
            })
    }
}
export const addTodoData = (description) => {
    return function (dispatch) {
        dispatch(addTodo(description))
        todoApi.put("/todos/")
            .then(response => {
                const apiData = response.data
                dispatch(allTodos(apiData))
            })
            .catch(error => {
                dispatch(fetchFail(error.message))
            })
    }
}
export const editTodoData = (id, status, description) => {
    return function (dispatch) {
        dispatch(editTodo(id, description, status))
        todoApi.delete(`/todos/${id}`)
            .then(response => {
                const apiData = response.data
                dispatch(allTodos(apiData))
            })
            .catch(error => {
                dispatch(fetchFail(error.message))
            })
    }
}

export const toggleTodoData = (id, status) => {
    return function (dispatch) {
        dispatch(toggleTodo(id, status))
        todoApi.delete(`/todos/${id}`)
            .then(response => {
                const apiData = response.data
                dispatch(allTodos(apiData))
            })
            .catch(error => {
                dispatch(fetchFail(error.message))
            })
    }
}
export const deleteTodoData = (id) => {
    return function (dispatch) {
        dispatch(deleteTodo(id))
        todoApi.delete(`/todos/${id}`)
            .then(response => {
                const apiData = response.data
                dispatch(allTodos(apiData))
            })
            .catch(error => {
                dispatch(fetchFail(error.message))
            })
    }
}