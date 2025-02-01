import React, { useEffect, useState , useRef } from 'react';
import Novio from '../navbar/Novio';
import Navigation from '../navbar/Navigation';
import Icons from '../navbar/Icons';

const Navbar = () => {
  const [scroll, setScroll] = useState(true);
  const NavigationRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY > 50) {
        setScroll(false);
      } else {
        setScroll(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full bg-transparent ">
      <nav className="flex justify-between items-center h-16 px-6">
        <Novio /> 
       <div className='flex '>
       <div ref={NavigationRef} className={`${scroll ? "block" : "hidden"}`}>

       <Navigation />
       </div>
       <div className=''>
       <Icons /></div> 
       </div>
      </nav>
    </div>
  );
};

export default Navbar;
