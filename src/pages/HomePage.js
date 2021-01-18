import React,{useState,useEffect} from 'react';
import Launches from '../components/Launches';
import LoadingBox from '../components/LoadingBox';

import Pagination from '../components/Pagination';
import {Container,Row,Col,Alert} from 'react-bootstrap';


import {useSelector,useDispatch} from 'react-redux';
import {listLaunches} from '../actions/launchesActions';
import FilterLaunches from '../components/FilterLaunches';

export default function HomePage() {

    //code for pagination
    const [currentPage,setCurrentPage]=useState(1);
    const [launchesPerPage]=useState(10);
    
     //to dispatch an action from view component to the redux store we use useDispatch() hook
     const dispatch = useDispatch();
     //to gain  state info from redux store we use useSelector Hook
     const launchesList=useSelector((state)=>state.launchesList);
     let {loading,launches,error}=launchesList;
    

     useEffect(()=>{
        dispatch(listLaunches());
    },[dispatch])
    

//get current launches

const indexOfLastPage=currentPage*launchesPerPage;//1*10=10
const indexOfFirstPage= indexOfLastPage-launchesPerPage;//10-10=0
const currentLaunches=launches.slice(indexOfFirstPage,indexOfLastPage)

// paginate function here

const paginate=(Number)=>{
    setCurrentPage(Number)
}

    return (
       <>

         <div>
             <div>
             <Container>
                <Row>
                    <Col>

                        { loading?(<LoadingBox></LoadingBox>):  
                          error?(<Alert variant='danger'>{error}</Alert>):
                                (
                                    <Launches launches={currentLaunches}></Launches>
                                )
                        }
                        <Pagination size="sm" launchesPerPage={launchesPerPage} totalLaunches={launches.length} paginate={paginate}></Pagination>

                   </Col>
                </Row>

                    <FilterLaunches/>

               
             </Container>
            </div>
        </div>
        </>
    )
}
