"use client"; // Required for Next.js if using app router

import { useEffect } from 'react';

export default function VinylPlayer() {
  useEffect(() => {
    const handleFirstInteraction = () => {
      const audio = new Audio('/sounds/vinyl-scratch.mp3');
      audio.volume = 0.3;
      audio.play().catch(e => console.log("Playback prevented:", e));
      document.removeEventListener('click', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    
    return () => {
      document.removeEventListener('click', handleFirstInteraction);
    };
  }, []);

  return null;
}