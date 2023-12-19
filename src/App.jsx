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
import { getDocs, collection, addDoc } from "firebase/firestore";
import { db, auth } from "./config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import AddProduct from "./AddProduct";

const HeroLazy = lazy(() => import("./Hero"));

function App() {
  ////States
  const [uid, setUid] = useState("");
  const [loggedIn, setLoggedIn] = useState(
    auth?.currentUser?.email.length > 0 ? true : false
  );
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
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
        setLoggedIn(true);
      } else {
        setUid("");
        setLoggedIn(false);
      }
    });
  }, [loggedIn]);
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
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} uid={uid} />
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
                <HeroLazy notifyMail={notifyMail} products={products} />
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
          element={<Cart orderPlaced={orderPlaced} uid={uid} />}
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
        <Route path='/contact' element={<Contact notifyMail={notifyMail} />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='*' element={<h1>404 Page Not Found</h1>} />
        {products.length > 1 && (
          <Route
            path='/addpro'
            element={<AddProduct id={products.length + 1} />}
          />
        )}
      </Routes>
      {location.pathname != "/login" && <Footer />}
    </div>
  );
}

export default App;
