import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import ToastMessage from './utils/ToastMessage';
import { Link } from 'react-router-dom';
const Questionnaire = () => {
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]); // Store selected answers as numeric values
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [careerOptions, setCareerOptions] = useState(null); // Career options returned from the backend

  const questions = [
    {
      question: "What do you enjoy doing the most?",
      options: [
        "Solving technical problems", 
        "Helping others", 
        "Creating art and designs", 
        "Managing and organizing tasks"
      ],
    },
    {
      question: "Which subject interests you the most?",
      options: [
        "Mathematics and Science", 
        "Psychology and Sociology", 
        "Arts and Literature", 
        "Business and Economics"
      ],
    },
    {
      question: "How do you prefer to work?",
      options: [
        "Independently on technical tasks", 
        "Collaborating with people", 
        "Expressing creativity freely", 
        "Leading and making strategic decisions"
      ],
    },
    {
      question: "What type of challenges excite you?",
      options: [
        "Coding and problem-solving", 
        "Understanding human behavior", 
        "Designing visuals and content", 
        "Planning business strategies"
      ],
    },
    {
      question: "Which career environment appeals to you?",
      options: [
        "Tech-driven (Software, AI, Engineering)", 
        "Healthcare, Teaching, or Counseling", 
        "Media, Entertainment, or Arts", 
        "Corporate, Finance, or Management"
      ],
    },
    {
      question: "What is your ideal work setup?",
      options: [
        "Computers, algorithms, and coding", 
        "Interacting with people daily", 
        "Studio, creative workspace", 
        "Office with structured tasks"
      ],
    },
    {
      question: "Which skill do you naturally excel at?",
      options: [
        "Logical thinking and coding", 
        "Empathy and understanding", 
        "Creativity and imagination", 
        "Decision-making and leadership"
      ],
    },
    {
      question: "How do you handle problems?",
      options: [
        "Break it down logically and solve it", 
        "Discuss with others to find solutions", 
        "Think outside the box", 
        "Analyze and take charge of the situation"
      ],
    }
  ];

  const handleOptionClick = (index) => {
    setSelectedAnswer(index); // Store the index of the selected option
  };

  const handleNextButtonClick = () => {
    if (selectedAnswer !== null) {
      setAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
      } else {
        submitAnswersToAI();
      }
    } else {
      setMessage('Please select an option before proceeding to the next step!');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  const submitAnswersToAI = async () => {
    if (answers.length === 8) {
      setLoading(true);
      try {
        const response = await axios.post('http://127.0.0.1:5000/predict', {
          responses: answers // Send the numeric answer array to the AI
        });

        // Set career options returned from the backend
        setCareerOptions(response.data.career_options);
        setSubmitted(true);
      } catch (error) {
        console.error("Error sending data to AI:", error);
        alert("Failed to send data to AI.");
      } finally {
        setLoading(false);
      }
    } else {
      setMessage('Please answer all questions before submitting.');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  useEffect(() => {
    if (answers.length === 8 && submitted) {
      setSubmitted(false);  // Reset after showing predictions
    }
  }, [answers, submitted]);

  useEffect(() => {
    if (careerOptions) {
      console.log(careerOptions); // Logs career options from AI
    }
  }, [careerOptions]);

  return (
    <>
      <Navbar />
      <ToastMessage message={message} show={showToast} />
      <div className="container mt-5">
      <div className="card p-4 shadow-sm">
  <div className="card-body">
    {submitted ? (
      <div className="mt-4">
        <h4>Your Career Suggestions:</h4>
        <div className="mt-3">
          <div className="row">
            {careerOptions && careerOptions.map((career, index) => (
              <div key={index} className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body text-center">
                    <h5 className="card-title">{career}</h5>
                    <p className="card-text">Explore opportunities in this field to take your career to the next level.</p>
                    <a href="#" className="btn btn-primary"><Link to="/results" style={{textDecoration:"none",color:"white"}}>Learn More</Link></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
            ) : (
              <>
                <h3 className="card-title">{questions[currentQuestionIndex].question}</h3>
                <div className="mt-3" style={{ maxWidth: "35rem", margin: "0" }}>
                  {questions[currentQuestionIndex].options.map((option, index) => (
                    <button
                      key={index}
                      className={`btn btn-outline-primary w-100 my-2 ${selectedAnswer === index ? 'active' : ''}`}
                      onClick={() => handleOptionClick(index)}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                <button
                  className="btn btn-primary mt-3 w-100"
                  onClick={handleNextButtonClick}
                  disabled={loading}
                >
                  {currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next'}
                </button>

                {loading && <div className="mt-3">Sending data to AI...</div>}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Questionnaire;
