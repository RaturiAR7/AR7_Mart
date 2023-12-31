import { useState } from "react";
import { auth, db, googleProvider } from "../src/config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";

const Auth = ({ setLoggedIn, setUid }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      addDoc(collection(db, "users"), {
        cart: 0,
        email: email,
        password: password,
        username: userName,
        uid: user.user.uid,
      });
      setUid(user.user.uid);
      setLoggedIn(true);
      localStorage.setItem({ loggedIn: true });
      navigate("/");
    } catch (err) {
      console.error(err);
    }
    setEmail("");
    setPassword("");
  };
  const signInWithGoogle = async () => {
    console.log("in");
    try {
      const user = await signInWithPopup(auth, googleProvider);
      addDoc(collection(db, "users"), {
        cart: 0,
        email: user.user.email,
        password: "",
        username: user.user.displayName,
        uid: user.user.uid,
      });
      setUid(user.user.uid);
      setLoggedIn(true);
      localStorage.setItem("loggedIn", true);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <div className='LoginPage flex flex-col items-center justify-center'>
        <h1 className='text-center text-5xl mt-20 mb-14 md:m-14'>Sign Up</h1>
        <button
          className='bg-blue-400  hover:bg-slate-500 w-56 h-10 mt-10 items-center flex text-white'
          onClick={signInWithGoogle}
        >
          <img className='h-8 w-8 m-2' src='./google.png' alt='' />
          Sign In With Google
        </button>
        <p className='mt-10'>OR</p>
        <div className='name'>
          <label htmlFor='Name'>User Name :</label>
          <input
            autoComplete='off'
            className='my-10 ml-5'
            type='text'
            id='Name'
            name='name'
            value={userName}
            placeholder='Enter Your Name'
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className='email'>
          <label htmlFor='Email'>Enter Your Email :</label>
          <input
            autoComplete='off'
            className='my-10 ml-5'
            type='text'
            id='Email'
            name='email'
            placeholder='Enter Your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='password'>
          <label htmlFor='Password'>Enter Your Password :</label>
          <input
            className='my-10 ml-5'
            type='password'
            id='Password'
            name='password'
            placeholder='Enter Your Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className='bg-blue-400 hover:bg-slate-500 w-28 h-10 rounded-md text-white'
          onClick={signIn}
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default Auth;
