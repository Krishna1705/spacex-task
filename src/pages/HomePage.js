import React,{useState,useEffect} from 'react';
import Launches from '../components/Launches';
import LoadingBox from '../components/LoadingBox';

import axios from 'axios';
import Pagination from '../components/Pagination';
import { Container,Row,Col} from 'react-bootstrap';


export default function HomePage() {
    const [launches,setLaunches]=useState([]);
    const [loading,setLoading]=useState(false);
    const [currentpage,setCurrentpage]=useState(1);
    const [launchesperpage,setLaunchesperpage]=useState(10);
    

    useEffect(()=>{
        const fetchLaunches=async()=>{
             setLoading(true);
             const launchesdata=await axios.get('https://api.spacexdata.com/v3/launches');
             console.log(launchesdata.data);
             const data=launchesdata.data;
             setLoading(false);
             setLaunches(data);
        }
        fetchLaunches();
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
