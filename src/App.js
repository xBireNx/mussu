import React, { useEffect, useState } from 'react';
import PhotoGrid from './components/PhotoGrid';
import RandomPhoto from './components/RandomPhoto';
import MusicPlayer from './components/MusicPlayer';
import ThemeToggle from './components/ThemeToggle';
import Slideshow from './components/Slideshow';
import Compliment from './components/Compliment';
import OnThisDay from './components/OnThisDay';
import MessageBottle from './components/MessageBottle';
import TagCloud from './components/TagCloud';
import './styles.css';

const LOCAL_PHOTO_PATHS = [
  { id: 1, imageUrl: '/photos/1.jpg', caption: 'Sunshine in human form ☀️' },
  { id: 2, imageUrl: '/photos/2.jpg', caption: 'Throwback magic ✨' },
  { id: 3, imageUrl: '/photos/3.jpg', caption: 'Cutest smile 🥹' },
  { id: 4, imageUrl: '/photos/4.jpg', caption: 'Pure joy 💖' },
  { id: 5, imageUrl: '/photos/5.jpeg', caption: 'My forever muse 💫' }
];

function App() {
  const [photos, setPhotos] = useState([]);
  const [showSlideshow, setShowSlideshow] = useState(false);

  useEffect(() => {
    setPhotos(LOCAL_PHOTO_PATHS);
  }, []);

  return (
    <div className="app-container">
      <ThemeToggle />
      <h1 className="title">💖 Her Instagram Moments</h1>
      <MusicPlayer />
      <button className="slideshow-button" onClick={() => setShowSlideshow(true)}>
        🎞️ View Slideshow
      </button>
      {showSlideshow && <Slideshow photos={photos} onClose={() => setShowSlideshow(false)} />}
      <Compliment />
      <OnThisDay photos={photos} />
      <MessageBottle />
      <TagCloud photos={photos} />
      <RandomPhoto photos={photos} />
      <PhotoGrid photos={photos} />
    </div>
  );
}

export default App;