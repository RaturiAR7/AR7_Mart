import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./config/firebase";

const AddProduct = ({ id }) => {
  const [productInfo, setProductInfo] = useState({
    pid: id,
    title: "",
    description: "",
    image: "",
    price: 0,
    category: "",
  });
  // Function to handle changes in input fields
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    if (name === "price") {
      value = Number(value);
    }

    setProductInfo((prevProductInfo) => ({
      ...prevProductInfo,
      [name]: value,
    }));
  };
  const productSubmitHandler = () => {
    // Add the productInfo object to Firestore
    addDoc(collection(db, "products"), {
      pid: id,
      title: productInfo.title,
      description: productInfo.description,
      image: productInfo.image,
      price: productInfo.price,
      category: productInfo.category,
    });

    console.log("Clicked");
    // Reset the form after submission
    setProductInfo({
      pid: id,
      title: "",
      description: "",
      image: "",
      category: "",
    });
  };

  return (
    <div className='flex flex-col items-center h-screen'>
      <h1 className='text-4xl'>Add Product</h1>
      <div className='w-full flex flex-col items-center h-96'>
        <div className='flex md:flex-row flex-col w-full md:justify-around'>
          <div className='flex flex-col m-10 items-center'>
            <label htmlFor='title' className='md:text-xl md:mt-4 text-lg'>
              Add Title Of Product
            </label>
            <input
              type='text'
              className='bg-slate-100 border-2 border-slate-200'
              onChange={handleInputChange}
              value={productInfo.title}
              name='title'
            />
            <label htmlFor='description' className='md:text-xl md:mt-4 text-lg'>
              Add Description Of Product
            </label>
            <textarea
              cols={35}
              rows={10}
              placeholder='Enter Description...'
              className='bg-slate-100 border-2 border-slate-200'
              onChange={handleInputChange}
              name='description'
              value={productInfo.description}
            />
          </div>
          <div className='flex flex-col items-center'>
            <label htmlFor='image' className='md:text-xl md:mt-4 text-lg'>
              Add Image Url Of Product
            </label>
            <input
              type='text'
              className='bg-slate-100 border-2 border-slate-200'
              onChange={handleInputChange}
              value={productInfo.image}
              name='image'
            />
            <label htmlFor='price' className='md:text-xl md:mt-4 text-lg'>
              Add Product Price
            </label>
            <input
              type='text'
              className='bg-slate-100 border-2 border-slate-200'
              onChange={handleInputChange}
              value={productInfo.price}
              name='price'
            />
            <label htmlFor='category' className='md:text-xl md:mt-4 text-lg'>
              Add Product Category
            </label>
            <div>
              <label className='m-2'>Laptops</label>
              <input
                type='radio'
                name='category'
                value='Laptops'
                onChange={handleInputChange}
              />
              <br />
              <label className='m-2'>Electronics</label>
              <input
                type='radio'
                name='category'
                value='Electronics'
                onChange={handleInputChange}
              />
              <br />
              <label className='m-2'>Clothing</label>
              <input
                type='radio'
                name='category'
                value='Clothing'
                onChange={handleInputChange}
              />
              <br />
              <label className='m-2'>Sports</label>
              <input
                type='radio'
                name='category'
                value='Sports'
                onChange={handleInputChange}
              />
              <br />
              <label className='m-2'>Mobile Phone</label>
              <input
                type='radio'
                name='category'
                value='Mobile Phone'
                onChange={handleInputChange}
              />
              <br />
              <label className='m-2'>Jewellery</label>
              <input
                type='radio'
                name='category'
                value='Jewellery'
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <button
          className='bg-slate-600 text-white w-24 m-20'
          onClick={productSubmitHandler}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
