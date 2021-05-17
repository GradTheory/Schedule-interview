import React from 'react'
import Sidebot from './Sidebot'
import Sidetop from './Sidetop'
import { useSelector } from 'react-redux'
const Sidebar = () => {
    const showsidebot = useSelector(state => state.showsidebot)
    return (
        <div className='flex flex-col justify-between h-full  pt-7 ml-7'>
        
            <Sidetop  />
           { showsidebot &&    <Sidebot  />}
         
        </div>
    )
}

export default Sidebar
