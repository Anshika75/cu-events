import React, { useEffect } from "react";
import NavBar from "./component/NavBar";
import About from "./component/About";
import Footer from "./component/Footer";
import Events from "./component/Events";
import Landing from "./component/Landing";
import Achievements from "./component/Achievements";
import Partner from "./component/Partner";
import axios from "axios";

const App = () => {
  useEffect(() => {
    (async () => {
      try {
        const events = await axios.get(
          "http://localhost:3000/cac/v1/getOngoingEvents/all"
        );
        const achivments = await axios.get(
          "http://localhost:3000/cac/v1//getAchivments/all"
        );
        console.log(events.data);
        console.log(achivments.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, []);

  return (
    <div className="bg-white">
      <NavBar />
      <Landing />
      <About />
      <Achievements />
      <Events />
      <Partner />
      <Footer />
    </div>
  );
};

export default App;
