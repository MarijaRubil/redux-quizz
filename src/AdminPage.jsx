import React, { useState } from 'react';

function Admin() {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [newOptions, setNewOptions] = useState([]);
  const [newCorrectAnswer, setNewCorrectAnswer] = useState('');

  const addQuestion = () => {
    if (newQuestion.trim() === '' || newOptions.length < 2 || newCorrectAnswer === '') {
      // Validate that all fields are filled
      alert('Please fill in all fields before adding a question.');
      return;
    }

    const question = {
      question: newQuestion,
      options: [...newOptions],
      correctAnswer: newCorrectAnswer,
    };

    setQuestions([...questions, question]);
    setNewQuestion('');
    setNewOptions([]);
    setNewCorrectAnswer('');
  };

  const addOption = () => {
    if (newOptions.length >= 4) {
      alert('You can only add up to 4 options per question.');
      return;
    }

    setNewOptions([...newOptions, '']);
  };

  const updateOption = (index, value) => {
    const updatedOptions = [...newOptions];
    updatedOptions[index] = value;
    setNewOptions(updatedOptions);
  };

  const removeOption = (index) => {
    const updatedOptions = [...newOptions];
    updatedOptions.splice(index, 1);
    setNewOptions(updatedOptions);
  };

  return (
    <div>
      <h3>Add New Question</h3>
      <div>
        <label>Question:</label>
        <input type="text" value={newQuestion} onChange={(e) => setNewQuestion(e.target.value)} />
      </div>
      <div>
        <label>Options:</label>
        {newOptions.map((option, index) => (
          <div key={index}>
            <input
              type="text"
              value={option}
              onChange={(e) => updateOption(index, e.target.value)}
            />
            {newOptions.length > 2 && (
              <button onClick={() => removeOption(index)}>Remove</button>
            )}
          </div>
        ))}
        {newOptions.length < 4 && (
          <button onClick={addOption}>Add Option</button>
        )}
      </div>
      <div>
        <label>Correct Answer:</label>
        <input
          type="text"
          value={newCorrectAnswer}
          onChange={(e) => setNewCorrectAnswer(e.target.value)}
        />
      </div>
      <button onClick={addQuestion}>Add Question</button>

      <h3>Existing Questions</h3>
      {questions.map((question, index) => (
        <div key={index}>
          <p>{question.question}</p>
          <ul>
            {question.options.map((option, optionIndex) => (
              <li key={optionIndex}>{option}</li>
            ))}
          </ul>
          <p>Correct Answer: {question.correctAnswer}</p>
        </div>
      ))}
    </div>
  );
}

export default Admin;
