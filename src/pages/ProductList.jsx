
import ProductsCard from '../components/ProductsCard';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/footer';
import filter from '../assets/filter.png';
import three from '../assets/dots.png';
import five from '../assets/options.png';
import { PiSquaresFour } from "react-icons/pi";
import { useState, useEffect, useRef } from 'react'
function ProductList() {
  const [product, setProduct] = useState([]);
  const itemLayout = useRef(null);
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

  const filtershow = useRef(null);
  const filterdisplay = useRef(null);
  const filterhide = useRef(null);

  const filterHide = () => {
    if (filtershow.current) {
      filtershow.current.style.display = "none";
      filterhide.current.style.display = "none";
      filterdisplay.current.style.display = "flex";
      itemLayout.current.classList.add("2xl:grid-cols-6");
      itemLayout.current.classList.add("col-span-6");
    }
  }
  const filterShow = () => {
    if (filtershow.current) {
      filtershow.current.style.display = "block";
      filterhide.current.style.display = "flex";
      filterdisplay.current.style.display = "none";
      itemLayout.current.classList.remove("2xl:grid-cols-6");
      itemLayout.current.classList.add("lg:grid-cols-5");
      itemLayout.current.classList.remove("col-span-6");
    }
  }

  return (
    <>
      <Header />
      <br />

      <div className=' w-[90%] mx-auto grid 2xl:grid-cols-6'>
        <div className='hidden col-span-6 border-y-[1px] lg:grid grid-cols-7 border-gray-300'>
          <div ref={filterhide} onClick={filterHide} className='flex items-center justify-between p-[15px] border-r-[1px] border-gray-300'>
            <p className='text-[16px] font-["Poppins"]'>Hide Filter</p>
            <img src={filter} className=' h-[24px] w-[24px]' />
          </div>
          <div ref={filterdisplay} onClick={filterShow} className='hidden items-center justify-between p-[15px] border-r-[1px] border-gray-300'>
            <img src={filter} className=' h-[24px] w-[24px]' />
          </div>
          <div className='col-span-6 flex items-center justify-between p-[15px] '>
            <p className='text-[16px] font-["Poppins"]'>Products</p>
            <div className='grid grid-cols-2'>
              <div className='w-[20px] grid grid-cols-3 gap-[2px]'>
                <div className='bg-gray-500 w-[5px] h-[5px]'></div>
                <div className='bg-gray-500 w-[5px] h-[5px]'></div>
                <div className='bg-gray-500 w-[5px] h-[5px]'></div>
                <div className='bg-gray-500 w-[5px] h-[5px]'></div>
                <div className='bg-gray-500 w-[5px] h-[5px]'></div>
                <div className='bg-gray-500 w-[5px] h-[5px]'></div>
                <div className='bg-gray-500 w-[5px] h-[5px]'></div>
                <div className='bg-gray-500 w-[5px] h-[5px]'></div>
                <div className='bg-gray-500 w-[5px] h-[5px]'></div>
              </div>
              <div className='w-[33x] grid grid-cols-5 gap-[2px]'>
                <div className='bg-gray-500 w-[5px] h-[5px]'></div>
                <div className='bg-gray-500 w-[5px] h-[5px]'></div>
                <div className='bg-gray-500 w-[5px] h-[5px]'></div>
                <div className='bg-gray-500 w-[5px] h-[5px]'></div>
                <div className='bg-gray-500 w-[5px] h-[5px]'></div>
                <div className='bg-gray-500 w-[5px] h-[5px]'></div>
                <div className='bg-gray-500 w-[5px] h-[5px]'></div>
                <div className='bg-gray-500 w-[5px] h-[5px]'></div>
                <div className='bg-gray-500 w-[5px] h-[5px]'></div>
                <div className='bg-gray-500 w-[5px] h-[5px]'></div>
                <div className='bg-gray-500 w-[5px] h-[5px]'></div>
                <div className='bg-gray-500 w-[5px] h-[5px]'></div>
                <div className='bg-gray-500 w-[5px] h-[5px]'></div>
                <div className='bg-gray-500 w-[5px] h-[5px]'></div>
                <div className='bg-gray-500 w-[5px] h-[5px]'></div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-1' ref={filtershow}>

        </div>
        <div ref={itemLayout} className='max-w-[90%] col-span-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mx-auto '>
          {product.map((product, index) => (
            <ProductsCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
}

export default ProductList;
