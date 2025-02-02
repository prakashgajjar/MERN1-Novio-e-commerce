import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeContext from '../../../ContextProvider';
const NavigationLinks = () => {
  const { show,setShow } = React.useContext(ThemeContext);
  const textRef = useRef();
  useEffect(()=>{
    textRef.current.style.color = show? 'black' : 'white';
   
  })
  const changeShow = () => {
    setShow(true);
  }
  return (
    <div className="flex">
      <ul ref={textRef} className="flex gap-20 text-[12px]  px-3 py-2 justify-center items-center">
      <li onClick={changeShow}>
            <NavLink
              to="/home"
           
            >
              HOME
            </NavLink>
          </li>
          <li onClick={changeShow}>
            <NavLink
              to="/shop"
          
            >
              SHOP
            </NavLink>
          </li>
          <li onClick={changeShow}>
            <NavLink
              to="/about"
            
            >
              ABOUT
            </NavLink>
          </li>
          <li onClick={changeShow}>
            <NavLink
              to="/contact"
         
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      
    </div>
  );
};

export default NavigationLinks;
