import React, { useState } from 'react';

function SurpriseMode({ photos }) {
  const [revealed, setRevealed] = useState(false);
  const randomPhoto = photos[Math.floor(Math.random() * photos.length)];

  return (
    <div className="surprise-mode">
      <button className="surprise-btn" onClick={() => setRevealed(true)}>
        🎁 Tap for Surprise
      </button>
      {revealed && (
        <div className="surprise-content">
          <img src={randomPhoto.imageUrl} alt="Surprise!" className="surprise-img" />
          <p>{randomPhoto.caption}</p>
        </div>
      )}
    </div>
  );
}

export default SurpriseMode;