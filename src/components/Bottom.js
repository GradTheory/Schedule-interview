import React from 'react'
import { useSelector } from 'react-redux'

import { useDispatch } from 'react-redux'

import {nextStep , backtoDate ,scheduleNow} from '../Redux/Action'
import arrow from "../arrow.png"
const Bottom = () => {
    const rightbutton = useSelector(state => state.rightbutton)
    const leftbutton = useSelector(state => state.leftbutton)
    const dispatch = useDispatch()
    const dateselected = useSelector(state => state.dateselected)
    const timeselected = useSelector(state => state.timeselected)
    const schedulebutton = useSelector(state => state.schedulebutton)
 
    return (
        <>
             <div className="flex justify-between py-6 px-11 border-r border-l border-t border-b-2 rounded-md">
                               
                                 <div id={leftbutton ? ('disableBack'):undefined} onClick={()=>{
                                     dispatch(backtoDate())
                                 }} className=" cursor-pointer flex bg-blue-100 w-32 min-w-full justify-center  items-center rounded-md font-bold text-md  py-2.5 px-3 text-blue-500" type="submit">
                                     <img className='h-4/5' src={arrow } alt='arrow'/>
                                     <span className="ml-0.5">Back</span>
                                </div>
                                
                                <div id={(dateselected && timeselected )?(""):("disableNext")} onClick={()=>{
                                    schedulebutton?dispatch(scheduleNow()):dispatch(nextStep())
                                }} className="cursor-pointer flex bg-blue-500 w-40 min-w-full justify-center  align-center rounded-md font-semibold text-sm  py-2.5 px-3 text-gray-200" type="submit">
                                     <span className="">{rightbutton}</span>
                                </div>
                                
                                
            </div>
        </>
    )
}

export default Bottom
