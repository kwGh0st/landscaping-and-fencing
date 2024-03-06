import React from "react";
import gardenImage from "../assets/herobg.jpg";
const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${gardenImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Landscaping&Fencing
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Tworzymy piękne ogrody i solidne ogrodzenia, spełniając Twoje
            marzenia o wymarzonej przestrzeni.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
