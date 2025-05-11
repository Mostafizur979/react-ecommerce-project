import { useState, useEffect } from 'react'
import ProductsCard from '../components/ProductsCard';
import Header from '../components/Header';
import Banner from '../components/Banner';
function ProductList() {
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
      <br/>
      <h1 className='text-[20px]  font-["Poppins"] font-semibold w-[90%] mx-auto'>Products</h1>
      <div className='max-w-[90%] grid grid-cols-2  md:grid-cols-5 xxl:grid-cols-6 gap-4 mx-auto '>
        {product.map((product, index) => (
          <ProductsCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </>
  );
}

export default ProductList;
