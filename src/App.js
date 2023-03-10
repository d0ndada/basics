import React from 'react';
import Navbar from './components/NavBar/navBar';
import Home from './components/Home/home';
import  {Interpolation}  from './components/lektion2/Interpolation';
import Rendering from './components/lektion2/Rendering/Rendering';
import Lektion3 from './components/lektion3/lektion3';

import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import './App.css';
import { Adder } from './components/lektion1/hello'


function App() {
  return (
    <>
    <div className="App">

  <Router>
        <Navbar/>
        <div className='main-content'>
        <Routes>
          <Route path = "/" element={<Home/>}/>
          <Route path = "/Adder" element={<Adder/>}/>
          <Route path = "/Interpolation" element={<Interpolation/>}/>
          <Route path = "/Rendering" element={<Rendering/>}/>
          <Route path = "/Lektion3" element={<Lektion3/>}/>
        </Routes>
        </div>
      </Router>
      </div>  
    </>
  
  );
}

export default App;
