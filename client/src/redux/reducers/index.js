import authReducer from "./authReducer";
import todoReducer from "./todoReducer";
import messageReducer from "./messageReducer";

const rootReducer = {
  auth: authReducer,
  message: messageReducer,
  toDo: todoReducer,
};

export default rootReducer;
