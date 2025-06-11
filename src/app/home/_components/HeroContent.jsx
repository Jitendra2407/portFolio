import React from "react";

const HeroContent = () => {
  return (
    <div className="lg:col-span-5 order-2 lg:order-1 text-center lg:text-left">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6 md:mb-8">
        Hey There,
        <br />
        I'm Jitendra
      </h1>

      <div className="mb-6 md:mb-8">
        <p className="text-orange-500 text-base md:text-lg mb-2">
          jitendrathakur2478@gmail.com
        </p>
      </div>

      <div className="flex justify-center lg:justify-start">
        <div className="flex gap-2">
          <div className="text-4xl md:text-5xl font-bold text-gray-800">1</div>
          <div className="text-xs md:text-sm text-gray-600 uppercase mt-1">
            YEAR
            <br />
            EXPERIENCE
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;