import React from 'react'
import { connect } from 'react-redux'
import { addTodoData, editTodoData, toggleTodoData, deleteTodoData } from '../redux/actions/todoActions'
import { useSelector } from 'react-redux'

function Test(props) {
    const desc = useSelector((state) => state.description)
    return (
        <>
            <div className='container shadow-xl justify-center items-center mx-auto p-5'>
                <h1 className='text-5xl text-center'>From Redux store</h1>
                <p className='text-center'>Test component</p>
                <li key={props.todo_id}>
                    <p>{props.description}</p>
                    {desc}
                </li>
            </div>
        </>
    )
}
const mapStateToProps = state => {
    return {
        todo_id: state.todo_id,
        description: state.description,
        status: state.status,
        added_date: state.added_date,
        edited_date: state.edited_date
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addTodo: (desc) => dispatch(addTodoData(desc)),
        editTodo: (id, desc, status) => dispatch(editTodoData(id, desc, status)),
        toggleTodo: (id, status) => dispatch(toggleTodoData(id, status,)),
        deleteTodo: (id) => dispatch(deleteTodoData(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)