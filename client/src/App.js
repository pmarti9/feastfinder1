import React, { useEffect, useState, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation"
import Landing from "./Components/Landing/Landing";


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Navigation />
      <Landing >

      </Landing>
      

    </div>
    </Router>
  );
}


export default App;
