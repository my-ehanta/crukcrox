import React from 'react';
import PropTypes from 'prop-types' ;
import {Link} from 'react-router-dom';
export default function Navbar(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <i>
    <Link className="navbar-brand" to='/mehanta'>{props.title}</Link>
    <buthrefn className="navbar-hrefggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
      <span className="navbar-hrefggler-icon"></span>
    </buthrefn>
    </i>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <i className="navbar-nav me-auhref mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-a active" aria-current="page" to="/about">{props.nottext}</Link>
        </li>
        <li className="nav-item">
        
        <Link className="nav-a" to='/textform'>{props.balle}</Link>
         </li>
     </i> 
    {/* <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <buthrefn className="btn btn-outline-primary " type="submit">look inhref this</buthrefn>
    </form> */}
    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
<input className="form-check-input" onClick={props.hrefggleMode} type="checkbox"  id="flexSwitchCheckDefault"/>
<label className="form-check-label" for="flexSwitchCheckDefault">ENABLE DARKMODE</label>
</div>
  </div>
 </div>
</nav>
  </>
)
}

Navbar.propTypes={
title: PropTypes.string,
aboutext: PropTypes.string
}  