import React, { useState, useEffect } from 'react';
import NavBar from '../component/NavBar';
import Landing from '../component/Landing';
import Stats from '../component/Stats';
import About from '../component/About';
import Events from '../component/Events';
import Achievements from '../component/Achievements';
import Partner from '../component/Partner';
import Footer from '../component/Footer';
import StaticEvents from '../component/StaticEvent';
import StaticAchievements from '../component/StaticAchievements';
import Loader from '../component/loader';

const Home = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    // Simulate video loading
    const video = document.getElementById('homepage-video');
    video.addEventListener('loadeddata', () => {
      setVideoLoaded(true);
    });

    // Simulate content loading
    const contentLoadingTimeout = setTimeout(() => {
      setContentLoaded(true);
    }, 2000); // Set a timeout of 2 seconds for content loading

    // Cleanup
    return () => {
      clearTimeout(contentLoadingTimeout);
      video.removeEventListener('loadeddata', () => {});
    };
  }, []);

  // Render loading spinner while video is loading
  if (!videoLoaded) {
    return <Loader />;
  }

  // Render homepage content once both video and other content are loaded
  return (
    <>
      {contentLoaded && (
        <div className="bg-white">
          <NavBar />
          <Landing id="home" />
          <Stats id="stats" />
          <About id="about" />
          <Events id="events" />
          <Achievements id="achievements" />
          <Partner id="partner" />
          <Footer id="contact" />
        </div>
      )}
    </>
  );
};

export default Home;
