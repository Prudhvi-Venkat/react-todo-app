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
  };
};
const fetchFail = (error) => {
  return {
    type: FETCH_FAIL,
    payload: error,
  };
};
const addTodo = (description, status) => {
  return {
    type: ADD_TODO,
    payload: description,
    status,
  };
};

const editTodo = (id, description, status) => {
  return {
    type: EDIT_TODO,
    payload: id,
    description,
    status,
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
  const addItem = { description: description, status: status };
  return async (dispatch) => {
    await todoApi
      .post("/todos", {
        description: description,
        status: status,
      })
      .then(() => dispatch(addTodo(addItem)))
      .catch((err) => console.log(err));
  };
};
export const editTodoData = (id, description, status) => {
  const editedData = {
    id: id,
    description: description,
    status: status,
  };
  return async (dispatch) => {
    await todoApi
      .patch(`/todos/${id}`, {
        id: id,
        description: description,
        status: status,
      })
      .then(() => dispatch(editTodo(editedData)))
      .catch((err) => console.log(err));
  };
};

export const toggleTodoData = (id) => {
  const toggleTask = {
    id: id,
  };
  return async (dispatch) => {
    await todoApi
      .patch(`/todos/${id}`, { id: id })
      .then(() => dispatch(toggleTodo(toggleTask)))
      .catch((err) => console.log(err));
  };
};
export const deleteTodoData = (id) => {
  return async (dispatch) => {
    await todoApi
      .delete(`/todos/${id}`, { id: id })
      .then(() => dispatch(deleteTodo(id)))
      .catch((err) => console.log(err));
  };
};
