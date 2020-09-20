import React from 'react';

import { difficulty } from './data';

export default function ButtonsContainer({handleStart, handleDelay, isGameStarted}){
  return (
    <div>
      <button disabled={isGameStarted} onClick={handleStart}>Start</button>
      <div> Select difficulty:
        {difficulty.map(({mode, delay}) => (
          <label htmlFor={mode} key={mode}> {mode}
            <input
              type='radio' 
              id={mode} 
              name="timer" 
              onChange={() => handleDelay(delay)}/>
          </label>
        ))}
      </div>
    </div>  
  )
}