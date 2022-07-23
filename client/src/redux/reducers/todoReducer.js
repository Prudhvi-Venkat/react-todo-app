import { ALL_TODOS, ADD_TODO, EDIT_TODO, TOGGLE_TODO, DELETE_TODO, DELETE_ALL_TODOS, FETCH_FAIL } from "../actions/actionTypes";

const initialState = {
  loading: false,
  todoData: [],
  error: "",
};

function todoReducer(state = initialState, action) {
  switch (action.type) {

    case ALL_TODOS:
      return Object.assign({}, state, {
        ...state,
        todoData: action.payload,
      });

    case ADD_TODO:
      return Object.assign({}, state, {
        ...state,
        todoData: [...state.todoData, action.payload],
      });

    case EDIT_TODO:
      return Object.assign({}, state, {
        ...state,
        todoData: [
          ...state.todoData.map((item) => {
            return item.id !== action.payload.id
              ? item
              : {
                ...item,
                description: action.payload.description,
                status: action.payload.status,
              };
          }),
        ],
      });

    case TOGGLE_TODO:
      return Object.assign({}, state, {
        ...state,
        todoData: [
          ...state.todoData.map((item) => {
            return item.id !== action.payload.id
              ? item
              : {
                ...item,
                status: !item.status,
              };
          }),
        ],
      });

    case DELETE_TODO:
      return Object.assign({}, state, {
        ...state,
        todoData: [
          ...state.todoData.filter((item) => item.id !== action.payload),
        ],
      });

    case DELETE_ALL_TODOS:
      return Object.assign({}, state, {
        ...state,
        todoData: [],
        error: action
      });

    case FETCH_FAIL:
      return {
        loading: false,
        todoData: [],
        error: action,
      };

    default:
      return state;
  }
}
export default todoReducer;
