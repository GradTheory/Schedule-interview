import React from 'react'
import clock from "../clock2.svg"
const Sidetop = () => {
    return (
        <div className='mb-5'>
            <h2 className='text-gray-400 text-md font-normal mb-2'>Walkthrough</h2>
            <h1 className='text-gray-800 text-xl font-bold mb-2'>Schedule a demo</h1>
            <div className="flex bg-blue-100 sm:w-6/12 h-8 lg:w-5/12 justify-center align-center rounded-md font-semibold text-xs  py-2.5 px-2 text-blue-500" type="submit">
                                    <img className='bg-blue-500 rounded-sm p-px' src={clock} alt='clock'/>
                                     <span className="ml-1">10-20min</span>
                                </div>
        </div>
    )
}

export default Sidetop
