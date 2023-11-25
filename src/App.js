import React, { useState } from 'react';
import './App.css';
import Textform from './components/Textform';
import Navbar from './components/Navbar';
import About from './components/About';
import Mehboob from './components/Mehboob';
import Mehanta from './components/Mehanta';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
//  const removeBodyClasses=()=> {
//   document.body.classList.remove("bg-light")
//   document.body.classList.remove("bg-dark")
//   document.body.classList.remove("bg-primary")
//   document.body.classList.remove("bg-success")
//   document.body.classList.remove("bg-warning")
//   document.body.classList.remove("bg-danger")

//  }




  const toggleMode = () => {
    // removeBodyClasses();
    // document.body.classList.add("bg-"+cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#222'; // Set a valid dark background color
      showAlert('Dark mode has been enabled', 'success'); // Corrected the color type
      document.title = 'MEHANTA - DARK MODE';
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#fff'; // Set a valid light background color
      showAlert('Light mode has been enabled', 'success');
      document.title = 'MEHANTA - LIGHT MODE';
    }
  };

  return (
    <>
      <Router>
        <Navbar title="MEHANTA LIVING" nottext="About" balle="Textform" toggleMode={toggleMode} mode={mode} />
        <Mehboob meh={alert} />
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
