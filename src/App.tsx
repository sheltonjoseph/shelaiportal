import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  // Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  LinkedInIcon,
  WhatsAppIcon
} from "./components";
// import ReactGA from "react-ga";
import { useEffect } from "react";
import { config } from "./constants/config";


const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
      <LinkedInIcon />
      <WhatsAppIcon/>
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <div className="mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-4">
          <Hero />
          </div>
        </div>
        <div style={{ backgroundColor: "black" }}>
          <About />
        </div>
        {/* <Experience /> */}
        <Tech />
        <div style={{ backgroundColor: "black" }}>
          <Works />
        </div>
        <Feedbacks />
        <div style={{ backgroundColor: "black" }} className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
  </BrowserRouter>
  );
};

export default App;
