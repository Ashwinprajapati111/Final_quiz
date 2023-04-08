import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Admin_header from "./Admin_header";
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './admin_style.css'
import Footer from "../Footer";

const User_data = () => {
  const mydata = () => {
    axios.get("http://localhost:8000/users")
    .then(function (response) {
        setuserd(response.data)
    });
  };
  const [userd,setuserd]=useState([])
  const deletbtn =(id)=>{
    axios.delete(`http://localhost:8000/users/${id}`)
    mydata();
  }
  useEffect(() => {
    mydata();
    
  },[]);
  console.log(userd)


  return (
    <>
      <Admin_header />
      <div className="main-container">
        <div className="main">
          <div className="report-container">
            <div className="report-header">
              <h1 className="recent-Articles">User</h1>
              <button className="view">View All</button>
            </div>
            <div style={{ height: "auto", width: "100%" }}>
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 650 }}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <b>User Name</b>
                      </TableCell>
                      <TableCell align="left">
                        <b>Email</b>
                      </TableCell>
                      <TableCell align="left">
                        <b>Password</b>
                      </TableCell>
                      <TableCell align="left">
                        <b>Confirm Password</b>
                      </TableCell>
                      <TableCell align="left">
                        <b>Action</b>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {userd.map((row,index) => (
                      <TableRow
                     
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="left">{row.email}</TableCell>
                        <TableCell align="left">{row.pass}</TableCell>
                        <TableCell align="left">{row.cpass}</TableCell>
                        <TableCell align="left"><div className="editic"><EditIcon/></div><div className="delic" onClick={(e)=>deletbtn(row.id,e)}><DeleteIcon /></div></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
        
      </div>
      <Footer/>
    </>
  );
};

export default User_data;
