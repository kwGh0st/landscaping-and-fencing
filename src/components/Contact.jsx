import React, { useState, useRef } from "react";
import CompanyMap from "./CompanyMap";
import { mobile, mailGreen, marker } from "../assets/contact";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const userService = import.meta.env.VITE_EMAILJS_SERVICE_ID_CONTACT;
  const userTemplate = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT;
  const userId = import.meta.env.VITE_EMAILJS_USER_ID_CONTACT;

  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
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
          from_message: form.message,
        },
        userId
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
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
    <div className="flex flex-col gap-8 items-center w-ful bg-gray-50">
      <CompanyMap />
      <div className="flex flex-col px-8 items-center lg:flex-row gap-14 lg:gap-8 justify-between lg:justify-evenly w-full ">
        <div className="flex flex-col gap-8 self-center">
          <div className="flex flex-row items-center gap-8">
            <img className="w-12 h-14" src={marker} alt="marker" />
            <p className="font-bold text-lg">
              Woodfield Avenue <br />
              LN6 0 Lincoln, <br /> United Kingdom
            </p>
          </div>
          <div className="flex flex-row items-center gap-8">
            <img className="w-12 h-14" src={mobile} alt="marker" />
            <p className="font-bold text-lg">{import.meta.env.VITE_PHONE}</p>
          </div>
          <div className="flex flex-row items-center gap-8">
            <img className="w-12 h-14" src={mailGreen} alt="marker" />
            <p className="font-bold text-lg">{import.meta.env.VITE_EMAIL}</p>
          </div>
        </div>
        <div className="w-1/2">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-8"
          >
            <h2 className="font-bold text-xl ">
              Please, fill the form below and I will talk you back as soon as
              possible.
            </h2>
            <label className="flex flex-col">
              <span className="font-medium mb-4">Your Name</span>
              <input
                onChange={handleChange}
                type="text"
                name="name"
                placeholder="What's your name?"
                className="border-4 border-green-400 py-4 px-6 placeholder:text-secondary outline-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="font-medium mb-4">Your Email</span>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="What's your email?"
                className="border-4 border-green-400 py-4 px-6 placehoder:text-secondary outline-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="font-medium mb-4">Your Message</span>
              <textarea
                onChange={handleChange}
                name="message"
                placeholder="What do you want to say?"
                rows={7}
                className="py-3 px-6 placeholder:text-secondary outline-none border-4 border-green-400 font-medium"
              />
            </label>
            <button
              type="submit"
              className="py-3 px-8 border-4 border-green-400 outline-none w-fit font-bold shadow-md shadow-primary hover:bg-green-400 ease-in duration-300"
            >
              {loading ? "Sending" : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
