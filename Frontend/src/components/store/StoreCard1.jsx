import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

const StoreCard1 = ({img}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const visibleRef = React.useRef(null);
  const targetPosition = React.useRef({ x: 0, y: 0 });

  // Track mouse position with a 200ms delay
  const handleMouseMove = (e) => {
    targetPosition.current = { x: e.pageX, y: e.pageY };

    // Use setTimeout to delay the update
    setTimeout(() => {
      setPosition(targetPosition.current);
    }, 200);
  };

  const handleMouseEnter = () => {
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  useEffect(() => {
    gsap.to(visibleRef.current, {
      scale: visible ? 1 : 0,
      ease: 'power2.inOut',
      duration: 0.9,
    });
  }, [visible]);

  useEffect(() => {
    // Smooth transition to the target position using gsap
    gsap.to(visibleRef.current, {
      left: `${position.x - 20}px`,
      top: `${position.y - 20}px`,
      ease: 'power2.out',
      duration: .8,
    });
  }, [position]);

  return (
    <div className="z-50" onMouseMove={handleMouseMove}>
      <div
        ref={visibleRef}
        className="w-44 h-44 bg-white shadow-2xl shadow-zinc-300 opacity-70 absolute rounded-full"
      ></div>
      <div className="flex ml-4">
        <div className="h-[650px] justify-center flex flex-col items-center">
          <img
          className='h-[550px] object-cover '
            src={img}
            alt="Store Item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <h1 className="mt-5 text-sm">ALTMENT LOVE IS ALL</h1>
          <h1 className="mt-1 text-sm mb-5">$250</h1>
        </div>
      </div>
    </div>
  );
};

export default StoreCard1;
