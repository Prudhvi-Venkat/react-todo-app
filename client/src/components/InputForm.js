import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoData } from "../redux/actions/todoActions";

function Form() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  var todoStatus = false;

  function handleSubmit(e) {
    if (!name) {
      alert("Input is empty");
    } else {
      e.preventDefault();
      dispatch(addTodoData(name, todoStatus));
      setName("");
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              viewBox="0 0 117 117"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title />
              <desc />
              <defs />
              <g
                fill="none"
                fillRule="evenodd"
                id="Page-1"
                stroke="currentColor"
                strokeWidth={2}
              >
                <g fillRule="nonzero" id="add">
                  <path
                    d="M58.5,0.5 C26.5,0.5 0.4,26.5 0.4,58.5 C0.4,90.5 26.4,116.5 58.5,116.5 C90.5,116.5 116.5,90.5 116.5,58.5 C116.5,26.5 90.5,0.5 58.5,0.5 Z M58.5,108.4 C31,108.4 8.6,86 8.6,58.5 C8.6,31 31,8.6 58.5,8.6 C86,8.6 108.4,31 108.4,58.5 C108.4,86 86,108.4 58.5,108.4 Z"
                    fill="#4A4A4A"
                    id="Shape"
                  />
                  <path
                    d="M85.2,53.9 L62.6,53.9 L62.6,31.2 C62.6,28.9 60.8,27.1 58.5,27.1 C56.2,27.1 54.4,28.9 54.4,31.2 L54.4,53.8 L31.8,53.8 C29.5,53.8 27.7,55.6 27.7,57.9 C27.7,60.2 29.5,62 31.8,62 L54.4,62 L54.4,84.6 C54.4,86.9 56.2,88.7 58.5,88.7 C60.8,88.7 62.6,86.9 62.6,84.6 L62.6,62 L85.2,62 C87.5,62 89.3,60.2 89.3,57.9 C89.3,55.6 87.5,53.9 85.2,53.9 Z"
                    fill="#17AB13"
                    id="Shape"
                  />
                </g>
              </g>
            </svg>
          </div>
          <input
            type="text"
            id="new-todo-input"
            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add Item"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus={true}
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="text-white absolute right-2  bottom-2 bg-aqua-400 hover:bg-aqua-700 focus:ring-4 focus:outline-none focus:ring-aqua-300 font-semibold rounded-lg text-md px-4 py-2 dark:bg-aqua-600 dark:hover:bg-aqua-700 dark:focus:ring-aqua-800"
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
