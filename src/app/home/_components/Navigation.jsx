import React from "react";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between px-4 md:px-8 py-6">
      <div
        className="text-xl md:text-2xl font-bold text-gray-800"
        style={{ fontFamily: "cursive" }}
      >
        Jitendra
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-8">
        <a
          href="#services"
          className="px-4 py-2 border-2 border-teal-500 text-teal-500 rounded-full hover:bg-teal-500 hover:text-white transition-colors"
        >
          SERVICES
        </a>
        <a
          href="#works"
          className="text-gray-600 hover:text-gray-800 font-medium"
        >
          WORKS
        </a>
        <a
          href="#notes"
          className="text-gray-600 hover:text-gray-800 font-medium"
        >
          NOTES
        </a>
        <a
          href="#experience"
          className="text-gray-600 hover:text-gray-800 font-medium"
        >
          EXPERIENCE
        </a>
      </div>

      {/* Mobile Navigation Button */}
      <div className="lg:hidden">
        <button className="w-8 h-8 flex flex-col justify-center items-center space-y-1">
          <span className="w-6 h-0.5 bg-gray-600"></span>
          <span className="w-6 h-0.5 bg-gray-600"></span>
          <span className="w-6 h-0.5 bg-gray-600"></span>
        </button>
      </div>

      {/* Desktop Contact Info */}
      <div className="hidden md:flex items-center space-x-4">
        <span className="hidden lg:block text-gray-600">
          +91 7488197567
        </span>
        <div className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;