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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Quiz = () => {
  const [num, setNum] = useState(1);
  const nexxt = () => {
    setNum(num + 1);
    console.log(num);
    setData([questions.Mainquestions[num]]);
    if (num === indexx.length) {
      navigate("/result");
    }
  };
  const navigate = useNavigate();
  const [data, setData] = useState([questions.Mainquestions[0]]);
  const [cdata, setCdata] = useState(questions.Mainquestions);

  const indexx = cdata.map((cd, index) => {
    return <>{index}</>;
  });
  const [value, setValue] = useState('');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };
  useEffect((a)=>{
    console.log(value)
  })

  return (
    <div>
      <div className="mai">
        <div className="d-flex justify-content-between time">
          <div className="">
            Quesion{" "}
            {data.map((a, index) => {
              return <>{a.num}</>;
            })}{" "}
            of {indexx.length + 1}
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
