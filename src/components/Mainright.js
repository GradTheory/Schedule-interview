import React from 'react'
import Time from './Time'

const Mainright = () => {
    const times = ['9:00',"10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30"]
    const timediv = times.map((value)=>{
        return(
        <Time key={value} value={value} />)
    })
    return (
       <div id='time' className='cursor-pointer overflow-y-scroll mt-16 '>
    {timediv}
       </div> 
    )
}

export default Mainright
