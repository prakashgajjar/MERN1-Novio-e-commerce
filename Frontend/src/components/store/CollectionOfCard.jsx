import React, { useRef } from 'react';
import StoreCard from './StoreCard';
import StoreCard1 from './StoreCard1';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const CollectionOfCard = () => {
  // Refs for each card's parent div
  const cardRefs = Array.from({ length: 26 }, () => useRef(null));

  // GSAP animation setup
  useGSAP(() => {
    // Scroll-trigger animation for each card's parent div
    cardRefs.forEach((cardRef, index) => {
      gsap.from(cardRef.current, {
        opacity: 0,
        duration: 0.3,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 70%",
          end: "top 10%",
          once: true,
          toggleActions: "play none none none",
        },
      });
    });
  });

  return (
    <div>
      {/* Row 1 */}
      <div className='flex justify-evenly '>
        <div ref={cardRefs[0]}>
          <StoreCard img="\public\images\STORE\1.avif" />
        </div>
        <div ref={cardRefs[1]}>
          <StoreCard img="\public\images\STORE\3.avif" />
        </div>
        
      </div>

      {/* Row 2 */}
      <div className='flex justify-evenly mt-20'>
        <div ref={cardRefs[3]}>
          <StoreCard1 img='\public\images\STORE\2.avif' />
        </div>
        <div ref={cardRefs[4]}>
          <StoreCard1 img='\public\images\STORE\4.avif' />
        </div>
        <div ref={cardRefs[5]}>
          <StoreCard1 img='\public\images\STORE\6.avif' />
        </div>
      </div>

      {/* Row 3 with heading */}
      <div className='flex justify-evenly mt-20'>
        <div ref={cardRefs[6]}>
          <StoreCard1 img='\public\images\STORE\7.avif' />
        </div>
        <div className='flex justify-center items-center'>
          <h1 className='w-[500px] text-2xl font-extrabold'>
            CLOTHES AREN'T GOING TO CHANGE THE WORLD, THE WOMEN WHO WEAR THEM WILL.
          </h1>
        </div>
        <div ref={cardRefs[7]}>
          <StoreCard1 img='\public\images\STORE\8.avif' />
        </div>
      </div>

      {/* Row 4 */}
      <div className='flex justify-evenly mt-20'>
        <div ref={cardRefs[8]}>
          <StoreCard1 img='\public\images\STORE\9.avif' />
        </div>
        <div ref={cardRefs[9]}>
          <StoreCard1 img='\public\images\STORE\10.avif' />
        </div>
        <div ref={cardRefs[10]}>
          <StoreCard1 img='\public\images\STORE\11.avif' />
        </div>
      </div>

      {/* Row 5 with heading */}
      <div className='flex justify-evenly mt-20'>
        <div ref={cardRefs[11]}>
          <StoreCard1 img='\public\images\STORE\12.avif' />
        </div>
        <div className='flex justify-center items-center'>
          <h1 className='w-[500px] text-2xl font-extrabold'>
            STYLE IS A WAY TO SAY WHO YOU ARE WITHOUT HAVING TO SPEAK.
          </h1>
        </div>
        <div ref={cardRefs[12]}>
          <StoreCard1 img='\public\images\STORE\13.avif' />
        </div>
      </div>

      {/* Row 6 */}
      <div className='flex justify-evenly mt-20'>
        <div ref={cardRefs[13]}>
          <StoreCard1 img='\public\images\STORE\14.avif' />
        </div>
        <div ref={cardRefs[14]}>
          <StoreCard1 img='\public\images\STORE\15.avif' />
        </div>
        <div ref={cardRefs[15]}>
          <StoreCard1 img='\public\images\STORE\16.avif' />
        </div>
      </div>

      {/* Row 7 with heading */}
      <div className='flex justify-evenly mt-20'>
        <div ref={cardRefs[16]}>
          <StoreCard1 img='\public\images\STORE\17.avif' />
        </div>
        <div className='flex justify-center items-center'>
          <h1 className='w-[500px] text-2xl font-extrabold'>
            FASHION IS WHAT YOU BUY, STYLE IS WHAT YOU DO WITH IT.
          </h1>
        </div>
        <div ref={cardRefs[17]}>
          <StoreCard1 img='\public\images\STORE\18.avif' />
        </div>
      </div>

      {/* Row 8 */}
      <div className='flex justify-evenly mt-20'>
        <div ref={cardRefs[18]}>
          <StoreCard1 img='\public\images\STORE\19.avif' />
        </div>
        <div ref={cardRefs[19]}>
          <StoreCard1 img='\public\images\STORE\20.avif' />
        </div>
        <div ref={cardRefs[20]}>
          <StoreCard1 img='\public\images\STORE\21.avif' />
        </div>
      </div>

      {/* Row 9 with heading */}
      <div className='flex justify-evenly mt-20'>
        <div ref={cardRefs[21]}>
          <StoreCard1 img='\public\images\STORE\22.avif' />
        </div>
        <div className='flex justify-center items-center'>
          <h1 className='w-[500px] text-2xl font-extrabold'>
            YOU CAN NEVER BE OVERDRESSED OR OVEREDUCATED.
          </h1>
        </div>
        <div ref={cardRefs[22]}>
          <StoreCard1 img='\public\images\STORE\23.avif' />
        </div>
      </div>

      {/* Row 10 */}
      <div className='flex justify-evenly mt-20'>
        <div ref={cardRefs[23]}>
          <StoreCard1 img='\public\images\STORE\24.avif' />
        </div>
        <div ref={cardRefs[24]}>
          <StoreCard1 img='\public\images\STORE\25.avif' />
        </div>
        <div ref={cardRefs[25]}>
          <StoreCard1 img='\public\images\STORE\26.avif' />
        </div>
      </div>
    </div>
  );
};

export default CollectionOfCard;
