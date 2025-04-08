import React, { useEffect, useState } from 'react';

function OnThisDay({ photos }) {
  const [memory, setMemory] = useState(null);

  useEffect(() => {
    if (photos.length > 0) {
      const randomIndex = Math.floor(Math.random() * photos.length);
      setMemory(photos[randomIndex]);
    }
  }, [photos]);

  if (!memory) return null;

  return (
    <div className="on-this-day">
      <h2>📅 On This Day</h2>
      <img src={memory.imageUrl} alt="Memory" />
      <p>{memory.caption}</p>
    </div>
  );
}

export default OnThisDay;