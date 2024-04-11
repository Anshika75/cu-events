import React, { useEffect, useState } from 'react';
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // Set a minimum timeout of 2000 milliseconds (2 seconds)
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-white">
          <NavBar />
          <Landing id="home" />
          <Stats id="stats" />
          <About id="about" />
          {/* <Events id="events"/> */}
          <StaticEvents id="sevents" />
          {/* <Achievements id="achievements"/> */}
          <StaticAchievements id="sachievements" />
          <Partner id="partner" />
          <Footer id="contact" />
        </div>
      )}
    </>
  );
};

export default Home;
