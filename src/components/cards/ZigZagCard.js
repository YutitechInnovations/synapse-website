import React from "react";
import Image from 'next/image';

const ZigZagCard = ({ items }) => {
  return (
    <div className="w-full flex flex-col gap-8 md:gap-12 px-2 sm:px-4 md:px-8 lg:px-0">
      {items?.map((item, index) => {
        const isOdd = (index + 1) % 2 !== 0;
        return (
          <div
            key={index}
            className={`w-full flex flex-col ${isOdd ? 'md:flex-row' : 'md:flex-row-reverse'} justify-end h-auto md:min-h-[18rem] md:h-[26.5rem] ${
              index + 1 !== items.length ? "border-b border-gray-200" : ""
            } overflow-hidden`}
          >
            <div className="w-full py-4 md:py-8 flex flex-col gap-4 md:gap-6 justify-center items-start px-2 md:pl-12 md:pr-8">
              <h2 className="font-semibold text-xl md:text-2xl lg:text-4xl text-left">
                {item.title}
              </h2>
              <p className="text-left text-sm md:text-base lg:text-xl font-normal">
                {item.description}
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-[40%] h-[200px] md:h-full flex items-center justify-center relative">
              <div className="relative w-full h-full">
                <Image
                  src={item.image}
                  fill
                  style={{ objectFit: 'cover', borderRadius: '0.75rem' }}
                  alt={item.title}
                  className="opacity-80"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ZigZagCard;
