import React from 'react';

function TagCloud({ photos }) {
  const words = photos.flatMap(photo => photo.caption.split(' '));
  const frequencies = words.reduce((acc, word) => {
    const clean = word.replace(/[^\w#]/g, '').toLowerCase();
    if (clean.length > 1) {
      acc[clean] = (acc[clean] || 0) + 1;
    }
    return acc;
  }, {});

  const fontSize = count => 12 + count * 4;

  return (
    <div className="tag-cloud">
      <h2>🌸 Tag Cloud</h2>
      <div className="cloud">
        {Object.entries(frequencies).map(([word, count]) => (
          <span
            key={word}
            style={{ fontSize: `${fontSize(count)}px`, margin: '5px', display: 'inline-block' }}>
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TagCloud;