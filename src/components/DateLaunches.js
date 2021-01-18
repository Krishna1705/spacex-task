import React,{useState} from 'react';
import {Container} from 'react-bootstrap';
import DatePickerLib from './DatePickerLib';

import DateLaunchesList from './DateLaunchesList';
import {useDispatch} from 'react-redux';

import {launchesByDate} from '../actions/launchesActions';

export default function DateLaunches() {

  const [startDate,setStartDate]=useState(null);
  const [endDate,setEndDate]=useState(null);

  const dispatch=useDispatch();

//-----------------------start of handleClick--------------------------------
   const handleClick=(e,{startDate},{endDate})=>{
    e.preventDefault();
     console.log(startDate)
    if(startDate===null || endDate===null){
        alert("please fill all the input fields");
        return false;
    }else{
       let startDateString = new Date(startDate.getTime() - (startDate.getTimezoneOffset() * 60000 ))
                             .toISOString().split("T")[0];
        console.log(startDateString);  

        let endDateString = new Date(endDate.getTime() - (endDate.getTimezoneOffset() * 60000 ))
                           .toISOString().split("T")[0];
        console.log(endDateString);  

        //dispatch an action
        dispatch(launchesByDate(startDateString,endDateString)); 
      
        return true;
    } 

}
 
//-------------------------end  of handleClick-------------------------------------
    
    return (
       <>
        <Container>
          <h3 className='mb-3'>View Launches by Dates</h3>

          <DatePickerLib startDate={startDate}
                         endDate={endDate}
                         setStartDate={setStartDate}
                         setEndDate={setEndDate}
                         handleClick={handleClick}
                          
                          ></DatePickerLib>

         <DateLaunchesList></DateLaunchesList>

        </Container>
       </>
    )
}
