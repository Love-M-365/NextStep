import React from 'react';
import { Card } from 'react-bootstrap';

const CareerResults = ({ analysis, careerOptions, timeline }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <Card className="shadow-sm">
            <Card.Body>
              <h3 className="card-title">Career Guidance Results</h3>
              <p className="card-text">{analysis}</p>

              <h4 className="mt-4">Best Career Options for You</h4>
              <ul>
                {careerOptions.map((option, index) => (
                  <li key={index}>
                    <strong>{option.name}</strong>: {option.description}
                  </li>
                ))}
              </ul>

              <h4 className="mt-4">Suggested Timeline</h4>
              <div className="timeline">
                {timeline.map((step, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-date">{step.date}</div>
                    <div className="timeline-content">{step.content}</div>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CareerResults;
