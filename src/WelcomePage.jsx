import React from 'react';

function WelcomePage() {
  return (
    <div>
      <h1>Welcome to the Quizz App!</h1>
      <p>Please select an option:</p>
      <ul>
        <li>
          <a href="/admin">Admin</a>
        </li>
        <li>
          <a href="/quizz">Quizz</a>
        </li>
      </ul>
    </div>
  );
}

export default WelcomePage;
