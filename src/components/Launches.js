import React,{useState} from 'react'
import {Table,Button,Modal,Alert} from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import {launchDetail} from '../actions/launchesActions';
import LoadingBox from './LoadingBox';

export default function Launches({launches}) {
    const [show, setShow] = useState(false);
    

    const dispatch = useDispatch();
    const launchItemDetail=useSelector(state=>state.launchItemDetail);
    const {launch,loading,error}=launchItemDetail;

    const closeModal = () => setShow(false);
    const viewModal = ({item}) => {
                                    setShow(true);
                                    dispatch(launchDetail(item.flight_number))
                                   };
  

    return (
        <>
       
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
                                    launches.map((item)=>(

                                        <tr key={item.flight_number}>
                                
                                            <td>{item.flight_number}</td>
                                            <td>{item.mission_name}</td>
                                            <td><Button variant="info" onClick={()=>viewModal({item})}>View</Button>{' '}</td>
                            
                                      </tr>
                                    ) )
                                   
                                }
                                
                             
                                </tbody>
                            </Table>
                        </div>
                        
                        

                <Modal show={show} onHide={closeModal}>
                        <Modal.Header closeButton>
                        <Modal.Title>Mission Detail</Modal.Title>
                        </Modal.Header>
                    {
                        loading?(<LoadingBox></LoadingBox>):
                          error?(<Alert variant='danger'>{error}</Alert>):
                               (  <Modal.Body>
                                    <h5>Flight Number:</h5>{launch.flight_number}<br/><br/>
                                    <h5>Mission Name:</h5>{launch.mission_name}<br/><br/>
                                    <h5>Launch Year:</h5>{launch.launch_year}<br/><br/>
                                    <h5>Success Status:</h5>{launch.launch_success===true?(<p>Yes</p>):(<p>No</p>)}<br/>
                                    <h5>Details:</h5> {launch.details==null? (<p>Detail is Not Available</p>): (<p>{launch.details}</p>)}
                                  </Modal.Body>
                                )
                    }
                      
                        
                        <Modal.Footer>
                            
                            <Button variant="info" onClick={closeModal}>
                                Close
                            </Button>
                        
                        </Modal.Footer>
                </Modal>
        </>

    )
}
