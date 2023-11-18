import './App';
import Textform from './components/Textform';
import Navbar from './components/Navbar';
import About from './components/About';
import Mehboob from './components/Mehboob';
import Mehanta from './components/Mehanta';
import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  const [mode, setMode] = useState('white');
  const [Alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  setTimeout(() => {
    setAlert(null);
  }, 3000)

  const toggleMode = () => {
    setMode((mode) => {
      if (mode === 'white') {
        document.body.style.backgroundColor = 'blue';
        showAlert("dark mode has been enabled", "Success");
        document.title = 'MEHANTA-DARKMODE';
        return 'blue';
      } else {
        document.body.style.backgroundColor = 'white';
        showAlert("light mode has been enabled", "Success");
        document.title = 'MEHANTA-LIGHTMODE';
        return 'white';
      }
    });
  };
  

  return ( 
    <>
    <div  mode={mode} toggleMode={toggleMode} />
      <Router>
        <Navbar title="MEHANTA LIVING" nottext="About" balle="Textform" />
        <Mehboob meh={Alert} />
        <div className="container my-3">
        
          <Routes>
          <Route exact path="/mehanta" element={<Mehanta />} />
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/textform" element={<Textform showAlert={showAlert} heading="ENTER TEXT HERE" mode={mode} />} />
           
            
          </Routes> 
        </div>
        
      </Router>
    </>
  );
}

export default App;