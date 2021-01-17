import React from 'react'
import {Table,Button } from 'react-bootstrap';

export default function Launches({launches}) {
    return (
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
                                    launches.map((item,index)=>(
                                        <tr key={index}>
                                
                                            <td>{item.flight_number}</td>
                                            <td>{item.mission_name}</td>
                                            <td><Button variant="info">View</Button>{' '}</td>
                            
                                      </tr>
                                    ))}
                             
                                </tbody>
                            </Table>
                        </div>

    )
}
