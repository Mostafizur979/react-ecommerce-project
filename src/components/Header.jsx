import { Outlet, Link } from "react-router-dom";
import logo from '../assets/green_update_logo.png';
import cart from '../assets/shopping-cart.png';
import user from '../assets/user.png';
import SubHearder from "./SubHeader";
import { useState, useEffect } from 'react'
function Header(){
  const [cartLen,setCartLen] = useState();
  const existingData = JSON.parse(localStorage.getItem("ecommerceCart")) || [];
  useEffect(() => {
    setCartLen(existingData.length);
  }, [existingData]);
  
    return(
        <>
        <div className="w-full border-b border-[#E6ECF2] bg-white">
          <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-9 gap-4 py-4 items-center">
            {/* Logo */}
            <div className="order-1 ml-[-18px] justify-start col-end-1 md:order-1 md:col-span-2 flex">
              <Link to="/" className="hover:text-gray-200 transition-colors">
                <img src={logo} alt="logo" className="max-h-[48px] w-auto" />
              </Link>
            </div>
      
            {/* Search */}
            <div className="order-3 col-span-2 sm:order-2 md:order-2 md:col-span-5 w-full relative">
              <input
                type="text"
                name="searchData"
                placeholder="Search in Green Tech"
                className="p-3 pr-24 w-full text-black font-['Poppins'] bg-[#E6ECF2] border-0 outline-0 rounded-[10px]"
              />
              <button className="absolute top-0 right-0 h-full px-4 bg-black rounded-r-[10px] font-['Poppins'] text-white text-sm">
                Search
              </button>
            </div>
      
            {/* Icons */}
            <div className="order-2 justify-end sm:order-3 md:order-3 md:col-span-2 flex gap-5">
              <Link to="/cart-list" className="hover:text-gray-200 transition-colors relative">
                <img src={cart} alt="cart" className="h-6 w-6" /> <div className="absolute flex justify-center items-center top-[-10px] right-[-10px] rounded-[50%] bg-[#B24BF7] text-white h-[20px] w-[20px]">{cartLen}</div>
              </Link>
              <button className="flex items-center gap-1 font-['Poppins'] text-sm">
                <img src={user} alt="user" className="h-6 w-6" />
                <span>Login</span>
              </button>
            </div>
      
          </div>
        </div>
        <SubHearder/>
        <Outlet />
      </>
    )
}
export default Header;