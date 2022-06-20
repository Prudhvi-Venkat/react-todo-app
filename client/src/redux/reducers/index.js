import asyncReducer from "./asyncReducer";
import todoReducer from "./todoReducer";

const rootReducer = {
    // asyncData: asyncReducer,
    toDo: todoReducer
}

export default rootReducer;