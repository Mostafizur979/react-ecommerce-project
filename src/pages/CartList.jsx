import Header from "../components/Header";
import Footer from "../components/footer";
import { useState, useEffect } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2'
import { Outlet, Link } from "react-router-dom";
function CartList() {
    const [product, setProduct] = useState([]);
    const [qtyArr, setQtyArr] = useState([]);
    const [selected, setSelected] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState([]);
    const [selectedProductsLen, setSelectedProductsLen] = useState(0);
    const [subTotal, setSubTotal] = useState(0);
    const [qtyObj, setQtyObj] = useState([]);
    useEffect(() => {
        const existingData = JSON.parse(localStorage.getItem("ecommerceCart")) || [];
        setProduct(existingData);
        setQtyArr(existingData.map(() => 1));
        const initialQtyObj = existingData.map(item => ({
            id: item.id,
            qty: 1
        }));
        setQtyObj(initialQtyObj);
    }, []);

    useEffect(() => {
        const selectedProducts = product.filter((_, index) => selected.includes(index));
        const subtotal = selectedProducts.reduce((sum, p, i) => sum + p.price * qtyArr[selected[i]], 0);
        const selectedLen = selected.reduce((sum, index) => sum + qtyArr[index], 0);
        setSelectedProduct(selectedProducts);
        setSelectedProductsLen(selectedLen);
        setSubTotal(subtotal);
        console.log(qtyArr);
        console.log(selectedProduct);
    }, [selected, qtyArr]);

    const increaseQty = (index, id) => {
        setQtyArr(prevQty => {
            const newQty = [...prevQty];
            newQty[index] += 1;
            return newQty;
        });
        setQtyObj(prevQtyObj =>
            prevQtyObj.map(item =>
                item.id === id ? { ...item, qty: item.qty + 1 } : item
            )
        );

    };

    const decreaseQty = (index, id) => {
        setQtyArr(prevQty => {
            const newQty = [...prevQty];
            if (newQty[index] > 1) newQty[index] -= 1;
            return newQty;
        });
        setQtyObj(prevQtyObj =>
            prevQtyObj.map(item =>
                item.id === id ? { ...item, qty: item.qty- 1 } : item
            )
        );
    };

    const handleCheckboxChange = (index) => {
        setSelected(prev => {
            if (prev.includes(index)) {
                return prev.filter(i => i !== index); // uncheck
            } else {
                return [...prev, index]; // check
            }
        });

    };


    const allSelectChange = (e) => {
        if (e.target.checked) {
            const allIndexes = product.map((_, index) => index);
            setSelected(allIndexes);
        } else {
            setSelected([]);
        }
    };

    const deleteCartItems = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Product has been removed from cart.",
                    icon: "success"
                });
                let idsToRemove = selected.map(index => product[index].id);
                let updatedData = product.filter(prod => !idsToRemove.includes(prod.id))
                setProduct(updatedData);
                setQtyArr(updatedData.map(() => 1));
                setSelected([]);
                localStorage.setItem("ecommerceCart", JSON.stringify(updatedData));
            }
        });

    };

    return (
        <>
            <Header />
            <div className="w-[90%] mx-auto grid grid-cols-3 bg-[#FCFCFC] gap-[10px]">
                <div className="col-span-3 md:col-span-2">
                    <div className="w-full grid grid-cols-2 md:grid-cols-2 gap-[10px] bg-white shadow-xl mb-[10px] items-center p-[10px] rounded-[10px]">
                        <div className="flex items-center text-[17px] gap-[10px]">
                            <input
                                type="checkbox"
                                className="w-4 h-4 accent-[#89B23F]  cursor-pointer"
                                checked={selected.length === product.length && product.length > 0}
                                onChange={allSelectChange}
                            />
                            <p>SELECT ALL ({product.length} ITEM(S))</p>
                        </div>
                        <div className=" flex justify-end text-[17px]">
                            <button className="flex items-center gap-1 hover:text-red-500" onClick={deleteCartItems}><RiDeleteBin6Line size={17} />DELETE</button>
                        </div>
                    </div>
                    {product.map((prod, index) => (
                        <div key={index} className="w-full grid grid-cols-7 md:grid-cols-6 gap-[10px] bg-white shadow-xl mb-[10px] items-center p-[10px] rounded-[10px]">
                            <div className="col-span-2 md:col-span-1 flex items-center gap-[10px]">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 accent-[#89B23F] cursor-pointer"
                                    checked={selected.includes(index)}
                                    onChange={() => handleCheckboxChange(index)}
                                />
                                <img src={prod.image} className="h-[40px] flex w-[40px] md:h-[64px] md:w-[64px]" />
                            </div>
                            <div className="col-span-5 md:col-span-3">
                                <h1 className="text-[17px]">{prod.title}</h1>
                                <p>Category: {prod.category}</p>
                            </div>
                            <div>
                                <p className="text-[#89B23F] text-[17px] text-center">${prod.price}</p>
                                <p className="text-[gray] text-[14px] text-center"><strike>${prod.price}</strike></p>
                            </div>
                            <div className="col-span-6 justify-end md:col-span-1 flex ">
                                <div className="p-[5px] bg-[#89B23F] border border-r-0 border-[#89B23F] text-[20px] text-white flex justify-center items-center cursor-pointer duration-300 hover:bg-white hover:text-[#89B23F]"
                                    onClick={() => decreaseQty(index, prod.id)}
                                ><FaMinus size={16} className="text-white" /></div>
                                <div className="p-[5px]  w-[40px] text-[15px] border border-[#89B23F] bg-white  text-center">
                                    {qtyArr[index]}</div>
                                <div className="p-[5px] bg-[#89B23F] border border-l-0 border-[#89B23F] text-[20px] text-white flex justify-center items-center cursor-pointer duration-300 hover:bg-white hover:text-[#89B23F]"
                                    onClick={() => increaseQty(index, prod.id)}
                                ><FaPlus size={16} /></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-span-3 md:col-span-1 bg-white shadow-xl h-[200px] p-[10px] rounded-[10px]">
                    <h1>Order Summary</h1>
                    <div className="grid grid-cols-3">
                        <p className="col-span-2 text-left">Subtotal ({selectedProductsLen} items)</p>
                        <p className="text-right"> $ {(subTotal + 0).toFixed(2)}</p>
                        <p className="col-span-2 text-left">Shipping Fee</p>
                        <p className="text-right">$ 0</p>
                        <p className="col-span-2 mt-[20px] text-left border-t border-[gray]">Total</p>
                        <p className="text-right mt-[20px] border-t border-[gray]">$ {(subTotal + 0).toFixed(2)}</p>
                    </div>
                    <Link
                        to="/checkout"
                         state={{ products: selectedProduct, qtyObj: qtyObj, subtotal: subTotal, items: selectedProductsLen  }}
                    >
                        <button className="w-full p-[10px] text-white bg-[#89B23F] mt-[20px] rounded-[10px]">Checkout</button>
                    </Link>
                </div>
                <Outlet />
            </div><br />
            <Footer /><br />
            <ToastContainer />
        </>
    );
}

export default CartList;
