import React, { useEffect, useRef } from 'react';

import music1 from '../../assets/music/1.ogg';
import music2 from '../../assets/music/2.ogg';
import music3 from '../../assets/music/3.ogg';
import music4 from '../../assets/music/4.ogg';

export default function PlaySound({ music }) {
  const audioRef = useRef();

  async function getCurrentMusic(music = 'red') {
    switch(music) {
      case 'red': 
        audioRef.current.src = music1;
        break;
      case 'blue': 
        audioRef.current.src = music2;
        break;
      case 'yellow': 
        audioRef.current.src = music3;
        break;
      case 'green': 
        audioRef.current.src = music4;
        break;
      default: audioRef.current.src = music1;
    }
  }

  useEffect(() => {  
    if (music.currentMusic) {
      const { currentMusic } = music;
      getCurrentMusic(currentMusic).then(
        () => audioRef.current.play()
      );
    }
  }, [music])

  return (
    <div>
      <audio preload="none" ref={audioRef}></audio>
    </div>
  )  
}