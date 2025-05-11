import banner1 from '../assets/banner-1.jpg';
import banner2 from '../assets/banner-2.jpg';
import banner3 from '../assets/banner-3.jpg';
import { Outlet, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useState, useEffect } from 'react'
import { Navigation, Autoplay } from 'swiper/modules';
function Banner() {
    const [product, setProduct] = useState([]);
    let categories = new Set();
    useEffect(() => {
        const getData = () => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://fakestoreapi.com/products');
            xhr.onload = () => {
                const data = JSON.parse(xhr.response);
                setProduct(data);
                console.log(data);
            };
            xhr.send();
        };

        getData();
    }, []);

    product.map((prod,index)=>{
       categories.add(prod.category);
    });
    const category = [];
    categories.forEach((data)=>{
       category.push(data);
    })
    return (
        <>
            <div className="w-[90%] mx-auto grid  grid-cols-3">
                <div className="col-span-3 md:col-span-2 max-h-[400px] rounded-[10px] overflow-hidden">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation
                        autoplay={{ delay: 3000 }}
                        loop
                        speed={1500}
                        className="mySwiper"
                    >
                        {[banner1, banner2, banner3].map((banner, idx) => (
                            <SwiperSlide key={idx}>
                                <img
                                    src={banner}
                                    alt={`banner-${idx}`}
                                    className="w-full h-[400px] object-cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className='col-span-3 pt-[20px] px-0 md:pt-0 md:col-span-1 md:px-[20px]'>
                    <h1 className='text-[20px] font-semibold pb-[10px] font-["Poppins"] '>Top Categories </h1>
                    <div className='grid grid-cols-2 gap-[20px]'>
                        {category.map((category,index)=>(
                            
                            <Link to="/categorized-products" className='flex justify-center items-center border border-[#E6ECF2] p-[18px] rounded-[10px]  hover:bg-[#82B333] duration-500 hover:text-white hover:shadow-2xl '>{category}</Link>
                        ))}
                    </div>
                </div>
            </div>
            <Outlet/>
        </>
    )
}
export default Banner;