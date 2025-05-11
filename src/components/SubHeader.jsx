import { Outlet, Link } from "react-router-dom";
import home from '../assets/home.png';
import shop from '../assets/market.png';
import category from '../assets/category.png';

function SubHearder(){
    return(
        <>
          <div className="w-full border-b border-[#E6ECF2] bg-white mb-4">
              <div className="justify-center md:justify-start w-[90%] mx-auto py-[15px] flex gap-[20px]">
                <Link to="/" className="hover:text-gray-200 transition-colors flex gap-2 items-center">
                    <img src={home} alt="logo" className="max-h-[20px] max-w-[20px]" />
                    <p className=" text-[18px] font-['Poppins']">Home</p>
                </Link>
                <Link to="/product-list" className="hover:text-gray-200 transition-colors flex gap-2 items-center">
                    <img src={shop} alt="logo" className="max-h-[20px] max-w-[20px]" />
                    <p className=" text-[18px] font-['Poppins']">Products</p>
                </Link>
                <Link to="/categories" className="hover:text-gray-200 transition-colors flex gap-2 items-center">
                    <img src={category} alt="logo" className="max-h-[20px] max-w-[20px]" />
                    <p className="text-[18px] font-['Poppins']">categories</p>
                </Link>
              </div>
          </div>
          <Outlet/>
        </>
    )
}

export default SubHearder;