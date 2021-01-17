import Axios from 'axios';
import {LAUNCHES_REQUEST,LAUNCHES_SUCCESS,LAUNCHES_FAIL,LAUNCH_DETAIL_FAIL,LAUNCH_DETAIL_REQUEST,LAUNCH_DETAIL_SUCCESS} from '../constants/launchesConstants';

export const listLaunches=()=>async (dispatch)=>{
    dispatch({type:LAUNCHES_REQUEST})
    try{
        const {data}=await Axios.get('https://api.spacexdata.com/v3/launches');
        console.log(data);
        dispatch({type:LAUNCHES_SUCCESS,payload:data});

    }catch(error){
        dispatch({type:LAUNCHES_FAIL,payload:error.message});
    }
}

export const launchDetail=(flightId)=>async(dispatch)=>{
    dispatch({type:LAUNCH_DETAIL_REQUEST})
    try{
     //   console.log(flightId);
        const {data}=await Axios.get(`https://api.spacexdata.com/v3/launches/${flightId}`);
        console.log(data);
        dispatch({type:LAUNCH_DETAIL_SUCCESS,payload:data})
    }catch(error){
        dispatch({type:LAUNCH_DETAIL_FAIL,payload:error.message})
    }
}