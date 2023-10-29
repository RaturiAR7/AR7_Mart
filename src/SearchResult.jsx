import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SearchPage = ({ products }) => {
  const navigate = useNavigate();
  const { category } = useParams();
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
    <div className='search h-full w-full'>
      {scrollToTop()}
      <h1 className='text-center font-extrabold text-4xl'>
        Your Search Result
      </h1>
      <div className='SearchResult h-full md:grid md:grid-flow-col  gap-10'>
        <div className='filters m-3 w-40 shadow-md'>
          <form action='' className='flex flex-col'>
            <label className='text-center text-lg' htmlFor='myRange'>
              Filter By Price:
            </label>

            <input
              type='range'
              min={minSliderValue}
              max={maxSliderValue}
              value={sliderValue}
              className='slider'
              id='myRange'
              onInput={handleSliderChange}
            />
            <span>₹{sliderValue}</span>
            <h2 className='mt-10 text-center text-lg'>Categories</h2>
            <div className='categories'>
              <span>Electronic</span>
              <input
                type='radio'
                name='category'
                className='mt-4'
                onInput={(e) => {
                  navigate("/search/Electronic");
                }}
              />
              <br />
              <span>Sport</span>
              <input
                type='radio'
                name='category'
                onInput={() => {
                  navigate("/search/Sport");
                }}
              />
              <br />
              <span>Laptop</span>

              <input
                type='radio'
                name='category'
                onInput={() => {
                  navigate("/search/Laptop");
                }}
              />
              <br />
              <span>Clothing</span>
              <input
                type='radio'
                name='category'
                onInput={() => {
                  navigate("/search/Clothing");
                }}
              />
              <br />
              <span>Mobile Phone</span>
              <input
                type='radio'
                name='category'
                onInput={() => {
                  navigate("/search/Mobile Phone");
                }}
              />
            </div>
          </form>
        </div>
        <div className='grid md:grid-cols-3'>
          {products.map((Element) => {
            if (
              (Element.title.toUpperCase().includes(category.toUpperCase()) ||
                Element.category
                  .toUpperCase()
                  .includes(category.toUpperCase())) &&
              sliderValue >= Element.price
            ) {
              return (
                <Link to={`/details/${Element.pid}`}>
                  <div
                    key={Element.id}
                    className='productList m-10 hover:shadow-2xl items-center flex flex-col'
                  >
                    <img className='w-72 h-60' src={Element.image} alt='' />
                    <h2 className='text-center text-xl font-semibold'>
                      {Element.title}
                    </h2>
                    <h4 className='text-center'>
                      <strong> Price:</strong>₹{Element.price}
                    </h4>
                  </div>
                </Link>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
