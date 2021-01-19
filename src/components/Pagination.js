import React from 'react';
import {Link} from 'react-router-dom';
import {Button,Pagination as PaginationBoot} from 'react-bootstrap';


export default function Pagination({launchesPerPage,totalLaunches,paginate,
                                    maxPageNumberLimit,minPageNumberLimit,
                                    handleNext,handlePrev,currentPage}){
    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(totalLaunches/launchesPerPage);i++){
        pageNumbers.push(i);
    }

    return (
        <nav>
        <ul className="pagination" >

        <li className="page-item"  >
          <Link to="#">
            <Button onClick={handlePrev}
                    disabled={currentPage===pageNumbers[0]?true:false}>Prev
            </Button>       
         </Link>
        </li>
       
         { 
           pageNumbers.map((number)=>{
                if(number<maxPageNumberLimit+1 && number>minPageNumberLimit)
                {
                    return(
                        
                        <PaginationBoot.Item key={number} 
                                             active={number===currentPage}
                                             onClick={()=>paginate(number)}>
                            {number}
                         </PaginationBoot.Item>     
                         
                        );
                }else{
                    return null;
                }
              })
         }

       
          <li className="page-item">
            <Link to="#">
                <Button onClick={handleNext} 
                        disabled={currentPage===pageNumbers[pageNumbers.length-1]?true:false}>Next
                </Button>       
            </Link>
          </li>
        </ul>
            
        </nav>
    )
}
