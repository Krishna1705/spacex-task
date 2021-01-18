import React,{useState,useEffect} from 'react';
import {useSelector} from 'react-redux';

import {Modal,Alert,Button} from 'react-bootstrap';
import LoadingBox from './LoadingBox';


export default function ViewModal({show,closeModal}) {
     
    const launchItemDetail=useSelector(state=>state.launchItemDetail);
    const {launch,loading,error}=launchItemDetail;
 

    return (
        <div>
             <Modal show={show} onHide={closeModal}  backdrop="static" keyboard={false} >
                        <Modal.Header closeButton>
                        <Modal.Title>Mission Detail</Modal.Title>
                        </Modal.Header>
                            {
                                loading?(<LoadingBox></LoadingBox>):
                                error?(<Alert variant='danger'>{error}</Alert>):
                                      (  
                                          <Modal.Body>
                                            <h5>Flight Number:</h5>{launch.flight_number}<br/><br/>
                                            <h5>Mission Name:</h5>{launch.mission_name}<br/><br/>
                                            <h5>Launch Year:</h5>{launch.launch_year}<br/><br/>
                                            <h5>Success Status:</h5>{launch.launch_success===true?(<p>Yes</p>):(<p>No</p>)}<br/>
                                            <h5>Details:</h5> {launch.details==null? (<p>Detail is Not Available</p>): (<p>{launch.details}</p>)}
                                        </Modal.Body>
                                     )
                            }
                      
                            <Modal.Footer>
                                
                                <Button variant="dark" onClick={closeModal}>
                                    Close
                                </Button>
                            
                            </Modal.Footer>
                       </Modal>
        </div>
    )
}
