import React,{useState} from 'react'
import axios from "axios";

const Signupsub = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [cpass, setCpass] = useState('');
  const submit = (a)=>{
    a.preventDefault()
    axios.post('http://localhost:8000/users',{
      name:name,
      email:email,
      pass:pass,
      cpass:cpass
    })
    setName("")
    setEmail("")
    setPass("")
    setCpass("")
    console.log(cpass)
  }


  return (
    <div>
      <div className="form ss">
        <div className="thumbnail">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/hat.svg" />
        </div>
        <form className="login-form">
          <input type="text" placeholder="username" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
          <input type="text" placeholder="Email"name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <input type="password" placeholder="Password" name="pass" value={pass} onChange={(e)=>setPass(e.target.value)}/>
          <input type="password" placeholder="Confirm Password" name="cpass" value={cpass} onChange={(e)=>setCpass(e.target.value)}/>
          <button onClick={submit}>SIGN UP</button>
          <p className="message" >
            Already Registered? <a onClick={props.btnsignup}>login</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Signupsub
