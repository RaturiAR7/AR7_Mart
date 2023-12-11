const AddProduct = () => {
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
          <textarea className='bg-slate-100 border-2 border-slate-200' />
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
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
