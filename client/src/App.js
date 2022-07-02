import React, { useState, useEffect } from "react";
import Todo from "./components/Todo";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import Test from "./components/Test";
import { fecthAllTodo } from "./redux/actions/todoActions";

function App() {
  const [filter, setFilter] = useState("All");

  const initialState = useSelector((state) => {
    return state.toDo.todoData;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fecthAllTodo());
  }, [dispatch]);

  const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed,
  };
  const FILTER_NAMES = Object.keys(FILTER_MAP);

  const todoItemsServer = Object.values(initialState).map((todoItem) => {
    return (
      <Todo
        key={todoItem.id}
        id={todoItem.id}
        name={todoItem.description}
        status={todoItem.status}
      />
    );
  });

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const headingText = `${todoItemsServer.length} tasks remaining`;

  return (
    <>
      <Test />
      <div className="flex flex-col justify-center items-center mx-auto max-h-screeen space-y-10 mb-10">
        <h1 className="text-2xl text-slate-600 font-semibold text-center">
          Todo App
        </h1>
        <div className="flex w-full">
          <div className="w-1/2">
            <Form />
          </div>
          <div className="w-1/2 mx-auto p-10">
            <div
              className="flex justify-center items-center mx-auto rounded-md"
              role="group"
            >
              {filterList}
            </div>
            <h2 className="text-md text-slate-600 font-semibold text-center mt-5 mb-5">
              {headingText}
            </h2>
            <div className="container p-5 w-auto flex flex-col text-sm font-semibold justify-between text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              {todoItemsServer}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
