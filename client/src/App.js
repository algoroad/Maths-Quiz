
import React, { useState } from 'react';

function App() {
  const [difficulty, setDifficulty] = useState('easy');

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg shadow px-10 py-8 w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-8">Quiz App</h1>
        <div className="flex justify-center">
          <label htmlFor="difficulty" className="text-xl mr-4">
            Select Difficulty:{' '}
          </label>
          <select
            id="difficulty"
            value={difficulty}
            onChange={handleDifficultyChange}
            className="text-xl border rounded-lg px-4 py-2 bg-white focus:border-blue-500 focus:outline-none"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        {/* Add quiz components here */}
      </div>
    </div>
  );
}

export default App;
