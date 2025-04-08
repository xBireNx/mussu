// src/components/FloatingHearts.jsx
import React, { useEffect } from 'react';
import './FloatingHearts.css';

const FloatingHearts = () => {
  useEffect(() => {
    const container = document.createElement('div');
    container.className = 'floating-hearts-container';
    document.body.appendChild(container);

    const interval = setInterval(() => {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = 3 + Math.random() * 2 + 's';
      container.appendChild(heart);
      setTimeout(() => container.removeChild(heart), 5000);
    }, 500);

    return () => {
      clearInterval(interval);
      document.body.removeChild(container);
    };
  }, []);

  return null;
};

export default FloatingHearts;
