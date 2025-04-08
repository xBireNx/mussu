import React, { useEffect, useState } from 'react';

function Slideshow({ photos, onClose }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % photos.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [photos]);

  if (!photos.length) return null;

  return (
    <div className="slideshow-overlay" onClick={onClose}>
      <div className="slideshow-photo">
        <img src={photos[current].imageUrl} alt="Slideshow" />
        <p>{photos[current].caption}</p>
        <span className="close-btn">✖</span>
      </div>
    </div>
  );
}

export default Slideshow;