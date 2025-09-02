import React from 'react';

const Newsletter = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-white text-center">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
        Never Miss a Blog!
      </h2>

      {/* Subtitle */}
      <p className="text-gray-600 text-base sm:text-lg mb-6">
        Subscribe to get the latest blog, new tech, and exclusive news.
      </p>

      {/* Form */}
      <form
        className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
          // TODO: handle subscribe logic
        }}
      >
        <input
          type="email"
          required
          placeholder="Enter your email id"
          className="w-full sm:w-auto flex-grow px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold rounded-md"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
