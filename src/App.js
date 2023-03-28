
import './App.css';
import Quiz from './Quiz'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Result from './Result'
import Footer from './Footer';
import Header from './Header';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
        <Route path="/" element={<Quiz/>}/>
        <Route path="/result" element={<Result/>}/>
      
        
        
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
