// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <h5 style={{color:"whitesmoke"}}>NextStep</h5>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
