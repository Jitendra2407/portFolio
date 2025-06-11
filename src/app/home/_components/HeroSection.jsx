import React from "react";
import ProfileImage from "./ProfileImage";
import HeroContent from "./HeroContent";
import CertificationBadge from "./CertificationBadge";

const HeroSection = () => {
  return (
    <main className="px-4 md:px-8 py-8 md:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Mobile Layout Order: Image First */}
          <ProfileImage className="lg:hidden order-1 flex justify-center" />

          {/* Left Content */}
          <HeroContent />

          {/* Center - Image with Paint Stroke - Desktop Only */}
          <ProfileImage className="hidden lg:block lg:col-span-4 order-1 lg:order-2" />

          {/* Right Content */}
          <CertificationBadge />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;