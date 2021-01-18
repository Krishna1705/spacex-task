import React,{useEffect,useState} from 'react';
import { Container,Col,Row,Alert,Table,Button } from 'react-bootstrap';
import LoadingBox from './LoadingBox';
import ViewModal from './ViewModal';

import {useDispatch,useSelector} from 'react-redux';
import {launchesPast,launchDetail} from '../actions/launchesActions';

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
                                                        pastLaunches.map((item)=>(

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
             </Col>
            </Row>
        </Container>
        </>
    )
}
