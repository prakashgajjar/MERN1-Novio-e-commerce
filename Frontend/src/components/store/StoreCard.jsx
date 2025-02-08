import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import AddCard1 from '../componets/AddCard1';
import Swal from 'sweetalert2';
const StoreCard = ({img , name , price , id}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const visibleRef = React.useRef(null);
  const targetPosition = React.useRef({ x: 0, y: 0 });

const handleAddToCart = (name) => {
  Swal.fire({
    title: "Added to Cart!",
    text: `${name} has been added to your cart.`,
    icon: "success",
    showConfirmButton: false,
    timer: 1500,
  });
};


  //data send to backend for card add in cart
  const handleCart = async ()=>{
    try {
    const responce  = await  fetch('http://localhost:3000/api/cart',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ normalIMG : img , name , price, id }),
      credentials: 'include',
    })
    const data = await responce.json();
   
    console.log(data);
    if(responce.ok){
      handleAddToCart(name)
      console.log('card added to cart')
    }
} catch (error) {
  console.log(error.message);
}
}
  const handleMouseMove = (e) => {
    targetPosition.current = { x: e.pageX, y: e.pageY };
    setTimeout(() => {
      setPosition(targetPosition.current);
    }, 100);
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
    });
  }, [visible]);
  useEffect(() => {
    gsap.to(visibleRef.current, {
      left: `${position.x - 20}px`,
      top: `${position.y -90}px`,
      ease: 'power2.out',
      duration: 1,
    });
  }, [position]);
  return (
    <div className="z-50" onMouseMove={handleMouseMove}>
      <div
        ref={visibleRef}
        className="w-44 h-44 bg-white shadow-2xl shadow-zinc-300 opacity-70 absolute rounded-full"
      ></div>
      <div className="flex ml-4">
        <div className="h-[850px] justify-center flex flex-col items-center">
          <img
            src={img}
            alt="Store Item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <div className='z-[101] absolute mt-[650px] ml-[500px]  '
          onClick={handleCart}
          >
          <AddCard1 />
          </div>
          <h1 className="mt-5 text-sm">{name}</h1>
          <h1 className="mt-1 text-sm mb-5">${price}</h1>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
