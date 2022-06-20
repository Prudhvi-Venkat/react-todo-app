import React, { useState, useEffect } from 'react'
import Todo from "./components/Todo";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Footer from './components/Footer';
import axios from 'axios'
import { connect } from 'react-redux';
import Test from './components/Test'

function App(props) {
  const [filter, setFilter] = useState('All');
  const [todos, setTodoList] = useState([])

  const baseURL = "http://localhost:5000"

  useEffect(() => {
    axios.get(baseURL + `/todos`)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          setTodoList(res.data)
        } else {
          return Promise.reject(res)
        }
      }).catch(err => Promise.reject(err))
  }, []);

  const FILTER_MAP = {
    All: () => true,
    Active: task => !task.completed,
    Completed: task => task.completed,
  };
  const FILTER_NAMES = Object.keys(FILTER_MAP);

  const todoItemsServer = todos.map(todoItem => { return <Todo key={todoItem.todo_id} id={todoItem.todo_id} name={todoItem.description} status={todoItem.status} deleteTask={deleteTask} toggleTask={toggleTask} editTask={editTask} addedDate={todoItem.added_date} editedDate={todoItem.edited_date} /> })

  const filterList = FILTER_NAMES.map(name => (
    <FilterButton key={name} name={name} isPressed={name === filter} setFilter={setFilter} />
  ));

  // const tasksList = tasks.filter(FILTER_MAP[filter]).map(task => <Todo key={task.id} id={task.id} name={task.name} status={task.completed} toggleTask={toggleTask} editTask={editTask} deleteTask={deleteTask} addedDate={task.addedDate} editedDate={task.editedDate} />)

  const headingText = `${todoItemsServer.length} tasks remaining`;

  function addTask(name, added_date) {
    const newTodoItem = { name: name, added_date: new Date() }
    setTodoList([...todos, newTodoItem])
  }

  function toggleTask(id) {
    const updatedTasks = todos.map(todoItem => {
      if (id === todoItem.todo_id) {
        axios.patch(baseURL + `/todos/${id}`, {
          todo_id: id,
          status: true
        })
          .then(res => res.data)
          .catch((err) => console.log(err))
        // return { ...todos, status: true }
      }
      return todos;
    })
    setTodoList(updatedTasks)
  }

  function editTask(id, newName, status, edited_date) {

    const editedData = {
      todo_id: id,
      description: newName,
      status: status,
      edited_date: new Date()
    }
    const editedTasksList = todos.map(todoItem => {
      if ((todoItem.todo_id === id) && (newName !== '')) {
        axios.patch(baseURL + `/todos/${id}`, editedData).then((res) => setTodoList(res.data)).catch(err => Promise.reject(err))
        // return { ...todos, description: newName }
      }
      return todos;
    });
    setTodoList(editedTasksList);
  }

  function deleteTask(id) {
    axios.delete(baseURL + `/todos/${id}`).then((res) => setTodoList(res)).catch(err => Promise.reject(err))

    const remainingTasks = todos.filter(todoItem => id !== todoItem.id);
    setTodoList(remainingTasks);
  }

  return (
    <>
      <Test />
      <div className="flex flex-col justify-center items-center mx-auto max-h-screeen space-y-10 mb-10">
        <h1 className="text-2xl text-slate-600 font-semibold text-center">Todo App</h1>
        <div className='flex w-full'>
          <div className='w-1/2'>
            {props.todo_id}
            <Form addTask={addTask} />
          </div>
          <div className='w-1/2 mx-auto p-10'>
            <div className="flex justify-center items-center mx-auto rounded-md" role="group">
              {filterList}
            </div>
            <h2 className="text-md text-slate-600 font-semibold text-center mt-5 mb-5">{headingText}</h2>
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

const mapStateToProps = state => {
  return {
    todo_id: state.todo_id,
    desc: state.description,
    status: state.status,
    added_date: state.added_date,
    edited_date: state.edited_date
  }
}
const mapDispatchToProps = state => {
  return {

  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
