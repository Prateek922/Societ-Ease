
import React,{useRef} from "react";
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
import { faPen ,faTrash,faCirclePlus,faCircleDot} from '@fortawesome/free-solid-svg-icons';


function Tables() {
  const closeref = useRef();
  const addRef = useRef();
  return (
    <>
  <div className="content w-auto h-auto">
        <Row>
        <Col lg="4" md="4" sm="12" className="mx-4 d-flex align-items-center justify-content-center"><FontAwesomeIcon icon={faCirclePlus} onClick = {()=>{addRef.current.click()}} style={{height:"200px",color: "#7a7a7a",}} /></Col>
          <Col lg="4" md="4" sm="12">
            <Card className="card-stats">
              <CardHeader>
              <CardTitle tag="h4" className="d-flex flex-row">Maintenance's Title
              <div className="ml-auto">
              <FontAwesomeIcon  icon={faPen} size="sm" style={{position:"relative",right:"25px",color: "#e4391b",}} />
                <FontAwesomeIcon  icon={faTrash} size="sm" style={{color: "#00d6b3",}} />
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
               <strong>Priority-</strong><FontAwesomeIcon icon={faCircleDot} style={{marginLeft:"10px",marginRight:"3px",color: "#bd0000",}} /> High
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

      {/* Modal activation buttons */}
      <button className="btn d-none" ref={addRef} data-target="#editModal" data-toggle="modal">edit</button>
      {/* <button className="btn d-none"  ref= {delRef} data-target="#deleteModal" data-toggle="modal">delete</button> */}

      <div>
            <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModal" aria-hidden="true">
                <div className="modal-dialog custom-modal-box">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Maintenance</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="row modal-body">
                            <div className="log popup-form">
                                <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div className="form-box popup-form-box" style={{ height: "auto", width: "100%" }}>
                                        <form className="row g-3">
                                            <div className="col-12 mb-4">
                                                <label htmlFor="subject" className="form-label mb-2">Subject*</label>
                                                <input type="text" name="maintenanceSubject"  className="form-control" id="inputAddress" required placeholder="" />
                                            </div>
                                            <div className="col-12 mb-4">
                                                <label htmlFor="description" className="form-label mb-2">Description*</label>
                                                <textarea className="form-control" name="maintenanceDescription"  placeholder="Description" id="floatingTextarea2" style={{ height: '200px' }}></textarea>
                                            </div>
                                            <div className="col-6 mb-4">
                                                <label htmlFor="subject" className="form-label mb-2">Budget*</label>
                                                <input type="text" name="maintenanceBudget"  className="form-control" id="inputAddress" required placeholder="" />
                                            </div>
                                            <div className="col-6 mb-4">
                                                <label htmlFor="subject" className="form-label mb-2">Priority*</label>
                                                <input type="text" name="maintenancePriority"  className="form-control" id="inputAddress" required placeholder="" />
                                            </div>

                                            <div className="col-12">
                                                <button ref={closeref} type="button" className="btn" data-bs-dismiss="modal">Close</button>
                                                <button type="submit" className="btn btn-success"> Add Maintenace</button>
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
