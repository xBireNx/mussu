// src/components/ComplimentBubble.jsx
import React, { useEffect, useState } from 'react';

const compliments = [
  'You’re her sunshine ☀️',
  'She smiles brighter because of you 🥰',
  'This app is lucky, just like you 😉',
  'You made this for her. She’ll never forget 💖',
];

const ComplimentBubble = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % compliments.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return <div className="compliment-bubble">{compliments[index]}</div>;
};

export default ComplimentBubble;
