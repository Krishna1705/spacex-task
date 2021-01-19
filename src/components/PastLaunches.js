import React,{useEffect,useState} from 'react';
import { Container,Col,Row,Alert,Table,Button } from 'react-bootstrap';
import LoadingBox from './LoadingBox';
import ViewModal from './ViewModal';

import {useDispatch,useSelector} from 'react-redux';
import {launchesPast,launchDetail} from '../actions/launchesActions';

import Pagination from './Pagination';

export default function PastLaunches() {
    const dispatch=useDispatch();
    const launchesPastList=useSelector(state=>state.launchesPastList);
    const {pastLaunches,loadingPast,errorPast}=launchesPastList;

    //-----code for launch detail starts here---
    const [show, setShow] = useState(false);
    const closeModal = () => setShow(false);
    const viewModal = ({item}) => {
                                    setShow(true);
                                    dispatch(launchDetail(item.flight_number))
                                   };
    
    //-----code for launch detail ends here---

    useEffect(()=>{
       dispatch(launchesPast())
    },[dispatch])

/*------------------------------pagination code starts here-------------------- */    

//code for pagination
const [currentPage,setCurrentPage]=useState(1);
const [launchesPerPage]=useState(10);
    
//get current launches

const indexOfLastPage=currentPage*launchesPerPage;//1*10=10
const indexOfFirstPage= indexOfLastPage-launchesPerPage;//10-10=0
const currentPastLaunches=pastLaunches.slice(indexOfFirstPage,indexOfLastPage)

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
        <Container>
          <h3 className='mb-3'>All Past Launches</h3>
            <Row className="justify-content-md-center">
             <Col>
                {
                    loadingPast?(<LoadingBox></LoadingBox>):
                    errorPast?(<Alert variant='danger'>{errorPast}</Alert>):
                    (
                        
                        <div>
                                        <Table responsive="sm">
                                                    <thead>
                                                    <tr>
                                                        <th>Flight No</th>
                                                        <th>Mission Name</th>
                                                        <th>Information</th>    
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {
                                                        currentPastLaunches.map((item)=>(

                                                            <tr key={item.flight_number}>
                                                    
                                                                <td>{item.flight_number}</td>
                                                                <td>{item.mission_name}</td>
                                                                <td><Button variant="info" onClick={()=>{viewModal({item})}}>View</Button>{' '}</td>
                                    
                                                           </tr>
                                                        ) )
                                                    
                                                    }
                                                    </tbody>
                                                </Table>
                                   </div>   
                    )
                }

                <ViewModal show={show} 
                           closeModal={closeModal} >
                </ViewModal>

                <Pagination size="sm" 
                                    launchesPerPage={launchesPerPage} 
                                    totalLaunches={pastLaunches.length} 
                                    paginate={paginate}
                                    maxPageNumberLimit={maxPageNumberLimit}
                                    minPageNumberLimit={minPageNumberLimit}
                                    handleNext={handleNext}
                                    handlePrev={handlePrev}
                                    currentPage={currentPage}>
                </Pagination>


             </Col>
            </Row>
        </Container>
        </>
    )
}
