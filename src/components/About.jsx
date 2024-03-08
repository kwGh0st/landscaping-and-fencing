import React from "react";
import {
  deckingImage,
  pergolaImage,
  landscapeImage,
  patioImage,
  check,
  consultation,
  face,
  savings,
} from "../assets";

const About = () => {
  return (
    <div className="flex flex-col w-full bg-gray-50">
      <div
        id="about"
        className="flex flex-col items-center gap-4 px-6 text-center w-9/12 mx-auto"
      >
        <p className="mt-12 mb-4 text-2xl italic font-serif max-w-6xl">
          We are a welcoming family-owned business based in Lincoln UK,
          dedicated to addressing all your gardening needs. Utilizing the finest
          quality materials available.
        </p>
        <div className="flex flex-row items-center">
          <h2 className="text-black my-12 text-4xl font-serif font-extrabold max-w-6xl">
            WHY CHOOSE DW LANDSCAPING & FENCING
          </h2>
        </div>
        <div className="flex flex-col flex-wrap w-full lg:flex-row lg:items-baseline lg:justify-between gap-6">
          <div className="flex flex-col flex-1 justify-center items-center gap-6">
            <img className="w-20" src={consultation} alt="handshake" />
            <h2 className="font-bold text-2xl font-serif">
              Complimentary and transparent guidance.
            </h2>
            <p className="my-4 text-xl font-serif leading-[30px] max-w-6xl">
              No matter the scale of your project, we'll sit down for a chat,
              explore your options, and collaboratively discover the perfect
              solution. Join us for a friendly discussion, and feel free to
              explore our portfolio to witness the transformative possibilities
              we bring to every endeavor.
            </p>
          </div>
          <div className="flex flex-col flex-1 justify-center items-center gap-6">
            <img className="w-20" src={savings} alt="bank" />
            <h2 className="font-bold text-2xl font-serif">
              Detailed, reliable cost estimates.
            </h2>
            <p className="my-4 text-xl font-serif leading-[30px] max-w-6xl">
              We go the extra mile in crafting our estimates to ensure a
              transparent process with no unexpected surprises. Every aspect is
              meticulously accounted for, down to the smallest detail
            </p>
          </div>
          <div className="flex flex-col flex-1 justify-center items-center gap-6">
            <img className="w-20" src={face} alt="smile" />
            <h2 className="font-bold text-2xl font-serif">
              Exceptional craftsmanship, guaranteed.
            </h2>
            <p className="my-4 text-xl font-serif leading-[30px] max-w-6xl">
              We take great pride in utilizing only the highest-quality
              materials for every project. Our commitment to excellence involves
              dedicated efforts to ensure your garden maintains its stunning
              appearance year after year.
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-center font-bold font-serif text-4xl my-12 mx-4 text-gray-800">
        We are equipped to meet all your requirements for hard landscaping
        projects.
      </h2>
      <div className="flex flex-col py-8 w-full lg:w-11/12 self-end">
        <div className="flex flex-row gap-8 bg-gradient-to-r from-green-400 to-gray-200">
          <div className="hidden lg:flex lg:flex-col">
            <div className="flex flex-row">
              <img className="w-72 h-64" src={pergolaImage} alt="pergola" />
              <img className="w-72 h-64" src={deckingImage} alt="decking" />
            </div>
            <div className="flex flex-row">
              <img
                className="max-w-72 h-64"
                src={landscapeImage}
                alt="landscape"
              />
              <img className="max-w-72 h-64" src={patioImage} alt="patio" />
            </div>
          </div>
          <div className="mx-8 lg:w-1/2">
            <h2 className="font-bold text-4xl text-gray-800 my-6 underline italic">
              We specialize in:
            </h2>
            <ul className="">
              <li className="flex flex-row gap-4 my-6 italic">
                <img
                  className="w-6  h-6 mt-1 p-0 border-solid border-2 border-gray-800 rounded-full"
                  src={check}
                  alt="check"
                />
                <p className="font-bold text-2xl">Fencing and Gates</p>
              </li>
              <li className="flex flex-row gap-4 my-6 italic">
                <img
                  className="w-6  h-6 mt-1 p-0 border-solid border-2 border-gray-800 rounded-full"
                  src={check}
                  alt="check"
                />
                <p className="font-bold text-2xl">Patios</p>
              </li>
              <li className="flex flex-row gap-4 my-6 italic">
                <img
                  className="w-6  h-6 mt-1 p-0 border-solid border-2 border-gray-800 rounded-full"
                  src={check}
                  alt="check"
                />
                <p className="font-bold text-2xl">Brickwork</p>
              </li>
              <li className="flex flex-row gap-4 my-6 italic">
                <img
                  className="w-6  h-6 mt-1 p-0 border-solid border-2 border-gray-800 rounded-full"
                  src={check}
                  alt="check"
                />
                <p className="font-bold text-2xl">Decking</p>
              </li>
              <li className="flex flex-row gap-4 my-6 italic">
                <img
                  className="w-6  h-6 mt-1 p-0 border-solid border-2 border-gray-800 rounded-full"
                  src={check}
                  alt="check"
                />
                <p className="font-bold text-2xl">Turfing</p>
              </li>
              <li className="flex flex-row gap-4 my-6 italic">
                <img
                  className="w-6  h-6 mt-1 p-0 border-solid border-2 border-gray-800 rounded-full"
                  src={check}
                  alt="check"
                />
                <p className="font-bold text-2xl">Planting</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
