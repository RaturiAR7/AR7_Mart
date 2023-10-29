import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = ({ setLoggedIn }) => {
  const navigate = useNavigate();

  /////////State
  ////Error Message
  const [errorMsg, setErrorMsg] = useState("");
  ////Login Form Info
  const [loginInfo, setLoginInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  //////////Functions
  ////Form Change Handler
  const formChangeHandler = (e) => {
    const field = e.target.name;
    setLoginInfo((prev) => {
      return { ...prev, [field]: e.target.value };
    });
  };
  /////Form Validation
  const formValidation = ({ name, email, password }) => {
    if (name === "") {
      setErrorMsg("UserName cannot be blank");
      return false;
    } else if (name.length <= 2) {
      setErrorMsg("UserName must be more than 2 characters");
      return false;
    }
    /////////////Validate Email
    if (email === "") {
      setErrorMsg("Email cannot be blank");
      return false;
    } else if (email.length < 5) {
      setErrorMsg("Email cannot be less than 5 characters");
      return false;
    } else if (!isEmail(email)) {
      setErrorMsg("Not a valid Email");
      return false;
    }
    /////////Validate Password
    if (password === "") {
      setErrorMsg("Password cannot be blank");
      return false;
    } else if (password.length <= 5) {
      setErrorMsg("Password cannot be less than 6 characters");
      return false;
    }
    return true;
  };
  /////////Checks if email field filled correctly
  const isEmail = (emailVal) => {
    let atSymbol = emailVal.indexOf("@");
    if (atSymbol < 1) return false;
    let dot = emailVal.lastIndexOf(".");
    if (dot <= atSymbol + 2) return false;
    if (dot === emailVal.length - 1) return false;

    //////It is a valid email so return true
    return true;
  };

  ///Log In State Handler
  const logInHandler = (e) => {
    e.preventDefault();
    if (formValidation(loginInfo)) {
      setLoggedIn(true);
      navigate("/");
    }
  };
  return (
    <div className='LoginPage flex flex-col items-center justify-center'>
      <h1 className='text-center text-5xl mt-20 mb-20 md:m-20'>Log In</h1>
      <form
        autoComplete='off'
        className='flex flex-col items-center  bg-slate-100 w-96 md:w-1/2 lg:w-1/3 justify-center'
      >
        <div className='name'>
          <label htmlFor='Name'>User Name :</label>
          <input
            autoComplete='off'
            className='my-10 ml-5'
            type='text'
            id='Name'
            name='name'
            placeholder='Enter Your Name'
            value={loginInfo.name}
            onChange={formChangeHandler}
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
            value={loginInfo.email}
            placeholder='Enter Your Email'
            onChange={formChangeHandler}
          />
        </div>
        <div className='password'>
          <label htmlFor='Password'>Enter Your Password :</label>
          <input
            className='my-10 ml-5'
            type='password'
            id='Password'
            value={loginInfo.password}
            name='password'
            placeholder='Enter Your Password'
            onChange={formChangeHandler}
          />
        </div>
        <button
          className='bg-slate-200 hover:bg-slate-300 w-28 h-10 rounded-md'
          onClick={logInHandler}
        >
          Log In
        </button>
        <p className='text-red-600'>{errorMsg}</p>
      </form>
    </div>
  );
};

export default LogIn;
