import React from 'react';
import {Col,Button,Form, Jumbotron} from 'react-bootstrap';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export default function DatePickerLib({startDate,endDate,setStartDate,setEndDate,handleClick}) {
    
    return (
     <>
       <Jumbotron>
        <Form>
          <Form.Row className="justify-content-md-center">
               <Col md="auto" className="m-1">
               <span>Start Date: </span>
                    <DatePicker style={{ padding: "16px", background: "#f0f0f0", color: "#fff"}}
                        selected={startDate}
                        onChange={date=>setStartDate(date)}
                        dateFormat='yyyy-MM-dd'
                        selectsStart
                        isClearable
                        showYearDropdown
                        scrollableMonthYearDropdown
                        required
                        />
                </Col>
                <Col md="auto" className="m-1">
                <span>End Date: </span>
                    <DatePicker
                        selected={endDate}
                        onChange={date => setEndDate(date)}
                        dateFormat='yyyy-MM-dd'
                        selectsEnd
                        isClearable
                        showYearDropdown
                        scrollableMonthYearDropdown
                        required
                    />
                </Col>        
                   
                <Col md="auto" className="m-1">
                    <Button variant="dark" onClick={(e)=>handleClick(e,{startDate},{endDate})}>Filter By Dates</Button>
               </Col>
               
             </Form.Row>
          </Form>
        </Jumbotron>
     </>
    )
}
