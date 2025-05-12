import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import CartList from './pages/CartList.jsx'
import ProductList from './pages/ProductList.jsx'
import Products from './pages/products.jsx'
import CategorizedProductList from './pages/CategorizedProducts.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <Routes>
     <Route index element={<Home />} />
     <Route path="cart-list" element={<CartList/>} />
     <Route path="product-list" element={<ProductList/>} />
     <Route path="products/:id" element={<Products/>} />
     <Route path="category" element={<CategorizedProductList/>} />
   </Routes>
   </BrowserRouter>
  </StrictMode>,
)
