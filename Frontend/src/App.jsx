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
import Cart from "./components/RoutesComponents/Cart";
import Menu from "./components/header/Menu";
import StorePage from "./components/store/StorePage";
import Cancel from "./components/payment/Cancel";
import SuccessPage from "./components/payment/SuccessPage";

const App = () => {
  
  const [show, setShow] = useState(true);
  const [data, setData] = useState([])
  const [open, setOpen] = useState(true)
  const navbarRef = React.useRef(null);
  useGSAP(() => {
    gsap.from(navbarRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.5,
    });
  })
  return (
    
    <ThemeContext.Provider value={{ setShow, show, data, setData, open, setOpen }}>
      <Router >
        <div className={`overflow-hidden ${show ? "h-full" : "h-screen"}`}>
          <div ref={navbarRef} className="fixed  w-full  z-[101]">
            <Navbar />
          </div>
          <div className={`z-[100] ${show ? 'hidden' : 'block'}`}>
            <Menu />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/usercart" element={<Cart />} />
            <Route path="/shop" element={<StorePage />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/cancel" element={<Cancel />} />
          </Routes>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;
