import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup attempt:', { name, email, password, confirmPassword });
  };

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

          {/* Large Signup Text with Glow Effect (Adjusted size for mobile) */}
          <h1 className="text-7xl sm:text-8xl md:text-[8rem] font-extrabold mb-4 leading-none
                        text-accent-blue drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
              SIGNUP
          </h1>

          {/* Headline Message */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">
              Join Us Today
          </h2>

          {/* Explanation Message */}
          <p className="text-base sm:text-lg mb-8 text-text-light opacity-80">
              Create your account to get started.
          </p>

          {/* Signup Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="sr-only">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="w-full p-3 rounded-lg bg-primary-dark border border-gray-700 focus:ring-accent-blue focus:border-accent-blue outline-none text-text-light placeholder-gray-500"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full p-3 rounded-lg bg-primary-dark border border-gray-700 focus:ring-accent-blue focus:border-accent-blue outline-none text-text-light placeholder-gray-500"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="w-full p-3 rounded-lg bg-primary-dark border border-gray-700 focus:ring-accent-blue focus:border-accent-blue outline-none text-text-light placeholder-gray-500"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                className="w-full p-3 rounded-lg bg-primary-dark border border-gray-700 focus:ring-accent-blue focus:border-accent-blue outline-none text-text-light placeholder-gray-500"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-6 py-3 text-lg font-semibold rounded-full text-center transition duration-300
                                bg-accent-blue text-primary-dark shadow-lg shadow-blue-500/40
                                hover:bg-accent-hover hover:shadow-blue-600/60 transform hover:scale-[1.03]"
              >
                Sign Up
              </button>
            </div>
          </form>

          {/* Login Link */}
          <div className="mt-8 pt-6 border-t border-gray-700/50">
            <p className="text-sm text-gray-500">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-accent-blue hover:text-accent-hover">
                Sign in here
              </Link>
            </p>
          </div>

      </div>

    </div>
  );
}
