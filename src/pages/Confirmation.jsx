import Header from '../components/Header';
import Footer from '../components/footer';
import { Outlet, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import check from '../assets/check.png';
function Confirmation() {
    const location = useLocation();
    const { billingInfo, products, qtyObj, subtotal, items } = location.state || {};

    return (
        <>
            <Header />
            <div className='w-[90%] 2xl:w-[70%] mx-auto'>
                <div className='w-full'>
                    <img src={check} className='w-[100px] h-[100px] mx-auto my-[5px]'/>
                    <p className='text-[24px] py-[5px] font-semibold font-["Poppins"] text-center' >Thank you for trusting Greentech!</p>
                    <p className='text-[20px] py-[5px]  font-["Poppins"] text-center'>We deliver within 24–48 hours inside Dhaka city and within 3–5 working days outside Dhaka.</p>
                    <p className='text-[16px] py-[5px] font-["Poppins"] text-center'>We hope you receive your product within the expected time. In case of stock unavailability, delivery might be delayed by a day or two.Please make sure to check the product in front of the delivery person at the time of receiving.</p>

                </div>
                <div className='w-full'>
                    <p className='text-[22px] py-[20px] font-semibold font-["Poppins"] text-center' >Your order has been received.</p>
                    <div className='grid grid-cols-1 lg:grid-cols-4  gap-[10px] py-[5px]'>
                        <div className='text-center text-[16px] font-["Poppins"] lg:border-r-[2px] border-gray-500'>Order Id: GT2505151089</div> 
                        <div className='text-center text-[16px] font-["Poppins"] lg:border-r-[2px] border-gray-500'>Date: May 15,2025</div> 
                        <div className='text-center text-[16px] font-["Poppins"] lg:border-r-[2px] border-gray-500'>Total: {subtotal.toFixed(3)}</div> 
                        <div className='text-center text-[16px] font-["Poppins"]'>payment Method: cash On delivery</div> 
                    </div>
                </div>
                <div className='px-[40px] my-[20px] border-0 md:col-span-1 '>
                    <h2 className='font-["Poppins"] text-[18px] text-gray-900 border-b-[2px] border-gray-300 py-[10px] px-[10px]'>Order Details</h2>
                    {products
                        .map((product, index) => (
                            <div className='grid grid-cols-6 gap-[10px]  border-b-[2px] border-gray-300 py-[20px] px-[10px]'>
                                <img src={product.image} className='h-[60px] w-[60px]' />
                                <div className='col-span-4'>
                                    <p className='font-["Poppins"] text-[16px] font-semibold text-gray-800 py-[2px]'>{product.title}</p>
                                    <p className='font-["Poppins"] text-[15px] text-gray-600 py-[2px]'>Size: 20</p>
                                    <p className='font-["Poppins"] text-[15px] text-gray-600 py-[2px]'>Qty: {qtyObj.find(q => q.id === product.id)?.qty} </p>
                                </div>
                                <div>
                                    <p className='font-["Poppins"] text-[16px] text-right font-semibold text-gray-800 py-[2px]'>$ {product.price * qtyObj.find(q => q.id === product.id)?.qty}</p>
                                </div>

                            </div>
                        ))}
                    <div className='grid grid-cols-2  py-[20px] px-[10px]'>
                        <p className='py-[5px] text-[16px] font-["Poppins"] text-gray-700'>Number of Items</p>
                        <p className='py-[5px] text-[16px] font-["Poppins"] text-right text-gray-700'>{items}</p>
                        <p className='py-[5px] text-[16px] font-["Poppins"] text-gray-700'>Subtotal</p>
                        <p className='py-[5px] text-[16px] font-["Poppins"] text-right text-gray-700'>${(subtotal + 0).toFixed(2)}</p>
                        <p className='py-[5px] text-[16px] font-["Poppins"] text-gray-700 border-b-[2px] border-gray-300'>Estimated Shipping Cost</p>
                        <p className='py-[5px] text-[16px] font-["Poppins"] text-right text-gray-700 border-b-[2px] border-gray-300'>$0</p>
                        <p className='py-[5px] text-[16px] font-semibold font-["Poppins"] text-gray-700 border-b-[2px] border-gray-300'>Total</p>
                        <p className='py-[5px] text-[16px] font-semibold font-["Poppins"] text-right text-gray-700 border-b-[2px] border-gray-300'>${(subtotal + 0).toFixed(2)}</p>
                        
                        <p className='py-[5px] text-[16px] font-["Poppins"] text-gray-700'>Delivery Address</p>
                        <p className='py-[5px] text-[16px] font-["Poppins"] text-right text-gray-700'>{billingInfo.delivery}</p>
                        <p className='py-[5px] text-[16px] font-["Poppins"] text-gray-700'>District</p>
                        <p className='py-[5px] text-[16px] font-["Poppins"] text-right text-gray-700'>{billingInfo.district}</p>
                        <p className='py-[5px] text-[16px] font-["Poppins"] text-gray-700'>Upazila</p>
                        <p className='py-[5px] text-[16px] font-["Poppins"] text-right text-gray-700'>{billingInfo.upazila}</p>               
                        <p className='py-[5px] text-[16px] font-["Poppins"] text-gray-700'>Mobile</p>
                        <p className='py-[5px] text-[16px] font-["Poppins"] text-right text-gray-700'>{billingInfo.mobile}</p>
                    </div>
                </div>
                <div>

                </div>


            </div>
            <Footer />
        </>
    )
}
export default Confirmation;