
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addTime} from '../Redux/Action'


const Time = ({value}) => {
  let todisable = false
  if(value === '11:00'){todisable = true}
  const dispatch = useDispatch()
  const [selected,setselected] = useState(false)
    return (
        <div id={todisable && ('disable')} onClick={()=>{
          dispatch(addTime(value));
          if(selected){
            setselected(false)
          }else{setselected(true)}
          }} 
          className={selected?('mr-2 flex mb-3 bg-blue-500 text-white border border-gray-400 border-solid rounded-md  font-semibold text-sm py-2 px-7  items-center justify-center'):
            ('mr-2 flex mb-3 bg-white text-blue-400 hover:bg-blue-500 hover:text-white border  border-gray-400 border-solid rounded-md  font-semibold text-sm py-2 px-7  items-center justify-center')}>
        {value}
      </div>
    )
}

export default Time
