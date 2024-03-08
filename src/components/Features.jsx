import React from "react";
import {
  bricks,
  deckingImage2,
  fence,
  garden,
  fence_2,
  patio,
  paving,
  woodBoard,
  lawnMower,
  plant,
} from "../assets";

const Features = () => {
  return (
    <div className="w-full bg-gray-50">
      <div className="flex flex-col w-full lg:w-11/12 self-end">
        <div className="flex flex-row justify-between gap-8 bg-gradient-to-r from-gray-600 to-black">
          <div className="mx-8 lg:w-1/2 ">
            <ul className="">
              <li className="flex flex-row gap-4 my-6 items-center">
                <img
                  className="w-12 h-12 mt-1 p-0 m border-solid border-2 bg-white border-white rounded-full"
                  src={fence_2}
                  alt="fence"
                />
                <p className="font-bold text-white text-md lg:text-lg">
                  Elevate your property's security and aesthetics with our
                  exquisite fencing and gate solutions.
                </p>
              </li>
              <li className="flex flex-row gap-4 my-6 items-center">
                <img
                  className="w-12 h-12 mt-1 p-0 border-solid border-2 bg-white border-white rounded-full"
                  src={patio}
                  alt="patio"
                />
                <p className="font-bold text-white text-md lg:text-lg">
                  Transform your outdoor space into a haven of relaxation and
                  entertainment with our skillfully designed patios.
                </p>
              </li>
              <li className="flex flex-row gap-4 my-6 items-center">
                <img
                  className="w-12  h-12 mt-1 p-0 border-solid border-2 bg-white border-white rounded-full"
                  src={paving}
                  alt="paving"
                />
                <p className="font-bold text-white text-md lg:text-lg">
                  Infuse character and durability into your landscape with our
                  precision brickwork.
                </p>
              </li>
              <li className="flex flex-row gap-4 my-6 items-center">
                <img
                  className="w-12  h-12 mt-1 p-0 border-solid border-2 bg-white border-white rounded-full"
                  src={woodBoard}
                  alt="wood-board"
                />
                <p className="font-bold text-white text-md lg:text-lg">
                  Unleash the potential of your outdoor living with our custom
                  decking solutions.
                </p>
              </li>
              <li className="flex flex-row gap-4 my-6 items-center">
                <img
                  className="w-12  h-12 mt-1 p-0 border-solid border-2 bg-white border-white rounded-full"
                  src={lawnMower}
                  alt="lawnMower"
                />
                <p className="font-bold text-white text-md lg:text-lg">
                  Experience the lush greenery of a well-maintained lawn with
                  our turfing services.
                </p>
              </li>
              <li className="flex flex-row gap-4 my-6 items-center">
                <img
                  className="w-12  h-12 mt-1 p-0 border-solid border-2 bg-white border-white rounded-full"
                  src={plant}
                  alt="plant"
                />
                <p className="font-bold text-white text-md lg:text-lg">
                  Curate a breathtaking landscape with our expert planting
                  services.
                </p>
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex lg:flex-col w-auto h-auto items-center justify-center">
            <div className="flex flex-row">
              <img className="max-w-72 h-64 " src={bricks} alt="bricks" />
              <img
                className="max-w-72 h-64 "
                src={deckingImage2}
                alt="decking"
              />
            </div>
            <div className="flex flex-row">
              <img className="w-72 h-64 " src={fence} alt="fence" />
              <img className="w-72 h-64 " src={garden} alt="garden" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
