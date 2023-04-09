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
                <Row >
                    <Col md="11" style={{margin:"auto"}}>
                        <Card className="card-user" >
                            <div className="image" style={{height:"250px",width:"100%"}}>
                                <img style={{width:"100%",height:"auto",borderRadius:"5px"}}
                                    src={require("assets/img/guestPass.png")}
                                    alt="guestPass image"
                                />
                            </div>
                            <CardBody>
                                <div className="author" style={{ width: "auto", height: "auto",position:"absolute",top:"40%",right:"5%" }}>
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        <img
                                            alt="..."
                                            className="avatar border-gray"
                                            src={require("assets/img/logo-profile.png")}
                                            style={{width:"55%",height: "auto",borderRadius:"0px",border:"5px solid black",}}
                                        />
                                        <h3 className="title">Prateek Arora</h3>
                                    </a>
                                </div> 
                                <Row style={{margin:"20px 10px",fontSize:"1rem"}}>
                                <Col className="text-right" lg="2" >
                                <h6 className="card-title" style={{margin:"0px"}}>Contact:</h6><br />
                                <h6 className="card-title" style={{margin:"0px"}}>Email:</h6><br />
                                <h6 className="card-title" style={{margin:"0px"}}>Room no:</h6><br />
                                <h6 className="card-title" style={{margin:"0px"}}>Purpose:</h6><br />
                                <h6 className="card-title" style={{margin:"0px"}}>In Date:</h6><br />
                                </Col>
                                <Col lg="6" className="text-left">
                                <p className="description" style={{margin:"0px",lineHeight:"1.2rem"}}><strong>Prateek Arora</strong></p><br />
                                <p className="description" style={{margin:"0px",lineHeight:"1.2rem"}}><strong>prateeka922@gmail.com</strong></p><br />
                                <p className="description" style={{margin:"0px",lineHeight:"1.2rem"}}><strong>8696054228</strong></p><br />
                                <p className="description" style={{margin:"0px",lineHeight:"1.2rem"}}><strong>Stay</strong></p><br />
                                <p className="description" style={{margin:"0px",lineHeight:"1.2rem"}}><strong>14 december 2023</strong></p><br />
                                </Col>
                                </Row>
                                
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
