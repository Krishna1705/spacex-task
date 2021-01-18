import React,{useState} from 'react'
import {Table,Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {launchDetail} from '../actions/launchesActions';

import ViewModal from './ViewModal';

export default function Launches({launches}) {
    
    const dispatch = useDispatch();

  //--------launch deatil code starts here---
    const [show, setShow] = useState(false);
    const closeModal = () => setShow(false);
    const viewModal = ({item}) => {
                                    setShow(true);
                                    dispatch(launchDetail(item.flight_number))
                                   };
//--------launch deatil code ends here----
    return (
        <>
               <h3 className='mb-3'>All Launches</h3>
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
                          
                    <ViewModal show={show}
                               closeModal={closeModal}>
                    </ViewModal>
                        

             
        </>

    )
}
