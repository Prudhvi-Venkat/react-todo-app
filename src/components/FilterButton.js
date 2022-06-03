import React from 'react'

function FilterButton(props) {
    return (
        <>
            <li className="w-full">
                <button type="button" className="text-md inline-block p-4 w-full bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" aria-pressed="true">
                    <span className="hidden">Show </span>
                    <span>All</span>
                    <span className="hidden"> tasks</span>
                </button>
            </li>
        </>
    )
}

export default FilterButton