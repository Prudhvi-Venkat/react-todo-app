import axios from "axios";
import {
  FETCH_ALL_TODOS,
  ALL_TODOS,
  ADD_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  FETCH_FAIL,
} from "./todoActionTypes";

const todoApi = axios.create({
  baseURL: "http://localhost:5000",
});

export const fecthAllTodo = () => {
  return async (dispatch) => {
    await todoApi
      .get("/todos")
      .then((response) => {
        dispatch(allTodos(response.data));
      })
      .catch((error) => {
        dispatch(fetchFail(error.message));
      });
    return {
      type: FETCH_ALL_TODOS,
    };
  };
};

const allTodos = (response) => {
  return {
    type: ALL_TODOS,
    payload: response,
    meta: { WebSocket: true },
  };
};
const fetchFail = (error) => {
  return {
    type: FETCH_FAIL,
    payload: error,
  };
};
const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  };
};

const editTodo = (data) => {
  return {
    type: EDIT_TODO,
    payload: data,
  };
};

const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};

const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
export const addTodoData = (description, status) => {
  return async (dispatch) => {
    await todoApi
      .post("/todos", {
        description: description,
        status: status,
      })
      .then((res) => dispatch(addTodo(res.data)))
      .catch((err) => console.log(err));
  };
};
export const editTodoData = (id, description, status) => {
  return async (dispatch) => {
    await todoApi
      .patch(`/todos/${id}`, {
        id: id,
        description: description,
        status: status,
      })
      .then((res) => dispatch(editTodo(res.data)))
      .catch((err) => console.log(err));
  };
};

export const toggleTodoData = (id) => {
  return async (dispatch) => {
    await dispatch(toggleTodo({ id }));
  };
};
export const deleteTodoData = (id) => {
  return async (dispatch) => {
    await todoApi
      .delete(`/todos/${id}`, { id: id })
      .catch((err) => console.log(err));
    dispatch(deleteTodo(id));
  };
};
