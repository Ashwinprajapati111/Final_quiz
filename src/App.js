import "./App.css";
import Quiz from "./Quiz";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Result from "./Result";
import Footer from "./Footer";
import Login from "./Login";
import Admin_index from "./Admin/Admin_index";
import Admin_data from "./Admin/Admin_data";
import User_data from "./Admin/User_data";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Admin" element={<Admin_index/>}/>
          <Route path="/quiz" element={<Quiz/>} />
          <Route path="/Result" element={<Result />} />
          <Route path="/" element={<Login />} />
          <Route path="/Admin_data" element={<Admin_data />} />
          <Route path="/User_data" element={<User_data />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
