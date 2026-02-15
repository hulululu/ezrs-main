import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.jpg';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="ezRS Logo" className="w-10 h-10" />
          <a href="#" className="text-2xl font-display font-bold text-white tracking-wider">
            ezRS
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">Services</a>
          <a href="#explore" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">ezRS Explore</a>
          <a href="#blog" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">Insight Blog</a>
          <a href="#contact" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">Contact</a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a href="#demo" className="px-5 py-2 bg-primary hover:bg-planet-blue text-white text-sm font-semibold rounded transition-colors shadow-lg hover:shadow-cyan-500/20">
            Start Demo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-white/10 absolute w-full">
          <div className="px-6 py-4 flex flex-col space-y-4">
            <a href="#services" className="text-gray-300 hover:text-primary" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#explore" className="text-gray-300 hover:text-primary" onClick={() => setMenuOpen(false)}>ezRS Explore</a>
            <a href="#blog" className="text-gray-300 hover:text-primary" onClick={() => setMenuOpen(false)}>Insight Blog</a>
            <a href="#contact" className="text-gray-300 hover:text-primary" onClick={() => setMenuOpen(false)}>Contact</a>
            <a href="#demo" className="text-primary font-semibold" onClick={() => setMenuOpen(false)}>Start Demo</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
