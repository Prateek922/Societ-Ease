import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Col
  } from "reactstrap";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faPen ,faTrash,faCircleDot} from '@fortawesome/free-solid-svg-icons';

function ResidentComplaintItem(props) {
    const {updateItem, deleteItem, complaint} = props;
    const color =  complaint.complaintPriority=='High' || complaint.complaintPriority=='high'?'red':'green'
    const statusColor = complaint.complaintStatus=='resolved' || complaint.complaintStatus=='Resolved'?'green':'red'

    return (
        <>
            <Col lg="4" md="4" sm="12">
            <Card className="card-stats">
              <CardHeader>
              <CardTitle tag="h4" className="d-flex flex-row">{complaint.complaintSubject}
              <div className="ml-auto">
                <FontAwesomeIcon  onClick = {()=>{updateItem(complaint)}} icon={faPen} size="sm" style={{position:"relative",right:"25px",color: "#00d6b3", cursor:"pointer"}} />
                <FontAwesomeIcon  onClick = {()=>{deleteItem(complaint)}} icon={faTrash} size="sm" style={{color: "#e4391b", cursor:"pointer"}} />
              </div>      
                </CardTitle>
              </CardHeader>
              <CardBody>
                <p className="card-category">{complaint.complaintDescription}</p>
              </CardBody>
              <CardFooter>
                <hr />
               <div className="stats d-flex flex-row">
               <div>
               <strong>Priority-</strong><FontAwesomeIcon icon={faCircleDot} style={{marginLeft:"10px",marginRight:"3px",color: `${color}`,}} /> {complaint.complaintPriority}
               </div>
                <div className="ml-auto" style={{color:`${statusColor}`}}>
                {complaint.complaintStatus}
                </div>
                </div>
              </CardFooter>
            </Card>
          </Col>
        </>
    )
}

export default ResidentComplaintItem