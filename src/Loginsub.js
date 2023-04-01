import React,{useState,useEffect} from 'react'
import axios from "axios";


const Loginsub = (props) => {
  const [data, setData] = useState([]);
  const [lemail, setLemail] = useState("");
  const [lpass, setLpass] = useState("");
  const MyData = () => {
    axios
      .get("http://localhost:8000/Users")
      .then((res) => setData(res.data.reverse()));
  };
  const loginn = (d) => {
    d.preventDefault();
    let a = data.find((obj) => obj.name === lemail || obj.email === lemail);
    if (a.pass === lpass) {
      alert("pass")
      // navigate("/Mainuser")
    } else {

    }
  };
  useEffect(() => {
    MyData();
  }, []);
  return (
    <div>
      <div className="form ss">
        <div className="thumbnail">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/hat.svg" />
        </div>
        <form className="login-form">
          <input type="text" placeholder="username / Email" name="lemail" onChange={(e) => setLemail(e.target.value)}/>
          <input type="password" placeholder="password" name="pass" onChange={(e) => setLpass(e.target.value)}/>
          <button onClick={loginn}>LOGIN</button>
          <p className="message" >
            Not registered? <a onClick={props.btnlogin}>Create an account</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Loginsub
