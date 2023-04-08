import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import './admin_header.css'


const Admin_header = () => {
  const pages = [
    { id: "02", name: "Quiz", link: "/quiz" },
    { id: "01", name: "Login", link: "/" },
    { id: "01", name: "Admin", link: "/Admin_data" },
    { id: "02", name: "User", link: "/User_data" },
    { id: "02", name: "Log Out", link: "/" }

  ];

  return (
    <div>
      <header className="admin_style">
        <div className="logosec">
          <div className="logo">Shree Vachanamrut</div>
        </div>

        <div className="message">
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                className="my_button"
                key={page.id}
                sx={{ my: 5, color: "black", display: "block" }}
              >
                <Link to={page.link}>{page.name}</Link>
              </Button>
            ))}
          </Box>
          <div className="dp">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180014/profile-removebg-preview.png"
              className="dpicn"
              alt="dp"
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Admin_header;
