import { products } from "./assets/products";

const DetailPage = ({ detail, setDetail, addToCart, orderPlaced }) => {
  const onClickDetail = (product) => {
    setDetail((prev) => product);
  };
  const scrollToTop = () => {
    return window.scrollTo({
      top: 0,
      behavior: "smooth", // You can change this to 'auto' if you prefer an instant scroll
    });
  };

  return (
    <div className="container flex flex-col flex-grow">
      {scrollToTop()}
      <h1 className="text-center font-extrabold text-4xl">Details Page</h1>
      <div className="flex flex-col md:flex-row justify-evenly m-20">
        <div className="flex justify-center items-center">
          <img className="w-96" src={detail.image} alt="" />
        </div>
        <div className="info w-full md:w-1/2 items-center">
          <h2 className="text-2xl font-bold">{detail.title}</h2>
          <p className="text-lg">
            <strong>Description: </strong> {detail.description}
          </p>
          <p>
            <strong>Price:</strong>₹{detail.price}
          </p>
          <button
            className="detail-btn border-2 w-32 shadow-lg m-4 hover:bg-gray-200"
            onClick={() => addToCart(detail.id)}
          >
            Add to cart
          </button>
          <button
            className="detail-btn border-2 w-32 shadow-lg m-4 hover:bg-gray-200"
            onClick={orderPlaced}
          >
            Order Now
          </button>
        </div>
      </div>
      <h2 className="text-center font-extrabold text-4xl m-32">
        Related Products
      </h2>
      <div className="grid md:grid-cols-3">
        {products.map((product) => {
          if (product.category === detail.category)
            return (
              <div
                className="relatedProductm-10 items-center flex flex-col hover:shadow-2xl"
                onClick={() => onClickDetail(product)}
              >
                <img className="w-60 h-60" src={product.image} alt="" />
                <h2>{product.title}</h2>
                <h4>{`Price: ₹ ${product.price}`}</h4>
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default DetailPage;
