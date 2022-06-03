import React, { useState } from 'react'
import Todo from "./components/Todo";
import FilterButton from "./components/FilterButton";
import Form from "./Form";
import { nanoid } from "nanoid"

function App(props) {
  const [tasks, setNewTasks] = useState(props.tasks)

  const tasksList = tasks.map(task => <Todo key={task.id} id={task.id} name={task.name} status={task.completed} toggleTask={toggleTask} deleteTask={deleteTask} />)

  const headingText = `${tasksList.length} tasks remaining`;


  function addTask(name) {
    const newTask = { id: "id-" + nanoid(), name: name, completed: false, addedDate: "Wed Jun 01 2022" }
    setNewTasks([...tasks, newTask])
  }

  function toggleTask(id) {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return { ...task, completed: !task.completed }
      }
      return task
    })
    setNewTasks(updatedTasks)
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setNewTasks(remainingTasks);
  }

  return (
    <div className="flex flex-col justify-center items-center mx-auto space-y-10 mb-10">
      <h1 className="text-2xl text-slate-600 font-semibold text-center">Todo App</h1>
      <Form addTask={addTask} />
      <div>
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select your country
          </label>
          <select
            id="tabs"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Profile</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </select>
        </div>
        <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
          <li className="w-full">
            <a
              href="/"
              className="inline-block p-4 w-full text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
              aria-current="page"
            >
              Profile
            </a>
          </li>
          <li className="w-full">
            <a
              href="/"
              className="inline-block p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              Dashboard
            </a>
          </li>
          <li className="w-full">
            <a
              href="/"
              className="inline-block p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              Settings
            </a>
          </li>
          <FilterButton />
          <FilterButton />
          <FilterButton />
          <FilterButton />
        </ul>
      </div>
      {/* <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div> */}
      <h2 className="text-md text-slate-600 font-semibold text-center">{headingText}</h2>
      <ul className="container p-5 w-3/5 flex flex-col text-sm font-semibold justify-between text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {tasksList}
      </ul>
    </div>
  );
}

export default App;
