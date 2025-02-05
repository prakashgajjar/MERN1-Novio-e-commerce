import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Text = () => {
    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from('.MAKE', {
            y: 200,
            delay: .6,
            opacity: 0,
            ease: "power4.inout",
            duration: .3,
        })
        tl.from('.YOUR', {
            y: 200,
            opacity: 0,
            ease: "power4.inout",
            duration: .3,
        })
        tl.from('.MARK', {
            y: 200,
            opacity: 0,
            ease: "power4.inout",
            duration: .3,
        })
        tl.from('.para', {
            y: 200,
            opacity: 0,
            ease: "power4.inout",
            duration: .3,
        })

    })
    return (
   <div className='flex mt-44 justify-between '>
     <div className='ml-4'>
        <div className=''>
        <h1 className='MAKE' style={{fontWeight: 800 , fontSize : 220 , letterSpacing:-10}}>MAKE</h1>
        </div>
        <div className='flex gap-20 -mt-[160px]'>
        <h1 className='YOUR ml-3' style={{fontWeight: 800 , fontSize : 220 , letterSpacing:-10}}>YOUR</h1>
        <h1 className='MARK' style={{fontWeight: 800 , fontSize : 220 , letterSpacing:-10}}>MARK</h1>
        </div>
    </div>
    <div className='para w-[450px] mt-20 mr-5'>
        <h1>At Novio, we create more than just fashion – we craft high-quality, sustainable, and luxurious clothing that feels like home. Each piece is thoughtfully designed to bring comfort and style to your everyday life. The best part? With every purchase, you're not just investing in your wardrobe – you're helping create a brighter future for someone in need</h1>
    </div>
   </div>
    )
}

export default Text