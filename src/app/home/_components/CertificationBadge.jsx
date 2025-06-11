import React from "react";

const CertificationBadge = () => {
  return (
    <div className="lg:col-span-3 order-3 text-center lg:text-left">
      <div className="mb-8 md:mb-12">
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          I design beautifully simple things, And I love what I do.
        </p>
      </div>

      <div className="text-center">
        {/* Certification Badge */}
        <div className="inline-flex flex-col items-center mb-4">
          <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-gray-800 rounded-full flex items-center justify-center mb-2">
            <svg
              className="w-6 h-6 md:w-8 md:h-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
            </svg>
          </div>
          <div className="text-center">
            <div className="font-bold text-gray-800 text-xs md:text-sm">
              IDF CRETIFID
            </div>
            <div className="font-bold text-gray-800 text-xs md:text-sm">
              PROFATIONAL
            </div>
            <div className="font-bold text-gray-800 text-xs md:text-sm">
              UI/UX DESIGNER
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationBadge;