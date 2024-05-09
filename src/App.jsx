import { BrowserRouter as Router } from "react-router-dom";
import { About, Experience, Contact, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { GitHub, Linkedin } from 'react-feather'; // Import GitHub and Linkedin icons
import cv from "./assets/New folder (2)/cv.png"; // Import CV image


const App = () => {
  return (
    <Router>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <div className="fixed bottom-40 right-16 z-10 ">
            <a href="https://www.linkedin.com/in/abdelbasset-benghina-512144124/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="text-white w-20 h-10 stroke-zinc" />
            </a>
          </div>
          <div className="fixed bottom-24 right-16  z-10">
            <a href="https://github.com/kovar-cmk/Myprofile/tree/main" target="_blank" rel="noopener noreferrer">
              <GitHub className="text-white w-20 h-10 stroke-zinc" />
            </a>
          </div>
          <div className="fixed w-10 h-8 bottom-10 right-20 z-10" >
            <a href="./assets/New folder (2)/My_cv_Canva-1.png " download>
              <img src={cv}/>
            </a>
          </div>
          <Navbar />
          {/* <Computers />    */}
          <Hero />
        </div>
        <About/>
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas /> 
        </div>
      </div>
    </Router>
  );
}

export default App;
