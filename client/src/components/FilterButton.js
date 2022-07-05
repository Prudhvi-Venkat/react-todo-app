import React from "react";

function FilterButton(props) {
  return (
    <>
      <button
        type="button"
        className="py-2 px-4 text-md shadow-lg text-gray-800 bg-transparent border border-gray-900 hover:text-gray-800 focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-600 focus:text-white focus:dark:text-white focus:dark:border-gray-500 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-400 font-semibold dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        onClick={() => props.setFilter(props.name)}
        aria-pressed={props.isPressed}
        aria-current={props.isPressed}
      >
        {props.name}
      </button>
    </>
  );
}

export default FilterButton;
