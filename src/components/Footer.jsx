import React from "react";
import { phone, email, user, facebook, instagram } from "../assets";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col bg-gradient-to-l from-green-400 to-gray-200 shadow-lg mt-8 p-8">
      <div className="flex flex-col md:flex-row gap-12 items-center md:items-baseline justify-evenly w-full ">
        <div className="flex flex-col gap-6 mx-4">
          <h2 className="text-black font-bold font-serif text-2xl mt-4">
            Give us a call...
          </h2>
          <div className="flex flex-row gap-8 items-center">
            <img className="w-6 h-6 mt-1 p-0" src={phone} alt="phone" />
            <p className="text-black font-bold text-lg">000-000-000</p>
          </div>
          <div className="flex flex-row gap-8 items-center">
            <img className="w-6 h-6 mt-1 p-0" src={email} alt="email" />
            <p className="text-black font-bold text-lg">Email@Example.com</p>
          </div>
        </div>
        <div className="mx-4 w-1/2 md:w-1/4">
          <h2 className="text-black font-bold font-serif text-2xl my-4">
            ...or let us call you back.
          </h2>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-4 items-center">
                <img className="w-5 h-5" src={user} alt="user" />
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border-2 border-gray-800 bg-gray-200 p-2 rounded"
                />
              </div>
              <div className="flex flex-row gap-4 items-center">
                <img className="w-5 h-5" src={phone} alt="phone" />
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full border-2 border-gray-800 bg-gray-200 p-2 rounded"
                />
              </div>
              <div className="flex flex-row gap-4 items-center">
                <img className="w-5 h-5" src={email} alt="email" />
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full border-2 border-gray-800 bg-gray-200 p-2 rounded"
                />
              </div>
              <button className="w-1/2 self-end bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 ease-in duration-300">
                Send
              </button>
              <div className="flex flex-col justify-center items-start md:items-end mt-8">
                <h2 className="font-bold italic mb-4 self mr-14">Follow us.</h2>
                <div className="flex flex-row justify-center gap-8">
                  <a
                    className="hover:rotate-45 duration-300"
                    href="https://www.facebook.com/waldemar.wojtacha"
                    target="_blank"
                  >
                    <img className="w-12 h-12" src={facebook} alt="facebook" />
                  </a>
                  <a
                    className="hover:rotate-45 duration-300"
                    href="https://www.instagram.com/wojtachawaldemar/"
                    target="_blank"
                  >
                    <img
                      className="w-12 h-12"
                      src={instagram}
                      alt="instagram"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-8 p-8">
        <p className="text-gray-500 text-sm">
          &copy; {currentYear} Karol Wojtacha
        </p>
        <p className="text-gray-500 text-sm">
          Icons: &nbsp;
          <a className="text-gray-500 text-sm" href="https://lordicon.com">
            lordicon.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
