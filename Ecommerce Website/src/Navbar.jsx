import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import siteLogo from "./assets/logo-no-background.png";
const Navbar = ({ category, setCategory }) => {
  const [searchValue, setSearchValue] = useState("");
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };
  const cartClickHandler = () => {
    navigate("/cart");
  };
  const menuOnClickHandler = () => {};
  const onClickHandler = (e) => {
    e.preventDefault();
    setCategory((prev) => searchValue);
    navigate("/search");
  };
  return (
    <nav className="bg-transparent border-y">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              onClick={() => setToggleMenu((prev) => !prev)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          --> */}
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div
              className="flex flex-shrink-0 items-center  invisible md:visible"
              onClick={() => navigate("/")}
            >
              <img
                className="h-8 w-auto invisible md:visible"
                src={siteLogo}
                alt="Your Company"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <NavLink
                  className="text-gray-800 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium"
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  className="text-gray-800 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium"
                  to="/about"
                >
                  About
                </NavLink>
                <NavLink
                  className="text-gray-800 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <!-- Profile dropdown --> */}
            <div className="relative ml-3">
              <div className="searchInputAndCarIcon flex flex-row">
                <form id="categoryForm" className="flex items-center">
                  <label htmlFor="searchInput" className="m-2">
                    Search
                  </label>
                  <input
                    id="searchInput"
                    type="text"
                    autoComplete="off"
                    placeholder="Category, Product"
                    value={searchValue}
                    onChange={onChangeHandler}
                    className="rounded border-gray-200 border-2 m-2 w-32 md:w-auto"
                  />
                  <button
                    className="px-2 h-8 bg-gray-200 border-2 rounded"
                    onClick={onClickHandler}
                  >
                    Go
                  </button>
                </form>
                <div
                  className="cartIcon flex w-8 md:w-16 md:m-4 m-1 hover:scale-110"
                  onClick={cartClickHandler}
                >
                  <img className="w-10" src="./cart.png" alt="" id="cartImg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {toggleMenu && (
        <div className="sm:hidden" id="mobile-menu ">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <NavLink
              to="/"
              className="text-gray-800 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
              onClick={() => setToggleMenu(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setToggleMenu(false)}
              className="text-gray-800 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              About Us
            </NavLink>
            <NavLink
              onClick={() => setToggleMenu(false)}
              to="/contact"
              className="text-gray-800 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
