import { useState } from "react";
import { auth, googleProvider } from "../src/config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Auth = ({ loggedIn, setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  console.log(auth?.currentUser?.email);
  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setLoggedIn(true);
      localStorage.setItem("loggedIn", true);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
    setEmail("");
    setPassword("");
  };
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setLoggedIn(true);
      localStorage.setItem("loggedIn", true);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <div className='LoginPage flex flex-col items-center justify-center'>
        <h1 className='text-center text-5xl mt-20 mb-20 md:m-20'>Sign Up</h1>
        {/* <form
          autoComplete='off'
          className='flex flex-col items-center  bg-slate-100 w-96 md:w-1/2 lg:w-1/3 justify-center'
        > */}
        {/* <div className='name'>
            <label htmlFor='Name'>User Name :</label>
            <input
              autoComplete='off'
              className='my-10 ml-5'
              type='text'
              id='Name'
              name='name'
              placeholder='Enter Your Name'
              onChange={formChangeHandler}
            />
          </div> */}
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
        <button
          className='bg-slate-200 hover:bg-slate-300 w-40 h-10 rounded-md mt-10'
          onClick={logout}
        >
          Log Out
        </button>
        {/* <p className='text-red-600'>{errorMsg}</p> */}
        {/* </form> */}
      </div>
    </div>
  );
};

export default Auth;
