import "./App.css";
import { Link } from "react-router-dom";
const ProductsPage = ({ products }) => {
  return (
    <div className='productsPage text-center w-full'>
      <h1 className='text-5xl font-extrabold mt-4 mb-14'>Products</h1>
      <div className='allproducts grid md:grid-cols-4 sm:grid-cols-2 w-full '>
        {products.map((product) => {
          return (
            <Link key={product.id} to={`/details/${product.pid}`}>
              <div
                key={product.id}
                className='productList ml-9 p-10 flex flex-col justify-center w-72 items-center md:w-72 md:h-96'
              >
                <img
                  className='h-52 hover:scale-125'
                  src={product.image}
                  alt=''
                />
                <h2 className='mt-5'>{product.title}</h2>
                <h4>
                  <span className='font-semibold'>Price: </span>
                  {product.price}
                </h4>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
