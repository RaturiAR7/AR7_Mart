import "./App.css";
import { products } from "./assets/products";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const ProductsPage = ({ setDetail }) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const url = "https://fakestoreapi.com/products";
  // const dataFetch = async () => {
  //   const data = await (await fetch(url)).json();
  //   setData(data);
  //   console.log(data);
  // };
  //   dataFetch();
  // }, []);
  return (
    <div className="productsPage text-center w-full">
      <h1 className="text-5xl font-extrabold mt-4 mb-14">Products</h1>
      <div className="allproducts grid md:grid-cols-4 w-full ">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="productList p-10 flex flex-col justify-center items-center"
              onClick={() => {
                setDetail(product);
                navigate("/details");
              }}
            >
              <img
                className="h-1/2 hover:scale-105"
                src={product.image}
                alt=""
              />
              <h2>{product.title}</h2>
              <h4>{`Price: ${product.price}`}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
