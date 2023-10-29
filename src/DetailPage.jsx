import { query, where, getDocs, collection, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "./config/firebase";

const DetailPage = ({ addToCart, orderPlaced, products }) => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const getProduct = async () => {
    const arr = [];
    const q = query(
      collection(db, "products"),
      where("pid", "==", parseInt(productId))
    );
    try {
      const snapshot = await getDocs(q);
      snapshot.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id });
      });
      setProduct(arr);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [productId]);

  const scrollToTop = () => {
    return window.scrollTo({
      top: 0,
      behavior: "smooth", // You can change this to 'auto' if you prefer an instant scroll
    });
  };
  if (product.length > 0) {
    return (
      <div className='container flex flex-col flex-grow'>
        {scrollToTop()}
        <h1 className='text-center font-extrabold text-4xl'>Details Page</h1>
        <div className='flex flex-col md:flex-row justify-evenly m-20'>
          <div className='flex justify-center items-center'>
            <img className='w-96' src={product[0].image} alt='' />
          </div>
          <div className='info w-full md:w-1/2 items-center'>
            <h2 className='text-2xl font-bold'>{product[0].title}</h2>
            <p className='text-lg'>
              <strong>Description: </strong> {product[0].description}
            </p>
            <p>
              <strong>Price:</strong>₹{product[0].price}
            </p>
            <Link>
              <button
                className='detail-btn border-2 w-32 shadow-lg m-4 hover:bg-gray-200'
                onClick={() => addToCart(product[0])}
              >
                Add to cart
              </button>
            </Link>
            <button
              className='detail-btn border-2 w-32 shadow-lg m-4 hover:bg-gray-200'
              onClick={orderPlaced}
            >
              Order Now
            </button>
          </div>
        </div>
        <h2 className='text-center font-extrabold text-4xl m-32'>
          Related Products
        </h2>
        <div className='grid md:grid-cols-3'>
          {products.map((element) => {
            if (element.category === product[0].category)
              return (
                <Link to={`/details/${element.pid}`}>
                  <div className='relatedProductm-10 items-center flex flex-col hover:shadow-2xl'>
                    <img className='w-60 h-60' src={element.image} alt='' />
                    <h2>{element.title}</h2>
                    <h4>{`Price: ₹ ${element.price}`}</h4>
                  </div>
                </Link>
              );
          })}
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default DetailPage;
