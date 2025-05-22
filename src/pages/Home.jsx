import { useState, useEffect } from 'react'
import ProductsCard from '../components/ProductsCard';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/footer';
function Home() {
  const [product, setProduct] = useState([]);

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

  return (
    <>
      <Header />
      <Banner />
      <br/>
      <h1 className='text-[20px]  font-["Poppins"] font-semibold w-[90%] mx-auto'>Just For You</h1>
      <div className='max-w-[90%] grid grid-cols-2  md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-6 mt-2 mx-auto '>
        {product.slice(10).map((product, index) => (
          <ProductsCard key={product.id} product={product} index={index} />
        ))}
      </div><br/>
      <Footer/> <br/>
    </>
  );
}

export default Home;
