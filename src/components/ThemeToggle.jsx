import React, { useEffect, useState } from 'react';

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  return (
    <button className="theme-toggle" onClick={() => setDarkMode(prev => !prev)}>
      {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}

export default ThemeToggle;