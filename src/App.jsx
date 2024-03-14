import "./App.css";
import "./index.css";
import { useEffect, useState, lazy, Suspense } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDocs, collection, addDoc } from "firebase/firestore";
import { db, auth } from "./config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Loader from "react";
const Auth = lazy(() => import("./Auth"));
const Contact = lazy(() => import("./Contact"));
const AboutUs = lazy(() => import("./AboutUs"));
const Footer = lazy(() => import("./Footer"));
const SearchPage = lazy(() => import("./SearchResult"));
const DetailPage = lazy(() => import("./DetailPage"));
const Cart = lazy(() => import("./Cart"));
const Navbar = lazy(() => import("./Navbar"));
const AddProduct = lazy(() => import("./AddProduct"));
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
        <Navbar
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          uid={uid}
          auth={auth}
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
                <HeroLazy notifyMail={notifyMail} products={products} />
              )}
            </Suspense>
          }
        />
        <Route
          path='/login'
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Auth
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                setUid={setUid}
              />
            </Suspense>
          }
        />
        <Route
          path='/cart/:cartId'
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Cart orderPlaced={orderPlaced} uid={uid} />
            </Suspense>
          }
        />
        <Route
          path='/search/:category'
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              {products.length > 0 && <SearchPage products={products} />}
            </Suspense>
          }
        />
        <Route
          path='/details/:productId'
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <DetailPage
                addToCart={addToCart}
                orderPlaced={orderPlaced}
                products={products}
              />
            </Suspense>
          }
        />
        <Route
          path='/contact'
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Contact notifyMail={notifyMail} />
            </Suspense>
          }
        />
        <Route
          path='/about'
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <AboutUs />
            </Suspense>
          }
        />
        <Route
          path='*'
          element={
            <div className='h-screen'>
              <h1 className='text-5xl text-center m-20'>404 Page Not Found</h1>
            </div>
          }
        />
        {products.length > 1 &&
          auth?.currentUser?.email == "anshulraturi007@gmail.com" && (
            <Route
              path='/addpro'
              element={
                <Suspense fallback={<h1>Loading...</h1>}>
                  <AddProduct id={products.length + 1} />
                </Suspense>
              }
            />
          )}
      </Routes>
      {location.pathname != "/login" && <Footer />}
    </div>
  );
}

export default App;
