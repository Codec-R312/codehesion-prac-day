
import React from 'react';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';


import Home from './Components/Landing Page/Home';
import Login from './Components/Login and Registration/Login';
import Registration from './Components/Login and Registration/Registration';
import Navbar from './Components/Navbar';

function App() {
  
  return (
    <Router>
      <Navbar/>
      <CssBaseline/>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/registration"} element={<Registration/>}/>
      </Routes>
    </Router>
  )
}

export default App
