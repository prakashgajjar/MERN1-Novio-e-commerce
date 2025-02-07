import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Cancel = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/cart"); // Redirect to cart page after 3 seconds
        }, 3000);
    }, [navigate]);

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-red-100">
            <h1 className="text-3xl font-bold text-red-700">Payment Canceled ❌</h1>
            <p className="mt-2 text-lg">Your payment was not completed.</p>
            <p className="text-gray-600">You will be redirected shortly...</p>
        </div>
    );
};

export default Cancel;
