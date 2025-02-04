import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import AddCard from "../componets/AddCard"; // Import AddCard component

const BlackScreen = () => {
    const [overlayVisible, setOverlayVisible] = useState(true);
    const overlayRef = useRef(null);
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice , setTotalPrice] = useState(0) 

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
            setCartItems(data?.cart_items?.filter(item => Object.keys(item).length > 0) || []); // Ensure valid data

            console.log("Cart Items:", data.cart_items);

        } catch (error) {
            console.log("Fetch Error:", error);
        }
    };

    useEffect(() => {
        gsap.fromTo(overlayRef.current, { y: "-100%" }, { y: "0%", duration: 1, ease: "power2.out" });
        handleCart();
    }, []);

    // Handle click to hide overlay
    const handleOverlayClick = () => {
        gsap.to(overlayRef.current, { y: "-100%", duration: 1, ease: "power2.in", onComplete: () => setOverlayVisible(false) });
        setTimeout(() => {
            navigate('/profile');
        }, 990);
    };

//    {
//     cartItems.map((item)=>{
//         setTotalPrice(prevTotal => prevTotal + item.price )
//     })
//    }

    return (
        <div className="relative w-full h-screen">

            {overlayVisible && (
                <div
                    ref={overlayRef}
                    className="fixed top-0 left-0 w-full h-full bg-black z-50 flex flex-col justify-center items-center text-white text-2xl font-bold cursor-pointer"
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
                    <div className="flex flex-wrap gap-6 justify-center items-center mt-10">
                        {cartItems.length > 0 ? (
                            cartItems.map((item, index) => (
                                <div key={index} className="first:ml-20 last:mr-20">
                                    <div className="h-[500px] w-80">

                                        <div className="h-90 w-80 bg-container">
                                            <img className="h-full w-full object-cover" src={item.normalIMG} alt={item.name} />
                                        </div>


                                        
                                        <div className="flex flex-col mt-3 text-center">
                                            <h1 className="text-sm">{item.name}</h1>
                                            <h1 className="text-sm">{item.price}</h1>
                                          
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No items in cart.</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlackScreen;
