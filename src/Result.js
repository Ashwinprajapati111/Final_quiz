import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './style.css'

const Result = (props) => {
  const navigate = useNavigate();

  const plagain = () => {
    window.location.reload(true)
  };
  useEffect(() => {
    console.log(props.score)
  });

  return (
    <div>
      <div className="container">
        <h1 className="cong">Congratulation</h1>
        <h4 className="texx">Correct Answer: {props.score}/10</h4>
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
