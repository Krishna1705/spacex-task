import React from 'react';
import {Link} from 'react-router-dom';

export default function Pagination({launchesPerPage,totalLaunches,paginate}) {
    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(totalLaunches/launchesPerPage);i++){
        pageNumbers.push(i);
    }
    return (
        <nav>
        <ul className="pagination" >
         { 
           pageNumbers.map(number=>(
            <li key={number} className="page-item"> 
               <Link to="#" className="page-link" onClick={()=>paginate(number)}>{number}</Link>
            </li>      
          ))
         }
        </ul>
            
        </nav>
    )
}
