import React, { useState } from 'react';

const loveNotes = [
  "I just wanted to say I love you more every day 💖",
  "You make my life brighter in every way ✨",
  "Being with you feels like a dream come true 🌈",
  "You’re not just my girlfriend, you're my home 🏡",
  "I can't wait to make a thousand more memories with you 💫"
];

function MessageBottle() {
  const [note, setNote] = useState(null);

  const openMessage = () => {
    const index = Math.floor(Math.random() * loveNotes.length);
    setNote(loveNotes[index]);
  };

  return (
    <div className="message-bottle">
      <h2>💌 Message in a Bottle</h2>
      <button onClick={openMessage} className="message-button">Open Message</button>
      {note && <p className="message-text">{note}</p>}
    </div>
  );
}

export default MessageBottle;