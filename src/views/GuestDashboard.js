import React from "react";
import {
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Col
} from "reactstrap";
import { Link } from 'react-router-dom';


function GuestDashboard() {
    return (
        <>  
            <div className="content">
                <Row>
                    <Col md="10">
                        <Card className="card-user" >
                            <div className="image" style={{height:"220px",width:"100%"}}>
                                <img style={{width:"100%",height:"auto",borderRadius:"5px"}}
                                    src={require("assets/img/guestPass.png")}
                                    alt="guestPass image"
                                />
                            </div>
                            <CardBody>
                                <div className="author">
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        <img
                                            alt="..."
                                            className="avatar border-gray"
                                            src={require("assets/img/logo-profile.png")}
                                            style={{ width: "250px", height: "auto"}}
                                        />
                                        <h3 className="title">Prateek Arora</h3>
                                    </a>
                                </div>  
                            </CardBody>
                            <CardFooter>
                                <hr />
                                <div className="button-container">
                                    <Row>
                                        <Col className="ml-auto" lg="3" md="6" xs="6">
                                            <h5>
                                                {}<br />
                                                <small>Room no.</small>
                                            </h5>
                                        </Col>
                                        <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                                            <h5>
                                                2 <br />
                                                <small>Complaints</small>
                                            </h5>
                                        </Col>
                                        <Col className="mr-auto" lg="3">
                                            <h5>
                                                24,6$ <br />
                                                <small>Pending bill</small>
                                            </h5>
                                        </Col>
                                    </Row>
                                </div>
                            </CardFooter>
                        </Card>
                    </Col>


                </Row>
            </div>

        </>
    );
}

export default GuestDashboard;
