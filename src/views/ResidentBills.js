import React, { useRef, useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  CardHeader,
  Table,
  Row,
  Col
} from "reactstrap";
import { getAllBills, addBill } from "api/Bills/billApi";
import { Link } from 'react-router-dom';

function Tables() {
  const closeref = useRef();
  const addRef = useRef();
  const [billData, setBillData] = useState({
    billRoomNumber: "",
    billType: "",
    billAmount: ""
  })
  const [billList, setBillList] = useState({
    "success": true,
    "bills": [
      {
        "_id": "6430567633c6406d6e317eb6",
        "billID": "dd2f1604-182e-42e2-9611-7a073b157f56",
        "billRoomNumber": 101,
        "billForResident": "903c6429-9884-48ce-83e7-887630677c14",
        "billType": "Water",
        "billDue": 2000,
        "billStatus": "Paid",
        "__v": 0,
        "billTotal": 3000
      }
    ]
  })
  const [catBill, setCatBill] = useState([
    {
      billRoomNumber: "",
      electricity_Dues: 0,
      water_Dues: 0,
      maintenance_Dues: 0,
      wifi_Dues: 0,
      total_Dues: 0
    }
  ])

  const handleChange = (e) => {
    setBillData({ ...billData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    const response = await addBill(billData);
    if (response.success) {
      console.log(response);
      fetchAllBills();
    } else console.log(response);
  }

  const groupBillsByRoomNumber = (bills) => {
    const mp = new Map();
    bills.map((bill) => {
      if (bill.billType === 'Water') {
        if (mp.has(bill.billRoomNumber)) {
          let obj = mp.get(bill.billRoomNumber);
          mp.set(bill.billRoomNumber, { ...obj, water_Dues: bill.billDue, total_Dues: obj.total_Dues + bill.billDue })
        } else {
          mp.set(bill.billRoomNumber, { billRoomNumber: bill.billRoomNumber, water_Dues: bill.billDue, total_Dues: bill.billDue });
        }
      } else if (bill.billType === 'Maintenance') {
        if (mp.has(bill.billRoomNumber)) {
          let obj = mp.get(bill.billRoomNumber);
          mp.set(bill.billRoomNumber, { ...obj, maintenance_Dues: bill.billDue, total_Dues: obj.total_Dues + bill.billDue })
        } else {
          mp.set(bill.billRoomNumber, { billRoomNumber: bill.billRoomNumber, maintenance_Dues: bill.billDue, total_Dues: bill.billDue });
        }
      } else if (bill.billType === 'Electricity') {
        if (mp.has(bill.billRoomNumber)) {
          let obj = mp.get(bill.billRoomNumber);
          mp.set(bill.billRoomNumber, { ...obj, electricity_Dues: bill.billDue, total_Dues: obj.total_Dues + bill.billDue })
        } else {
          mp.set(bill.billRoomNumber, { billRoomNumber: bill.billRoomNumber, electricity_Dues: bill.billDue, total_Dues: bill.billDue });
        }
      } else if (bill.billType === 'Wifi') {
        if (mp.has(bill.billRoomNumber)) {
          let obj = mp.get(bill.billRoomNumber);
          mp.set(bill.billRoomNumber, { ...obj, wifi_Dues: bill.billDue, total_Dues: obj.total_Dues + bill.billDue })
        } else {
          mp.set(bill.billRoomNumber, { billRoomNumber: bill.billRoomNumber, wifi_Dues: bill.billDue, total_Dues: bill.billDue });
        }
      }
    })

    let fl = []
    for (const [key, value] of mp) {
      fl.push(value)
    }
    console.log(fl)

    setCatBill(fl)
  }

  const fetchAllBills = async () => {
    const response = await getAllBills();
    if (response.success) {
      console.log(response)
      groupBillsByRoomNumber(response.bills)
    } else console.log(response)
  }

  useEffect(() => {
    fetchAllBills();
  }, [])

  return (
    <>
      <div className="content w-  h- ">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
              <div className="d-flex flex-row">
              <CardTitle tag="h4">Your Bill </CardTitle>
              <button className="btn ml-auto">Pay Bill</button>
              </div>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Room No.</th>
                      <th>Electricity Dues</th>
                      <th>Water Dues</th>
                      <th>Maintenance Dues</th>
                      <th>Wifi Dues</th>
                      <th>Total Dues</th>
                    </tr>
                  </thead>
                  <tbody>
                    {catBill.map((bill) => {
                      return <tr>
                        <td>{bill.billRoomNumber}</td>
                        <td>{bill.electricity_Dues ? bill.electricity_Dues : 0}</td>
                        <td>{bill.water_Dues ? bill.water_Dues : 0}</td>
                        <td >{bill.maintenance_Dues ? bill.maintenance_Dues : 0}</td>
                        <td >{bill.wifi_Dues ? bill.wifi_Dues : 0}</td>
                        <td >{bill.total_Dues ? bill.total_Dues : 0}</td>
                      </tr>
                    })}

                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="3" >
            <Card className="card-stats" style={{height: "auto", }} >
              <CardBody>
                <Row className="d-flex align-items-center justify-content-center align-text-center">
                  <Col md="12">
                    <div className="text-center">
                      <img style={{height:"270px"}} src={require('../assets/img/qr-code.png')} />
                    </div>
                  </Col>
                  <Col md="12" xs="7" className="d-flex justify-content-center">
                    <div className="text-center">
                      <CardTitle tag="h4"> Pay using UPI </CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  Upi id- 8696054228@ybl
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col md="3">
            <Card className="card-stats" style={{height: "auto", }} >
              <CardBody>
                <Row className="d-flex align-items-center justify-content-center align-text-center">
                  <Col md="12">
                    <div className="text-center">
                      <img style={{height:"250px"}} src={require('../assets/img/bank.webp')} />
                    </div>
                  </Col>
                  <Col md="12" xs="7" className="d-flex justify-content-center align-items-center align-text-center">
                    <div className="text-center">
                      <CardTitle className="card-title" tag="h4"> Pay to Bank account </CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                <strong>Prateek Arora</strong>
                <br />
                  Account No- 028501007055
                  <br />
                  IFSC- ICIC0000285
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Transaction history </CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Transaction Amount</th>
                      <th>Transaction ID</th>
                      <th>Bill type</th>
                      <th>Transaction status</th>
                    </tr>
                  </thead>
                  <tbody style={{}}>
                    {catBill.map((bill) => {
                      return <tr>
                        <td>{bill.billRoomNumber}</td>
                        <td>{bill.electricity_Dues ? bill.electricity_Dues : 0}</td>
                        <td>{bill.water_Dues ? bill.water_Dues : 0}</td>
                        <td >{bill.maintenance_Dues ? bill.maintenance_Dues : 0}</td>
                      </tr>
                    })}

                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    </>
  );
}

export default Tables;
