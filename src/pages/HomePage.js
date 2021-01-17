import React,{useState,useEffect} from 'react';
import Launches from '../components/Launches';
import LoadingBox from '../components/LoadingBox';

//import axios from 'axios';
import Pagination from '../components/Pagination';
import { Container,Row,Col} from 'react-bootstrap';

import {useSelector,useDispatch} from 'react-redux';
import {listLaunches} from '../actions/launchesActions';

export default function HomePage() {

    //code for pagination
    const [currentpage,setCurrentpage]=useState(1);
    const [launchesperpage]=useState(10);
    
     //to dispatch an action from view component to the redux store we use useDispatch() hook
     const dispatch = useDispatch();
     //to gain  state info from redux store we use useSelector Hook
     const launchesList=useSelector((state)=>state.launchesList);
     let {loading,launches,error}=launchesList;
    

     useEffect(()=>{
        dispatch(listLaunches());
    },[])
    

//get current launches

const indexOfLastPage=currentpage*launchesperpage;//1*10=10
const indexOfFirstPage= indexOfLastPage-launchesperpage;//10-10=0
const currentLaunches=launches.slice(indexOfFirstPage,indexOfLastPage)

// paginate function here

const paginate=(Number)=>{
    setCurrentpage(Number)
}

    return (
       <>

         <div>
             <div>
            <Container>
                <Row>
                    <Col>

         { loading?
                   (<LoadingBox></LoadingBox>)
                 :  
                   (
                       <Launches launches={currentLaunches}></Launches>
                    )
         }
         <Pagination launchesperpage={launchesperpage} totalLaunches={launches.length} paginate={paginate}></Pagination>

         
         </Col>
                </Row>
            </Container>
        </div>
        </div>
        </>
    )
}
