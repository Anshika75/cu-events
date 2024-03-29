import React from 'react';
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

export default function Home() {
    return (
        <div className="bg-white">
            <NavBar/>
            <Landing id="home"/>
            <Stats id="stats"/>
            <About id="about"/>
            {/* <Events id="events"/> */}
            <StaticEvents id="sevents"/>
            {/* <Achievements id="achievements"/> */}
            <StaticAchievements id="sachievements"/>
            <Partner id="partner"/>
            <Footer id="contact"/>
        </div>
    )
}
