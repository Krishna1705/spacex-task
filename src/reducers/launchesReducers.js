import { LAUNCHES_REQUEST,LAUNCHES_SUCCESS,LAUNCHES_FAIL } from '../constants/launchesConstants';


export const launchesListReducer=(state={loading:true,error:null,launches:[]},action)=>{
    switch(action.type){
        case LAUNCHES_REQUEST:return {
                               ...state,
                               loading:true,
                             
                              }
        case LAUNCHES_SUCCESS: return {
                               ...state,
                               loading:false,
                               launches:action.payload
                              }
        case LAUNCHES_FAIL: return {
            
                                loading:false,
                                error:action.payload
                               }
        default :return state
    }
}