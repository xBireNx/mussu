import React, { useEffect, useState } from 'react';

const compliments = [
  "You're my favorite notification 💌",
  "You light up my world like nobody else ✨",
  "Every moment with you is a gift 🎁",
  "You're the missing piece to my puzzle 🧩",
  "If I had a flower for every time I thought of you... 🌸"
];

function Compliment() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    setQuote(compliments[randomIndex]);
  }, []);

  return <p className="compliment-text">💬 {quote}</p>;
}

export default Compliment;

    