import React, { useContext, useState } from 'react';
import Navbar from '../header/Navbar';
import Menu from '../header/Menu';
import ThemeContext from '../../../ContextProvider';

const OrderStatus = () => {
  const { show,setShow } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState('signin');

  return (
    <div className={`overflow-hidden ${show ? "h-full" : "h-screen"}`}>      
<div className={`z-40 ${show ? 'hidden' : 'block'}`}>
  <Menu />
</div>
<div className="h-screen flex justify-center items-start relative z-0"> 
        {/* Sidebar */}
        <div className="fixed left-32 top-32 w-64">
          <ul className="flex flex-col gap-2">
            <li 
              className={`py-4 pl-6  hover:bg-gray-100 border-l-4 border-transparent hover:border-black text-black cursor-pointer ${activeTab === 'signin' && 'border-black'}`}
              onClick={() => setActiveTab('signin')}
            >
              Sign in
            </li>
            <li 
              className={`py-4 pl-6 hover:bg-gray-100 border-l-4 border-transparent hover:border-black text-black cursor-pointer ${activeTab === 'register' && 'border-black'}`}
              onClick={() => setActiveTab('register')}
            >
              Register
            </li>
            <li 
              className={`py-4 pl-6 hover:bg-gray-100 border-l-4 border-transparent hover:border-black text-black cursor-pointer ${activeTab === 'orderStatus' && 'border-black'}`}
              onClick={() => setActiveTab('orderStatus')}
            >
              Order Status
            </li>
            <li 
              className={`py-4 pl-6 hover:bg-gray-100 border-l-4 border-transparent hover:border-black text-black cursor-pointer ${activeTab === 'returnOrder' && 'border-black'}`}
              onClick={() => setActiveTab('returnOrder')}
            >
              Return Order
            </li>
          </ul>
        </div>

        {/* Vertical Divider */}
        <div className="absolute left-[400px] top-32 h-[1000px] w-[2px] bg-gray-300"></div>

        {/* Right Section */}
        <div className="absolute left-[500px] top-32 w-96">
          {activeTab === 'signin' ? (
            <>
              <h1 className="text-xl font-semibold">Sign in</h1>
              <form className="mt-5 flex flex-col gap-4">
                <input className="p-3 border border-gray-300 rounded" type="email" placeholder="Email address" />
                <input className="p-3 border border-gray-300 rounded" type="password" placeholder="Password" />
                <button className="bg-gray-800 text-white py-2 rounded hover:bg-gray-700">Sign In</button>
              </form>
              <p className="text-sm text-center mt-6 text-gray-600">
                Don’t have an online account?
              </p>
              <button className="w-full border border-gray-400 py-2 rounded mt-3 hover:bg-gray-100" onClick={() => setActiveTab('register')}>
                Create an account
              </button>
            </>
          ) : activeTab === 'register' ? (
            <>
              <h1 className="text-xl font-semibold">Register</h1>
              <form className="mt-5 flex flex-col gap-4">
                <input className="p-3 border border-gray-300 rounded" type="text" placeholder="First Name" />
                <input className="p-3 border border-gray-300 rounded" type="text" placeholder="Last Name" />
                <input className="p-3 border border-gray-300 rounded" type="email" placeholder="Email address" />
                <input className="p-3 border border-gray-300 rounded" type="password" placeholder="Password" />
                <input className="p-3 border border-gray-300 rounded" type="date" placeholder="Date of Birth" />
                <select className="p-3 border border-gray-300 rounded">
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <button className="bg-gray-800 text-white py-2 rounded hover:bg-gray-700">Register</button>
              </form>
              <p className="text-sm text-center mt-6 text-gray-600">
                Already have an account?
              </p>
              <button className="w-full border border-gray-400 py-2 rounded mt-3 hover:bg-gray-100" onClick={() => setActiveTab('signin')}>
                Go to Login
              </button>
            </>
          ) : activeTab === 'orderStatus' ? (
            <>
              <h1 className="text-xl font-semibold">Order Status</h1>
              <p className="mt-5">Check the status of your order below:</p>
              <form className="mt-5 flex flex-col gap-4">
                <input className="p-3 border border-gray-300 rounded" type="text" placeholder="Order ID" />
                <input className="p-3 border border-gray-300 rounded" type="text" placeholder="Email Address" />
                <button className="bg-gray-800 text-white py-2 rounded hover:bg-gray-700">Track Order</button>
              </form>
            </>
          ) : (
            <>
              <h1 className="text-xl font-semibold">Return Order</h1>
              <p className="mt-5">Initiate the return process for your order below:</p>
              <form className="mt-5 flex flex-col gap-4">
                <input className="p-3 border border-gray-300 rounded" type="text" placeholder="Order ID" />
                <textarea className="p-3 border border-gray-300 rounded" placeholder="Reason for Return"></textarea>
                <button className="bg-gray-800 text-white py-2 rounded hover:bg-gray-700">Submit Return</button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
