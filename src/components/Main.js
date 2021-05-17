import React from 'react'
import DateTime from './DateTime'

import Form from './Form'

import Mainright from './Mainright'
import { useSelector } from 'react-redux'
const Main = () => {
    const showform = useSelector(state => state.showform)
    return (
        <>
          {showform?
          (<Form />):
          (
        <div className='flex justify-around pt-7 ml-9 overflow-hidden'>
         <DateTime />
         <Mainright/>
         </div>
         )}
        </>
    )
}

export default Main
