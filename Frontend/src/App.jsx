import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/RoutesComponents/SignIn";
import Navbar from "./components/header/Navbar"; 
import ThemeContext from "../ContextProvider";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import './App.css'
import About from "./components/RoutesComponents/About";
import Contact from "./components/RoutesComponents/Contact";
import Profile from "./components/RoutesComponents/Profile";

const App = () => {
  const [show, setShow] = useState(true); 

  const navbarRef = React.useRef(null);

  useGSAP(()=>{
    gsap.from(navbarRef.current, {
      y: -10,
      opacity: 0,
      duration: 0.4,
    });
  })

  return (
    <ThemeContext.Provider value={{ setShow, show }}>
      <Router>
      <div ref={navbarRef} className="fixed  w-full  z-[101]">
          <Navbar />
        </div>
        
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
      </ThemeContext.Provider>
  );
};

export default App;
