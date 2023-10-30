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
import Auth from "./Auth";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { db } from "./config/firebase";

const HeroLazy = lazy(() => import("./Hero"));

function App() {
  ////States
  const [uid, setUid] = useState("");
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [detail, setDetail] = useState({});
  const [products, setProducts] = useState([]);
  /////React Router
  const navigate = useNavigate();
  let location = useLocation();
  //////Functions
  const fetchProducts = async () => {
    const arr = [];
    try {
      const data = await getDocs(collection(db, "products"));
      data.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id });
      });
      setProducts(arr);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    return arr;
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const addToCart = (item) => {
    if (loggedIn) {
      addDoc(collection(db, `cart-${uid}`), {
        uid: uid,
        item: item,
      });
      notifyAddToCart();
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

  const notifyAddToCart = () =>
    toast(loggedIn ? "Added to cart" : "Log in first!");
  const notifyMail = () =>
    toast("Thankyou , we will get back to you as soon as possible.");

  const notifyOrderPlaced = () => toast("Order Placed Successfully");
  return (
    <div className='box-border relative'>
      {location.pathname != "/login" && (
        <Navbar
          category={category}
          setCategory={setCategory}
          loggedIn={loggedIn}
          uid={uid}
        />
      )}
      <ToastContainer
        position='top-center'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              {products.length > 0 && (
                <HeroLazy
                  category={category}
                  setCategory={setCategory}
                  setDetail={setDetail}
                  notifyMail={notifyMail}
                  products={products}
                />
              )}
            </Suspense>
          }
        />
        <Route
          path='/login'
          element={
            <Auth
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              setUid={setUid}
            />
          }
        />
        <Route
          path='/cart/:cartId'
          element={<Cart cart={cart} orderPlaced={orderPlaced} uid={uid} />}
        />
        <Route
          path='/search/:category'
          element={products.length > 0 && <SearchPage products={products} />}
        />
        <Route
          path='/details/:productId'
          element={
            <DetailPage
              addToCart={addToCart}
              orderPlaced={orderPlaced}
              products={products}
            />
          }
        />
        {/* <Route
          path='/allProducts'
          element={<ProductsPage setDetail={setDetail} products={products} />}
        /> */}
        <Route path='/contact' element={<Contact notifyMail={notifyMail} />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='*' element={<h1>404 Page Not Found</h1>} />
      </Routes>
      {location.pathname != "/login" && <Footer />}
    </div>
  );
}

export default App;
