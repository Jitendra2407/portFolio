import React from "react";
import Image from "next/image";

const ProfileImage = ({
  className = "",
  imageSrc = "/portfolio2.png",
  imageAlt = "Jitendra Profile",
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Paint stroke background */}
      <svg
        className="absolute inset-0 w-full h-full z-0"
        viewBox="0 0 300 400"
        fill="none"
      >
        <path
          d="M50 50 Q150 30 250 80 Q280 150 240 220 Q200 280 160 320 Q100 350 60 300 Q30 200 50 50 Z"
          fill="#2D9B96"
          opacity="0.9"
        />
        <path
          d="M70 40 Q170 20 270 70 Q300 140 260 210 Q220 270 180 310 Q120 340 80 290 Q50 190 70 40 Z"
          fill="#2D9B96"
          opacity="0.7"
        />
      </svg>

      {/* Profile Image Container */}
      <div className="relative z-10 mx-auto w-48 h-60 md:w-80 md:h-96 rounded-lg overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 768px) 192px, 256px"
        />
      </div>
    </div>
  );
};

export default ProfileImage;
