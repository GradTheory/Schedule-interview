import React, { useEffect, useRef, useState } from 'react'
import { getDay,getDate } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { DatePickerCalendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import { useDispatch ,useSelector} from 'react-redux'
import {addDate} from '../Redux/Action'

 




const DateTime = () => {
  const modifiers = {
    // disabled: date => getDay(date) === 6, // Disables Saturdays
    // highlight: date => getDay(date) === 2 ,// Highlights Tuesdays
    selected:date =>getDate(date)==datemod
    
  }
  const modifiersClassNames = {
    highlight: '-highlight',
    selected:'-selected'
  }


  const [date, setDate] = useState('')
  const datesel = useSelector(state => state.date)
  const datemod =datesel.substr(0,2)
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
          Date={date}
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
