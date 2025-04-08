import React, { useEffect, useRef } from 'react';

function MusicPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    const handleInteraction = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
      }
      document.removeEventListener('click', handleInteraction);
    };
  
    document.addEventListener('click', handleInteraction);
    return () => document.removeEventListener('click', handleInteraction);
  }, []);
  

  return (
    <audio ref={audioRef} autoPlay loop style={{ display: 'none' }}>
         <source src="/music/romantic_piano.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
  );
}

export default MusicPlayer;