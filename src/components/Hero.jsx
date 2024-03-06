import React from "react";
import { styles } from "../styles";
import gardenImage from "../assets/herobg.jpg";
const Hero = () => {
  return (
    <div
      id="home"
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${gardenImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white font-serif">
          <h1 className={`${styles.heroHeadText} flex flex-col`}>
            <span>DW</span> Landscaping&Fencing
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            We create beautiful gardens and sturdy fences, bringing your dreams
            of an ideal space to life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
