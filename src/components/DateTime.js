import React, { useEffect, useRef, useState } from 'react'
import { getDay } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { DatePickerCalendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import { useDispatch } from 'react-redux'
import {addDate} from '../Redux/Action'
 

const modifiers = {
    disabled: date => getDay(date) === 7, // Disables Saturdays
    highlight: date => getDay(date) === 2 // Highlights Tuesdays
  }
  const modifiersClassNames = {
    highlight: '-highlight'
  }


const DateTime = () => {
  const [date, setDate] = useState('')
  console.log("date is",date);
  const dispatch = useDispatch();
  let date1 = date.toString().substr(4,12)
  let initialrender = useRef(true)

  useEffect(() => {
    if(initialrender.current){
      initialrender.current = false;
      
    }else{
      
      dispatch(addDate(date1))
      
    }
  }, [date])

    
    return (
        <div id='date'>
        <h2 className='text-gray-400 text-md font-normal mb-2'>
         Select a Date & Time</h2>
      <div className=' h-2/4 text-xs'>
     
  
    <DatePickerCalendar
      date={date}
      onDateChange={setDate}
      locale={enGB}
      modifiers={modifiers}
      modifiersClassNames={modifiersClassNames}
    />
  
      </div>
      </div>
    )
}

export default DateTime
