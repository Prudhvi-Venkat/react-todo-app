import {
  FETCH_ALL_TODOS,
  ALL_TODOS,
  ADD_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  FETCH_FAIL,
} from "./todoActionTypes";
import axios from "axios";

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
const addTodo = (description) => {
  return {
    type: ADD_TODO,
    payload: description,
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

const toggleTodo = (id, status) => {
  return {
    type: TOGGLE_TODO,
    payload: {
      id,
      status,
    },
  };
};

const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
export const addTodoData = (description) => {
  return async (dispatch) => {
    await todoApi.post("/todos", { description: description });
    dispatch(addTodo(description));
  };
};
export const editTodoData = (id, description, status) => {
  const editedData = {
    id: id,
    description: description,
    status: status,
  };
  return async (dispatch) => {
    await todoApi.patch(`/todos/${id}`, {
      id: id,
      description: description,
      status: status,
    });
    dispatch(editTodo(editedData));
  };
};

export const toggleTodoData = (id, status) => {
  const toggleTask = {
    id: id,
    status: status,
  };
  return async (dispatch) => {
    await todoApi.patch(`/todos/${id}`, { id: id, status: status });
    dispatch(toggleTodo(toggleTask));
  };
};
export const deleteTodoData = (id) => {
  return async (dispatch) => {
    await todoApi.delete(`/todos/${id}`, { id: id });
    dispatch(deleteTodo(id));
  };
};
