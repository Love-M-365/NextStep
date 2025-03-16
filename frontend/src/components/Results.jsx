import React, { useState } from 'react';
import Navbar from './Navbar';

const PsychologistInfo = () => {
    const [courseLinks, setCourseLinks] = useState([
        { name: 'Coursera - Psychology Specialization', url: 'https://www.coursera.org' },
        { name: 'edX - Introduction to Psychology', url: 'https://www.edx.org' },
        { name: 'Udemy - Psychology 101', url: 'https://www.udemy.com' },
        { name: 'FutureLearn - Clinical Psychology', url: 'https://www.futurelearn.com' }
    ]);

    const [newCourse, setNewCourse] = useState({ name: '', url: '' });

    const addCourse = () => {
        if (newCourse.name && newCourse.url) {
            setCourseLinks([...courseLinks, newCourse]);
            setNewCourse({ name: '', url: '' });
        }
    };

    return (
        <>
        <Navbar></Navbar>
        <div className="container my-5">
            <h1 className="text-center mb-5 fw-bold text-primary">Psychologist Profession Overview</h1>
            <div className="row g-4">
                <div className="col-md-6">
                    <div className="card p-4 shadow-lg rounded-4 border-0">
                        <div className="card-body">
                            <h2 className="text-secondary">Who is a Psychologist?</h2>
                            <p className="text-muted">
                                A psychologist studies mental processes and behavior by observing, interpreting,
                                and recording how individuals relate to one another and their environments.
                            </p>
                            <h3 className="text-secondary">Key Skills Required:</h3>
                            <ul className="text-muted">
                                <li>Empathy and active listening</li>
                                <li>Communication and interpersonal skills</li>
                                <li>Critical thinking and problem-solving</li>
                                <li>Research and analytical abilities</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card p-4 shadow-lg rounded-4 border-0">
                        <div className="card-body">
                            <h2 className="text-secondary">Recommended Courses</h2>
                            <ul className="list-unstyled">
                                {courseLinks.map((course, index) => (
                                    <li key={index} className="my-2">
                                        <a href={course.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary w-100">
                                            {course.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>


                
            </div>
        </div>
        </>
    );
};

export default PsychologistInfo;