const AddProduct = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='text-4xl items-center '>Add Product</div>
      <div className='m-20'>
        <form className='flex flex-col'>
          <label htmlFor='title'>Add Title Of Product</label>
          <input type='text' />
          <label htmlFor='title'>Add Title Of Product</label>
          <input type='text' />
          <label htmlFor='title'>Add Title Of Product</label>
          <input type='text' />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
