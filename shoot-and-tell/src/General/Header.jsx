import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const navLinks = [
    { href: "#about", label: "About Me" },
  { href: "/services", label: "Services", isRoute: true },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
  ];

  return (
    <header id="global-header" className="code-section bg-[#f9f6f2] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="block">
              <img
                src="/SATwDMA.png"
                alt="Shoot And Tell logo"
                className="h-28 py-2 w-auto"
                loading="lazy"
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-[var(--dark-text-color)] hover:text-[var(--primary-color)] font-medium transition-colors duration-200"
              >
                {label}
              </a>
            ))}
            <a
              href="/contact"
              className="bg-[var(--primary-color)] text-[var(--primary-button-text-color)] px-6 py-3 rounded-lg font-semibold hover:bg-[var(--primary-button-hover-bg-color)] hover:text-[var(--light-text-color)] transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Collaborate Now
            </a>
          </nav>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-[var(--dark-text-color)] hover:text-[var(--primary-color)] focus:outline-none transition-colors duration-200"
              aria-label="Toggle mobile menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
<div
  id="mobile-menu"
  className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
    menuOpen ? "max-h-screen" : "max-h-0"
  }`}
>
  <div className="bg-gradient-to-b from-[#f9f6f2] via-white to-[#f9f6f2] border-t border-[var(--light-border-color)] shadow-inner rounded-b-2xl px-4 pt-4 pb-6 space-y-4 animate-fadeIn">
    {/* Optional Header inside the mobile menu */}
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold text-[var(--dark-text-color)]">Menu</h2>
      <button
        onClick={toggleMenu}
        aria-label="Close menu"
        className="text-[var(--dark-text-color)] hover:text-[var(--primary-color)] transition-colors"
      >
        <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    {navLinks.map(({ href, label }) => (
      <a
        key={href}
        href={href}
        className="block px-4 py-3 text-[var(--dark-text-color)] hover:text-[var(--primary-color)] hover:bg-[var(--light-background-color)] rounded-xl font-medium transition-all duration-200 shadow-sm"
      >
        {label}
      </a>
    ))}

    <div className="pt-2">
      <a
        href="/contact"
        className="block w-full text-center bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent2-color)] text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
      >
        Collaborate Now
      </a>
    </div>
  </div>
</div>
    </header>
  );
};

export default Header;
