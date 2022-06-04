import React, { useState } from 'react'
import Todo from "./components/Todo";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import { nanoid } from "nanoid"
import format from 'date-fns/format';

function App(props) {
  const [tasks, setNewTasks] = useState(props.tasks)
  const [filter, setFilter] = useState('All');
  const FILTER_MAP = {
    All: () => true,
    Active: task => !task.completed,
    Completed: task => task.completed,
    RecentlyAdded: task => task.Completed
  };
  const FILTER_NAMES = Object.keys(FILTER_MAP);

  const filterList = FILTER_NAMES.map(name => (
    <FilterButton key={name} name={name} isPressed={name === filter} setFilter={setFilter} />
  ));

  const tasksList = tasks.filter(FILTER_MAP[filter]).map(task => <Todo key={task.id} id={task.id} name={task.name} status={task.completed} toggleTask={toggleTask} deleteTask={deleteTask} editTask={editTask} addedDate={task.addedDate} editedDate={task.editedDate} />)

  const headingText = `${tasksList.length} tasks remaining`;

  function addTask(name) {
    const newTask = { id: "id-" + nanoid(), name: name, completed: false, addedDate: format(new Date(), "dd-MM-yyyy") }
    console.log(newTask)
    setNewTasks([newTask, ...tasks,])
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

  function editTask(id, newName) {
    const editedTasksList = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        return { ...task, name: newName }
      }
      return task;
    });
    setNewTasks(editedTasksList);
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
        <div className="inline-flex rounded-md shadow-sm" role="group">
          {filterList}
        </div>
      </div>
      <h2 className="text-md text-slate-600 font-semibold text-center">{headingText}</h2>
      <ul className="container p-5 w-3/5 flex flex-col text-sm font-semibold justify-between text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {tasksList}
      </ul>
    </div>
  );
}

export default App;
