import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {sendEmail} from '../Redux/Action'
import ticknew from '../greentick.svg'
const Form = () => {
    const [Name, setName] = useState("");
    const [phone, setphone] = useState(""); 
    const [email, setemail] = useState("");

    const [validemail, setvalidemail] = useState(false);
    const [validname, setvalidname] = useState(false);
    const [validphone, setvalidephone] = useState(false);

     const dispatch = useDispatch()
    function Validatename(){
        if(Name!=""){
            setvalidname(true)
        }else {
            setvalidname(false)
        }
    }

     function ValidateEmail() 
     {
      if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
       {
           
         setvalidemail(true)
       }else{
           setvalidemail(false)
       }
         
        
     }
function Validatephone()
{
  var phoneno = /^\d{10}$/;
  if(phone.match(phoneno)){
      setvalidephone(true)
      
  }else{
      setvalidephone(false)
  }
     
}


    useEffect(() => {
    
        dispatch(sendEmail(email))
        
    }, [email])
    return (
        <div className='ml-9 pt-7'>
        <h2 className='text-gray-400 text-md font-normal mb-2 '>Enter your information</h2>
            <h1 className='text-gray-800 text-xl font-medium mb-3'>Personal data</h1>
            <form className='' action="#">
                           <label className="leading-6 font-medium text-base" >Your Name</label>
                           <div className="flex justify-between items-center w-9/12 border-2 border-solid border-gray-300 rounded-md mt-2 mb-4">
                               <input id='caret' onBlur={(e)=>{
                                   Validatename()
                               }}   onChange={(e)=>{
                                   setName(e.target.value)
                               }} className="bg-transparent px-3.5 py-2 w-full border-transparent rounded-md focus:ring-2 focus:ring-blue-400 outline-none focus:ring-offset-0 " placeholder="Please enter your full name" type="text" required/>
                            {validname && (<span style={{position:'absolute',left:'79%'}} className='flex items-center justify-center bg-blue-50 rounded-full p-2 h-7 w-7 mr-2' ><img src={ticknew} alt='tick'/></span>)}
                            </div>
                            
                            <label className=" leading-6 font-medium text-base">Your work e-mail address</label>
                            <div className="flex justify-between items-center w-9/12 border-2 border-solid border-gray-300 rounded-md mt-2 mb-4">
                                <input  id='caret' onBlur={(e)=>{
                                   ValidateEmail()
                               }} onChange={(e)=>{
                                   setemail(e.target.value)
                               }} className="bg-transparent px-3.5 py-2 w-full border-transparent rounded-md focus:ring-2 focus:ring-blue-400 outline-none " placeholder="Please enter your e-mail address" type="email" required/>
                             {validemail && (<span style={{position:'absolute',left:'79%'}} className='flex items-center justify-center bg-blue-50 rounded-full p-2 h-7 w-7 mr-2' ><img src={ticknew} alt='tick'/></span>)}
                            </div>
                            <label className="leading-6 font-medium text-base">Phone number</label>
                            <div className="flex justify-between items-center  w-9/12 border-2 border-solid border-gray-300 rounded-md mt-2 mb-4">
                                <input id='caret' onBlur={(e)=>{
                                   Validatephone()
                               }} onChange={(e)=>{
                                   setphone(e.target.value)
                               }} className="bg-transparent  px-3.5 py-2 w-full border-transparent rounded-md focus:ring-2 focus:ring-blue-400 outline-none " placeholder="Please enter phone number" type="tel" required/>
                             {validphone && (<span style={{position:'absolute',left:'79%'}} className='flex items-center justify-center bg-blue-50 rounded-full p-2 h-7 w-7 mr-2' ><img src={ticknew} alt='tick'/></span>)}
                            </div>
                            
                        </form>
        </div>
    )
}

export default Form
