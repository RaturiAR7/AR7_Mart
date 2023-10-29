import { collection, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "./config/firebase";

const Cart = ({ deleteFromCart, orderPlaced }) => {
  const { cartId } = useParams();
  const [cart, setCart] = useState([]);

  const getProduct = async () => {
    const arr = [];
    try {
      const snapshot = await getDocs(collection(db, `cart-${cartId}`));
      snapshot.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id });
      });
      setCart(arr);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className='cart flex flex-col items-center h-full'>
      <h1 className='text-5xl font-extrabold m-5'>Your Cart</h1>
      {cart.length ? (
        cart.map((element) => {
          const product = element.item;
          return (
            <div
              key={product.id}
              className='cartProduct w-full flex flex-col md:flex-row items-center justify-around m-10 hover:shadow-xl hover:border'
            >
              <img src={product.image} alt='' className='w-1/5' />
              <div className='cartProductInfo '>
                <h2 className='text-xl font-semibold'>{product.title}</h2>
                <h4>
                  <strong>Price: </strong> ₹{product.price}
                </h4>
                <button
                  className='detail-btn border w-32 shadow-lg m-4 hover:bg-gray-200'
                  onClick={() => deleteFromCart(product.id)}
                >
                  Remove
                </button>
                <button
                  className='detail-btn border  w-32 shadow-lg m-4 hover:bg-gray-200'
                  onClick={orderPlaced}
                >
                  Order Now
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div className='h-full m-48'>
          <h2 className='text-xl font-medium'>Your cart is empty</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
