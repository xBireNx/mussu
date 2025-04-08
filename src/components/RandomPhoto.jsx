import React, { useEffect, useState } from 'react';

function RandomPhoto({ photos }) {
  const [random, setRandom] = useState(null);

  useEffect(() => {
    if (photos.length > 0) {
      const rand = photos[Math.floor(Math.random() * photos.length)];
      setRandom(rand);
    }
  }, [photos]);

  if (!random) return null;

  return (
    <div className="random-photo">
      <h2>🌟 Your Daily Smile</h2>
      <img src={random.imageUrl} alt="Daily Random" />
      <p>{random.caption}</p>
    </div>
  );
}

export default RandomPhoto;