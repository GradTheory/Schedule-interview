import React from 'react'
import { useSelector } from 'react-redux'

const Sidebot = () => {
    
     const date = useSelector(state => state.date)
     const time = useSelector(state => state.time)
     const showtime = useSelector(state => state.showtime)

     var split = new Date().toString().split(" ");
     var timeZone = split[5].substring(0,split.length-3)
 

    return (
        <div  className='bg-gray-100  rounded-md p-4 mb-5 mr-5 h-36 lg:w-48'>
         <p className='text-gray-400 text-xs font-semibold mb-2'>DATE</p>
         <h3 className='text-black text-base font-bold' >{date}</h3> 
           
         <p className='text-gray-400 text-xs font-semibold mb-2 mt-3'>TIME</p>
         {showtime?
            (<h3 className='text-black text-base font-bold' >{time}<span className='text-gray-400 text-xs font-normal'>{"("+timeZone+")"}</span></h3>):   
            (<h3 className='text-gray-300 text-sm font-normal' >{time}</h3> )  

         }
         {/* <h3 className={showtime?('text-black text-base font-bold'):('text-gray-300 text-sm font-normal') }>{time}</h3> */}
        </div>
    )
}

export default Sidebot
