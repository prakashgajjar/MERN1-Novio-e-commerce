import React from 'react'

export const CardGirl = () => {
    return (
        <>
            <div className='flex flex-col'>
                <div className='flex justify-center flex-col  h-[700px]'>
                    <div className=''>
                        <img className='w-[550px] h-[650px]' src="public\images\1.avif" alt="" srcset="" />
                    </div>
                    <div className='flex justify-center gap-6 mt-4'>
                        <h1 className='text-xl font-semibold' style={{ letterSpacing: 12 }}>DRESSES</h1>

                    </div>
                </div>
                <div className='flex justify-center mt-4'>
                    <svg width="300" height="80" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0" y1="10" x2="300" y2="10" stroke="black" stroke-width="2" />
                    </svg>

                </div>
            </div>

        </>
    )
}
