import React,{useEffect,useState} from 'react';
import {Container,Col,Row,Table,Button,Alert} from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import {launchesUpcoming,launchDetail} from '../actions/launchesActions';

import LoadingBox from './LoadingBox';
import ViewModal from './ViewModal';

export default function UpcomingLaunches() {
    const dispatch=useDispatch();
    const launchesUpcomingList=useSelector(state=>state.launchesUpcomingList);
    const {upcomingLaunches,loadingUpcoming,errorUpcoming}=launchesUpcomingList;

    // -----launch detail code for modal start----
    
    const [show, setShow] = useState(false);
    const closeModal = () => setShow(false);
    const viewModal = ({item}) => {
                                    setShow(true);
                                    dispatch(launchDetail(item.flight_number))
                                   };
    
    const launchItemDetail=useSelector(state=>state.launchItemDetail);
    const {launch,loading,error}=launchItemDetail;
   // -----launch detail code for modal ends----

    useEffect(()=>{
        dispatch(launchesUpcoming())
    },[dispatch])

    return (
        <>
          <div>
            <Container>
              <h3>All Upcoming Launches</h3>
                <Row className="justify-content-md-center">
                    <Col>
                    {
                        loadingUpcoming?(<LoadingBox></LoadingBox>):
                        errorUpcoming?(<Alert variant='danger'></Alert>):
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
                                                        upcomingLaunches.map((item)=>(

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
                     
                    </Col>
                    
                    <ViewModal show={show} onHide={closeModal} 
                               closeModal={closeModal} launch={launch} 
                               loading={loading} error={error} >
                    </ViewModal>

                </Row>
            </Container>
          </div>
        </>
       
    )
}
