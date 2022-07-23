import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../redux/actions/authActions";


function LoginForm() {

  const [username, setUserName] = useState('')
  const [pwd, setPwd] = useState('')
  const dispatch = useDispatch();

  const authState = useSelector((state) => {
    console.log(state)
    return state.auth;
  });

  const { isLoggedIn } = authState;

  function handleSubmit(e) {
    if ((username && pwd) === "") {
      alert("Fields are empty")
    } else {
      e.preventDefault();
      dispatch(login(username, pwd))
      setPwd('');
      setUserName('')
    }
  }
  if (!isLoggedIn) {
    <Navigate to="/Profile" replace={true} />
  } else {
    return (
      <div className="container justify-center mx-auto px-6 my-12 lg:w-1/2" >
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={pwd}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
              onChange={(e) => setPwd(e.target.value)}
            />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                defaultValue=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required=""
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="text-white bg-aqua-500 hover:bg-aqua-800 focus:ring-4 focus:outline-none focus:ring-aqua-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-aqua-600 dark:hover:bg-aqua-700 dark:focus:ring-aqua-800"
          >
            Submit
          </button>
        </form>
      </div >
    );
  }
}

export default LoginForm;
