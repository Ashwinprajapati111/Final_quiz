import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import questions from "./questions.json";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Result from "./Result";
import Header from "./Header";
import Footer from "./Footer";
import Admin_header from "./Admin/Admin_header";

const Quiz = () => {

  const [num, setNum] = useState(0);
  const [score, setScore] = useState(0);
  const [value, setValue] = useState("");
  const [result, setresult] = useState(false);
  const [data, setData] = useState([questions.Mainquestions[num]]);
  const [cdata, setCdata] = useState(questions.Mainquestions);
  const [sub, setsub] = useState("Next");
  let [count, setcount] = useState(5);
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
    if (num + 1 >= indexx.length) {
      setresult(true);
      console.log(score);
    }
  };
  console.log(count);
  useEffect(() => {
    const timer = count > 0 && setInterval(() => setcount(count - 1), 1000);
    return () => clearInterval(timer);
  }, [count]);

  return (
    <>
    
    <div>
    <Admin_header />
    </div>
    <div className="main-container">
    <div className="main">
      {result ? (
        <Result score={score} setresult={setresult} result={result} />
      ) : (
        <div className="mai">
          <div className="d-flex justify-content-between time">
            <div className="">
              Quesion {num + 1} of {indexx.length}
            </div>
            <div className="">{count}</div>
          </div>
          <hr className="hr" />
          <Box className="qmainbox" sx={{ width: "60%" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 3, sm: 1, md: 2 }}
            >
              {data.map((hhh) => {
                return (
                  <>
                    <div className="txtbox mt-3 mb-3">
                      <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 1, md: 3 }}
                        key={hhh.id}
                      >
                        <Grid item xs={12} md={12}>
                          <h4>
                            <div className="qbox">{hhh.Questions}</div>
                          </h4>
                        </Grid>

                        {hhh.options.map((ad) => {
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
                            {sub}
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
      )}
</div>
    </div>

        <Footer />
    </>
  );
};

export default Quiz;
