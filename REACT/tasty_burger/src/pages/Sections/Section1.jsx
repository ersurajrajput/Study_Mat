import React from 'react';

function Section1() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1981&q=80')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
            <span className="text-accent-blue drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]">
              TASTY
            </span>
            <br />
            <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              BURGER
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl md:text-3xl mb-8 text-gray-200 font-light leading-relaxed">
            Delicious food delivered fast to your doorstep
          </p>

          {/* Description */}
          <p className="text-lg sm:text-xl mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Experience the perfect blend of juicy burgers, fresh ingredients, and lightning-fast delivery.
            Order now and satisfy your cravings in minutes!
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-accent-blue text-primary-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-hover transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-blue-500/50 hover:shadow-blue-600/70">
              Order Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary-dark transition-all duration-300 transform hover:scale-105">
              View Menu
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
