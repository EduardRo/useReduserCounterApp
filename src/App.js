import React, { useState, useReducer } from 'react';

import './App.css';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch({ type: 'increment' });
  }

  function decrement() {
    dispatch({ type: 'decrement' });
  }

  return (
    <div className='App'>
      <button onClick={decrement} className='button'>
        <span>-</span>
      </button>
      <span>{state.count}</span>
      <button onClick={increment} className='button'>
        <span>+</span>
      </button>
    </div>
  );
}

export default App;
