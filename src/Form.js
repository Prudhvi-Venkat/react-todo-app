import React, { useState } from 'react'

function Form(props) {
    const [name, setName] = useState('')
    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name)
        setName('')
    }
    function handleChange(e) {
        setName(e.target.value)
    }
    return (
        <>
            <form className="flex flex-col space-y-5 w-3/4" onSubmit={handleSubmit}>
                <div className="flex flex-col p-5 justify-center items-center space-x-5 w-1/2 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mx-auto">
                    <div className="flex flex-row w-full mb-5">
                        <label htmlFor="new-todo-input" className="hidden text-center mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">
                            Add Item
                        </label>
                        <input
                            type="text"
                            id="new-todo-input"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Add Item"
                            value={name}
                            onChange={handleChange}
                            autoFocus={true}
                        />
                    </div>
                    <div className="flex justify-center items-center mx-auto">
                        <button type="submit" className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            Add
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Form