import React from "react";
import Cart from "./components/cart";
import Navbar from "./components/nav";
import Profile from "./components/profile";
import Home from "./components/home";
// import "./App.css"z

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
