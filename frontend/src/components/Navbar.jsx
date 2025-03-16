
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <h5 style={{color:"whitesmoke"}}>NextStep</h5>
        </a>
        <button className="btn btn-success"><Link to="/trends" style={{textDecoration:"none",color:"white"}}>Latest job trends</Link></button>
      </div>
    </nav>
  );
};

export default Navbar;
