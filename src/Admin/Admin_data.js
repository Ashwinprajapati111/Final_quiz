import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Admin_header from "./Admin_header";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const User_data = () => {
  return (
    <>
      <Admin_header />
      <div className="main-container">
        <div className="main">
          <div className="report-container">
            <div className="report-header">
              <h1 className="recent-Articles">Admin users</h1>
              <button className="view">View All</button>
            </div>
            <div style={{ height: 400, width: "100%" }}>
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 650 }}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableHead>
                    {/* <TableRow> */}
                      {/* <TableCell><b>Name</b></TableCell>
                      <TableCell align="right"><b>Calories</b></TableCell>
                      <TableCell align="right"><b>Fat&nbsp;(g)</b></TableCell>
                      <TableCell align="right"><b>Carbs&nbsp;(g)</b></TableCell>
                      <TableCell align="right"><b>Protein&nbsp;(g)</b></TableCell> */}
                    {/* </TableRow> */}
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User_data;
