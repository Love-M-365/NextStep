import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomePage from './components/Welcomepage'
import Questionnaire from './components/Questionspage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CareerResults from './components/Results'
import Results from './components/Results'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage/>}></Route>
        <Route path="/questions" element={<Questionnaire/>}></Route>
        <Route path="/results" element={<CareerResults careers={""} />} />
      </Routes>
  
    </Router>
  )
}

export default App
