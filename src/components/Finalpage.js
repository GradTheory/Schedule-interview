import React from 'react'
import ticknew from '../ticknew.svg'
import { useSelector ,useDispatch} from 'react-redux'
import {getBackHome} from '../Redux/Action'
const Finalpage = () => {
    const dispatch = useDispatch()
    const date = useSelector(state => state.date)
     const time = useSelector(state => state.time)
     const showtime = useSelector(state => state.showtime)
     const email = useSelector(state => state.email)

     var split = new Date().toString().split(" ");
     var timeZone = split[5].substring(0,split.length-3)

    return (
        <div className='flex flex-col mt-10  items-center justify-around h-4/5'>
            <div className='bg-blue-100 rounded-full p-2' ><img src={ticknew} alt='tick'/></div>
            <div>
            <h1 className='text-2xl font-bold text-gray-700 mb-4' >We just scheduled a demo for you!</h1>
            
            <h2 className='text-center text-sm text-gray-400' >A calendar invitation for your upcoming demo session has <br></br> been sent to your email({email})</h2>
        </div>


             <div  className='bg-gray-100 mt-4 flex  rounded-md px-4 py-4 w-5/12 p-3 justify-between'>
                 <div>
                 <p className='text-gray-400 text-xs font-semibold '>DATE</p>
         <h3 className='text-black text-base font-bold' >{date}</h3> 
                 </div>
         
           <div>

            <p className='text-gray-400 text-xs font-semibold'>TIME</p>
         {showtime?
            (<h3 className='text-black text-base font-bold' >{time}<span className='text-gray-400 text-xs font-normal'>{"("+timeZone+")"}</span></h3>):   
            (<h3 className='text-gray-300 text-sm font-normal' >{time}</h3> )  

         }
         </div>
        </div> 



         <div className='mt-6' >
        <div onClick={()=>{
                    dispatch(getBackHome())               
              }} className="cursor-pointer flex bg-blue-500 w-40 min-w-full justify-center  align-center rounded-md font-semibold text-sm  py-2.5 px-3 text-gray-200" type="submit">
              <span className="">Get back home</span>
         </div>

        <div  onClick={()=>{
                                    
              }} className="cursor-pointer flex bg-white w-40 min-w-full justify-center  align-center rounded-md font-semibold text-sm  py-2.5 px-3 text-blue-400" type="submit">
              <span className="mt-2">Resend E-mail</span>
         </div>
         </div>







        </div>
    )
}

export default Finalpage
