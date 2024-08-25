
import React, { useState } from 'react';
import { BrowserRouter ,Route,Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Nav from './Nav';

import About from './About';

export default function Text(props) {

  const [text, settext] = useState("")
  const uc = () => {
    settext(text.toUpperCase())
   showAlert("convert Uppercase ");
  }
  const lc = () => {
    settext(text.toLowerCase())
   showAlert("convert Lowercase ");
  }
  const cl = () => {
    settext("")
  }
  const cv = (event) => {
    settext(event.target.value)
  }

  return (
     <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
      
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item"/>
            
              <li className="nav-item">
                <Link className="nav-link" to="/about">about</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/text">text</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><Link className="dropdown-item" to="#">Action</Link></li>
                  <li><Link className="dropdown-item" to="#">Another action</Link></li>
                  <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
       
      </nav>
    <div>
      <div className="mb-3 container">
        <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Example textarea</label>
        <textarea className="form-control" value={text} onChange={cv} style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color : props.mode === 'dark' ? 'white' : 'black'  }} id="exampleFormControlTextarea1" rows="9"></textarea>
      </div>
      <div className='container'>
       
        <button type="button" className="btn btn-primary mx-1" onClick={uc} >touppercase</button>
        <button type="button" className="btn btn-primary mx-1" onClick={lc} >tolowercase</button>
        <button type="button" className="btn btn-primary mx-1" onClick={cl} >clear</button>
        <div style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
        <h3>{text.split(" ").length-1} word {text.length} character</h3>
        <h5>preview</h5>
        <h6>{text}</h6>

        </div>
      </div>
    </div>
    </>
  )
}
