import React, { useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className='App'>
      <button onClick={decrement} className='button'>
        <span>-</span>
      </button>
      <span>{count}</span>
      <button onClick={increment} className='button'>
        <span>+</span>
      </button>
    </div>
  );
}

export default App;
