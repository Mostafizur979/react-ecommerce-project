import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import cod from '../assets/cash-on-delivery.png';
import greenLogo from '../assets/green_update_logo.png';
function Footer() {
    return (
        <>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 border-t-[1px] border-b-[1px] border-gray-200">
                <div className="md:hidden lg:block"></div>
                <div className="border-r-[1px] border-gray-200 p-[20px] md:p-[40px]">
                    <img src="https://storage.apex4u.com/c37cea14-1210-4ca5-b62e-a7fee2458e13.png" className="h-[50px] w-[94px] mx-auto" />
                    <p className="w-full text-[16px] pb-[10px] text-center font-medium font-['Poppins'] text-gray-900">Fast Delivery</p>
                    <p className="w-full text-[14px] text-center font-['Poppins'] text-gray-700 ">Get fast and hassle-free delivery of your orders to your doorstep. Ensuring a seamless and hassle-free experience</p>
                </div>
                <div className="border-r-[1px] border-gray-200 p-[20px] md:p-[40px]">
                    <img src="https://storage.apex4u.com/caa1b470-6545-4ff9-bafa-f1d2db452f0d.svg" className="h-[50px] w-[50px] mx-auto" />
                    <p className="w-full text-[16px] pb-[10px] text-center font-medium font-['Poppins'] text-gray-900">Super Deals</p>
                    <p className="w-full text-[14px] text-center font-['Poppins'] text-gray-700 ">Get fast and hassle-free delivery of your orders to your doorstep. Ensuring a seamless and hassle-free experience</p>
                </div>
                <div className="border-r-[1px] border-gray-200 p-[20px] md:p-[40px]">
                    <img src={cod} className="h-[50px] w-[50px] mx-auto" />
                    <p className="w-full text-[16px] pb-[10px] text-center font-medium font-['Poppins'] text-gray-900">cash on Delivery</p>
                    <p className="w-full text-[14px] text-center font-['Poppins'] text-gray-700 ">Get fast and hassle-free delivery of your orders to your doorstep. Ensuring a seamless and hassle-free experience</p>
                </div>
                <div className="p-[20px] md:p-[40px]">
                    <div className="flex gap-[10px] justify-center pb-[15px]">
                        <a href="" target="blank"><img src="https://storage.apex4u.com/304ea012-a1d6-4e0e-a7c8-497c16d0838c.jpg" className="h-[30px[] w-[30px]" /></a>
                        <a href="" target="blank"><img src="https://storage.apex4u.com/21c4fcd8-40a4-4299-9384-417029ca6456.png" className="h-[30px[] w-[30px]" /></a>
                        <a href="" target="blank"><img src="https://storage.apex4u.com/45e37e99-4209-42aa-89ec-f571d77e850e.jpg" className="h-[30px[] w-[30px]" /></a>
                        <a href="" target="blank"><img src="https://storage.apex4u.com/20d2a998-6052-4e02-b198-5ad0c3fe26bb.jpg" className="h-[30px[] w-[30px]" /></a>
                        <div />
                    </div>
                    <p className="w-full text-[16px] pb-[10px] text-center font-medium font-['Poppins'] text-gray-900">Stay Connected </p>
                    <p className="w-full text-[14px] text-center font-['Poppins'] text-gray-700 ">Get fast and hassle-free delivery of your orders to your doorstep. Ensuring a seamless and hassle-free experience</p>
                </div>
            </div>

            <div className="w-full bg-black text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
                <div className="md:hidden lg:block"></div>
                <div className="p-[20px] md:p-[40px]">
                    <img src={greenLogo} className="h-[60px] w-[180px] ml-[-20px]" />
                    <p className="w-full text-[14px] font-['Poppins'] ">Greentech Agro is one of the largest among the Agro Products Manufacturer and Supplies All types of plant according to the Customers Demand</p>
                </div>
                <div className="p-[20px] md:p-[40px]">

                    <p className="w-full text-[18px] pb-[10px] font-medium font-['Poppins'] text-white">Contact Us</p>
                    <p className="w-full text-[14px font-['Poppins'] ">Baneshwar bazar (Infront of Pubali Bank),</p>
                    <p className="w-full text-[14px] font-['Poppins']">Puthia,Rajshahi</p>
                    <p className="w-full text-[13px] font-['Poppins']">Email: greentechagronursery@gmail.com</p>
                </div>
                <div className="p-[20px] md:p-[40px]">
                    <p className="w-full text-[18px] pb-[10px] font-medium font-['Poppins'] text-white">Let Us Help You</p>
                    <p className="w-full text-[14px] font-['Poppins'] text-white duration-300 cursor-pointer hover:translate-x-[10px] ">Your Account</p>
                    <p className="w-full text-[14px] font-['Poppins'] text-white duration-300 cursor-pointer hover:translate-x-[10px] ">Your Order</p>
                    <p className="w-full text-[14px] font-['Poppins'] text-white duration-300 cursor-pointer hover:translate-x-[10px] ">Return & Refund Policy</p>
                </div>
                <div className="p-[20px] md:p-[40px]">
                    <p className="w-full text-[18px] pb-[10px] font-medium font-['Poppins'] text-white">About Green Tech</p>
                    <p className="w-full text-[14px] font-['Poppins'] text-white duration-300 cursor-pointer  hover:translate-x-[10px] ">About Us</p>
                    <p className="w-full text-[14px] font-['Poppins'] text-white duration-300 cursor-pointer hover:translate-x-[10px] ">Blog</p>
                    <p className="w-full text-[14px] font-['Poppins'] text-white duration-300 cursor-pointer hover:translate-x-[10px] ">Sustainablity</p>
                </div>
            </div>
        </>
    )
}

export default Footer;