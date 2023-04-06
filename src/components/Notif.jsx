import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Col
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCircleDot } from '@fortawesome/free-solid-svg-icons';

export default function Notif() {
    const notificationAlert = React.useRef();

    return (
        <>
            <div className="content"><h2 className="title" style={{marginBottom:"55px",marginTop:"60px"}}>Resident's complaints</h2>
                <Row>
                    <Col md="6">
                        <Card className="card-stats">
                            <CardHeader>
                                <CardTitle tag="h4" className="d-flex flex-row">Complaint's Title
                                    <div className="ml-auto">
                                        <p style={{ fontSize: "15px" }} className="card-category">by: <FontAwesomeIcon icon={faUser} style={{ marginLeft: "4px", marginRight: "4px" }} />Prateek Arora, 620</p>

                                    </div>
                                </CardTitle>

                            </CardHeader>
                            <CardBody>
                                <p className="card-category">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                                    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                                    tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                                    quia. Quo neque error repudiandae fuga? commodi repudiandae consequuntur voluptatum laborum
                                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                                    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                                    tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                                    quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos </p>
                            </CardBody>
                            <CardFooter>
                                <hr />
                                <div className="stats d-flex flex-row">
                                    <div>
                                        <strong>Status-</strong><FontAwesomeIcon icon={faCircleDot} style={{ marginLeft: "10px", marginRight: "3px", color: "#bd0000", }} /> Unsolved
                                    </div>
                                    <div className="ml-auto">
                                        dated 4/12/2023
                                    </div>

                                </div>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card className="card-stats">
                            <CardHeader>
                                <CardTitle tag="h4" className="d-flex flex-row">Complaint's Title
                                    <div className="ml-auto">
                                        <p style={{ fontSize: "15px" }} className="card-category">by: <FontAwesomeIcon icon={faUser} style={{ marginLeft: "4px", marginRight: "4px" }} />Prateek Arora, 620</p>

                                    </div>
                                </CardTitle>

                            </CardHeader>
                            <CardBody>
                                <p className="card-category">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                                    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                                    tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                                    quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos </p>
                            </CardBody>
                            <CardFooter>
                                <hr />
                                <div className="stats d-flex flex-row">
                                    <div>
                                        <strong>Status-</strong><FontAwesomeIcon icon={faCircleDot} style={{ marginLeft: "10px", marginRight: "3px", color: "#bd0000", }} /> Unsolved
                                    </div>
                                    <div className="ml-auto">
                                        dated 4/12/2023
                                    </div>

                                </div>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card className="card-stats">
                            <CardHeader>
                                <CardTitle tag="h4" className="d-flex flex-row">Complaint's Title
                                    <div className="ml-auto">
                                        <p style={{ fontSize: "15px" }} className="card-category">by: <FontAwesomeIcon icon={faUser} style={{ marginLeft: "4px", marginRight: "4px" }} />Prateek Arora, 620</p>

                                    </div>
                                </CardTitle>

                            </CardHeader>
                            <CardBody>
                                <p className="card-category">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                                    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                                    tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                                    quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos </p>
                            </CardBody>
                            <CardFooter>
                                <hr />
                                <div className="stats d-flex flex-row">
                                    <div>
                                        <strong>Status-</strong><FontAwesomeIcon icon={faCircleDot} style={{ marginLeft: "10px", marginRight: "3px", color: "#bd0000", }} /> Unsolved
                                    </div>
                                    <div className="ml-auto">
                                        dated 4/12/2023
                                    </div>

                                </div>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card className="card-stats">
                            <CardHeader>
                                <CardTitle tag="h4" className="d-flex flex-row">Complaint's Title
                                    <div className="ml-auto">
                                        <p style={{ fontSize: "15px" }} className="card-category">by: <FontAwesomeIcon icon={faUser} style={{ marginLeft: "4px", marginRight: "4px" }} />Prateek Arora, 620</p>

                                    </div>
                                </CardTitle>

                            </CardHeader>
                            <CardBody>
                                <p className="card-category">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                    optio, eaque rerum! Provident similique accusas </p>
                            </CardBody>
                            <CardFooter>
                                <hr />
                                <div className="stats d-flex flex-row">
                                    <div>
                                        <strong>Status-</strong><FontAwesomeIcon icon={faCircleDot} style={{ marginLeft: "10px", marginRight: "3px", color: "#bd0000", }} /> Unsolved
                                    </div>
                                    <div className="ml-auto">
                                        dated 4/12/2023
                                    </div>

                                </div>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}


