import React, { useEffect, useRef } from 'react';
import ThemeContext from '../../../ContextProvider';
const NavigationLinks = () => {
  const { show } = React.useContext(ThemeContext);
  const textRef = useRef();
  useEffect(()=>{
    textRef.current.style.color = show? 'black' : 'white';
    // textRef.current.style.fontSize = show? '16px' : '12px';
  })
  return (
    <div className="flex">
      <ul ref={textRef} className="flex gap-20 text-[12px]  px-3 py-2 justify-center items-center">
        <li>SHOP</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
    </div>
  );
};

export default NavigationLinks;
