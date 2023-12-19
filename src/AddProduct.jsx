import { useState } from "react";

const AddProduct = ({ id }) => {
  const [productInfo, setProductInfo] = useState({
    id: id,
    title: "",
    description: "",
    image: "",
    price: "",
    category: "",
  });

  // Function to handle changes in input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductInfo((prevProductInfo) => ({
      ...prevProductInfo,
      [name]: value,
    }));
  };
  const productSubmitHandler = () => {
    console.log(productInfo);
  };

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-4xl'>Add Product</h1>
      <div className='flex md:flex-row flex-col w-full h-full md:justify-around'>
        <div className='flex flex-col items-center'>
          <label htmlFor='title' className='md:text-xl md:mt-4 text-lg'>
            Add Title Of Product
          </label>
          <input
            type='text'
            className='bg-slate-100 border-2 border-slate-200'
            onChange={handleInputChange}
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
            name='image'
          />
          <label htmlFor='price' className='md:text-xl md:mt-4 text-lg'>
            Add Product Price
          </label>
          <input
            type='text'
            className='bg-slate-100 border-2 border-slate-200'
            onChange={handleInputChange}
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
        className='bg-slate-600 text-white w-20'
        onClick={productSubmitHandler}
      >
        Submit
      </button>
    </div>
  );
};

export default AddProduct;
