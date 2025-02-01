import React, { useState, useEffect } from "react";

const ScrollComponent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <h1>Current Scroll Position: {scrollPosition}</h1>
      <div style={{ height: "2000px", background: "#f0f0f0" }}>
        Scroll down the page to see the position update.
      </div>
    </div>
  );
};

export default ScrollComponent;
