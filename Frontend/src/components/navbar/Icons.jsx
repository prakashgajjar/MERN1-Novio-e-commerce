import React, { useContext, useRef, useEffect } from 'react';
import ThemeContext from '../../../ContextProvider';
import gsap from 'gsap';

const Icons = () => {
    const { show, setShow } = useContext(ThemeContext);
    const iconRef = useRef(null);

    const handleToggle = () => {
        setShow(!show);
    };
    const changeShow = () => {
        setShow(true);
      }

    // Animate SVG to cross smoothly
    useEffect(() => {
        if (iconRef.current) {
            const tl = gsap.timeline();
            if (!show) {
               
                tl.to(iconRef.current.querySelector('.line1'), {
                    rotation: 45,
                    y: 6,
                    duration: 0.3,
                    ease: 'power2.out',
                })
                .to(iconRef.current.querySelector('.line2'), {
                    rotation: -45,
                    y: -6,
                    duration: 0.3,
                    ease: 'power2.out',
                    delay: -0.3,
                });
            } else {
                // Reset to hamburger (close)
                tl.to(iconRef.current.querySelector('.line1'), {
                    rotation: 0,
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out',
                })
                .to(iconRef.current.querySelector('.line2'), {
                    rotation: 0,
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out',
                    delay: -0.3,
                });
            }
        }
    }, [show]);

    return (
        <div className={`${show ? "" : "mr-[33px]"} flex gap-14 text-sm font-medium rounded-2xl bg-white w-36 justify-center items-center py-1 ml-14 mr-4`}>
            <ul className='flex gap-20'>
                <li>
                    <svg
                        onClick={handleToggle}
                        ref={iconRef}
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                        <path className="line1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14" />
                        <path className="line2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 16h14" />
                    </svg>
                </li>
                <li onClick={changeShow}>
                    <img className="w-5 h-5" src="/icons/shopping-cart.png" alt="Shopping Cart Icon" />
                </li>
            </ul>
        </div>
    );
};

export default Icons;
