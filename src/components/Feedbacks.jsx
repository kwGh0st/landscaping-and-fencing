import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { feedbacks } from "../constants";
import { comment } from "../assets";

const Feedbacks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const textLength = feedbacks[currentIndex].text.join(" ").length;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
    }, Math.max(5000, textLength * 50));

    return () => clearTimeout(timeoutId);
  }, [currentIndex, feedbacks.length]);

  const textVariant = (delay) => {
    return {
      hidden: {
        y: -50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.25,
          delay: delay,
        },
      },
    };
  };

  return (
    <div className="w-full flex justify-center bg-gray-50 min-h-screen">
      <div className="flex flex-row w-10/12 my-8 p-12 justify-between gap-12 bg-gray-100 rounded-lg">
        <div className="flex flex-col gap-8 w-2/4">
          <h2 className="text-black text-center text-4xl font-serif font-extrabold max-w-6xl">
            WHAT OTHERS SAY ABOUT US
          </h2>
          <img className="w-32 h-32 mt-8" src={comment} alt="quote" />
        </div>
        <div className="flex flex-col items-center gap-6 px-6 text-center w-2/4">
          <motion.div
            key={currentIndex}
            variants={textVariant()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="flex flex-col items-start gap-4 bg-gray-200 rounded-xl p-10"
          >
            <h2 className="font-bold text-2xl">
              {feedbacks[currentIndex].name}
            </h2>
            <p className="text-2xl text-start italic">
              {" "}
              {feedbacks[currentIndex].text}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
