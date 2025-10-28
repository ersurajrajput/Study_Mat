import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [showOtp, setShowOtp] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Handle forget password logic here
    console.log('Forget password attempt:', { email });
    setShowOtp(true);
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return; // Only allow single digit
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join('');
    // Handle OTP verification logic here
    console.log('OTP verification attempt:', { otp: otpValue });
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

          {/* Large Forget Password Text with Glow Effect (Adjusted size for mobile) */}
          <h1 className="text-6xl sm:text-7xl md:text-[6rem] font-extrabold mb-4 leading-none
                        text-accent-blue drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
              RESET
          </h1>

          {/* Headline Message */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">
              {showOtp ? 'Enter OTP' : 'Forgot Your Password?'}
          </h2>

          {/* Explanation Message */}
          <p className="text-base sm:text-lg mb-8 text-text-light opacity-80">
              {showOtp ? 'Enter the 6-digit OTP sent to your email.' : 'Enter your email address and we\'ll send you an OTP to reset your password.'}
          </p>

          {/* Forget Password Form */}
          {!showOtp ? (
            <form className="space-y-6" onSubmit={handleEmailSubmit}>
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
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-lg font-semibold rounded-full text-center transition duration-300
                                  bg-accent-blue text-primary-dark shadow-lg shadow-blue-500/40
                                  hover:bg-accent-hover hover:shadow-blue-600/60 transform hover:scale-[1.03]"
                >
                  Send OTP
                </button>
              </div>
            </form>
          ) : (
            <form className="space-y-6" onSubmit={handleOtpSubmit}>
              <div>
                <label className="sr-only">
                  OTP
                </label>
                <div className="flex justify-center space-x-2">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength="1"
                      className="w-12 h-12 text-center text-2xl font-bold rounded-lg bg-primary-dark border border-gray-700 focus:ring-accent-blue focus:border-accent-blue outline-none text-text-light placeholder-gray-500"
                      placeholder="0"
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value.replace(/\D/g, ''))}
                      required
                    />
                  ))}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-lg font-semibold rounded-full text-center transition duration-300
                                  bg-accent-blue text-primary-dark shadow-lg shadow-blue-500/40
                                  hover:bg-accent-hover hover:shadow-blue-600/60 transform hover:scale-[1.03]"
                >
                  Verify OTP
                </button>
              </div>
            </form>
          )}

          {/* Back to Login Link */}
          <div className="mt-8 pt-6 border-t border-gray-700/50">
            <p className="text-sm text-gray-500">
              Remember your password?{' '}
              <Link to="/login" className="font-medium text-accent-blue hover:text-accent-hover">
                Sign in here
              </Link>
            </p>
          </div>

      </div>

    </div>
  );
}
