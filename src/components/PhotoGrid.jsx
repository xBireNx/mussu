import React, { useState } from 'react';

function PhotoGrid({ photos }) {
  const [messages, setMessages] = useState({});

  const handleMessageChange = (id, value) => {
    setMessages(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="photo-grid">
      {photos.map(photo => (
        <div key={photo.id} className="photo-card">
          <img src={photo.imageUrl} alt="Insta moment" />
          <p>{photo.caption}</p>
          <textarea
            placeholder="Leave a love note..."
            value={messages[photo.id] || ''}
            onChange={e => handleMessageChange(photo.id, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
}

export default PhotoGrid;