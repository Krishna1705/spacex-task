import React,{useState} from 'react';
import {Alert,Table,Button} from 'react-bootstrap';
import LoadingBox from './LoadingBox';
import ViewModal from './ViewModal';

import {useSelector,useDispatch} from 'react-redux';
import {launchDetail} from '../actions/launchesActions';

export default function DateLaunchesList() {

    const launchesByDateList=useSelector(state=>state.launchesByDateList);
    const {dateLaunches,loadingDate,errorDate}=launchesByDateList;

        // -----launch detail code for modal start----
        const dispatch=useDispatch();
        const [show, setShow] = useState(false);
        const closeModal = () => setShow(false);
        const viewModal = ({item}) => {
                                        setShow(true);
                                        dispatch(launchDetail(item.flight_number))
                                       };
       
       // -----launch detail code for modal ends----

    return (
       <>
       {
            loadingDate?(<LoadingBox></LoadingBox>):
            errorDate?(<Alert variant="danger">{errorDate}</Alert>):
            
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
                            dateLaunches.length<1?(<Alert variant="danger" className="mt-2">Please enter valid dates to view the launches. No Launch is available between these dates.</Alert>):
                            dateLaunches.map((item)=>(
                                                <tr key={item.flight_number}>
                                                    
                                                 <td>{item.flight_number}</td>
                                                 <td>{item.mission_name}</td>
                                                 <td><Button variant="info"  onClick={()=>{viewModal({item})}}>View</Button>{' '}</td>
                                    
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

       </>
    )
}
