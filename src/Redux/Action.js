const fullmonth =(mon)=>{
    switch (mon) {
        case 'Jan':
            return 'January'
        
        case 'Feb':
            return 'February'
            
        case 'Mar':
            return 'March'
            
        case 'Apr':
            return 'April'
            
        case 'May':
            return 'May'
            
        case 'Jun':
            return 'June'
            
        case 'Jul':
            return 'July'
            
        case 'Aug':
            return 'August'
            
        case 'Sep':
            return 'September'
            
        case 'Oct':
            return 'October'
            
        case 'Nov':
            return 'November'
            
        case 'Dec':
            return 'December'
        
    
        default:
            return mon
            
    }

}

export const  addDate =(date) =>{
    const date1=date.split(" ",3)
    const month = fullmonth(date1[0])
    const fulldate = date1[1] +". "+ month+" " +date1[2]
    
    return {
        type:"addDate",
        payload:{
            date:fulldate
        }
    }
}

export const  addTime =(time) =>{
    

    return {
        type:"addTime",
        payload:{
            time:time
        }
    }
}
export const  nextStep =() =>{
    

    return {
        type:"nextStep",
    }
}
export const  backtoDate =() =>{
    

    return {
        type:"backtoDate",
    }
}
export const  scheduleNow =() =>{
    
console.log("schedule now action");
    return {
        type:"scheduleNow",
    }
}
export const  getBackHome =() =>{
    return {
        type:"getBackHome",
    }
}
export const  sendEmail =(email) =>{
    

    return {
        type:"sendEmail",
        payload:{
            email:email
        }
    }
}