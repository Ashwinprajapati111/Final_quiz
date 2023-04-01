import React, { useState, useEffect } from "react";
import "./login.css";
import Loginsub from "./Loginsub";
import Signupsub from "./Signupsub";
import Admin_header from "./Admin/Admin_header";

const Login = () => {
  const [showlogin, setshowlogin] = useState(true);
  const [showsignup, setshowsignup] = useState(false);
  const btnsignup = () => {
    setshowlogin(true);
    setshowsignup(false);
  };
  const btnlogin = () => {
    setshowsignup(true);
    setshowlogin(false);
  };
  return (
    <div>
      <div className="container-header">
        <Admin_header />
      </div>
      <div className="main-container">
      </div>
      <div className="container-login">
        <div className="form ss">
          <h1>Shree Vachanamrut</h1>
          <span>Made with React Js</span>
        </div>
      </div>
      {showlogin && <Loginsub btnlogin={btnlogin} />}
      {showsignup && <Signupsub btnsignup={btnsignup} />}
    </div>
  );
  };

export default Login;
