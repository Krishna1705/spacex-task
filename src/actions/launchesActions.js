import Axios from 'axios';
import {LAUNCHES_REQUEST,LAUNCHES_SUCCESS,LAUNCHES_FAIL} from '../constants/launchesConstants';

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