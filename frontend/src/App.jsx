import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/admission" element={<h1>Admission Page</h1>} />
        <Route path="/franchise" element={<h1>Franchise Page</h1>} />
        <Route path="/branches" element={<h1>Branches Page</h1>} />
        <Route path="/blog" element={<h1>Blog Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
