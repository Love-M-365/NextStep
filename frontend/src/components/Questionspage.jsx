// src/components/Questionnaire.jsx
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const Questionnaire = () => {
  const questions = [
    {
      question: "What is your favorite color?",
      options: ["Red", "Blue", "Green", "Yellow"],
    },
    {
      question: "What is your favorite fruit?",
      options: ["Apple", "Banana", "Orange", "Mango"],
    },
    {
      question: "What is your preferred mode of transport?",
      options: ["Car", "Bike", "Bus", "Train"],
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleOptionClick = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextButtonClick = () => {
    if (selectedAnswer !== null) {
      // Save the selected answer
      setAnswers([...answers, { question: questions[currentQuestionIndex].question, answer: selectedAnswer }]);

      // Proceed to the next question or submit the answers
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
      } else {
        // Submit answers to AI (no AI response expected right now)
        submitAnswersToAI();
      }
    } else {
      alert("Please select an answer before moving to the next question.");
    }
  };

  // Function to send answers to the AI backend (mocked endpoint)
  const submitAnswersToAI = async () => {
    setLoading(true);
    try {
      // Here we send the answers to your backend
      await axios.post('/api/ai-endpoint', { answers });
      setSubmitted(true);  
      console.error("Error sending data to AI:", error);
      alert("Failed to send data to AI.");
    }catch(err){}
    setLoading(false);
  };

  return (
    <>
    <Navbar></Navbar>
    <div className="container mt-5">
      <div className="card p-4 shadow-sm">
        <div className="card-body">
          <h3 className="card-title">{questions[currentQuestionIndex].question}</h3>
          <div className="mt-3">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                className={`btn btn-outline-primary w-100 my-2 ${selectedAnswer === option ? 'active' : ''}`}
                onClick={() => handleOptionClick(option)}
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

          {submitted && (
            <div className="mt-4">
              <h4>Your answers have been submitted successfully!</h4>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default Questionnaire;
