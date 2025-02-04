import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../../../ContextProvider";
import Menu from "../header/Menu";
import Footer from "../footer/Footer";
import { NavLink } from "react-router-dom";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("myAccount");
  const [errorMessage, setErrorMessage] = useState("");
  const [responseData, setResponseData] = useState(null);
  const navigate = useNavigate();


  const {data , setData} = useContext(ThemeContext)
  // Improved handleProfile function
  const handleProfile = async () => {
    try {
      const response = await fetch("http://localhost:3000/profile", {
        method: "GET",
        credentials: "include",
      });

      const data = await response.json();
      setData([data]);
      // console.log(data);

      if (response.ok) {
        setResponseData(data);
  
        navigate("/profile");
      } else {
        alert("Login first !");
        setErrorMessage(data.message || "Login failed. Please try again.");
        navigate("/signin");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  // console.log(responseData);




  useEffect(() => {
    handleProfile();

  }, []);

  const { show } = useContext(ThemeContext);
  const [open, setOpen] = useState(false)

  return (
    <div className={`overflow-hidden  ${show ? "h-full" : "h-screen"}`}>
        {/* <div >
                  { <Cart />}
                </div> */}
      <div className={` flex h-screen flex-col bg-white text-black  overflow-hidden`}>

        <div className="bg-gradient-to-r from-gray-500 to-gray-400 text-white text-center py-24 mt-24 shadow-lg relative">
          <div className="relative z-10">
            <h1 className="text-5xl font-extrabold leading-tight">Welcome, {responseData?.first_name || "Guest"} </h1>
            <p className="text-lg mt-4 opacity-90"></p>
          </div>
        </div>

        <div className="flex ml-[400px]">
          {/* Sidebar */}
          <div className="w-64 border-r-2 border-gray-300 p-6 fixed mt-20">

            <ul className="flex flex-col gap-4">
              <li
                className={`py-2  pl-4 cursor-pointer border-l-4 transition-all ${activeTab === "myAccount" ? "border-black" : "border-transparent text-gray-500"}`}
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
              <li
                className={`py-2 pl-4 cursor-pointer border-l-4 transition-all ${activeTab === "cart" ? "border-black" : "border-transparent text-gray-500"}`}
                onClick={() => {
                  setActiveTab("cart")
               navigate('/usercart')

                }}
              >
              Your Cart


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
                    <p className="text-md font-normal">{`${responseData?.first_name || "unknown"} ${responseData?.last_name || ""}`}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Email</p>
                    <p className="text-md font-normal">
                      {`${responseData?.email} `}
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
            ) : activeTab === "communications" ? (
              <>
                <h2 className="text-xl font-semibold">Communications</h2>
                <p className="mt-5">Manage your communication preferences.</p>
              </>
            ) : (
              <>
                <h2 className="text-xl font-semibold">Your Cart</h2>
                <p className="mt-5">we managed your Card in other route so no wory about that !</p>
              </>
            )

            }

          </div>
        </div>

      </div >
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default ProfilePage;
