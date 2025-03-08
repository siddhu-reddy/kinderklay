import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Admission from "./components/Admission/Admission";
import Franchise from "./components/Franchise/Franchise";
import Branches from "./components/Branches/Branches";
import Blog from "./components/Blog/Blog";
import About_us from "./components/About_Us/About_Us";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      
      <Router>
        <Nav />
        <div className="pagecontainer">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/About_Us" element={<About_us/>} />
            <Route path="/Admission" element={<Admission/>} />
            <Route path="/Franchise" element={<Franchise/>} />
            <Route path="/Branches" element={<Branches/>} />
            <Route path="/Blog" element={<Blog/>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}
export default App;
