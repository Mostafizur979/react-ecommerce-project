import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import defaultImg from '../assets/prod-image.jpg';
import { useState, useEffect, useRef } from 'react'
import { FaPlus, FaMinus, FaFire } from "react-icons/fa6";
import { FaRegStar, FaChevronRight } from "react-icons/fa";
import { MdOutlineDescription } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
function Products() {
    const [product, setProduct] = useState([]);
    const [qty, setQty] = useState(1);
    const location = useLocation();
    const { pid } = location.state || {};
    useEffect(() => {
        const getData = (url) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onload = () => {
                const data = JSON.parse(xhr.response);
                setProduct(data);
                console.log(data);
            };
            xhr.send();
        };
        getData('https://fakestoreapi.com/products/' + pid);
    }, [pid]);
    const imageRef = useRef(null);
    const imghandler = (e) => {
        if (imageRef.current) {
            imageRef.current.src = e.target.src;
        }
        console.log(e.target.src)
    }
    const increaseQty = () => {
        setQty(qty + 1);
    };

    const decreaseQty = () => {
       if(qty>1){
         setQty(qty - 1);
       }
    };

    const addtocartHandle = () => {
        const existingData = JSON.parse(localStorage.getItem("ecommerceCart")) || [];
        const flag = 0;
        existingData.map((product) => {
            if (product.id == pid) {
                toast("Already product added in the cart");
                flag = 1;
            }
        });
        if (flag == 0) {
            existingData.push(product);
            localStorage.setItem("ecommerceCart", JSON.stringify(existingData));
            toast("Product added to the cart");
        }
    }


    return (
        <>
            <Header />
            <div className="w-[90%] mx-auto grid gap-[20px] grid-cols-3">
                <div className="col-span-3 md:col-span-1">
                    <img ref={imageRef} src={product.image} className="mx-auto md:mx-0 h-[400px] w-[400px]" />
                </div>
                <div className="col-span-3 md:col-span-1">
                    <p className="pb-[10px] text-[20px] font-['Poppins'] font-semibold text-gray-700">{product.title}</p>
                    <p className="pb-[10px] text-[15px] font-['Poppins'] font-bold text-gray-500">$ {product.price}</p>
                    <div className="flex gap-[10px] pb-[10px]">
                        <img onClick={imghandler} src={product.image} alt={product.title} className="w-[68px] h-[68px] border border-gray-400 rounded-[5px]" />
                        <img onClick={imghandler} src={defaultImg} alt={product.title} className="w-[68px] h-[68px] border border-gray-400 rounded-[5px]" />
                    </div>
                    <h2 className="font-['Poppins'] font-semibold text-[18px]">Sizes</h2>
                    <div className="flex gap-[10px] pt-[5px]">
                        <div className="p-[5px] px-[20px] border border-gray-500 rounded-[5px] ">30</div>
                        <div className="p-[5px] px-[20px] border border-gray-500 rounded-[5px] ">31</div>
                        <div className="p-[5px] px-[20px] border border-gray-500 rounded-[5px] ">32</div>
                        <div className="p-[5px] px-[20px] border border-gray-500 rounded-[5px] ">33</div>
                        <div className="p-[5px] px-[20px] border border-gray-500 rounded-[5px] ">34</div>
                    </div>

                    <div className="flex pt-[20px] items-center ">
                        <h2 className="font-['Poppins'] font-semibold text-[18px] pr-[10px]">Quantity</h2>
                        <div className="p-[5px] w-[30px] h-[30px] bg-[#89B23F] border border-r-0 border-[#89B23F] text-[20px] text-white flex justify-center items-center cursor-pointer duration-300 hover:bg-white hover:text-[#89B23F]"
                            onClick={decreaseQty}
                        ><FaMinus size={16} className="text-white" /></div>
                        <div className="p-[5px]  w-[30px] h-[30px] text-[15px] border border-[#89B23F] bg-white  text-center">
                            {qty} </div>
                        <div className="p-[5px]  w-[30px] h-[30px] bg-[#89B23F] border border-l-0 border-[#89B23F] text-[20px] text-white flex justify-center items-center cursor-pointer duration-300 hover:bg-white hover:text-[#89B23F]"
                            onClick={increaseQty}
                        ><FaPlus size={16} /></div>
                    </div>
                    <div className="mt-[20px] border border-gray-500 rounded-[10px] p-[10px]">
                        <p className="flex"><span className="font-semibold flex items-center gap-[5px] pr-[5px]"><FaFire size={18} /> popular: </span> 120 people have BOUGHT this product. </p>
                        <p className="flex"><span className="font-semibold flex items-center gap-[5px] pr-[5px]"><FaRegStar size={18} /> Rated: </span> 90  people rated this product. </p>
                    </div>
                    <div className="grid grid-cols-2 gap-[10px] mt-[20px]">
                        <button className=" flex gap-[5px] justify-center items-center p-[10px] w-full bg-[#89B23F] border-2 border-[#89B23F] rounded-[10px] text-[16px] font-['Poppins] text-white hover:bg-white hover:text-[#89B23F]">Buy Now <FaChevronRight size={20} /></button>
                        <button onClick={addtocartHandle}
                            className=" flex gap-[5px] justify-center p-[10px] w-full border-2 border-gray-600 rounded-[10px] text-[16px] font-['Poppins'] text-gray-700 hover:bg-[#89B23F] hover:text-white hover:border-[#89B23F]">Add To Cart <IoCartOutline size={20} /></button>
                    </div>
                    <div>
                        <div className="mt-[20px] text-[18px] font-semibold flex gap-[5px] items-center"><MdOutlineDescription size={20} /><p>Description</p></div>
                        <p className="text-[14px] text-justify font-['Poppins']">
                            {product.description}
                        </p>
                    </div>
                </div>
                 <ToastContainer />
            </div>
        </>
    )
}
export default Products;