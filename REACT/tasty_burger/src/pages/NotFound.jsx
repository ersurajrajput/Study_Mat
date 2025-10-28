import React from "react";
import { Link } from "react-router-dom"; // Assuming react-router-dom for SPA navigation

export default function NotFound() {
  return (
    // Outer container: Full height screen, centered content, dark background (using body class)
    <div className="flex items-center justify-center min-h-screen p-4">
      
      {/* Subtle Background Elements (Comets/Fragments) - Only visible on medium screens and up */}
      <div
          className="absolute top-10 right-10 w-16 h-16 bg-accent-blue/30 rounded-full blur-xl animate-bounce-slow opacity-50 hidden md:block"
          style={{ animationDelay: '0.5s' }}
      ></div>
      <div
          className="absolute bottom-10 left-10 w-10 h-10 bg-accent-blue/60 rounded-full blur-xl animate-bounce-slow opacity-50 hidden md:block"
          style={{ animationDelay: '1.5s' }}
      ></div>
      
      {/* Main Content Card - Scaled for responsiveness */}
      <div className="w-full max-w-xl p-8 md:p-12 bg-secondory-dark rounded-2xl shadow-2xl text-center border border-gray-700/50 relative z-10">

          {/* Large 404 Text with Glow Effect (Adjusted size for mobile) */}
          <h1 className="text-7xl sm:text-8xl md:text-[10rem] font-extrabold mb-4 leading-none 
                        text-accent-blue drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
              404
          </h1>

          {/* Headline Message */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">
              Oops! Lost In The Digital Void
          </h2>

          {/* Explanation Message */}
          <p className="text-base sm:text-lg mb-8 text-text-light opacity-80">
              It looks like the page you were looking for decided to take an unscheduled trip into deep space.
              The URL might be mistyped, or the link may have expired.
          </p>

          {/* Useful Actions/Buttons: Stacked on mobile, side-by-side on small screens and up */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              
              {/* Home Button (Primary CTA) */}
              <Link to="/" className="w-full sm:w-auto px-6 py-3 text-lg font-semibold rounded-full text-center transition duration-300
                              bg-accent-blue text-primary-dark shadow-lg shadow-blue-500/40
                              hover:bg-accent-hover hover:shadow-blue-600/60 transform hover:scale-[1.03]">
                  Go To Homepage
              </Link>

              {/* Support/Contact Button (Secondary CTA) */}
              <Link to="/contact" className="w-full sm:w-auto px-6 py-3 text-lg font-semibold rounded-full text-center transition duration-300
                              bg-primary-dark text-text-light border border-gray-700
                              hover:bg-gray-700 hover:border-gray-500 transform hover:scale-[1.03]">
                  Report This Issue
              </Link>
          </div>
 

      </div>

    </div>
  );
}

