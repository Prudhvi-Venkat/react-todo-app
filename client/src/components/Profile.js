import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { fecthAllTodo } from "../redux/actions/todoActions";
import { deleteAllTodos } from "../redux/actions/todoActions"

import Todo from "../components/Todo";
import FilterButton from "../components/FilterButton";
import Form from "../components/InputForm";
import Loader from "../components/Loader";

function Profile() {
    const [filter, setFilter] = useState("All");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fecthAllTodo());
    }, [dispatch]);

    const initialState = useSelector((state) => {
        console.log(state)
        return state
    });

    const { user: currentUser } = initialState.auth;

    const FILTER_MAP = {
        All: () => true,
        Active: (task) => !task.completed,
        Completed: (task) => task.completed,
    };
    const FILTER_NAMES = Object.keys(FILTER_MAP);

    const todoItemsServer = initialState.toDo.map((todoItem) => {
        return (
            <Todo
                key={todoItem.id}
                id={todoItem.id}
                name={todoItem.description}
                status={todoItem.status}
            />
        );
    });

    const filterList = FILTER_NAMES.map((name) => (
        <FilterButton
            key={name}
            name={name}
            isPressed={name === filter}
            setFilter={setFilter}
        />
    ));

    const headingText = `${todoItemsServer.length}  tasks remaining`;
    if (!currentUser.isLoggedIn) {
        <Navigate to="/loginform" />
    } else {
        return (
            <div className="justify-center min-h-screen space-y-8 dark:bg-gray-400">
                <div className="flex flex-grow flex-col justify-center mx-auto ">
                    <div className="flex flex-row w-full">
                        <div className="w-1/2 mx-auto my-auto px-10">
                            <Form />
                            <h3>
                                <strong>{currentUser.username}</strong> Profile
                            </h3>
                        </div>

                        <div className="w-1/2 mx-auto px-10">
                            <div
                                className="flex justify-center items-center mx-auto rounded-md"
                                role="group"
                            >
                                {filterList}
                            </div>
                            <h2 className="text-md text-slate-600 font-semibold text-center mt-5 mb-5">
                                {headingText}
                            </h2>
                            <button className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900" onClick={() => dispatch(deleteAllTodos())}>Delete all</button>
                            <div className="p-5 overflow-y-auto h-80 w-auto flex flex-col text-sm font-semibold justify-between text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                {todoItemsServer && todoItemsServer.length > 0 ? (
                                    todoItemsServer
                                ) : (
                                    <Loader />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Profile;
