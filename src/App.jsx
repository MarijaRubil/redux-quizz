import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Admin from './AdminPage';
import Quizz from './Quizz';


function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Quiz App!</h1>
      <p className="text-lg mb-4">Please select an option:</p>
      <ul className="flex space-x-4">
        <li>
          <Link to="/admin" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Admin
          </Link>
        </li>
        <li>
          <Link to="/quizz" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
            Quizz
          </Link>
        </li>
      </ul>
    </div>
  );
}

function App() {
  const [questions, setQuestions] = useState([]);

  const addQuestion = (question) => {
    setQuestions([...questions, question]);
  };

  return (
    <Router>
      <div className="flex flex-col container mx-auto">
        <nav className="flex justify-center mt-4 mb-8">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded">
                Home
              </Link>
            </li>
            <li>
              <Link to="/admin" className="bg-blue-500  hover:bg-blue-600 text-white py-2 px-4 rounded">
                Admin
              </Link>
            </li>
            <li>
              <Link to="/quizz" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
                Quizz
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/admin" element={<Admin addQuestion={addQuestion} />} />
          <Route path="/quizz" element={<Quizz questions={questions} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
