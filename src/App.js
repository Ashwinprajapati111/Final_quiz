import "./App.css";
import Quiz from "./Quiz";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Result from "./Result";
import Footer from "./Footer";
import Header from "./Header";

function App(props) {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Quiz />} />
          <Route path="/Result" element={<Result test="this is test" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
