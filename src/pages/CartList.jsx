import Header from "../components/Header";
import { useState, useEffect } from 'react';

function CartList() {
    const [product, setProduct] = useState([]);
    const [qtyArr, setQtyArr] = useState([]);

    useEffect(() => {
        const existingData = JSON.parse(localStorage.getItem("ecommerceCart")) || [];
        setProduct(existingData);
        setQtyArr(existingData.map(() => 1)); 
    }, []);

    const increaseQty = (index) => {
        setQtyArr(prevQty => {
            const newQty = [...prevQty];
            newQty[index] += 1;
            return newQty;
        });
    };

    const decreaseQty = (index) => {
        setQtyArr(prevQty => {
            const newQty = [...prevQty];
            if (newQty[index] > 1) newQty[index] -= 1;
            return newQty;
        });
    };

    return (
        <>
            <Header />
            <div className="w-[90%] mx-auto grid grid-cols-3 bg-[#FCFCFC] gap-[10px]">
                <div className="col-span-3 md:col-span-2">
                    {product.map((prod, index) => (
                        <div key={index} className="w-full grid grid-cols-7 md:grid-cols-6 gap-[10px] bg-white shadow-2xl mb-[10px] items-center p-[10px] rounded-[10px]">
                            <div className="flex gap-[10px]">
                               <input type="checkbox"/>
                              <img src={prod.image} className=" h-[40px] w-[40px] md:h-[64px] md:w-[64px]" />
                            </div>
                            <div className="col-span-3">
                                <h1 className="text-[17px]">{prod.title}</h1>
                                <p>Category: {prod.category}</p>
                            </div>
                            <div>
                                <p className="text-[#B24BF7] text-[17px]">${prod.price}</p>
                                <p className="text-[gray] text-[14px]"><strike>${prod.price}</strike></p>
                            </div>
                            <div className="col-span-2 justify-end sm:col-span-1 flex gap-[5px]">
                                <div className="p-[5px] bg-[gray] text-[20px] rounded-[5px] flex justify-center items-center cursor-pointer"
                                  onClick={() => increaseQty(index)}
                                >+</div>
                                <input type="number"
                                    name="number"
                                    value={qtyArr[index]}
                                    readOnly
                                    className="p-[5px] max-w-[40px] text-[15px] border border-[gray] bg-white rounded-[5px] text-center"
                                />
                                <div className="p-[5px] bg-[gray] text-[20px] rounded-[5px] flex justify-center items-center cursor-pointer"
                                    onClick={() => decreaseQty(index)}
                                >-</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-span-3 md:col-span-1 bg-white shadow-2xl h-[200px] p-[10px] rounded-[10px]">
                    <h1>Order Summary</h1>
                    <div className="grid grid-cols-3">
                    <p className="col-span-2 text-left">Subtotal (0 items)</p>
                    <p className="text-right"> $ 0</p>
                    <p className="col-span-2 text-left">Shipping Fee</p>
                    <p className="text-right">$ 0</p>
                    <p className="col-span-2 mt-[20px] text-left border-t border-[gray]">Total</p>
                    <p className="text-right mt-[20px] border-t border-[gray]">$ 0</p>
                    </div>
                    <button className="w-full p-[10px] text-white bg-[#B24BF7] mt-[20px] rounded-[10px]">Checkout</button>
                </div>
            </div>
        </>
    );
}

export default CartList;
