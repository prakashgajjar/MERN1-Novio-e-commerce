import React, { useState, useContext } from 'react'
import AddCard from './AddCard';
import Swal from 'sweetalert2';
const BgChangeCard = ({ normalIMG, hoverIMG, name, price, id }) => {
  const normalImage = normalIMG
  const hoverImage = hoverIMG
  const [bgUrl, setBgUrl] = useState(normalImage);

  const handleAddToCart = (name) => {
    Swal.fire({
      title: "Added to Cart!",
      text: `${name} has been added to your cart.`,
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const handleCart = async () => {
    try {
      const responce = await fetch('http://localhost:3000/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ normalIMG, name, price, id }),
        credentials: 'include',
      })
      const data = await responce.json();
      console.log(data);
      if (responce.ok) {
        handleAddToCart(name)
        console.log('card added to cart')
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  return (

    <div className='first:ml-20 last:mr-20 '>
      <div className='h-[500px] w-80'>
        <div className='h-90 w-80 bg-conteiner'>
          <img className=''
            src={bgUrl}
            onMouseOver={() => setBgUrl(hoverImage)}
            onMouseLeave={() => setBgUrl(normalImage)}
            alt="" />

        </div>
        <div className='-mt-8 ml-64  relative'
          onClick={handleCart}
        >
          <AddCard />
        </div>
        <div className='flex flex-col mt-3'>
          <h1 className='text-sm'>{name}</h1>
          <h1 className=' text-sm'>{price}</h1>
        </div>
      </div>
    </div>

  )
}

export default BgChangeCard