import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { Card } from 'flowbite-react'
import { MdEdit, MdDelete, } from 'react-icons/md'
import Card from './Card'


function Test() {
    const stateData = useSelector((state) => state.toDo.todoData)
    const dispatch = useDispatch()
    // console.log(stateData.map(item => console.log(item)))
    return (
        <>
            <div className='container shadow-xl justify-center space-y-5 items-center mx-auto p-5'>
                <h1 className='text-5xl text-center'>From Redux store</h1>
                <p className='text-center'>Test component</p>
                {stateData && stateData.map((item) => {
                    return (
                        <Card id={item.todo_id} name={item.description} />
                        // <Card key={item.todo_id} horizontal={true} className="justify-around">
                        //     <div className='inline-flex justify-around mx-auto px-3.5 py-2.5'>
                        //         <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        //             {item.description}
                        //         </h5>
                        //         <div>
                        //             <button
                        //                 type="button"
                        //                 className="py-2 px-4 mr-2 mb-2 text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        //                 onClick={() => console.log("button clicked")}>
                        //                 <MdEdit /> <span className="hidden">{item.description}</span>
                        //             </button>
                        //             <button
                        //                 type="button"
                        //                 className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-lg px-4 py-2 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        //                 onClick={() => console.log("button clicked")}>
                        //                 <MdDelete /> <span className="hidden">{item.description}</span>
                        //             </button>
                        //         </div>
                        //     </div>
                        // </Card>
                    )
                })}
            </div>
        </>
    )
}

export default Test;