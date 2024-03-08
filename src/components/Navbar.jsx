import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="bg-gradient-to-l from-green-400 to-gray-200 p-6 flex justify-between items-center shadow-lg fixed top-0 z-20 w-full">
      <div className=" text-gray-800 text-lg font-extrabold sm:text-xl md:text-2xl">
        <Link
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
          className="text-gray-800 relative overflow-hidden font-bold text-xl"
        >
          <div className="flex flex-row justify-between items-center ">
            <img
              src={logo}
              alt="logo"
              className="w-9 h-9 mx-2 object-contain rounded-full"
            />
            <p className="flex flex-col lg:flex-row">
              Landscaping&nbsp;
              <span className="md:flex">&&nbsp;Fencing</span>
            </p>
          </div>
        </Link>
      </div>
      <ul className="hidden md:flex md:space-x-4 md:gap-5 text-gray-800 mx-4">
        {navLinks.map((link) => {
          return (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-green-600" : ""
              } hover:text-green-600 font-bold text-xl transition duration-300`}
            >
              <a href={link.id} onClick={() => setActive(link.title)}>
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="md:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-green-400 absolute top-16 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
        >
          <ul className="list-none flex justify-end items-start gap-4 flex-col">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-green-600" : ""
                } hover:text-green-600 font-semibold text-xl transition duration-300 cursor-pointer`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
