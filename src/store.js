import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from 'redux-thunk';

import { 
            launchesListReducer,
            launchDetailReducer,
            launchesUpcomingReducer,
            launchesPastReducer,
            launchesByDateReducer
       } from "./reducers/launchesReducers";

const INIITIAL_STATE={};


const reducer=combineReducers({
    launchesList:launchesListReducer,
    launchItemDetail:launchDetailReducer,
    launchesUpcomingList:launchesUpcomingReducer,
    launchesPastList:launchesPastReducer,
    launchesByDateList:launchesByDateReducer
})
//with help of following line we can see our store inside redux dev tools in chrome dev tools
const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducer,INIITIAL_STATE,composeEnhancer(applyMiddleware(thunk)))

export default store;