import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const [switchLabel, setSwitchLabel] = useState('Enable dark mode');

  const onChange = () => {
    if (switchLabel === 'Enable light mode') {
      setSwitchLabel('Enable dark mode');
    } else {
      setSwitchLabel('Enable light mode');
    }
  };

  const navbarStyle = {
    backgroundColor: props.mode === 'dark' ? 'black' : 'white', // Set background color
    color: props.mode === 'dark' ? 'white' : 'black', // Set text color
  };

  const navbarBrandStyle = {
    color: props.mode === 'dark' ? 'white' : 'black', // Set text color for navbar brand
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg`} style={navbarStyle}>
        <div className="container-fluid">
          <Link className="navbar-brand" to='/mehanta' style={navbarBrandStyle}>
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">
                  {props.nottext}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/textform'>
                  {props.balle}
                </Link>
              </li>
            </ul>

            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input
                className="form-check-input"
                onChange={onChange}
                onClick={props.toggleMode}
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                {switchLabel}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  nottext: PropTypes.string,
  balle: PropTypes.string,
  toggleMode: PropTypes.func,
  mode: PropTypes.string,
};
