import { useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../../../ContextProvider";
import Navbar from "../header/Navbar";

const BlackScreen = () => {
    const [overlayVisible, setOverlayVisible] = useState(true);
    const overlayRef = useRef(null);
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const { open, setOpen } = useContext(ThemeContext)
    const handleCart = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/cartData", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });

            if (!response.ok) {
                const text = await response.text();
                throw new Error(`Error: ${response.status}, Response: ${text}`);
            }

            const data = await response.json();
            setCartItems(data?.cart_items?.filter(item => Object.keys(item).length > 0) || []);

        } catch (error) {
            console.log("Fetch Error:", error);
        }
    };

    useEffect(() => {
        gsap.fromTo(overlayRef.current, { y: "-100%" }, { y: "0%", duration: 1, ease: "power2.out" });
        handleCart();
    }, []);

    useEffect(() => {
        const newTotalPrice = cartItems.reduce((acc, item) => acc + (Number(item.price) || 0), 0);
        setTotalPrice(newTotalPrice);
    }, [cartItems]);

    const handleOverlayClick = () => {
        gsap.to(overlayRef.current, { y: "-100%", duration: 1, ease: "power2.in", onComplete: () => setOverlayVisible(false) });
        setOpen(!open)
        setTimeout(() => {
            navigate('/profile');
        }, 990);
    };

    return (
        <div className="relative w-screen h-screen">
            {overlayVisible && (
            

                <div
                    ref={overlayRef}
                    className="fixed top-0 left-0 w-full h-full bg-black z-40 flex flex-col justify-center items-center text-white text-2xl font-bold cursor-pointer"
                >

                    {/* Close button */}
                    <div className="absolute right-12 top-24" onClick={handleOverlayClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100">
                            <g fill="none" stroke="white" strokeWidth="10">
                                <line x1="10" y1="10" x2="90" y2="90" />
                                <line x1="10" y1="90" x2="90" y2="10" />
                            </g>
                        </svg>
                    </div>

                    {/* Cart Items */}
                    <div className="flex overflow-x-auto overflow-y-hidden -mt-6  hide-scrollbar w-full px-5 py-4">

                        <div className="flex flex-nowrap gap-5">
                            {cartItems.length > 0 ? (
                                cartItems.map((item, index) => (
                                    <div key={index} className="min-w-[320px] max-w-[350px] bg-gray-900 rounded-lg p-3 shadow-lg">
                                        <div className="w-full h-[350px] bg-container overflow-hidden rounded-lg">
                                            <img className="h-[280] w-full object-cover" src={item.normalIMG} alt={item.name} />
                                        </div>
                                        <div className="flex flex-col mt-3 text-center">
                                            <h1 className="text-lg font-semibold">{item.name}</h1>
                                            <div className="flex justify-between px-5 mt-4">
                                                <h1 className="text-lg text-gray-300">${item.price}</h1>
                                                <div className="text-lg">
                                                    <button className="p-2 transition transform hover:rotate-[30deg]">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <line x1="18" y1="6" x2="6" y2="18" />
                                                            <line x1="6" y1="6" x2="18" y2="18" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-white text-lg">No items in cart.</p>
                            )}
                        </div>
                    </div>
                    <div>
                        <hr className="w-screen h-[1px] bg-zinc-700 border-0 shadow-lg absolute top-[120px]" />
                        <hr className="w-screen h-[1px] bg-zinc-700 border-0 shadow-lg" />
                    </div>

                    <div className=" w-screen h-32 flex justify-between  mt-5 mb-5">
                        {/* Life is too short to wear boring clothes */}
                        <div>
                            <h1 className="ml-3">HAVE A GOOD DAY</h1>
                        </div>

                        <div className="flex flex-col items-end mr-4">
                            <h1 className="text-sm ">SHOPING CALCULATED AT CHECK-OUT</h1>
                            {cartItems.length > 0 && (
                                <div className="mt-2  text-white text-sm">
                                    <p>Total Price: ₹{totalPrice}</p>
                                </div>
                            )}
                            <div>
                                <button className="border rounded-full w-[700px] mt-4 h-[70px] hover:bg-white hover:text-black transition  ">CHECKOUT</button>
                            </div>

                        </div>
                    </div>
                    <hr className="w-screen h-[1px] bg-zinc-700 border-0 shadow-lg  " />
                    <div className="absolute h-36 bottom-3 w-screen mt-5 overflow-hidden flex items-center">
                        <div className="marquee">
                            <h1 className="text-7xl font-extrabold text-white">
                                LIFE IS TOO SHORT TO WEAR BORING CLOTHES
                            </h1>
                        </div>
                        <div className="marquee">
                            <h1 className="text-7xl font-extrabold text-white">
                            LIFE IS TOO SHORT TO WEAR BORING CLOTHES
                            </h1>
                        </div>
                    </div>


                </div>

            )}

        </div>
    );
};

export default BlackScreen;
