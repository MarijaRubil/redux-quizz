import React, { useState } from 'react';

function Quizz() {
  const [questions, setQuestions] = useState([
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Rome'],
      correctAnswer: 'Paris',
      selectedOption: '',
      isAnswered: false,
      isCorrect: false,
    },
    {
      question: 'Which planet is known as the "Red Planet"?',
      options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 'Mars',
      selectedOption: '',
      isAnswered: false,
      isCorrect: false,
    },
    {
      question: 'Who is the author of the Harry Potter book series?',
      options: ['J.R.R. Tolkien', 'J.K. Rowling', 'George R.R. Martin', 'Suzanne Collins'],
      correctAnswer: 'J.K. Rowling',
      selectedOption: '',
      isAnswered: false,
      isCorrect: false,
    },
    {
      question: 'What is the chemical symbol for gold?',
      options: ['Ag', 'Au', 'Fe', 'Hg'],
      correctAnswer: 'Au',
      selectedOption: '',
      isAnswered: false,
      isCorrect: false,
    },
  ]);

  const handleOptionChange = (questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].selectedOption = updatedQuestions[questionIndex].options[optionIndex];
    setQuestions(updatedQuestions);
  };

  const submitQuiz = () => {
    const updatedQuestions = [...questions];
    updatedQuestions.forEach((question) => {
      question.isAnswered = true;
      question.isCorrect = question.selectedOption === question.correctAnswer;
    });
    setQuestions(updatedQuestions);
  };

  return (
    <div>
      <h3>Quiz Questions</h3>
      {questions.map((question, questionIndex) => (
        <div key={questionIndex}>
          <p>{question.question}</p>
          <ul>
            {question.options.map((option, optionIndex) => (
              <li key={optionIndex}>
                <input
                  type="radio"
                  name={`question_${questionIndex}`}
                  value={option}
                  checked={option === question.selectedOption}
                  onChange={() => handleOptionChange(questionIndex, optionIndex)}
                  disabled={question.isAnswered} // Disable selection after answering
                />
                {option}
              </li>
            ))}
          </ul>
          {question.isAnswered && (
            <>
              {question.isCorrect ? (
                <p>Correct Answer!</p>
              ) : (
                <p>Incorrect Answer! The correct answer is {question.correctAnswer}.</p>
              )}
            </>
          )}
        </div>
      ))}
      {!questions.every((question) => question.isAnswered) && (
        <button onClick={submitQuiz}>Submit Quiz</button>
      )}
    </div>
  );
}

export default Quizz;
