import React, { useState, useEffect, useRef } from 'react';

import PlayMusic from '../../shared/play-sound/play-sound';

import { Game } from './styled';
import { circleButtons } from './data';

export default function Container({ colorStack, delay, isGameStarted, handleNextLevel, resetGame }){
  const [ music, setMusic ] = useState({currentMusic: null});
  const [ disabled, setDisabled ] = useState(false);
  const [ progress,  setProgress ] = useState({
    colors: [],
    started: false
  });
  const buttonRefs = circleButtons.map(_ => useRef());

  const handleStart = () => {
    let i = 0;
    setDisabled(true)
    let timer = setTimeout(function run(){
      if (colorStack.length > i) {
        const currentIndex = circleButtons.findIndex(color => color === colorStack[i]);
        setMusic({currentMusic: colorStack[i]});
        buttonRefs[currentIndex].current.classList.add('animated');
        setTimeout(() => buttonRefs[currentIndex].current.classList.remove('animated'), 350);
        i++;
        timer = setTimeout(() =>  run(), delay);
      } else {
        setProgress(() => ({
          colors: colorStack,
          started: false
        }));
        setDisabled(false);
      }   
    }, 500);
  };

  const handleClick = (target) => {
    const selectedColor = target.dataset.music;
    if (selectedColor === progress.colors[0]){
      setProgress(prev => ({
        started: true,
        colors: prev.colors.slice(1, prev.length)
      }));
    } else {
      resetGame();
      setProgress(() => ({
        started: false,
        colors: []
      }));
    }
    setMusic({currentMusic: target.dataset.music});
  };

  useEffect(() => {
    handleStart();
    setProgress(prev => ({
      colors: [],
      started: false
    }));
  }, [colorStack]);

  useEffect(() => {
    if (isGameStarted && progress.colors.length === 0 && progress.started){
      handleNextLevel();
    }
  },[progress.colors]);

  return (
    <Game disabled={disabled}>
      {circleButtons.map((color, i) => (
        <div key={color} 
          ref={buttonRefs[i]}
          className={`${color} circle`}
          data-music={color}
          onClick={(e) => handleClick(e.target)}></div>
      ))}
      <PlayMusic music={music} />    
    </Game>
  )
}