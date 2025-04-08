import React, { useEffect, useState } from "react";
import PhotoGrid from "./components/PhotoGrid";
import RandomPhoto from "./components/RandomPhoto";
import MusicPlayer from "./components/MusicPlayer";
import ThemeToggle from "./components/ThemeToggle";
import Slideshow from "./components/Slideshow";
import Compliment from "./components/Compliment";
import OnThisDay from "./components/OnThisDay";
import MessageBottle from "./components/MessageBottle";
import TagCloud from "./components/TagCloud";
import SurpriseMode from "./components/SurpriseMode";
import FloatingHearts from "./components/FloatingHearts";
import ComplimentBubble from "./components/ComplimentBubble";
import "./styles.css";

const LOCAL_PHOTO_PATHS = [
  { id: 1, imageUrl: "/photos/1.jpg", caption: "Sunshine in human form ☀️" },
  { id: 2, imageUrl: "/photos/2.jpg", caption: "Throwback magic ✨" },
  { id: 3, imageUrl: "/photos/3.jpg", caption: "Cutest smile 🥹" },
  { id: 4, imageUrl: "/photos/4.jpg", caption: "Pure joy 💖" },
  { id: 5, imageUrl: "/photos/5.jpeg", caption: "My forever muse 💫" },
];

function App() {
  const [photos, setPhotos] = useState([]);
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPhotos(LOCAL_PHOTO_PATHS);
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader-heart">❤️</div>
        <p>She's getting ready... 💅</p>
      </div>
    );
  }

  return (
    <div className="app-container decorated-bg sparkle-cursor">
      <FloatingHearts />
      <ComplimentBubble />
      <ThemeToggle />
      <h1 className="title fancy-title">💖 Her Instagram Moments</h1>
      <MusicPlayer />
      <button
        className="slideshow-button pretty-button"
        onClick={() => setShowSlideshow(true)}
      >
        🎞️ View Slideshow
      </button>
      {showSlideshow && (
        <Slideshow photos={photos} onClose={() => setShowSlideshow(false)} />
      )}
      <Compliment />
      <OnThisDay photos={photos} />
      <MessageBottle />
      <TagCloud photos={photos} />
      <SurpriseMode photos={photos} />
      <RandomPhoto photos={photos} />
      <PhotoGrid photos={photos} />
    </div>
  );
}

export default App;
