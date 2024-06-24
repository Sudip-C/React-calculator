// src/components/Calculator.js
import React, { useState } from 'react';
import { evaluate } from 'mathjs';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setResult(evaluate(input));
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-4 rounded-lg shadow-md w-80">
        <div className="mb-4">
          <input
            type="text"
            value={input}
            readOnly
            className="w-full p-2 text-right text-xl border rounded"
          />
        </div>
        <div className="mb-4 text-right text-xl">
          {result && <span>= {result}</span>}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {['7', '8', '9', '/'].map((value) => (
            <button
              key={value}
              onClick={() => handleButtonClick(value)}
              className="p-4 font-bold bg-gray-300 rounded hover:bg-gray-400"
            >
              {value}
            </button>
          ))}
          {['4', '5', '6', '*'].map((value) => (
            <button
              key={value}
              onClick={() => handleButtonClick(value)}
              className="p-4 font-bold bg-gray-300 rounded hover:bg-gray-400"
            >
              {value}
            </button>
          ))}
          {['1', '2', '3', '-'].map((value) => (
            <button
              key={value}
              onClick={() => handleButtonClick(value)}
              className="p-4 font-bold bg-gray-300 rounded hover:bg-gray-400"
            >
              {value}
            </button>
          ))}
          {['0', '.', '=', '+'].map((value) => (
            <button
              key={value}
              onClick={() => (value === '=' ? handleCalculate() : handleButtonClick(value))}
              className={`p-4 font-bold rounded ${value === '=' ? 'bg-blue-500 text-white' : 'bg-gray-300 hover:bg-gray-400'}`}
            >
              {value}
            </button>
          ))}
          <button onClick={handleClear} className="col-span-2 p-4 bg-red-500 text-white rounded hover:bg-red-600">
            C
          </button>
          <button onClick={handleDelete} className="col-span-2 p-4 bg-yellow-500 text-white rounded hover:bg-yellow-600">
            DEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
