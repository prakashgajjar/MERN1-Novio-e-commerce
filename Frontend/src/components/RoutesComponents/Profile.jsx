import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("myAccount");
  const [errorMessage, setErrorMessage] = useState(""); 
  const navigate = useNavigate();  

  // Improved handleProfile function
  const handleProfile = async () => {
    try {
      const response = await fetch("http://localhost:3000/profile", {
        method: "GET",
        credentials: "include", 
      });
      
      const responseData = await response.json();
      
      if (response.ok) {
        alert("You are valid!");
        console.log("Cookies should be set in the browser now.");
        navigate("/"); 
      } else {
        setErrorMessage(responseData.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  // Trigger handleProfile only once when the component is mounted
  useEffect(() => {
    handleProfile();
  }, []); // Empty dependency array to run this effect once on mount

  return (
    <div className="h-screen flex flex-col bg-white text-black">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-gray-500 to-gray-400 text-white text-center py-24 mt-20 shadow-lg relative">
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold leading-tight">Welcome, Prakash!</h1>
          <p className="text-lg mt-4 opacity-90">Card number: 3407 6931 1758 0616</p>
        </div>
      </div>

      <div className="flex ml-[400px]">
        {/* Sidebar */}
        <div className="w-64 border-r border-gray-300 p-6 fixed mt-20">
          <ul className="flex flex-col gap-4">
            <li
              className={`py-2 pl-4 cursor-pointer border-l-4 transition-all ${activeTab === "myAccount" ? "border-black" : "border-transparent text-gray-500"}`}
              onClick={() => setActiveTab("myAccount")}
            >
              My account
            </li>
            <li
              className={`py-2 pl-4 cursor-pointer border-l-4 transition-all ${activeTab === "ordersReturns" ? "border-black" : "border-transparent text-gray-500"}`}
              onClick={() => setActiveTab("ordersReturns")}
            >
              Orders & Returns
            </li>
            <li
              className={`py-2 pl-4 cursor-pointer border-l-4 transition-all ${activeTab === "favorites" ? "border-black" : "border-transparent text-gray-500"}`}
              onClick={() => setActiveTab("favorites")}
            >
              Favorites
            </li>
            <li
              className={`py-2 pl-4 cursor-pointer border-l-4 transition-all ${activeTab === "communications" ? "border-black" : "border-transparent text-gray-500"}`}
              onClick={() => setActiveTab("communications")}
            >
              Communications
            </li>
          </ul>
        </div>

        {/* Content Section */}
        <div className="p-10 flex-1 ml-96">
          {activeTab === "myAccount" ? (
            <>
              <h2 className="text-md font-semibold mb-6">Profile</h2>
              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-sm">Name</p>
                  <p className="text-md font-normal">Prakash Gajjar</p>
                </div>
                <div>
                  <p className="font-semibold text-sm">Email</p>
                  <p className="text-md font-normal">
                    prakashgajjar095@gmail.com{" "}
                    <span className="text-blue-500 cursor-pointer">Verify</span>
                  </p>
                </div>
                <button className="border border-black border-2 px-[130px] hover:bg-black hover:text-white transition duration-75 py-2 rounded-md">
                  Edit
                </button>
              </div>

              <div className="mt-10 space-y-6">
                <h2 className="text-md font-semibold">Address book</h2>
                <button className="border border-black border-2 hover:bg-black hover:text-white transition duration-75 px-[100px] py-2 rounded-md">
                  Add address
                </button>
              </div>

              <div className="mt-10 space-y-6">
                <h2 className="text-md font-semibold">Payment</h2>
                <button className="border border-black border-2 hover:bg-black hover:text-white transition duration-75 px-[96px] py-2 rounded-md">
                  Add payment
                </button>
              </div>
            </>
          ) : activeTab === "ordersReturns" ? (
            <>
              <h2 className="text-xl font-semibold">Orders & Returns</h2>
              <p className="mt-5">Manage your orders and return requests.</p>
            </>
          ) : activeTab === "favorites" ? (
            <>
              <h2 className="text-xl font-semibold">Favorites</h2>
              <p className="mt-5">Your saved favorite items will appear here.</p>
            </>
          ) : (
            <>
              <h2 className="text-xl font-semibold">Communications</h2>
              <p className="mt-5">Manage your communication preferences.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
