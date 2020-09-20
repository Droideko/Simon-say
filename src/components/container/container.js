import React, { useState } from 'react';
import GameContainer from '../game-container/game-container';
import ButtonsContainer from '../buttons-container/buttons-container'

import { MainContainer } from './styled';
import { circleButtons } from '../game-container/data';

export default function Container(){
  const [ colorStack, setColorStack ] = useState([]);
  const [ delay, setDelay] = useState(1500);
  const [ isGameStarted, setIsGameStarted ] = useState(false);

  const getRandomColor = (colors) => {
    const num = Math.floor(Math.random() * colors.length);
    setColorStack(prev => [...prev, colors[num]]);
  };
  
  const handleStart = () => {
    setIsGameStarted(true);
    getRandomColor(circleButtons);    
  };

  const handleNextLevel = () => {
    getRandomColor(circleButtons);
  };

  const resetGame = () => {
    setIsGameStarted(false);
    setColorStack([]);
  }

  const handleDelay = (delay = 1500) => {
    setDelay(delay);    
  };

  return (
    <MainContainer>
      <GameContainer 
        colorStack={colorStack} 
        delay={delay} 
        handleNextLevel={handleNextLevel}
        isGameStarted={isGameStarted} 
        resetGame={resetGame}/>
      <ButtonsContainer 
        handleStart={handleStart} 
        handleDelay={handleDelay}
        isGameStarted={isGameStarted}/>
    </MainContainer>  
  )
}