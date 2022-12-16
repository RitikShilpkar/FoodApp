import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import {BrowserRouter as Router,Route,Routes}   from 'react-router-dom'


import Dashboard from "./components/Dashboard";
import Food from "./components/Food";

function App() {
 
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
