import Header from '../components/Header';
import Footer from '../components/footer';
import { Outlet, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function Checkout() {
    const location = useLocation();
    const { products, qtyObj, subtotal, items } = location.state || {};
    const [inputs, setInputs] = useState({});
    const [flag, setFlag] = useState(true);
    const billing = useRef(null);
    const chooseCheckout = useRef(null);
    const navigate = useNavigate();
    const handleCheckout = () => {
        if (chooseCheckout.current) {
            chooseCheckout.current.style.display = "none";
        }
        if (billing.current) {
            billing.current.style.display = "block";
        }
    }
    const handleBackChoose = () => {
        if (chooseCheckout.current) {
            chooseCheckout.current.style.display = "block";
        }
        if (billing.current) {
            billing.current.style.display = "none";
        }
    }


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        if (inputs.username.length < 3) {
            setFlag(false);
        }
        else if (inputs.mobile.length != 11 || inputs.mobile.slice(0, 2) !== '01') {
            setFlag(false);
        }
        else if (inputs.delivery.length < 5) {
            setFlag(false);
        }
        else if (inputs.upazila.length < 2) {
            setFlag(false);
        }
        else if (inputs.district.length < 2) {
            setFlag(false);
        }
        else if (inputs.othersInfo.length < 2) {
            setFlag(false);
        }
        else {
            console.log("Inputs: " + inputs.username + inputs.othersInfo);
            setFlag(true);
            alert("order Submitted")
            navigate('/confirmation', {
                state: {
                    billingInfo: inputs,
                    products: products,
                    qtyObj: qtyObj,
                    subtotal: subtotal,
                    items: items
                }
            });

        }

    };
    const notify = () => toast("processing Your Order..");

    return (
        <>
            <Header />
            <div className='w-[90%] mx-auto grid  md:grid-cols-2'>
                <h1 className='col-span-2 text-semibold font-["Poppins"] text-center text-[20px] text-gray-900 border-b-[2px] border-gray-300 py-[10px]'>Order Summary</h1>
                <div className='col-span-2  px-[40px] my-[20px] border-0 md:col-span-1 md:border-r-[1px] border-gray-300'>
                    <h2 className='font-["Poppins"] text-[18px] text-gray-900 border-b-[2px] border-gray-300 py-[10px] px-[10px]'>Finalized Items</h2>
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
                    </div>

                </div>
                <div className='p-[20px] col-span-2 md:col-span-1'>
                    <div ref={chooseCheckout} >
                        <h1 className='text-[20px] text-gray-800 font-["Poppins"] font-semibold'>Choose How you Would Like To Checkout</h1>
                        <h3 className='text-[16px] font-["Poppins"] font-semibold pt-[20px]'>Sign in for a faster checkout.</h3>
                        <h3 className='text-[16px] font-["Poppins"] '>Please choose an option below to place order to complete your purchase!</h3>
                        <button className='w-full my-[20px] bg-black border border-black rounded-[10px] text-[17px] p-[10px] text-white duration-300 hover:bg-white hover:text-gray-800'>Signin</button>
                        <div className='w-full my-[10px] relative'>
                            <p className='w-[80%] mx-auto h-[2px] bg-gray-600'></p>
                            <p className='w-[40px] bg-white inline text-center absolute top-[-12px] left-[47%]'>Or</p>
                        </div>
                        <button onClick={handleCheckout} className='w-full my-[20px] bg-black border border-black rounded-[10px] text-[17px] p-[10px] text-white duration-300 hover:bg-white hover:text-gray-800'>Guest Checkout</button>
                    </div>
                    <div ref={billing} className='py-[20px] hidden'>
                        <h1 className='text-[20px] text-gray-800 font-["Poppins"] font-semibold pb-[20px]'>Billing Details</h1>

                        <form onSubmit={handleSubmit} className=" max-w-[100%] grid sm:grid-cols-1 lg:grid-cols-2 gap-[20px]">
                            <div className='col-span-2 md:col-span-1'>
                                <p className="text-[18px]">Your Name</p>
                                <input
                                    type="text"
                                    name="username"
                                    value={inputs.username || ""}
                                    onChange={handleChange}
                                    className="w-[100%] p-[8px] outline-0 border-[1px] border-gray-500 rounded-[5px]"
                                    required
                                />
                                {
                                    inputs.username && inputs.username.length < 3 && (
                                        <span className="text-red-500">Name should be greater than 3 letters</span>
                                    )
                                }
                            </div>
                            <div className='col-span-2 md:col-span-1'>
                                <p className="text-[18px]">Mobile</p>
                                <input
                                    type="number"
                                    name="mobile"
                                    value={inputs.mobile || ""}
                                    onChange={handleChange}
                                    className="w-[100%] p-[8px] outline-0 border-[1px] border-gray-500 rounded-[5px]"
                                    required
                                />
                                {
                                    inputs.mobile &&
                                    (inputs.mobile.length !== 11 || inputs.mobile.slice(0, 2) !== '01') && (
                                        <span className="text-red-500">Mobile number should be 11 digits and start with '01'</span>
                                    )
                                }

                            </div>
                            <div className='col-span-2'>
                                <p className="text-[18px]">Delivery Address</p>
                                <input
                                    type="text"
                                    name="delivery"
                                    value={inputs.delivery || ""}
                                    onChange={handleChange}
                                    className="w-[100%] p-[8px] outline-0 border-[1px] border-gray-500 rounded-[5px]"
                                    required
                                />
                                {
                                    inputs.delivery && inputs.delivery.length < 5 && (
                                        <span className="text-red-500">Please Provive Valid Delivery Address</span>
                                    )
                                }

                            </div>
                            <div className='col-span-2 md:col-span-1'>
                                <p className="text-[18px]">Upazila</p>
                                <input
                                    type="text"
                                    name="upazila"
                                    value={inputs.upazila || ""}
                                    onChange={handleChange}
                                    className="w-[100%] p-[8px] outline-0 border-[1px] border-gray-500  rounded-[5px]"
                                    required
                                />
                                {
                                    inputs.upazila && inputs.upazila.length < 2 && (
                                        <span className="text-red-500">Please Provive Valid Upazila Name</span>
                                    )
                                }
                            </div>
                            <div className='col-span-2 md:col-span-1'>
                                <p className="text-[18px]">District</p>
                                <input
                                    type="text"
                                    name="district"
                                    value={inputs.district || ""}
                                    onChange={handleChange}
                                    className="w-[100%] p-[8px] outline-0 border-[1px] border-gray-500  rounded-[5px]"
                                    required
                                />
                                {
                                    inputs.district && inputs.district.length < 2 && (
                                        <span className="text-red-500">Please Provive Valid District Name</span>
                                    )
                                }
                            </div>

                            <div className="col-span-2" >
                                <p className="text-[18px]">Additional Note</p>
                                <textarea
                                    name="othersInfo"
                                    value={inputs.othersInfo || ""}
                                    onChange={handleChange}
                                    className="w-[100%] p-[8px] outline-0 border-[1px] border-gray-500 rounded-[5px]" required />
                                {
                                    inputs.othersInfo && inputs.othersInfo.length < 2 && (
                                        <span className="text-red-500">Please Added Some Additional Information</span>
                                    )
                                }
                            </div>

                            <button type="Submit" className=" bg-black border-[2px] text-white text-[18px] p-[10px] rounded-[10px]  duration-300 border-box hover:border-[2px]  hover:bg-white border-black  hover:text-black">Submit</button>
                            <button onClick={handleBackChoose} className='border-[2px] text-gray-800 text-[18px] p-[10px] rounded-[10px]  duration-300 border-box hover:border-[2px]  border-black  hover:text-black'>Back</button>
                            {
                                flag === false && (
                                    <span className="text-red-500">Please fix all issues before submitting this form</span>
                                )
                            }
                            <ToastContainer />
                        </form>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Checkout;