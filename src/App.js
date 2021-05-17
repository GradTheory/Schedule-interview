import React from 'react'
import './App.css';
import Bottom from './components/Bottom';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import { useSelector } from 'react-redux'


import Finalpage from './components/Finalpage';

function App() {
  const showFinal = useSelector(state => state.showFinal)
  if(showFinal){
  
      return(
      <div id='modal' className='shadow-md w-9/12 h-3/4 font-body  grid grid-cols-9 grid-rows-6 '>

    <div className='col-span-9 row-span-6'>

     <Finalpage/>
    </div>
    </div>)
    }
    else{
      return (

        <div id='modal' className='shadow-md w-9/12 h-3/4 font-body  grid grid-cols-9 grid-rows-6 '>
         
         <div  className='shadow-xl bg-white min-w-full col-span-3 sm:min-w-full row-span-5 border rounded-md border-l-0'><Sidebar /></div>
         <div  className='bg-white  col-span-6 row-span-5 border rounded-md'><Main/></div>
         <div  className='bg-white col-span-9 row-span-1'><Bottom/></div>
        </div>
      );
    }

}

export default App;
