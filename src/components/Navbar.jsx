import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-l from-green-400 to-gray-200 p-6 flex justify-between items-center shadow-lg">
      <div className=" text-gray-800 text-lg font-extrabold sm:text-xl md:text-2xl">
        <Link
          to="/"
          className="text-gray-800 relative overflow-hidden font-bold text-xl"
        >
          <div className="flex flex-row justify-between items-center ">
            <img
              src={logo}
              alt="logo"
              className="w-9 h-9 mx-2 object-contain rounded-full"
            />
            <p className="flex flex-col md:flex-row">
              Landscaping&nbsp;
              <span className="md:flex">&&nbsp;Fencing</span>
            </p>
          </div>
        </Link>
      </div>
      <div className="hidden md:flex md:space-x-4 md:gap-5 text-gray-800 mx-4">
        <Link
          to="/"
          className="hover:text-green-600 font-bold text-xl transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:text-green-600 font-bold text-xl transition duration-300"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="hover:text-green-600 font-bold text-xl transition duration-300"
        >
          Contact
        </Link>
        <Link
          to="/services"
          className="hover:text-green-600 font-bold text-xl transition duration-300"
        >
          Services
        </Link>
        <Link
          to="/projects"
          className="hover:text-green-600 font-bold text-xl transition duration-300"
        >
          Projects
        </Link>
      </div>
      <button className="md:hidden focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
