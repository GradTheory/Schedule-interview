
const initialState={
    showFinal:false,
    email:"",
    leftbutton:true,
    schedulebutton:false,
    rightbutton:"Next Step",
    showform:false,
    dateselected:false,
    timeselected:false,
    showsidebot:false,
    showtime:false,
    date:"Please select",
    time:"Please select"
}

const interviewreducer = (state = initialState, action) =>{
    
    switch (action.type) {
      case "addDate": {
        
       
        return {
            ...state,
            dateselected:true,
            showsidebot:true,
            date:action.payload.date
        };
      }
      case "addTime": {
        const { time } = action.payload;
        const timemin = time.substr(-2,2) - 15 +30;
        const totaltime = time +"-"+ time.substring(0,time.length-2) + timemin 
        return {
            ...state,
            timeselected:true,
            showtime:true,
            time:totaltime
        };
      }
      case "nextStep":{
          return {
              ...state,
              leftbutton:false,
              schedulebutton:true,
              rightbutton:"Schedule Demo",
              showform:true
          }
      }
      case "backtoDate":{
          return {
              ...state,
              leftbutton:true,
              schedulebutton:false,
              rightbutton:"Next Step",
              showform:false
          }
      }
      case "sendEmail":{
        return {
            ...state,
            email:action.payload.email
        }
      }
      case "scheduleNow":{
        return {
            ...state,
            showFinal:true
        }
      }
      case "getBackHome":{
        return {
            ...state,
            showFinal:false,
    email:"",
    leftbutton:true,
    schedulebutton:false,
    rightbutton:"Next Step",
    showform:false,
    dateselected:false,
    timeselected:false,
    showsidebot:false,
    showtime:false,
    date:"Please select",
    time:"Please select"
        }
      }
    
      default:
        return state;
    }
  }


  export default interviewreducer;