import React from 'react';
import {Link} from 'react-router-dom';

export default function Pagination({launchesperpage,totalLaunches,paginate}) {
    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(totalLaunches/launchesperpage);i++){
        pageNumbers.push(i);
    }
    return (
        <nav>
        <ul className="pagination">
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
