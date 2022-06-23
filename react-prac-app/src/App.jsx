
import React from 'react';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';


import Home from './Components/Landing Page/Home';
import Login from './Components/Login and Registration/Login';
import Registration from './Components/Login and Registration/Registration';
import Navbar from './Components/Navbar';
import "./Components/Containers/background.css"

function App() {
  
  return (
    
    <Router>
      <Navbar/>
      <CssBaseline/>
      <div className='box'>
        <div className='wave -one'></div>
        <div className='wave -two'></div>
        <div className='wave -three'></div>
      </div>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/registration"} element={<Registration/>}/>
      </Routes>
    </Router>
    
  )
}

export default App
