import React from 'react'

function FilterButton(props) {
    return (
        <>
            <button
                type="button"
                className="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                onClick={() => props.setFilter(props.name)}
                aria-pressed={props.isPressed}
                aria-current={props.isPressed}>
                {props.name}
            </button>
        </>
    )
}

export default FilterButton