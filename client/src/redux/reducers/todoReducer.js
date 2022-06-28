import * as todoActions from "../actions/todoActionTypes";

const initialState = {
  loading: true,
  todoData: [],
  error: "",
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case todoActions.ALL_TODOS:
      return Object.assign({}, state, {
        ...state,
        todoData: action.payload,
      });
    case todoActions.ADD_TODO:
      return Object.assign({}, state, {
        ...state,
        todoData: [
          ...state.todoData,
          {
            description: action.payload,
          },
        ],
      });
    case todoActions.EDIT_TODO:
      return Object.assign({}, state, {
        ...state,
        todoData: [
          ...state.todoData.map((item) => {
            if (item.id !== action.payload.id) {
              return item;
            } else {
              return {
                ...item,
                description: action.payload.newName,
                status: action.payload.status,
              };
            }
          }),
        ],
      });
    case todoActions.TOGGLE_TODO:
      return Object.assign({}, state, {
        ...state,
        todoData: [
          ...state.todoData.map((item) => {
            if (item.id !== action.payload.id) {
              return item;
            } else {
              return { ...item, status: action.payload.status };
            }
          }),
        ],
      });
    case todoActions.DELETE_TODO:
      return Object.assign({}, state, {
        ...state,
        todoData: [
          ...state.todoData.filter((item) => item.id !== action.payload),
        ],
      });
    case todoActions.FETCH_FAIL:
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
