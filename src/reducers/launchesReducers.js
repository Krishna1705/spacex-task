import { 
         LAUNCHES_REQUEST,LAUNCHES_SUCCESS,LAUNCHES_FAIL,
         LAUNCH_DETAIL_SUCCESS,LAUNCH_DETAIL_REQUEST,LAUNCH_DETAIL_FAIL, 
         LAUNCH_UPCOMING_SUCCESS, LAUNCH_UPCOMING_REQUEST,LAUNCH_UPCOMING_FAIL, LAUNCH_PAST_SUCCESS, LAUNCH_PAST_REQUEST, LAUNCH_PAST_FAIL
       } from '../constants/launchesConstants';


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

export const launchesUpcomingReducer=(state={upcomingLaunches:[],loadingUpcoming:true,errorUpcoming:null},action)=>{
    switch(action.type){
        case LAUNCH_UPCOMING_REQUEST:return{
                                                ...state,
                                                loadingUpcoming:true
                                            }
        case LAUNCH_UPCOMING_SUCCESS:return{
                                                ...state,
                                                loadingUpcoming:false,
                                                upcomingLaunches:action.payload
                                            }
       case LAUNCH_UPCOMING_FAIL:return{
                                                loadingUpcoming:false,
                                                errorUpcoming:action.payload
                                            }
        default:return state;
    }
}

export const launchesPastReducer=(state={pastLaunches:[],loadingPast:true,errorPast:null},action)=>{
      switch(action.type){
          case LAUNCH_PAST_REQUEST:return{
                                        ...state,
                                        loadingPast:true
                                    }
          case LAUNCH_PAST_SUCCESS:return{
                                            ...state,
                                            loadingPast:false,
                                            pastLaunches:action.payload
                                        }
          case LAUNCH_PAST_FAIL:return{      
                                          loadingPast:false,
                                          errorPast:action.payload
                                       }
          default:return state
      }
}