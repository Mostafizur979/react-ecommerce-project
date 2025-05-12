import { Outlet, Link } from "react-router-dom";
import logo from '../assets/green_update_logo.png';
import cart from '../assets/shopping-cart.png';
import user from '../assets/user.png';
import SubHearder from "./SubHeader";
import { useState, useEffect, useRef } from 'react'
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

function Header() {
  const [cartLen, setCartLen] = useState();
  const [product, setProduct] = useState([]);
  const existingData = JSON.parse(localStorage.getItem("ecommerceCart")) || [];
  useEffect(() => {
    setCartLen(existingData.length);
  }, [existingData]);

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


  // Inside your component
  const scrollRef = useRef(null);
  const searchRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollLeft += direction === 'right' ? scrollAmount : -scrollAmount;
    }
  };

  const searchandler = () => {
    if (searchRef.current) {
      searchRef.current.style.display = "block";
    }
    else {
      searchRef.current.style.display = "none";
    }
  }
  const closeSearch = () => {
    if (searchRef.current) {
      searchRef.current.style.display = "none";
    }
  }

  function DisplaySearchProduct({ searchTerm, productsList }) {
    const filteredProducts = productsList.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="w-full h-[250px] p-[10px] overflow-scroll">
        {filteredProducts.map((prod, index) => (
          <Link
            key={index}
            to={`/products/${prod.id}`}
            state={{ pid:prod.id }}
            className="w-full text-[14px] p-[5px] grid grid-cols-8 gap-[10px] items-center border border-[#E6ECF2]">
            <img className="row-span-2 h-[65px] w-[65px]" src={prod.image} alt={prod.title} />
            <div className="col-span-7">
              <p>{prod.title}</p>
              <p>$ {prod.price}</p>
            </div>
          </Link>
        ))}
      </div>
    );
  }

  const [searchData, setSearchData] = useState('');

  const handleChange = (event) => {
    setSearchData(event.target.value);
  };

  return (
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
            <div className="w-full">
              <input
                type="text"
                name="searchData"
                placeholder="Search in Green Tech"
                autoComplete="off"
                onClick={searchandler}
                onChange={handleChange}
                className="p-3 pr-24 w-full text-black font-['Poppins'] bg-[#E6ECF2] border-0 outline-0 rounded-[10px]"
              />
              <button className="absolute top-0 right-0 h-full px-4 bg-black rounded-r-[10px] font-['Poppins'] text-white text-sm">
                Search
              </button>
            </div>
          </div>

          {/* Icons */}
          <div className="order-2 justify-end sm:order-3 md:order-3 md:col-span-2 flex gap-5">
            <Link to="/cart-list" className="hover:text-gray-200 transition-colors relative">
              <img src={cart} alt="cart" className="h-6 w-6" /> <div className="absolute flex justify-center items-center top-[-10px] right-[-10px] rounded-[50%] bg-[#89B23F] text-white h-[20px] w-[20px]">{cartLen}</div>
            </Link>
            <button className="flex items-center gap-1 font-['Poppins'] text-sm">
              <img src={user} alt="user" className="h-6 w-6" />
              <span>Login</span>
            </button>
          </div>

        </div>
      </div>
      <SubHearder />
      <div ref={searchRef} style={{ display: "none" }} className="w-[90%] left-[5%] top-[135px] md:w-[70%] md:left-[15%] absolute md:top-[70px]  z-[100] h-[400px] border border-white bg-white shadow-2xl rounded-[10px]">
        <div className="w-full grid grid-cols-2 items-center">
          <h1 className="text-[18px] font-medium font-['Poppins'] p-[10px]">Trending Products</h1>
          <div className="flex justify-end px-[10px]"><MdCancel size={30} className="text-red-500" onClick={closeSearch} /></div>
        </div>
        <div ref={scrollRef} className="flex overflow-hidden px-[10px] gap-[10px] scroll-smooth">
          {product.slice(10).map((prod, index) => (
            <Link
              key={index}
              to={`/products/${prod.id}`}
              state={{ pid:prod.id }}
              className="min-w-[200px] rounded-[10px] text-[13px] p-[5px] grid grid-cols-3 gap-[10px] items-center border border-[#E6ECF2]"
            >
              <img className="row-span-2 h-[45px] w-[45px]" src={prod.image} alt={prod.title} />
              <div className="col-span-2">
                <p>{prod.title.length > 15 ? prod.title.slice(0, 15) + '...' : prod.title}</p>
                <p>$ {prod.price}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="w-full grid grid-cols-2 absolute top-[70px] px-[10px] z-[110]">
          <button onClick={() => handleScroll('left')}>
            <FaArrowCircleLeft className="text-green-500" size={24} />
          </button>
          <div className="flex justify-end">
            <button onClick={() => handleScroll('right')}>
              <FaArrowCircleRight className="text-green-500" size={24} />
            </button>
          </div>
        </div>
        
        <DisplaySearchProduct searchTerm={searchData} productsList={product}/>

      </div>

      <Outlet />
    </>
  )
}
export default Header;