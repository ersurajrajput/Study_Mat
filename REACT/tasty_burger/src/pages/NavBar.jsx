import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

// Inline SVG for Hamburger Menu Icon (from Lucide/Feather standards)
const MenuIcon = (props) => (
  <svg 
    {...props} 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

// Inline SVG for Close (X) Icon
const CloseIcon = (props) => (
  <svg 
    {...props} 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <line x1="18" x2="6" y1="6" y2="18" />
    <line x1="6" x2="18" y1="6" y2="18" />
  </svg>
);


// Helper component for standard navigation links
const NavLink = ({ to, children, className = "", onClick }) => (
  <Link 
    to={to} 
    onClick={onClick}
    className={`text-text-light hover:text-white hover:bg-primary-dark px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out ${className}`}
  >
    {children}
  </Link>
);


export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to close the menu on link click (important for mobile UX)
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Effect to handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${isScrolled ? 'bg-secondary-dark' : 'bg-transparent'} text-text-light shadow-lg sticky top-0 z-50 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo/Brand Name */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-extrabold tracking-wider text-white" onClick={handleLinkClick}>
              <span className="text-accent-blue">A</span>pp
            </Link>
          </div>

          {/* Desktop Navigation Links (Visible on sm and up) */}
          <div className="hidden sm:flex items-center space-x-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            
            {/* Divider for Call-to-Action / Auth Links */}
            <span className="text-gray-500">|</span> 

            <NavLink 
              to="/Login"
              className="px-3 py-2 rounded-md font-medium transition duration-150 ease-in-out bg-primary-dark hover:bg-gray-700" 
            >
              Login
            </NavLink>
            
            {/* Highlighted CTA */}
            <Link 
              to="/SignUp" 
              className="px-4 py-2 rounded-md text-primary-dark font-semibold transition duration-150 ease-in-out bg-accent-blue hover:bg-accent-hover shadow-md"
            >
              Sign Up
            </Link>

          
          </div>

          {/* Mobile Menu Button (Visible only on mobile) */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-text-light hover:text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-blue"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <CloseIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel (Hidden by default on mobile, shown when isOpen is true) */}
      <div className={`sm:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
          <MobileNavLink to="/" onClick={handleLinkClick}>Home</MobileNavLink>
          <MobileNavLink to="/about" onClick={handleLinkClick}>About</MobileNavLink>
          <MobileNavLink to="/contact" onClick={handleLinkClick}>Contact</MobileNavLink>
          
          <div className="h-px bg-primary-dark my-2 rounded-full" /> 
          
          <MobileNavLink 
            to="/Login" 
            onClick={handleLinkClick}
            className="bg-primary-dark hover:bg-gray-700"
          >
            Login
          </MobileNavLink>
          <MobileNavLink 
            to="/SignUp" 
            onClick={handleLinkClick}
            className="text-primary-dark font-bold bg-accent-blue hover:bg-accent-hover"
          >
            Sign Up
          </MobileNavLink>
          <MobileNavLink to={"/404"} onClick={handleLinkClick} className="text-xs opacity-50">404 Debug</MobileNavLink>
        </div>
      </div>
    </nav>
  );
}

// Helper component for mobile navigation links (different styling)
const MobileNavLink = ({ to, children, className = "", onClick }) => (
  <Link 
    to={to} 
    onClick={onClick}
    className={`block px-3 py-2 rounded-md text-base font-medium text-text-light hover:text-white hover:bg-primary-dark transition duration-150 ease-in-out ${className}`}
  >
    {children}
  </Link>
);