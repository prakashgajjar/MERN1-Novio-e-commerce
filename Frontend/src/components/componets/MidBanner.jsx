import React from 'react';
import SmallText from './SmallText';
const MidBanner = () => {
    return (
        <div>
            <div className='relative flex justify-center mt-4 w-screen'>
                <img src="/icons/banner1.avif" alt="Banner" className="w-full h-full object-cover" />
                <h2 className='absolute top-[70px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-7xl '>
                    End Of Season Sale
                </h2>
                <h2 className='absolute mt-5 top-[140px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl ' style={{ letterSpacing: 12 }}>
                    SHOP NOW
                </h2>
                <svg className='absolute top-[190px]' width="300" height="80" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="10" x2="300" y2="10" stroke="white" stroke-width="2" />
                </svg>
            </div>
        </div>
    );
};

export default MidBanner;
