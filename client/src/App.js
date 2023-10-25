import React from "react";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Home from "./Home";
import Library from "./Library";
import Shorts from "./Shorts";
import Subscriptions from "./Subscriptions";
import Navbar from "./Navbar";
import Settings from "./Settings";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/library" element={<Library/>}/>
        <Route exact path="/shorts" element={<Shorts/>}/>
        <Route exact path="/subscriptions" element={<Subscriptions/>}/>
        <Route exact path="/settings" element={<Settings/>}/>
      </Routes>
    </Router>
  );
}

export default App;
