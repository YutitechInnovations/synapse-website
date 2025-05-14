import React from "react";
import Image from 'next/image';

const ZigZagCard = ({ items }) => {
  return (
    <div className="card w-full flex flex-col card-p-0 overflow-hidden card-gap-0 rounded-t-[1.25rem]">
      {items?.map((item, index) => {
        if ((index + 1) % 2 !== 0) {
          return (
            <div
              key={index}
              className={`w-full flex flex-col md:flex-row justify-end h-auto md:min-h-[18rem] md:h-[26.5rem] ${
                index + 1 !== items.length ? "border-bottom" : ""
              } overflow-hidden`}
            >
              <div className="w-full py-4 md:py-8 flex flex-col gap-4 md:gap-6 justify-center items-center px-2 md:px-6">
                <h2 className="font-semibold text-xl md:text-2xl lg:text-4xl">
                  {item.title}
                </h2>
                <p className="text-center text-sm md:text-base lg:text-xl font-normal">
                  {item.description}
                </p>
              </div>
              <div className="md:w-1/2 lg:w-[40%] h-[16rem] md:h-full">
                <Image
                  src={item.image}
                  width={400}
                  height={256}
                  className="h-full w-full object-cover"
                  alt={item.title}
                />
              </div>
            </div>
          );
        } else {
          return (
            <div
              key={index}
              className={`w-full flex flex-col-reverse md:flex-row h-auto md:min-h-[18rem] md:h-[26.5rem] ${
                index + 1 === items.length && "rounded-b-[1.25rem]"
              } ${
                index + 1 !== items.length ? "border-bottom" : ""
              } overflow-hidden`}
            >
              <div className="md:w-1/2 lg:w-[40%] h-[16rem] md:h-full">
                <Image
                  src={item.image}
                  width={400}
                  height={256}
                  className="h-full w-full object-cover"
                  alt={item.title}
                />
              </div>
              <div className="w-full py-4 md:py-8 flex flex-col gap-4 md:gap-6 justify-center items-center px-2 md:px-6">
                <h2 className="font-semibold text-xl md:text-2xl lg:text-4xl">{item.title}</h2>
                <p className="text-center text-sm md:text-base lg:text-xl font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ZigZagCard;
