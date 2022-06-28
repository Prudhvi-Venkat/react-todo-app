import React, { useState } from "react";
import { MdEdit, MdEditOff, MdDelete, MdDeleteForever } from "react-icons/md";
import { formatInTimeZone } from "date-fns-tz";
import { useDispatch } from "react-redux";
import {
  deleteTodoData,
  toggleTodoData,
  editTodoData,
} from "../redux/actions/todoActions";

function Todo(props) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");
  const [status, setStatus] = useState(props.status);
  const timeZone = "Asia/Kolkata";
  const dispatch = useDispatch();

  function handleChange(e) {
    setNewName(e.target.value);
    setStatus(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (newName === "") {
      props.editTask(props.id, props.name, props.status);
    } else {
      props.editTask(props.id, newName, props.status);
    }
    setNewName("");
    setEditing(false);
  }

  const editingTemplate = (
    <form className="flex flex-col space-y-5 w-full" onSubmit={handleSubmit}>
      <div className="flex flex-col p-5 justify-center space-x-5 mt-5 mb-5 w-full bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mx-auto">
        <h2 className="text-center text-xl font-bold text-gray-600 mt-5">
          Edit Item
        </h2>
        <div className="flex justify-between items-center mx-auto">
          <h4 className="mb-5 text-left text-xl font-semibold text-gray-600 ">
            {props.name}
          </h4>
          <span className="mb-5 text-sm font-semibold text-gray-400 ">
            {" "}
            Added : {formatInTimeZone(props.addedDate, timeZone, "do MMM yyyy")}
          </span>
        </div>
        <div className="flex flex-row w-auto mb-5">
          <input
            type="text"
            id={props.id}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={props.name}
            value={newName}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-between items-center space-x-3 mx-auto">
          <div>
            <label
              htmlFor="edit-todo-item"
              className="inline-flex relative items-center cursor-pointer"
            >
              <input
                type="checkbox"
                // defaultValue={props.status}
                value={status}
                id="edit-todo-item"
                className="sr-only peer"
                onChange={() => dispatch(toggleTodoData(props.id, status))}
              />
              <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-500 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-green-600" />
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                {props.status === true ? "Completed" : "Active"}
              </span>
            </label>
          </div>
          <div>
            <button
              type="button"
              className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800  focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
              onClick={() =>
                dispatch(editTodoData(props.id, newName, !props.status))
              }
            >
              Save
            </button>
            <button
              type="button"
              className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>
          </div>
        </div>
        {props.editedDate ? (
          <div className="flex justify-center items-center mt-3">
            <span className="inline-flex text-sm text-gray-400">
              Edited :{" "}
              {formatInTimeZone(props.editedDate, timeZone, "do MMM yyyy")}
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
    </form>
  );
  const viewTemplate = (
    <ul key={props.id}>
      <div>
        <li className="w-auto flex px-4 py-2 border-b justify-between items-center border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="ml-2">
            <label
              className="text-lg font-semibold text-gray-900 dark:text-gray-300"
              htmlFor={props.id}
            >
              {props.name}
            </label>
          </div>
          <div>
            {props.status !== true ? (
              <button
                type="button"
                className="py-2 px-4 mr-2 mb-2 text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={() => setEditing(true)}
              >
                <MdEdit /> <span className="hidden">{props.name}</span>
              </button>
            ) : (
              <button
                type="button"
                className="py-2 px-4 mr-2 mb-2 cursor-not-allowed text-lg font-medium text-white focus:outline-none bg-gray-600 rounded-full border-none hover:bg-gray-900 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <MdEditOff /> <span className="hidden">{props.name}</span>
              </button>
            )}
            {props.status !== false ? (
              <button
                type="button"
                className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-lg px-4 py-2 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                onClick={() => dispatch(deleteTodoData(props.id))}
              >
                <MdDelete /> <span className="hidden">{props.name}</span>
              </button>
            ) : (
              <button
                type="button"
                className="text-white text-lg cursor-not-allowed bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full px-4 py-2 text-center mr-2 mb-2 hover:text-red-700 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                <MdDeleteForever /> <span className="hidden">{props.name}</span>
              </button>
            )}
          </div>
        </li>
      </div>
    </ul>
  );

  return <>{isEditing ? editingTemplate : viewTemplate}</>;
}

export default Todo;
