import React,{useState,useEffect} from 'react';
import Launches from '../components/Launches';
import LoadingBox from '../components/LoadingBox';

import Pagination from '../components/Pagination';
import {Container,Row,Col,Alert} from 'react-bootstrap';


import {useSelector,useDispatch} from 'react-redux';
import {listLaunches} from '../actions/launchesActions';
import FilterLaunches from '../components/FilterLaunches';

export default function HomePage() {

     //to dispatch an action from view component to the redux store we use useDispatch() hook
     const dispatch = useDispatch();
     //to gain  state info from redux store we use useSelector Hook
     const launchesList=useSelector((state)=>state.launchesList);
     let {loading,launches,error}=launchesList;
    

     useEffect(()=>{
        dispatch(listLaunches());
    },[dispatch])
    
/*------------------------------pagination code starts here-------------------- */    

//code for pagination
const [currentPage,setCurrentPage]=useState(1);
const [launchesPerPage]=useState(10);
    
//get current launches

const indexOfLastPage=currentPage*launchesPerPage;//1*10=10
const indexOfFirstPage= indexOfLastPage-launchesPerPage;//10-10=0
const currentLaunches=launches.slice(indexOfFirstPage,indexOfLastPage)

//code to limit the page numbers
const [pageNumberLimit]=useState(5);
const [maxPageNumberLimit,setMaxPageNumberLimit]=useState(5);
const [minPageNumberLimit,setMinPageNumberLimit]=useState(0);

// paginate function here

const paginate=(Number)=>{
    setCurrentPage(Number)
}
//next btn handle
const handleNext=()=>{
    setCurrentPage(currentPage+1);
    if(currentPage+1>maxPageNumberLimit){
        setMaxPageNumberLimit(maxPageNumberLimit+pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit+pageNumberLimit);
    }
}

//prev btn handle
const handlePrev=()=>{
    setCurrentPage(currentPage-1);

    if((currentPage-1)%pageNumberLimit===0){
        setMaxPageNumberLimit(maxPageNumberLimit-pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit-pageNumberLimit);
    }
}

/*------------------------------pagination code ends here-------------------- */
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
                        <Pagination size="sm" 
                                    launchesPerPage={launchesPerPage} 
                                    totalLaunches={launches.length} 
                                    paginate={paginate}
                                    maxPageNumberLimit={maxPageNumberLimit}
                                    minPageNumberLimit={minPageNumberLimit}
                                    handleNext={handleNext}
                                    handlePrev={handlePrev}
                                    currentPage={currentPage}>

                        </Pagination>

                   </Col>
                </Row>
                    <FilterLaunches/>               
             </Container>
            </div>
        </div>
        </>
    )
}
