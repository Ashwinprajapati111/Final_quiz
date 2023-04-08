import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './style.css'


const Loginsub = (props) => {
  const [data, setData] = useState([]);
  const [lemail, setLemail] = useState("");
  const [lpass, setLpass] = useState("");
  const [msg, setmsg] = useState(false);

  const MyData = () => {
    axios
      .get("http://localhost:8000/Users")
      .then((res) => setData(res.data.reverse()));
  };
  const loginn = (d) => {
    d.preventDefault();
    let b = data.find((obj) => obj.name === lemail || obj.email === lemail);

    if (b.pass === lpass ) {
      toast.success("Data Inserted Successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    } else {
      alert("adfasd")
    }
  };
  useEffect(() => {
    MyData();
  }, []);
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="form ss">
        <div className="thumbnail">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/hat.svg" />
        </div>
        <form className="login-form">
          <input
            type="text"
            placeholder="username / Email"
            name="lemail"
            onChange={(e) => setLemail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            name="pass"
            onChange={(e) => setLpass(e.target.value)}
          />
          {msg &&
          <p className="msg">Invalid Credential</p>
        }
          <button onClick={loginn}>LOGIN</button>
          <p className="message">
            Not registered? <a onClick={props.btnlogin}>Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Loginsub;
