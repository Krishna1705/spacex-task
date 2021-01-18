import React from 'react';
import {Jumbotron,Button,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function FilterLaunches() {
    return (
       <>
        <Jumbotron>
                    <Row className="justify-content-md-center">
                        <Col md="auto" className="m-1">
                          <Link to="/upcomingLaunches"><Button variant="dark">View Upcoming Launches</Button></Link>
                        </Col>
                        <Col md="auto" className="m-1">
                          <Link to="/pastLaunches"><Button variant="dark">View Past Launches</Button></Link>
                        </Col>
                        <Col md="auto" className="m-1">
                           <Link to="/launchesByDate"> <Button variant="dark">View Launches by Date</Button></Link> 
                        </Col>
                    </Row>
        </Jumbotron>
       </>
    )
}
