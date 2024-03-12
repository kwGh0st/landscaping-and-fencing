import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { phone, email, user, facebook, instagram } from "../assets";

const Footer = () => {
  const userService = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const userTemplate = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const userId = import.meta.env.VITE_EMAILJS_USER_ID;
  const currentYear = new Date().getFullYear();
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        userService,
        userTemplate,
        {
          from_name: form.name,
          from_email: form.email,
          from_phone: form.phone,
        },
        userId
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            phone: "",
            email: "",
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);

          alert("Something went wrong.");
        }
      );
  };

  return (
    <div className="flex flex-col bg-gradient-to-l from-green-400 to-gray-200 shadow-lg mt-8 p-8">
      <div className="flex flex-col md:flex-row gap-12 items-center md:items-baseline justify-evenly w-full ">
        <div className="flex flex-col gap-6 mx-4">
          <h2 className="text-black font-bold font-serif text-2xl mt-4">
            Give me a call...
          </h2>
          <div className="flex flex-row gap-8 items-center">
            <img className="w-6 h-6 mt-1 p-0" src={phone} alt="phone" />
            <p className="text-black font-bold text-lg">
              {import.meta.env.VITE_PHONE}
            </p>
          </div>
          <div className="flex flex-row gap-8 items-center">
            <img className="w-6 h-6 mt-1 p-0" src={email} alt="email" />
            <p className="text-black font-bold text-lg">
              {import.meta.env.VITE_EMAIL}
            </p>
          </div>
        </div>
        <div className="mx-4 w-full md:w-1/4">
          <h2 className="text-black font-bold font-serif text-2xl my-4">
            ...or let me call you back.
          </h2>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 mx-4"
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-4 items-center">
                <img className="w-5 h-5" src={user} alt="user" />
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full border-2 border-gray-800 bg-gray-200 p-2 rounded"
                />
              </div>
              <div className="flex flex-row gap-4 items-center">
                <img className="w-5 h-5" src={phone} alt="phone" />
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full border-2 border-gray-800 bg-gray-200 p-2 rounded"
                />
              </div>
              <div className="flex flex-row gap-4 items-center">
                <img className="w-5 h-5" src={email} alt="email" />
                <input
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full border-2 border-gray-800 bg-gray-200 p-2 rounded"
                />
              </div>
              <button
                type="submit"
                className="w-1/2 self-end bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 ease-in duration-300"
              >
                {loading ? "Sending..." : "Send"}
              </button>
              <div className="flex flex-col justify-center items-start md:items-end mt-8">
                <h2 className="font-bold italic mb-4 self mr-14">Follow me.</h2>
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
          </form>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-8 p-8">
        <p className="text-gray-500 text-sm">
          <a href="https://kwgh0st.github.io/wojtachakarol/" target="_blank">
            &copy; {currentYear} Karol Wojtacha
          </a>
        </p>
        <p className="text-gray-500 text-sm">
          <a
            className="text-gray-500 text-sm"
            href="https://lordicon.com/"
            target="_blank"
          >
            Icons by Lordicon.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
