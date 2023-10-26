import "./App.css";
import "./index.css";
import Cart from "./Cart";
import ProductsPage from "./ProductsPage";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import SearchPage from "./SearchResult";
import DetailPage from "./DetailPage";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import LogIn from "./LogIn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { lazy, Suspense } from "react";

const HeroLazy = lazy(() => import("./Hero"));

function App() {
  // useEffect(() => {
  //   const url = "https://dummyjson.com/products";
  //   const dataFetch = async () => {
  //     const data = await (await fetch(url)).json();
  //     setProducts(data.products);
  //     // console.log(data.products);
  //   };
  //   dataFetch();
  // }, []);

  ////States
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [detail, setDetail] = useState({});
  /////React Router
  const navigate = useNavigate();
  let location = useLocation();
  //////Functions
  const addToCart = (id) => {
    if (loggedIn) {
      if (!cart.includes(id)) {
        setCart((prevItems) => [...prevItems, Number(id)]);
        notifyAddToCart();
      }
    } else {
      notifyAddToCart();
      navigate("/login");
    }
  };

  const orderPlaced = () => {
    if (loggedIn) {
      notifyOrderPlaced();
    } else {
      notifyAddToCart();
      navigate("/login");
    }
  };

  const deleteFromCart = (id) => {
    const newArr = [];
    cart.forEach((element) => {
      if (element !== id) newArr.push(element);
    });
    setCart((prev) => newArr);
  };

  const notifyAddToCart = () =>
    toast(loggedIn ? "Added to cart" : "Log in first!");
  const notifyMail = () =>
    toast("Thankyou , we will get back to you as soon as possible.");

  const notifyOrderPlaced = () => toast("Order Placed Successfully");
  return (
    <div className="box-border relative">
      {location.pathname != "/login" && (
        <Navbar category={category} setCategory={setCategory} />
      )}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Routes>
        <Route
          path="/"
          element={
            // <Hero
            //   category={category}
            //   setCategory={setCategory}
            //   setDetail={setDetail}

            // />
            <Suspense fallback={<h1>Loading...</h1>}>
              <HeroLazy
                category={category}
                setCategory={setCategory}
                setDetail={setDetail}
                notifyMail={notifyMail}
              />
            </Suspense>
          }
        />
        <Route path="/login" element={<LogIn setLoggedIn={setLoggedIn} />} />
        <Route
          path="/cart"
          element={
            <Cart
              deleteFromCart={deleteFromCart}
              cart={cart}
              orderPlaced={orderPlaced}
            />
          }
        />
        <Route
          path="/search"
          element={
            <SearchPage
              category={category}
              addToCart={addToCart}
              setDetail={setDetail}
              setCategory={setCategory}
            />
          }
        />
        <Route
          path="/details"
          element={
            <DetailPage
              detail={detail}
              setDetail={setDetail}
              addToCart={addToCart}
              orderPlaced={orderPlaced}
            />
          }
        />
        <Route
          path="/allProducts"
          element={<ProductsPage setDetail={setDetail} />}
        />
        <Route path="/contact" element={<Contact notifyMail={notifyMail} />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
      {location.pathname != "/login" && <Footer />}
    </div>
  );
}

export default App;