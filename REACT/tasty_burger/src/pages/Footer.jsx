import React from 'react';

// Inline SVG Icons (Lucide/Feather Style for consistency)
const TwitterIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2-2.1 0-3.9-.7-5.4-2.1 1.4.1 2.8-.1 4-.8-1.9 0-3.6-.9-4.7-2.5.8.1 1.6 0 2.4-.1-1.9-.2-3.6-1.1-4.7-2.7.7.1 1.5.2 2.2.2-1.8-1.2-2.8-3-2.8-5.7 0-1.5.3-2.9 1-4.1 2.7 3.4 5.9 5.8 10 6-1-.5-1.7-1.7-1.7-3.2 0-3.5 2.5-6.3 5.8-6.3 1.7 0 3.3.7 4.4 1.9 1.4-.2 2.7-.8 3.8-1.5-.5 1.5-1.5 2.8-2.8 3.6 1.3-.1 2.6-.5 3.7-1zm-6 3a4 4 0 0 1-4 4h-.5s0 0 0 0z"/></svg>
);

const GitHubIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22s-4-1.2-4-5.2v-2.2c0-1.8-2.6-2-3-2 .5-1.1.2-3.2 0-3.7 1.3-1.2 4-1 4-1v-2c-1.1-2.4-3-1.8-3-1.8-2.2-.4-1.4-1.6-1.4-1.6.4-.9 1.1-.9 1.1-.9 1.4 0 2.3.8 2.6 1.3.3.4.6.6 1.2.6s.9-.2 1.2-.4c.3-.6 1.4-1.6 1.6-1.7.3-.1.4-.2.4-.2.4-.2.8-.3 1.2-.3 1 0 1.9.4 2.6 1.1 1 .9 1.6 2.6 1.6 4.3 0 4-4 5.2-4 5.2zM2 12C2 6.48 6.48 2 12 2s10 4.48 10 10c0 4.42-2.86 8.2-6.83 9.5-1-.18-1.65-.45-1.9-.9-.1-.2-.1-.5 0-.7.05-.1.14-.3.14-.5v-2.4c0-.6-.3-1.2-.8-1.6-2.5.6-5-1.2-5-4 0-1.1.6-2 1.4-2.7-.1-.2-.4-1.3.1-2.7 0 0 1-.3 3.3 1s3.7 1.7 4.2 1.7c.6 0 1.1-.1 1.6-.4.5-.3.8-.7 1-1.2 0-.2.1-.4.1-.6 0-.3-.1-.5-.2-.7-1-1.2-2.3-2-3.8-2.4-.3-.1-.6-.2-.9-.3-.5-.1-.9-.2-1.3-.2-1.2 0-2.3.3-3.3.9z"/></svg>
);

const LinkedInIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);


export default function Footer() {
  const year = new Date().getFullYear();

  const navSections = [
    {
      title: "Solutions",
      links: ["Marketing", "Analytics", "Commerce", "Data"],
    },
    {
      title: "Support",
      links: ["Pricing", "Documentation", "Guides", "API Status"],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Jobs", "Press"],
    },
    {
      title: "Legal",
      links: ["Claims", "Privacy", "Terms", "Policies"],
    },
  ];

  return (
    <footer className="bg-secondary-dark border-t border-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Responsive Columns */}
        {/* grid-cols-2 (mobile): Company Info takes 2/2. Links stack 2x2. */}
        {/* md:grid-cols-6 (desktop): Company Info takes 2/6. Links take 1/6 each. */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 pb-8">
          
          {/* Company Info / Logo Spot (Takes full width on mobile, 2 columns on desktop) */}
          <div className="col-span-2 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4 tracking-wider">
              <span className="text-accent-blue">Your</span>Brand
            </h3>
            <p className="text-text-light text-sm pr-0 md:pr-10">
              Making the web a more elegant and functional place, one component at a time. Built with React and the power of Tailwind CSS.
            </p>
            
            {/* Social Links with Icons */}
            <div className="flex space-x-6 mt-6">
                <a href="#" aria-label="Twitter" className="text-text-light hover:text-accent-blue transition duration-200 p-1 rounded-full">
                    <TwitterIcon />
                </a>
                <a href="#" aria-label="GitHub" className="text-text-light hover:text-accent-blue transition duration-200 p-1 rounded-full">
                    <GitHubIcon />
                </a>
                <a href="#" aria-label="LinkedIn" className="text-text-light hover:text-accent-blue transition duration-200 p-1 rounded-full">
                    <LinkedInIcon />
                </a>
            </div>
          </div>

          {/* Navigation Sections */}
          {/* On mobile, these will form the second column of the 2-column grid (2 sections wide) 
              On desktop, they each take 1/6 of the total width */}
          {navSections.map((section) => (
            <div key={section.title} className="col-span-1 md:col-span-1">
              <h4 className="text-base font-semibold text-white uppercase mb-4 tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-text-light text-sm hover:text-accent-blue transition duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <p className="text-sm text-text-light opacity-75">
            &copy; {year} Your Brand, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}