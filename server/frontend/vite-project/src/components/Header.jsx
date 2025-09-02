import React from 'react';

const Header = () => {
  return (
    // <header className="relative flex flex-col items-center justify-center min-h-screen bg-white text-center px-4 sm:px-6 lg:px-8">
   <header className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-20">      


      {/* AI Feature Badge */}
      <div className="mb-5">
        <span className="bg-blue-100 text-blue-700 text-sm sm:text-base px-4 py-1 rounded-full font-medium">
          New: AI feature integrated
        </span>
      </div>

      {/* Main Heading */}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight max-w-3xl">
        Your own <span className="text-blue-600">blogging</span> platform.
      </h2>

      {/* Subtitle */}
      <p className="text-gray-600 max-w-2xl mb-8 text-base sm:text-lg lg:text-xl">
        This is your space to think out loud, to share what matters, and to write without filters.
        Whether it's one word or a thousand, your story starts right here.
      </p>

      {/* Search Box */}
      <div className="flex w-full max-w-lg flex-col sm:flex-row gap-3 sm:gap-0">
        <input
          type="text"
          placeholder="Search for blogs"
          className="flex-grow px-5 py-3 border border-gray-300 rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-blue-400 text-base sm:text-lg"
        />
        <button className="px-5 py-3 bg-blue-600 text-white font-semibold rounded-md sm:rounded-r-md sm:rounded-l-none hover:bg-blue-700 text-base sm:text-lg">
          Search
        </button>
      </div>
    </header>
  );
};

export default Header;
