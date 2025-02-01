import React, { useState } from 'react'
import AddCard from './AddCard';

const BgChangeCard = ({normalIMG , hoverIMG}) => {
  const normalImage = normalIMG
  const hoverImage = hoverIMG

  const[bgUrl , setBgUrl] = useState(normalImage);
  return (
    <div className='first:ml-20 last:mr-20 '>
        <div className='h-[500px] w-80'>
            <div className='h-90 w-80 bg-conteiner'>
                <img className=''
                 src={bgUrl} 
                 onMouseOver={()=>setBgUrl(hoverImage)}
                 onMouseLeave={()=>setBgUrl(normalImage)}
                 alt="" />
               
            </div>
            <div className='-mt-8 ml-64  relative'>
                 <AddCard/>
                 </div>
            <div className='flex flex-col mt-3'>
                <h1 className='text-sm'>Dani Bnagdej Dress</h1>
                <h1 className=' text-sm'>$260.00</h1>
            </div>
        </div>
    </div>
  )
}

export default BgChangeCard