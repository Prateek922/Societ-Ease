import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Residentlogin from '../components/Login/Residentlogin';
import Adminlogin from '../components/Login/Adminlogin';
import "../assets/css/login.css";

function Login() {
    
  return (
    <div className='Auth-form-container'>
    <Tabs
      defaultActiveKey="admin"
      // transition={true}
      // id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="resident" title="Resident">
       <Residentlogin/>
      </Tab>
      <Tab eventKey="admin" title="Admin">
        <Adminlogin/>
      </Tab>
      <Tab eventKey="guest" title="Guest">
        
      </Tab>
    </Tabs>
     </div>
  );
}

export default Login;