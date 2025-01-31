import React, { useRef } from 'react';
import { CardGirl } from './CardGirl';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const CardCollection = () => {
  const cardRefs = useRef([]);

  useGSAP(() => {
    gsap.from(cardRefs.current, {
      opacity: 0,
      duration: 0.3,
      stagger: 0.3,
      scrollTrigger: {
        trigger: cardRefs.current[0],
        start: "top 70%",
        end: "top 10%",
        once: true, 
        toggleActions: "play none none none",
      },
    });
  });

  return (
    <div className='flex justify-center flex-wrap gap-1'>
      <div ref={(el) => cardRefs.current[0] = el}>
        <CardGirl imgUrl="\images\1.avif" />
      </div>
      <div ref={(el) => cardRefs.current[1] = el}>
        <CardGirl imgUrl="\images\2.avif" />
      </div>
      <div ref={(el) => cardRefs.current[2] = el}>
        <CardGirl imgUrl="\images\3.avif" />
      </div>
      <div ref={(el) => cardRefs.current[3] = el}>
        <CardGirl imgUrl="\images\4.avif" />
      </div>
      <div ref={(el) => cardRefs.current[4] = el}>
        <CardGirl imgUrl="\images\5.avif" />
      </div>
      <div ref={(el) => cardRefs.current[5] = el}>
        <CardGirl imgUrl="\images\6.avif" />
      </div>
    </div>
  );
};

export default CardCollection;
