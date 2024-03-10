import React from "react";
import { servicesBg } from "../assets";
import { styles } from "../styles";
import { services } from "../constants";
import { fence, lawn, decking, patio } from "../assets/services";

const Services = () => {
  return (
    <div className="bg-gray-50">
      <div
        className="relative h-screen w-full bg-cover bg-center "
        style={{ backgroundImage: `url(${servicesBg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white font-serif">
            <h1 className={`${styles.heroHeadText} flex flex-col`}>Services</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center my-24 gap-12 px-6 text-center w-full">
        <p className="mb-8 text-2xl italic font-serif max-w-2xl">
          Specializing in driveways, patios, turfing, and fencing, DW
          Landscaping & Fencing brings expertise and skill to every landscaping
          project and ensures the highest quality results.
        </p>
        <div className="flex flex-col gap-12 items-center">
          <ServiceItem
            name={services.at(0).name}
            image={fence}
            description={services.at(0).description}
          />
          <ServiceItem
            name={services.at(1).name}
            image={lawn}
            description={services.at(1).description}
          />
          <ServiceItem
            name={services.at(2).name}
            image={decking}
            description={services.at(2).description}
          />
          <ServiceItem
            name={services.at(3).name}
            image={patio}
            description={services.at(3).description}
          />
        </div>
      </div>
    </div>
  );
};

const ServiceItem = ({ image, name, description }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 justify-evenly items-center lg:items-start md:w-3/4">
      <div className="flex flex-col items-start gap-6 mt-4">
        <h2 className="font-bold text-2xl self-center">{name}</h2>
        <hr className="w-full border-1 border-black" />
        <p className="w-full pb-6 mb-auto text-center text-lg lg:text-xl italic">
          {description}
        </p>
      </div>
      <img
        className="w-96 h-52 md:h-full mb-auto object-cover rounded-xl"
        src={image}
        alt=""
      />
    </div>
  );
};

export default Services;
