import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './style.css'

const Result = (props) => {
  const [rate, setrate]=useState("")
  const [cl, setcl]=useState("")
  const navigate = useNavigate();

  const plagain = () => {
    window.location.reload(true)
  };
  useEffect(() => {
    console.log(props.score)
    if(props.score <= 3){
      setrate("Poor ! Best of luck Nexttime")
      setcl("texx-fail")
    }else if(props.score <= 5){
      setrate("Good ! Try more to get best score")
      setcl("texx-fail")      
    }else if(props.score <= 8){
      setrate("Better ! Keep it up")
      setcl("texx-success")
    }else{
      setrate("Excellent ! Congratulation ! You have done well")
      setcl("texx-success")
    }
  });

  return (
    <div>
      <div className="container">
        <h1 className="cong">Quiz Over</h1>
        <h4 className="texx">Correct Answer: {props.score}/10</h4>
        <h6 className={cl}>{rate}</h6>
      </div>
      <div className="btmain">
        <button className="bttt" onClick={plagain}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Result;
