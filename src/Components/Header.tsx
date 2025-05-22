import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { 
    label: 'Programs', 
    path: '/programs',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Language Courses', path: '/programs/languages' },
      { label: 'Hospitality Management', path: '/programs/hospitality' },
      { label: 'Professional Development', path: '/programs/professional' }
    ]
  },
  { label: 'About Us', path: '/about' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Campus Life', path: '/campus-life' },
  { label: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleNavClick = (path) => {
    console.log('Navigate to:', path);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gray-800 text-gray-100 py-2 text-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-400" />
                <span>info@iflhm.edu</span>
              </div>
              
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span className="text-gray-300">Follow Us:</span>
              <div className="flex space-x-2">
                <a href="#" className="w-6 h-6 bg-primary-600 rounded hover:bg-primary-700 transition-colors flex items-center justify-center">
                  <span className="text-white text-xs font-bold">f</span>
                </a>
                <a href="#" className="w-6 h-6 bg-primary-600 rounded hover:bg-primary-700 transition-colors flex items-center justify-center">
                  <span className="text-white text-xs font-bold">ig</span>
                </a>
                <a href="#" className="w-6 h-6 bg-primary-600 rounded hover:bg-primary-700 transition-colors flex items-center justify-center">
                  <span className="text-white text-xs font-bold">tw</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-lg py-3' 
            : 'bg-white shadow-md py-4'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo and Institution Name */}
            <a href="/" className="flex items-center group">
              <div className="relative">
                <img 
                  src="/photo.png" 
                  alt="IFLHM Logo" 
                  className="h-18 w-18 transition-transform duration-300 group-hover:scale-105" 
                />
              </div>
              <div className="ml-4">
                <h1 className="font-bold text-xl text-gray-800 leading-tight">
                  International Institute of Foreign Languages
                </h1>
                <h2 className="font-semibold text-lg text-gray-700 leading-tight">
                  and Hospitality Management
                </h2>
                <p className="text-sm text-primary-600 font-medium">
                  Empowering Local and Global Careers
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {NAV_ITEMS.map((item, index) => (
                <div key={item.label} className="relative group">
                  {item.hasDropdown ? (
                    <>
                      <button
                        className="flex items-center px-4 py-2 font-medium text-gray-700 hover:text-primary-600 transition-colors duration-300 relative"
                        onClick={() => handleDropdownToggle(index)}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                        
                        {/* Hover underline */}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 transition-all duration-300 ${
                        activeDropdown === index ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
                      }`}>
                        {item.dropdownItems?.map((dropItem) => (
                          <a
                            key={dropItem.label}
                            href={dropItem.path}
                            className="block px-4 py-3 text-gray-600 hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200 font-medium"
                            onClick={() => handleNavClick(dropItem.path)}
                          >
                            {dropItem.label}
                          </a>
                        ))}
                      </div>
                    </>
                  ) : (
                    <a
                      href={item.path}
                      className="px-4 py-2 font-medium text-gray-700 hover:text-primary-600 transition-colors duration-300 relative group"
                      onClick={() => handleNavClick(item.path)}
                    >
                      <span>{item.label}</span>
                      
                      {/* Hover underline */}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  )}
                </div>
              ))}
              
              {/* CTA Button */}
              <a
                href="/apply"
                className="ml-6 bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                onClick={() => handleNavClick('/apply')}
              >
                Apply Now
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out ${
            mobileMenuOpen 
              ? 'max-h-screen opacity-100' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="bg-gray-50 border-t border-gray-200">
            <div className="px-6 py-4 space-y-2">
              {NAV_ITEMS.map((item, index) => (
                <div key={item.label}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        className="w-full flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-white hover:text-primary-600 rounded-lg font-medium transition-colors duration-200"
                        onClick={() => handleDropdownToggle(index)}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`} />
                      </button>
                      <div className={`ml-4 space-y-1 transition-all duration-300 ${
                        activeDropdown === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                      }`}>
                        {item.dropdownItems?.map((dropItem) => (
                          <a
                            key={dropItem.label}
                            href={dropItem.path}
                            className="block py-2 px-4 text-gray-600 hover:text-primary-600 font-medium"
                            onClick={() => handleNavClick(dropItem.path)}
                          >
                            {dropItem.label}
                          </a>
                        ))}
                      </div>
                    </>
                  ) : (
                    <a
                      href={item.path}
                      className="block py-3 px-4 text-gray-700 hover:bg-white hover:text-primary-600 rounded-lg font-medium transition-colors duration-200"
                      onClick={() => handleNavClick(item.path)}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              
              <a
                href="/apply"
                className="block w-full bg-secondary-500 hover:bg-secondary-600 text-white text-center py-3 px-4 rounded-lg font-semibold mt-4 transition-colors duration-300"
                onClick={() => handleNavClick('/apply')}
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;