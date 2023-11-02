import { useState } from "react";
import { auth, db, googleProvider } from "../src/config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
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
        <h1 className='text-center text-5xl mt-20 mb-20 md:m-20'>Sign Up</h1>
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
          className='bg-slate-200 hover:bg-slate-300 w-28 h-10 rounded-md'
          onClick={signIn}
        >
          Log In
        </button>
        <button
          className='bg-slate-200 hover:bg-slate-300 w-40 h-10 rounded-md mt-10'
          onClick={signInWithGoogle}
        >
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default Auth;
