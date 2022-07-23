import React from 'react'


function SignupForm() {
    function handleSubmit(e) {
        e.preventDefault()
    }
    return (
        <div>
            {/* Container */}
            <div className="container mx-auto">
                <div className="flex justify-center px-6 my-12">
                    {/* Row */}
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex shadow-xl rounded-lg">
                        {/* Col */}
                        <div
                            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                            style={{
                                backgroundImage:
                                    'url("https://source.unsplash.com/Mv9hjnEUHR4/600x800")'

                            }}
                        />
                        {/* Col */}
                        <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none dark:bg-gray-900">
                            <h3 className="pt-4 space-y-5 text-2xl text-center dark:text-white text-gray-800">Register Here !</h3>
                            <form className="px-8 pt-6 pb-8 mt-4 mb-4 bg-white rounded dark:bg-gray-400" onSubmit={handleSubmit()}>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 mb-6 w-full group">
                                        <input
                                            type="text"
                                            name="floating_first_name"
                                            id="floating_first_name"
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" "
                                            required=""
                                        />
                                        <label
                                            htmlFor="floating_first_name"
                                            className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-700 font-semibold duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-900 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >
                                            First name
                                        </label>
                                    </div>
                                    <div className="relative z-0 mb-6 w-full group">
                                        <input
                                            type="text"
                                            name="floating_last_name"
                                            id="floating_last_name"
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" "
                                            required=""
                                        />
                                        <label
                                            htmlFor="floating_last_name"
                                            className="peer-focus:font-medium absolute text-md font-semibold text-gray-500 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >
                                            Last name
                                        </label>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 mb-6 w-full group">
                                        <input
                                            type="text"
                                            name="floating_user_name"
                                            id="floating_user_name"
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" "
                                            required=""
                                        />
                                        <label
                                            htmlFor="floating_user_name"
                                            className="peer-focus:font-medium absolute text-md font-semibold text-gray-500 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >
                                            User Name
                                        </label>
                                    </div>
                                    <div className="relative z-0 mb-6 w-full group">
                                        <input
                                            type="email"
                                            name="floating_user_email"
                                            id="floating_user_email"
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" "
                                            required=""
                                        />
                                        <label
                                            htmlFor="floating_user_email"
                                            className="peer-focus:font-medium absolute text-md font-semibold text-gray-500 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >
                                            Email address
                                        </label>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 mb-6 w-full group">
                                        <input
                                            type="password"
                                            name="floating_password"
                                            id="floating_password"
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" "
                                            required=""
                                        />
                                        <label
                                            htmlFor="floating_password"
                                            className="peer-focus:font-medium absolute text-md font-semibold text-gray-500 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >
                                            Password
                                        </label>
                                    </div>
                                    <div className="relative z-0 mb-6 w-full group">
                                        <input
                                            type="password"
                                            name="repeat_password"
                                            id="floating_repeat_password"
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" "
                                            required=""
                                        />
                                        <label
                                            htmlFor="floating_repeat_password"
                                            className="peer-focus:font-medium absolute text-md font-semibold text-gray-500 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >
                                            Confirm password
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-6 text-center mt-5">
                                    <button
                                        className="w-full px-4 py-2 font-semibold text-white bg-aqua-500 rounded-full hover:bg-aqua-700 focus:outline-none focus:shadow-outline"
                                        type="button"
                                    >
                                        Register
                                    </button>
                                </div>
                                {/* <hr className="mb-6 border-t" /> */}
                                <div className="flex justify-between mx-auto">
                                    <a
                                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        href="/"
                                    >
                                        Forgot Password?
                                    </a>
                                    <a
                                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        href="./index.html"
                                    >
                                        Already have an account? Login!
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupForm