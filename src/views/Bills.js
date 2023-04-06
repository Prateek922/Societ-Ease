import React, {useRef} from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus} from '@fortawesome/free-solid-svg-icons';

function Tables() {
  const closeref = useRef();
  const addRef = useRef();

  return (
    <>
      <div className="content w-auto h-auto">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Add Bill <FontAwesomeIcon icon={faCirclePlus} onClick = {()=>{addRef.current.click()}} style={{marginLeft:"10px",color: "#7a7a7a",}} /></CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Room no.</th>
                      <th>Contact No.</th>
                      <th >Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td >$36,738</td>
                    </tr>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td >$36,738</td>
                    </tr>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td >$36,738</td>
                    </tr>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td >$36,738</td>
                    </tr>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td >$36,738</td>
                    </tr>
                    <tr>
                      <td>Minerva Hooper</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                      <td >$23,789</td>
                    </tr>
                    <tr>
                      <td>Sage Rodriguez</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                      <td >$56,142</td>
                    </tr>
                    <tr>
                      <td>Philip Chaney</td>
                      <td>Korea, South</td>
                      <td>Overland Park</td>
                      <td >$38,735</td>
                    </tr>
                    <tr>
                      <td>Doris Greene</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                      <td >$63,542</td>
                    </tr>
                    <tr>
                      <td>Mason Porter</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                      <td >$78,615</td>
                    </tr>
                    <tr>
                      <td>Jon Porter</td>
                      <td>Portugal</td>
                      <td>Gloucester</td>
                      <td >$98,615</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
           </Row>
      </div>

      {/* Modal activation buttons */}
      <button className="btn d-none" ref={addRef} data-target="#editModal" data-toggle="modal">edit</button>
      {/* <button className="btn d-none"  ref= {delRef} data-target="#deleteModal" data-toggle="modal">delete</button> */}

      <div>
            <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModal" aria-hidden="true">
                <div className="modal-dialog custom-modal-box">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Bill</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="row modal-body">
                            <div className="log popup-form">
                                <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div className="form-box popup-form-box" style={{ height: "auto", width: "100%" }}>
                                        <form className="row g-3">
                                            <div className="col-12 mb-4">
                                                <label htmlFor="subject" className="form-label mb-2">Room Number*</label>
                                                <input type="text" name="billRoomNumber"  className="form-control" id="inputAddress" required placeholder="" />
                                            </div>
                                          
                                            <div className="col-6 mb-4">
                                                <label htmlFor="billtype" className="form-label mb-2">Bill Type*</label>
                                                <input type="text" name="billType"  className="form-control" id="inputAddress" required placeholder="" />
                                            </div>
                                            <div className="col-6 mb-4">
                                                <label htmlFor="billamount" className="form-label mb-2">Bill Amount*</label>
                                                <input type="text" name="billAmount"  className="form-control" id="inputAddress" required placeholder="" />
                                            </div>

                                            <div className="col-12">
                                                <button ref={closeref} type="button" className="btn" data-bs-dismiss="modal">Close</button>
                                                <button type="submit" className="btn btn-success"> Add Bill</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </>
  );
}

export default Tables;
