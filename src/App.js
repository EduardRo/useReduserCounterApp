import React, { useState, useReducer } from 'react';

import './App.css';
const ACTION = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  SPUNE: 'SPUNE',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { count: state.count + 1 };
    case ACTION.DECREMENT:
      return { count: state.count - 1 };
    case ACTION.SPUNE:
      return { spune: state.spune + 'ddd' };
    default:
      return state;
  }
}

// function reducer

// function App()

function App() {
  const [state, dispatch] = useReducer(reducer, [
    { count: 0 },
    { spune: 'abc' },
  ]);

  function increment() {
    dispatch({ type: ACTION.INCREMENT, count });
  }

  function decrement() {
    dispatch({ type: ACTION.DECREMENT, count });
  }

  function spune() {
    dispatch({ type: ACTION.SPUNE, spune });
  }

  return (
    <div>
      <div className='App'>
        <button onClick={decrement} className='button'>
          <span>-</span>
        </button>
        <span>{state.count}</span>

        <button onClick={increment} className='button'>
          <span>+</span>
        </button>
      </div>
      <div>
        <button onClick={spune} className='button'>
          Spune
        </button>
        <span>{state.spune}</span>
      </div>
    </div>
  );
}

export default App;
