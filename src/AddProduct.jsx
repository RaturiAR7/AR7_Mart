const AddProduct = ({ id }) => {
  console.log(id);
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-4xl'>Add Product</h1>
      <div className='flex md:flex-row flex-col w-full h-screen md:justify-around'>
        <div className='flex flex-col items-center'>
          <label htmlFor='title' className='md:text-xl md:mt-4 text-lg'>
            Add Title Of Product
          </label>
          <input
            type='text'
            className='bg-slate-100 border-2 border-slate-200'
          />
          <label htmlFor='title' className='md:text-xl md:mt-4 text-lg'>
            Add Description Of Product
          </label>
          <textarea
            cols={35}
            rows={35}
            placeholder='Enter Description...'
            className='bg-slate-100 border-2 border-slate-200'
          />
        </div>
        <div className='flex flex-col items-center'>
          <label htmlFor='title' className='md:text-xl md:mt-4 text-lg'>
            Add Image Url Of Prduct
          </label>
          <input
            type='text'
            className='bg-slate-100 border-2 border-slate-200'
          />
          <label htmlFor='title' className='md:text-xl md:mt-4 text-lg'>
            Add Product Price
          </label>
          <input
            type='text'
            className='bg-slate-100 border-2 border-slate-200'
          />
          <label htmlFor='title' className='md:text-xl md:mt-4 text-lg'>
            Add Product Category
          </label>
          <radioGroup>
            <label>Laptops</label>
            <input type='radio' name='category' value='men' />
            <br />
            <label>Electronics</label>
            <input type='radio' name='category' value='men' />
            <br />
            <label>Clothing</label>
            <input type='radio' name='category' value='men' />
            <br />
            <label>Sports</label>
            <input type='radio' name='category' value='men' />
            <br />
            <label>Mobile Phone</label>
            <input type='radio' name='category' value='men' />
            <br />
            <label>Jewellery</label>
            <input type='radio' name='category' value='men' />
          </radioGroup>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
