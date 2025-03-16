import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';


const Results = () => {
  const { state } = useLocation();
  const { careers } = state || { careers: [] };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="card p-4 shadow-sm">
          <div className="card-body">
            <h3 className="card-title text-center">Career Recommendations</h3>
            <div className="mt-4">
              <h5>Your career suggestions based on your responses:</h5>
              {careers.length > 0 ? (
                <ul className="list-group">
                  {careers.map((career, index) => (
                    <li key={index} className="list-group-item d-flex align-items-center justify-content-between">
                      <div className="career-item">
                        <i className="bi bi-briefcase" style={{ fontSize: "20px", marginRight: "10px" }}></i>
                        <strong>{career}</strong>
                      </div>
                      <button className="btn btn-link">Learn More</button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No career suggestions available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Results;
