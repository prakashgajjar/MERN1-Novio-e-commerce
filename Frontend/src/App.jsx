import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import SignIn from "./components/RoutesComponents/SignIn";
import Navbar from "./components/header/Navbar"; 
import ThemeContext from "../ContextProvider";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
      <div ref={navbarRef} className="fixed  w-full z-50">
          <Navbar />
        </div>
        
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/signin" element={<SignIn />} />
          <Route path="/home/about" element={<SignIn />} />
        </Routes>
      </Router>
      </ThemeContext.Provider>
  );
};

export default App;
