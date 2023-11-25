import React, { useState } from 'react';

export default function Textform(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('CONVERTED TO UPPER CASE', 'SUCCESS');
  };

  const handleloClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('CONVERTED TO LOWER CASE', 'SUCCESS');
  };

  const handleCrClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert('TEXT IS CLEARED', 'SUCCESS');
  };

  const [text, setText] = useState('Enter text here');

  return (
    <>
      <div
        className="container"
        style={props.mode === 'dark' ? { color: 'light' } : { color: 'dark' }}
      />

      <h1> {props.heading}</h1>

      <div className="my-2">
        <label htmlFor="my box" className="form-label"></label>
        <textarea
          className="form-label"
          value={text}
          onChange={handleOnChange}
          id="my-box"
          row="3"
          style={
            props.mode === 'dark'
              ? { height: '150px', width: '1200px', color: 'light' }
              : { height: '150px', width: '1200px', color: 'dark' }
          }
        >
          {text}
        </textarea>
      </div>

      <div>
        <button
          disabled={text.length === 0}
          className="btn-btn-success mx-2 my-2"
          onClick={handleUpClick}
        >
          Convert to upper case
        </button>

        <button
          disabled={text.length === 0}
          className="btn-btn-success mx-2 my-2"
          onClick={handleloClick}
        >
          Convert to lower case
        </button>

        <button
          disabled={text.length === 0}
          className="btn-btn-success mx-2 my-2"
          onClick={handleCrClick}
        >
          Clear text
        </button>
      </div>

      <div className="container my-3">
        <h1>Your Summary</h1>
        <p>
          {text.split(/\s+/).filter(Boolean).length} words and{' '}
          {text.replace(/\s/g, '').length} characters
        </p>

        <p>
          You can read the text in {parseInt(0.008 * text.split(' ').filter(Boolean).length)}{' '}
          minutes
        </p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Nothing to preview'}</p>
      </div>
    </>
  );
}
