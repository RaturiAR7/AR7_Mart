import "./App.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const ProductsPage = ({ products }) => {
  return (
    <div className='productsPage text-center w-full'>
      <h1 className='text-5xl font-extrabold mt-4 mb-14'>Products</h1>
      <div className='allproducts grid md:grid-cols-4 w-full '>
        {products.map((product) => {
          return (
            <Link to={`/details/${product.pid}`}>
              <div
                key={product.id}
                className='productList p-10 flex flex-col justify-center items-center'
              >
                <img
                  className='h-1/2 hover:scale-105'
                  src={product.image}
                  alt=''
                />
                <h2>{product.title}</h2>
                <h4>{`Price: ${product.price}`}</h4>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
