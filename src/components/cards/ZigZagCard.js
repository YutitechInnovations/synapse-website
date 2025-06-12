import React from "react";
import Image from 'next/image';

const ZigZagCard = ({ items }) => {
  return (
    <div className="card flex flex-col card-p-0 overflow-hidden card-gap-0 rounded-t-[1.25rem] w-full max-w-[1240px] mx-auto">
      {items?.map((item, index) => {
        const isOdd = (index + 1) % 2 !== 0;
        return (
          <div
            key={index}
            className={`w-full flex flex-col ${isOdd ? 'md:flex-row' : 'md:flex-row-reverse'} justify-end h-auto md:min-h-[16rem] md:h-[22rem] ${index + 1 !== items.length ? "border-b border-[#004C4480]" : ""
              } overflow-hidden`}
          >
            <div className="w-full flex flex-col gap-4 md:gap-6 justify-center items-start px-4 md:px-8 lg:px-10">
              <h2 className="font-semibold text-xl md:text-2xl lg:text-4xl text-left">
                {item.title}
              </h2>
              <p className="text-left text-sm md:text-base lg:text-xl font-normal">
                {item.description}
              </p>
            </div>
            <div className="md:w-1/2 lg:w-[30%] h-[16rem] md:h-full flex items-center justify-center relative">
              <div className="relative w-full h-full">
                <Image
                  src={item.image}
                  fill
                  style={{ objectFit: 'cover', }}
                  alt={item.title}
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
