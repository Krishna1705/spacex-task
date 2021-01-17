import { LAUNCHES_REQUEST,LAUNCHES_SUCCESS,LAUNCHES_FAIL,LAUNCH_DETAIL_SUCCESS,LAUNCH_DETAIL_REQUEST,LAUNCH_DETAIL_FAIL } from '../constants/launchesConstants';


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

export const launchDetailReducer=(state={launch:{},error:null,loading:true},action)=>{
       switch(action.type){
           case LAUNCH_DETAIL_REQUEST:return{
                                            ...state,
                                            loading:true
                                        }
           case LAUNCH_DETAIL_SUCCESS:return{
                                            ...state,
                                            loading:false,
                                            launch:action.payload
                                        }
          case LAUNCH_DETAIL_FAIL:return{
                                            laoding:false,
                                            error:action.payload
                                        }
          default:return state;
       }
}