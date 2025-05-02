import React from "react";

const ZigZagCard = ({ items }) => {
  return (
    <div className="card w-full max-w-[1240px] flex flex-col card-p-0 overflow-hidden card-gap-0 rounded-t-[20px]">
      {items?.map((item, index) => {
        if ((index + 1) % 2 !== 0) {
          return (
            <div
              key={index}
              className={`w-full flex flex-col md:flex-row justify-end h-auto md:h-[424px] ${
                index + 1 !== items.length ? "border-bottom" : ""
              } overflow-hidden`}
            >
              <div className="w-full py-6 md:py-[125px] flex flex-col gap-6 md:gap-[30px] justify-center items-center px-6 md:px-[134px]">
                <h2 className="font-semibold text-2xl md:text-4xl">
                  {item.title}
                </h2>
                <p className="text-center text-base md:text-xl font-normal">
                  {item.description}
                </p>
              </div>
              <div className="md:w-full lg:w-[636px] h-[424px]">
                <img
                  src={item.image}
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
              className={`w-full flex flex-col-reverse md:flex-row h-auto md:h-[424px] ${
                index + 1 === items.length && "rounded-b-[20px]"
              } ${
                index + 1 !== items.length ? "border-bottom" : ""
              } overflow-hidden`}
            >
              <div className="md:w-full lg:w-[636px] h-[424px]">
                <img
                  src={item.image}
                  className="h-full w-full object-cover"
                  alt={item.title}
                />
              </div>
              <div className="w-full py-6 md:py-[125px] flex flex-col gap-6 md:gap-[30px] justify-center items-center px-6 md:px-[134px]">
                <h2 className="font-semibold text-4xl">{item.title}</h2>
                <p className="text-center text-base md:text-xl font-normal">
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
