import React from 'react'
import { MdEdit, MdDeleteForever } from 'react-icons/md'

function Todo(props) {
    return (
        <div >
            <li className={(props.isLast) ? "w-auto flex px-4 py-2 justify-between items-center border-gray-200 rounded-t-lg dark:border-gray-600" : "w-auto flex px-4 py-2 border-b justify-between items-center border-gray-200 rounded-t-lg dark:border-gray-600"}>
                <div className="ml-2">
                    <input
                        id={props.id}
                        type="checkbox"
                        defaultChecked={props.status}
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                        onChange={() => props.toggleTask(props.id)}
                    />
                    <label
                        className="ml-2 text-md font-semibold text-gray-900 dark:text-gray-300"
                        htmlFor={props.id}>
                        {props.name}
                        <span className='text-sm text-gray-400'>{props.status ? "(Completed)" : "(Active)"}</span>
                    </label>
                </div>
                <div>
                    {(props.status !== true) ?
                        <button
                            type="button"
                            className="py-2 px-4 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            <MdEdit /> <span className="hidden">{props.name}</span>
                        </button>
                        : <button
                            type="button"
                            disabled
                            className="py-2 px-4 mr-2 mb-2 text-sm font-medium cursor-not-allowed text-white focus:outline-none bg-gray-800 rounded-full border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            <MdEdit /> <span className="hidden">{props.name}</span>
                        </button>
                    }
                    <button
                        type="button"
                        className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-4 py-2 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        onClick={() => props.deleteTask(props.id)}>
                        <MdDeleteForever /> <span className="hidden">{props.name}</span>
                    </button>
                </div>
            </li >
        </div >
    )
}

export default Todo