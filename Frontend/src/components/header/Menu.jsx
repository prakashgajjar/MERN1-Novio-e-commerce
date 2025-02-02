import React, { useContext, useEffect, useRef } from "react";
import ThemeContext from "../../../ContextProvider";
import { NavLink } from "react-router-dom";
import gsap from "gsap";

const Menu = () => {
    const { show ,setShow } = useContext(ThemeContext);
    const menuRef = useRef(null);



    useEffect(() => {
        if (menuRef.current) {
            if (show) {
                gsap.to(menuRef.current, {
                    y: "-100%",
                    duration: 0.8,
                    ease: "power2.out",
                });
            } else {
                gsap.to(menuRef.current, {
                    y: '0%',
                    duration: 0.8,
                    ease: "power2.in",
                });
            }
        }
    }, [show]);

    return (
        <div
            ref={menuRef}
            className=" w-full h-screen bg-black text-white flex justify-center items-center "
        >   

            <div className="absolute left-6 bottom-6 ">
                <div className="mb-10 text-sm opacity-35">
                    <h1>CONNECT WITH US</h1>
                </div>
                <nav >
                    <ul className="text-lg -space-y-1 ">
                        <li><NavLink to='/'>Facebook</NavLink></li>
                        <li><NavLink to='/'>Instagram</NavLink></li>
                        <li><NavLink to='/'>Twitter</NavLink></li>
                        <li><NavLink to='/'>LinkedIn</NavLink></li>
                        <li><NavLink to='/'>YouTube</NavLink></li>
                    


                    </ul>
                </nav>
            </div>
            <div className="flex justify-end absolute right-8 bottom-6 items-end flex-col">
                <nav>
                    <ul className="text-8xl font-bold text-right">
                        <li><NavLink to='/arrivals'>NEW ARRIVALS</NavLink></li>
                        <li><NavLink to='/womens'>WOMENS</NavLink></li>
                        <li><NavLink to='/dresses'>DRESSES</NavLink></li>
                        <li><NavLink to='/tops'>TOPS</NavLink></li>
                        <li><NavLink to='/bottoms'>BOTTOMS</NavLink></li>
                        <li><NavLink to='/shoes'>SHOES</NavLink></li>
                        <li onClick={()=>{
                                setShow(!show)
                        }}><NavLink to='/signin'>SIGN IN</NavLink></li>
                    </ul>
                </nav>
            </div>

        </div>
    );
};

export default Menu;
