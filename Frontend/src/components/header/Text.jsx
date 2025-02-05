import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Text = () => {
  useGSAP(()=>{
    const tl = gsap.timeline();
    tl.from('.fashion',{
      y:200,
      delay:.6,
      opacity:0,
      ease :"power4.inout" ,
      duration:.3,
    })
    tl.from('.is',{
      y:200,
      opacity:0,
      ease :"power4.inout" ,
      duration:.3,
    })
    tl.from('.freedom',{
      y:200,
      opacity:0,
      ease :"power4.inout" ,
      duration:.3,
    })

})
  return (
    <div>
        <div className=''>
        <h1 className='fashion' style={{fontWeight: 800 , fontSize : 350 , letterSpacing:-20}}>FASHION</h1>
        </div>
        <div className='flex gap-20 -mt-52'>
        <h1 className='is' style={{fontWeight: 800 , fontSize : 338 , letterSpacing:-35}}>IS</h1>
        <h1 className='freedom' style={{fontWeight: 800 , fontSize : 338 , letterSpacing:-20}}>FREEDOM</h1>
        </div>
    </div>
  )
}

export default Text