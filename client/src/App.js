import React, { useState, useEffect } from 'react'
import Todo from "./components/Todo";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Footer from './components/Footer';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import Test from './components/Test'
import { fetchTodoData, deleteTodoData } from './redux/actions/todoActions';


function App() {
  const [filter, setFilter] = useState('All');
  const [todos, setTodoList] = useState([])

  const initialState = useSelector((state) => { return state.toDo.todoData })
  const dispatch = useDispatch()

  const baseURL = "http://localhost:5000"

  useEffect(() => {
    dispatch(fetchTodoData())
  }, [dispatch]);

  const FILTER_MAP = {
    All: () => true,
    Active: task => !task.completed,
    Completed: task => task.completed,
  };
  const FILTER_NAMES = Object.keys(FILTER_MAP);

  const todoItemsServer = Object.values(initialState).map((todoItem) => { return <Todo key={todoItem.id} id={todoItem.id} name={todoItem.description} status={todoItem.status} toggleTask={toggleTask} editTask={editTask} addedDate={todoItem.createdAt} editedDate={todoItem.updatedAt} /> })

  const filterList = FILTER_NAMES.map(name => (
    <FilterButton key={name} name={name} isPressed={name === filter} setFilter={setFilter} />
  ));

  // const tasksList = tasks.filter(FILTER_MAP[filter]).map(task => <Todo key={task.id} id={task.id} name={task.name} status={task.completed} toggleTask={toggleTask} editTask={editTask} deleteTask={deleteTask} addedDate={task.addedDate} editedDate={task.editedDate} />)

  const headingText = `${todoItemsServer.length} tasks remaining`;

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
  return (
    <>
      {/* <Test /> */}
      <div className="flex flex-col justify-center items-center mx-auto max-h-screeen space-y-10 mb-10">
        <h1 className="text-2xl text-slate-600 font-semibold text-center">Todo App</h1>
        <div className='flex w-full'>
          <div className='w-1/2'>
            <Form />
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


export default App;
