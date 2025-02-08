import React, { useRef } from 'react';
import StoreCard from './StoreCard';
import StoreCard1 from './StoreCard1';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const CollectionOfCard = () => {
  const cardRefs = Array.from({ length: 26 }, () => useRef(null));

  useGSAP(() => {
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

  // Array of dress names and prices
  const dressData = [
    { id: 101, name: "Elegant Evening Gown", price: 120 },
    { id: 102, name: "Casual Summer Dress", price: 45 },
    { id: 103, name: "Floral Maxi Dress", price: 85 },
    { id: 104, name: "Classic Little Black Dress", price: 95 },
    { id: 105, name: "Bohemian Wrap Dress", price: 65 },
    { id: 106, name: "Chic Cocktail Dress", price: 110 },
    { id: 107, name: "Office Sheath Dress", price: 75 },
    { id: 108, name: "Sparkly Party Dress", price: 130 },
    { id: 109, name: "Vintage A-Line Dress", price: 90 },
    { id: 110, name: "Tropical Print Dress", price: 55 },
    { id: 111, name: "Winter Knit Dress", price: 70 },
    { id: 112, name: "Satin Slip Dress", price: 100 },
    { id: 113, name: "Denim Shirt Dress", price: 60 },
    { id: 114, name: "Embroidered Midi Dress", price: 80 },
    { id: 115, name: "Off-Shoulder Dress", price: 95 },
    { id: 116, name: "Lace Wedding Dress", price: 250 },
    { id: 117, name: "Velvet Evening Dress", price: 140 },
    { id: 118, name: "Polka Dot Dress", price: 50 },
    { id: 119, name: "High-Low Hem Dress", price: 75 },
    { id: 120, name: "Ruffled Sundress", price: 65 },
    { id: 121, name: "Sequin Mini Dress", price: 120 },
    { id: 122, name: "Turtleneck Sweater Dress", price: 85 },
    { id: 123, name: "Pleated Midi Dress", price: 95 },
    { id: 124, name: "Boho Maxi Dress", price: 110 },
    { id: 125, name: "Wrap Front Dress", price: 70 },
    { id: 126, name: "Silk Slip Dress", price: 150 },
  ];

  return (
    <div>
      {/* Row 1 */}
      <div className='flex justify-evenly'>
        <div ref={cardRefs[0]}>
          <StoreCard img="\images\STORE\1.avif" id={dressData[0].id} name={dressData[0].name} price={dressData[0].price} />
        </div>
        <div ref={cardRefs[1]}>
          <StoreCard img="\images\STORE\3.avif" id={dressData[1].id} name={dressData[1].name} price={dressData[1].price} />
        </div>
      </div>

      {/* Row 2 */}
      <div className='flex justify-evenly mt-20'>
        <div ref={cardRefs[2]}>
          <StoreCard1 img='\images\STORE\2.avif' id={dressData[2].id} name={dressData[2].name} price={dressData[2].price} />
        </div>
        <div ref={cardRefs[3]}>
          <StoreCard1 img='\images\STORE\4.avif' id={dressData[3].id} name={dressData[3].name} price={dressData[3].price} />
        </div>
        <div ref={cardRefs[4]}>
          <StoreCard1 img='\images\STORE\6.avif' id={dressData[4].id} name={dressData[4].name} price={dressData[4].price} />
        </div>
      </div>

      {/* Row 3 with heading */}
      <div className='flex justify-evenly mt-20'>
        <div ref={cardRefs[5]}>
          <StoreCard1 img='\images\STORE\7.avif' id={dressData[5].id} name={dressData[5].name} price={dressData[5].price} />
        </div>
        <div className='flex justify-center items-center'>
          <h1 className='w-[500px] text-2xl font-extrabold'>
            CLOTHES AREN'T GOING TO CHANGE THE WORLD, THE WOMEN WHO WEAR THEM WILL.
          </h1>
        </div>
        <div ref={cardRefs[6]}>
          <StoreCard1 img='\images\STORE\8.avif' id={dressData[6].id} name={dressData[6].name} price={dressData[6].price} />
        </div>
      </div>

      {/* Row 4 */}
      <div className='flex justify-evenly mt-20'>
        <div ref={cardRefs[7]}>
          <StoreCard1 img='\images\STORE\9.avif' id={dressData[7].id} name={dressData[7].name} price={dressData[7].price} />
        </div>
        <div ref={cardRefs[8]}>
          <StoreCard1 img='\images\STORE\10.avif' id={dressData[8].id} name={dressData[8].name} price={dressData[8].price} />
        </div>
        <div ref={cardRefs[9]}>
          <StoreCard1 img='\images\STORE\11.avif' id={dressData[9].id} name={dressData[9].name} price={dressData[9].price} />
        </div>
      </div>

      {/* Row 5 with heading */}
      <div className='flex justify-evenly mt-20'>
        <div ref={cardRefs[10]}>
          <StoreCard1 img='\images\STORE\12.avif' id={dressData[10].id} name={dressData[10].name} price={dressData[10].price} />
        </div>
        <div className='flex justify-center items-center'>
          <h1 className='w-[500px] text-2xl font-extrabold'>
            STYLE IS A WAY TO SAY WHO YOU ARE WITHOUT HAVING TO SPEAK.
          </h1>
        </div>
        <div ref={cardRefs[11]}>
          <StoreCard1 img='\images\STORE\13.avif' id={dressData[11].id} name={dressData[11].name} price={dressData[11].price} />
        </div>
      </div>

      {/* Row 6 */}
      <div className='flex justify-evenly mt-20'>
        <div ref={cardRefs[12]}>
          <StoreCard1 img='\images\STORE\14.avif' id={dressData[12].id} name={dressData[12].name} price={dressData[12].price} />
        </div>
        <div ref={cardRefs[13]}>
          <StoreCard1 img='\images\STORE\15.avif' id={dressData[13].id} name={dressData[13].name} price={dressData[13].price} />
        </div>
        <div ref={cardRefs[14]}>
          <StoreCard1 img='\images\STORE\16.avif' id={dressData[14].id} name={dressData[14].name} price={dressData[14].price} />
        </div>
      </div>

      {/* Row 7 with heading */}
      <div className='flex justify-evenly mt-20'>
        <div ref={cardRefs[15]}>
          <StoreCard1 img='\images\STORE\17.avif' id={dressData[15].id} name={dressData[15].name} price={dressData[15].price} />
        </div>
        <div className='flex justify-center items-center'>
          <h1 className='w-[500px] text-2xl font-extrabold'>
            FASHION IS WHAT YOU BUY, STYLE IS WHAT YOU DO WITH IT.
          </h1>
        </div>
        <div ref={cardRefs[16]}>
          <StoreCard1 img='\images\STORE\18.avif' id={dressData[16].id} name={dressData[16].name} price={dressData[16].price} />
        </div>
      </div>

      {/* Row 8 */}
      <div className='flex justify-evenly mt-20'>
        <div ref={cardRefs[17]}>
          <StoreCard1 img='\images\STORE\19.avif' id={dressData[17].id} name={dressData[17].name} price={dressData[17].price} />
        </div>
        <div ref={cardRefs[18]}>
          <StoreCard1 img='\images\STORE\20.avif' id={dressData[18].id} name={dressData[18].name} price={dressData[18].price} />
        </div>
        <div ref={cardRefs[19]}>
          <StoreCard1 img='\images\STORE\21.avif' id={dressData[19].id} name={dressData[19].name} price={dressData[19].price} />
        </div>
      </div>

      {/* Row 9 with heading */}
      <div className='flex justify-evenly mt-20'>
        <div ref={cardRefs[20]}>
          <StoreCard1 img='\images\STORE\22.avif' id={dressData[20].id} name={dressData[20].name} price={dressData[20].price} />
        </div>
        <div className='flex justify-center items-center'>
          <h1 className='w-[500px] text-2xl font-extrabold'>
            YOU CAN NEVER BE OVERDRESSED OR OVEREDUCATED.
          </h1>
        </div>
        <div ref={cardRefs[21]}>
          <StoreCard1 img='\images\STORE\23.avif' id={dressData[21].id} name={dressData[21].name} price={dressData[21].price} />
        </div>
      </div>

      {/* Row 10 */}
      <div className='flex justify-evenly mt-20'>
        <div ref={cardRefs[22]}>
          <StoreCard1 img='\images\STORE\24.avif' id={dressData[22].id} name={dressData[22].name} price={dressData[22].price} />
        </div>
        <div ref={cardRefs[23]}>
          <StoreCard1 img='\images\STORE\25.avif' id={dressData[23].id} name={dressData[23].name} price={dressData[23].price} />
        </div>
        <div ref={cardRefs[24]}>
          <StoreCard1 img='\images\STORE\26.avif' id={dressData[24].id} name={dressData[24].name} price={dressData[24].price} />
        </div>
      </div>
    </div>
  );
};

export default CollectionOfCard;