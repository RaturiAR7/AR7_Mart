import { useNavigate } from "react-router-dom";
import { products } from "./assets/products";
import { useEffect, useState } from "react";

const SearchPage = ({ category, addToCart, setDetail, setCategory }) => {
  const navigate = useNavigate();

  const [sliderValue, setSliderValue] = useState(1000000);
  const [maxSliderValue, setMaxSliderValue] = useState(1000000);
  const [minSliderValue, setMinSliderValue] = useState(1);
  useEffect(() => {
    let maxValue = -1;
    let minValue = Infinity;
    products.forEach((Element) => {
      if (
        Element.title.toUpperCase().includes(category.toUpperCase()) ||
        Element.category.toUpperCase().includes(category.toUpperCase())
      ) {
        if (Element.price > maxValue) maxValue = Element.price;
        if (minValue >= Element.price) minValue = Element.price;
      }
    });
    setMinSliderValue(minValue);

    setMaxSliderValue(maxValue);
    setSliderValue(maxValue);
  }, [category]);

  const onClickDetail = (product) => {
    setDetail((prev) => product);
    navigate("/details");
  };

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };
  const scrollToTop = () => {
    return window.scrollTo({
      top: 0,
      behavior: "smooth", // You can change this to 'auto' if you prefer an instant scroll
    });
  };

  return (
    <div className="search h-full w-full">
      {scrollToTop()}
      <h1 className="text-center font-extrabold text-4xl">
        Your Search Result
      </h1>
      <div className="SearchResult h-full md:grid md:grid-flow-col  gap-10">
        <div className="filters m-3 w-40 shadow-md">
          <form action="" className="flex flex-col">
            <label className="text-center text-lg" htmlFor="myRange">
              Filter By Price:
            </label>

            <input
              type="range"
              min={minSliderValue}
              max={maxSliderValue}
              value={sliderValue}
              className="slider"
              id="myRange"
              onInput={handleSliderChange}
            />
            <span>₹{sliderValue}</span>
            <h2 className="mt-10 text-center text-lg">Categories</h2>
            <div className="categories">
              <span>Electronics</span>
              <input
                type="radio"
                name="category"
                className="mt-4"
                onInput={() => {
                  setCategory("electronic");
                }}
              />
              <br />
              <span>Sports</span>
              <input
                type="radio"
                name="category"
                onInput={() => {
                  setCategory("sport");
                }}
              />
              <br />
              <span>Laptops</span>

              <input
                type="radio"
                name="category"
                onInput={() => {
                  setCategory("laptop");
                }}
              />
              <br />
              <span>Clothing</span>
              <input
                type="radio"
                name="category"
                onInput={() => {
                  setCategory("clothing");
                }}
              />
              <br />
              <span>Mobile Phone</span>
              <input
                type="radio"
                name="category"
                onInput={() => {
                  setCategory("mobile phone");
                }}
              />
            </div>
          </form>
        </div>
        <div className="grid md:grid-cols-3">
          {products.map((Element) => {
            if (
              (Element.title.toUpperCase().includes(category.toUpperCase()) ||
                Element.category
                  .toUpperCase()
                  .includes(category.toUpperCase())) &&
              sliderValue >= Element.price
            ) {
              return (
                <div
                  key={Element.id}
                  className="productList m-10 hover:shadow-2xl items-center flex flex-col"
                  onClick={() => onClickDetail(Element)}
                >
                  <img className="w-72 h-60" src={Element.image} alt="" />
                  <h2 className="text-center text-xl font-semibold">
                    {Element.title}
                  </h2>
                  <h4 className="text-center">
                    <strong> Price:</strong>₹{Element.price}
                  </h4>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
