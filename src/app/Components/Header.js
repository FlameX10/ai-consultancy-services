'use client';
import { useState, useEffect } from 'react';
import { Menu, X, Grid3X3, ChevronRight } from 'lucide-react';

export default function DarkPurpleHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'backdrop-blur-xl' 
        : 'backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="w-8 h-8 border border-[#BC6FF1]/0 rounded-sm flex items-center justify-center group-hover:border-[#892CDC]/0 transition-colors duration-300">
                <Grid3X3 className="h-4 w-4 text-[#BC6FF1] group-hover:text-[#892CDC] transition-colors duration-300" />
              </div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#892CDC] rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="flex flex-col">
              <span className="text-lg font-light text-white tracking-wide">
                AutoFlow
              </span>
              <span className="text-xs font-light text-[#BC6FF1] -mt-1 tracking-widest uppercase">
                AI Agency
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {[
              { name: 'Home', id: 'hero' },
              { name: 'Services', id: 'services' },
              { name: 'About', id: 'about' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <button 
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-light text-gray-300 hover:text-[#BC6FF1] transition-colors duration-300 relative group"
              >
                {item.name}
                <div className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[#892CDC]/0 to-[#BC6FF1]/0 group-hover:w-full transition-all duration-500" />
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="group flex items-center space-x-2 px-6 py-2 border border-[#892CDC] text-[#892CDC] hover:bg-[#892CDC] hover:text-white transition-all duration-300 text-sm font-light"
            >
              <span>Get Started</span>
              <ChevronRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 border border-[#892CDC]/0 hover:border-[#892CDC]/0 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-4 w-4 text-[#BC6FF1]" />
            ) : (
              <Menu className="h-4 w-4 text-[#BC6FF1]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-6 space-y-6 bg-gradient-to-br from-[#000000] via-[#1a0b2e] to-[#000000]/95 backdrop-blur-sm">
            {[
              { name: 'Home', id: 'hero' },
              { name: 'Services', id: 'services' },
              { name: 'About', id: 'about' },
              { name: 'Contact', id: 'contact' }
            ].map((item, index) => (
              <button 
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-sm font-light text-gray-300 hover:text-[#BC6FF1] transition-colors duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </button>
            ))}
            
            <div className="pt-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="flex items-center space-x-2 px-6 py-2 border border-[#892CDC]/0 text-[#892CDC] hover:bg-[#892CDC]/0 hover:text-white transition-all duration-300 text-sm font-light"
              >
                <span>Get Started</span>
                <ChevronRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(188,111,241,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(188,111,241,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }} />
      </div>
    </header>
  );
}
