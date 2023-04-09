import React,{useEffect} from "react";
import {
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Col
} from "reactstrap";
import { Link } from 'react-router-dom';


function ResidentDashboard() {
    const residentData = localStorage.getItem('userDetails')
    useEffect(() => {
        console.log(residentData)
    }, [])

    return (
        <>  
        {residentData? 
            <div className="content">
                <Row>
                    <Col md="4">
                        <Card className="card-user" style={{ height: "60vh" }}>
                            <div className="image">
                                <img
                                    src={require("assets/img/solid-color-image.png")}
                                />
                            </div>
                            <CardBody>
                                <div className="author">
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        <img
                                            alt="..."
                                            className="avatar border-gray"
                                            src={require("assets/img/logo-profile.png")}
                                            style={{ width: "150px", height: "auto"}}
                                        />
                                        <h3 className="title">{residentData.residentName}</h3>
                                    </a>
                                    <p className="description"><strong>Security key-</strong>{residentData.securityKey}</p>
                                </div>
                            </CardBody>
                            <CardFooter>
                                <hr />
                                <div className="button-container">
                                    <Row>
                                        <Col className="ml-auto" lg="3" md="6" xs="6">
                                            <h5>
                                                {residentData.residentRoomNumber}<br />
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
                    <Col md="8" className="d-flex align-items-center">
                        <Row>
                            <Col md="6">
                                <Card className="card-stats" style={{margin:"20px auto", width: "85%", height: "  22vh",  }} >
                                    <CardBody>
                                        <Row>
                                            <Col md="2" xs="5">
                                                <div className="icon-big text-center icon-warning text-warning">
                                                    <i className="nc-icon nc-paper" />
                                                </div>
                                            </Col>
                                            <Col md="10" xs="7">
                                                <div className="numbers">
                                                    <p className="card-category">3 active notices</p>
                                                    <Link to="/admin/Notices" className="linktag" ><CardTitle tag="p">View Notices </CardTitle></Link>
                                                    <p />
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                    <CardFooter>
                                        <hr />
                                        <div className="stats">
                                            <Link to="/admin/Notices" className="linktag" ><i className="fas fa-sync-alt" /> See all current notices </Link>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card className="card-stats" style={{margin:"20px auto", width: "85%", height: "  22vh",  }} >
                                    <CardBody>
                                        <Row>
                                            <Col md="2" xs="5">
                                                <div className="icon-big text-center icon-warning text-warning">
                                                    <i className="nc-icon nc-settings" style={{color:"red"}} />
                                                </div>
                                            </Col>
                                            <Col md="10" xs="7">
                                                <div className="numbers">
                                                    <p className="card-category">3 active notices</p>
                                                    <Link to="/admin/Notices" className="linktag" ><CardTitle tag="p">Maintenance   </CardTitle></Link>
                                                    <p />
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                    <CardFooter>
                                        <hr />
                                        <div className="stats">
                                            <Link to="/admin/Notices" className="linktag" ><i className="fas fa-sync-alt" /> View all maintenance undergoing </Link>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card className="card-stats" style={{margin:"20px auto", width: "85%", height: "  22vh", }} >
                                    <CardBody>
                                        <Row>
                                            <Col md="2" xs="5">
                                                <div className="icon-big text-center icon-warning text-warning">
                                                    <i className="nc-icon nc-credit-card" style={{color:"green"}} />
                                                </div>
                                            </Col>
                                            <Col md="10" xs="7">
                                                <div className="numbers">
                                                    <p className="card-category">3 active notices</p>
                                                    <Link to="/admin/Notices" className="linktag" ><CardTitle tag="p">Bills </CardTitle></Link>
                                                    <p />
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                    <CardFooter>
                                        <hr />
                                        <div className="stats">
                                            <Link to="/admin/Notices" className="linktag" ><i className="fas fa-sync-alt" /> Click to see detailed bill </Link>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col md="6">
                                <Card className="card-stats" style={{margin:"20px auto", width: "85%", height: "  22vh" }} >
                                    <CardBody>
                                        <Row>
                                            <Col md="2" xs="5">
                                                <div className="icon-big text-center icon-warning text-warning">
                                                    <i className="nc-icon nc-chat-33 " style={{color:"cyan"}} />
                                                </div>
                                            </Col>
                                            <Col md="10" xs="7">
                                                <div className="numbers">
                                                    <p className="card-category">3 active notices</p>
                                                    <Link to="/admin/Notices" className="linktag" ><CardTitle tag="p">Post complaint   </CardTitle></Link>
                                                    <p />
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                    <CardFooter>
                                        <hr />
                                        <div className="stats">
                                            <Link to="/admin/Notices" className="linktag" ><i className="fas fa-sync-alt" /> Having any issues? Complaint now </Link>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </div>
            : <> Not Authorised </>}
        </>
    );
}

export default ResidentDashboard;
