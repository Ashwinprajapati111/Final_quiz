import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import "./style.css";
import Button from "@mui/material/Button";
import questions from "./questions.json";
import { useNavigate } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const Quiz = () => {
  const [num, setNum] = useState(0);
  const [score, setScore] = useState(0);
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const [data, setData] = useState([questions.Mainquestions[num]]);
  const [cdata, setCdata] = useState(questions.Mainquestions);

  const indexx = cdata.map((cd, index) => {
    return <>{index}</>;
  });
  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  const nexxt = () => {
    setNum(num + 1);
    setData([questions.Mainquestions[num + 1]]);
    let d = questions.Mainquestions[num].rightans === value;
    console.log("true or false :" + d);
    if (d === true) {
      setScore(score + 1);
    }
    if (num+1 === indexx.length) {
      navigate("/result");
    }
  };
  useEffect(() => {
    console.log("this is score :" + score);
 
  });
  return (
    <div>
      <div className="mai">
        <div className="d-flex justify-content-between time">
          <div className="">
            Quesion{" "}
            {num+1}{" "}
            of {indexx.length}
          </div>
          <div className="">1:00</div>
        </div>
        <hr className="hr" />
        <Box className="qmainbox" sx={{ width: "60%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 3, sm: 1, md: 2 }}
          >
            {data.map((dd, index) => {
              return (
                <>
                  <div className="txtbox mt-3 mb-3">
                    <Grid
                      container
                      rowSpacing={1}
                      columnSpacing={{ xs: 1, sm: 1, md: 3 }}
                    >
                      <Grid item xs={12} md={12}>
                        <h4>
                          <div className="qbox">{dd.Questions}</div>
                        </h4>
                      </Grid>

                      {dd.options.map((ad) => {
                        return (
                          <>
                            <Grid item xs={12} md={6} key={ad.id}>
                              <RadioGroup
                                className="obox"
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                                value={value}
                                onClick={handleRadioChange}
                              >
                                <FormControlLabel
                                  value={ad}
                                  control={<Radio />}
                                  label={ad}
                                />
                              </RadioGroup>
                            </Grid>
                          </>
                        );
                      })}
                      <Grid item xs={12} md={12}>
                        <button className="nxtbtn" onClick={nexxt}>
                          Next
                        </button>
                      </Grid>
                    </Grid>
                  </div>
                </>
              );
            })}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Quiz;
