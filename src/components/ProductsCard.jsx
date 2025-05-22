import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Outlet, Link } from "react-router-dom";
function ProductsCard({ product, index }) {
    return (
        <div key={index} className='w-full shadow-md p-[10px] rounded-[5px]'>
            <img src={product.image} alt={product.title} className='w-[180px] h-[180px] md:w-[250px] md:h-[250px] object-contain mx-auto' /><br />
            <p className='text-left text-[16px] font-semibold pb-[5px]'>
                {product.title.length > 20 ? product.title.slice(0, 20) + '...' : product.title}
            </p>
            <div className='text-left grid grid-cols-2'>
                <p><strike>${(product.price + 10).toFixed(2)}</strike></p>
                <p className='font-medium'>${product.price.toFixed(2)}</p>
            </div>
            <div className='text-left grid grid-cols-2 justify-between gap-[10px] mt-[5px]'>
                <button className='text-[12px] sm:text-[15px] md:text-[17px] bg-[#EFEFEF] p-[5px] rounded-[5px]'
                    onClick={() => {
                        const getData = (url, index) => {
                            const xhr = new XMLHttpRequest();
                            xhr.open('GET', url);
                            xhr.onload = () => {
                                const data = JSON.parse(xhr.response);
                                const existingData = JSON.parse(localStorage.getItem("ecommerceCart")) || [];
                                let flag = 0;
                                existingData.map((product) => {
                                    if (product.id == index) {
                                        toast("Already product added in the cart");
                                        flag = 1;
                                    }
                                });
                                if (flag == 0) {
                                    existingData.push(data);
                                    localStorage.setItem("ecommerceCart", JSON.stringify(existingData));
                                    toast("Product added to the cart");
                                }
                                console.log(data);

                            };
                            xhr.send();
                        };
                        getData('https://fakestoreapi.com/products/' + (product.id), (product.id));

                    }}
                >Add to Cart</button>
                <Link to={`/products/${product.id}`}
                    state={{ pid: product.id }}
                    className='text-[12px] text-center sm:text-[15px] md:text-[17px] bg-[#89B23F] p-[5px] rounded-[5px] text-white'
                >
                    Buy Now
                </Link>

            </div>
            <ToastContainer />
            <Outlet />
        </div>
    )
}

export default ProductsCard;