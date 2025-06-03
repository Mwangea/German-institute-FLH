import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Mail, Facebook, Instagram, Twitter, User, GraduationCap } from 'lucide-react';
//import path from 'path';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { 
    label: 'Programs', 
    path: '/programs',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Language Courses', path: '/programs/foreign-languages' },
      { label: 'Hospitality Management', path: '/programs/hospitality-management' },
      { label: 'German Exams', path: '/programs/german-exams' }
    ]
  },
  { label: 'About Us', path: '/about' },
  // { label: 'Admissions', path: '/admissions' },
  { label: 'Career Opportunities', path:'/career-opportunities'},
  { label: 'Student Voices', path: '/student-voices' },
  { label: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleNavClick = (path: string) => {
    console.log('Navigate to:', path);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Top Contact Bar - Hidden on small screens */}
      <div className="hidden md:block bg-gray-800 text-gray-100 py-2 text-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-400" />
                <a 
                  href="mailto:info@foreignlanguagesandhospitality.com"
                  className="hover:text-primary-300 transition-colors duration-200 text-xs sm:text-sm"
                >
                  info@foreignlanguagesandhospitality.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Login Buttons in Top Bar - Desktop only */}
              <div className="flex items-center space-x-2">
                <a
                  href="/student-login"
                  className="flex items-center px-3 py-1 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-all duration-300 transform hover:scale-105"
                  onClick={() => handleNavClick('/student-login')}
                >
                  <GraduationCap className="h-3 w-3 mr-1" />
                  Student Login
                </a>
                <a
                  href="/teacher-login"
                  className="flex items-center px-3 py-1 text-xs bg-green-600 hover:bg-green-700 text-white rounded-md font-medium transition-all duration-300 transform hover:scale-105"
                  onClick={() => handleNavClick('/teacher-login')}
                >
                  <User className="h-3 w-3 mr-1" />
                  Teacher Login
                </a>
              </div>
              
              {/* Social Media */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-300">Follow Us:</span>
                <div className="flex space-x-2">
                  <a href="#" className="w-8 h-8 bg-primary-600 rounded-full hover:bg-primary-700 transition-all duration-200 flex items-center justify-center transform hover:scale-110">
                    <Facebook className="w-4 h-4 text-white" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-primary-600 rounded-full hover:bg-primary-700 transition-all duration-200 flex items-center justify-center transform hover:scale-110">
                    <Instagram className="w-4 h-4 text-white" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-primary-600 rounded-full hover:bg-primary-700 transition-all duration-200 flex items-center justify-center transform hover:scale-110">
                    <Twitter className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-lg py-2 md:py-3' 
            : 'bg-white shadow-md py-3 md:py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            {/* Logo and Institution Name */}
            <a href="/" className="flex items-center group">
              <div className="relative">
                <img 
                  src="/photo.png" 
                  alt="IFLHM Logo" 
                  className="h-14 w-14 md:h-16 md:w-16 lg:h-18 lg:w-18 transition-transform duration-300 group-hover:scale-105" 
                />
              </div>
              <div className="ml-2 md:ml-4">
                <h1 className="font-bold text-sm md:text-lg lg:text-xl text-gray-800 leading-tight">
                  International Institute of Foreign Languages
                </h1>
                <h2 className="font-semibold text-xs md:text-base lg:text-lg text-gray-700 leading-tight">
                  and Hospitality Management
                </h2>
                <p className="text-xs md:text-sm text-primary-600 font-medium">
                  Empowering Global Careers from Narok
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {NAV_ITEMS.map((item, index) => (
                <div key={item.label} className="relative">
                  {item.hasDropdown ? (
                    <>
                      <button
                        className="flex items-center px-4 py-2 font-medium text-gray-700 hover:text-primary-600 transition-all duration-300 border-b-2 border-transparent hover:border-primary-600"
                        onClick={() => handleDropdownToggle(index)}
                        onMouseEnter={() => setActiveDropdown(index)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300" />
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div 
                        className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 transition-all duration-300 ${
                          activeDropdown === index ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
                        }`}
                        onMouseEnter={() => setActiveDropdown(index)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.dropdownItems?.map((dropItem) => (
                          <a
                            key={dropItem.label}
                            href={dropItem.path}
                            className="block px-4 py-3 text-gray-600 hover:bg-primary-50 hover:text-primary-700 transition-all duration-200 font-medium border-b-2 border-transparent hover:border-primary-600"
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
                      className="px-4 py-2 font-medium text-gray-700 hover:text-primary-600 transition-all duration-300 border-b-2 border-transparent hover:border-primary-600"
                      onClick={() => handleNavClick(item.path)}
                    >
                      <span>{item.label}</span>
                    </a>
                  )}
                </div>
              ))}
              
              {/* CTA Button */}
              <a
                href="/"
                className="ml-6 bg-button-50 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                onClick={() => handleNavClick('/apply')}
              >
                Apply Now
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-[88px] left-0 w-full bg-white shadow-2xl border-t border-gray-200 transition-all duration-500 ease-in-out z-40 ${
            mobileMenuOpen 
              ? 'max-h-[calc(100vh-88px)] opacity-100 visible overflow-y-auto' 
              : 'max-h-0 opacity-0 invisible overflow-hidden'
          }`}
        >
          <div className="px-4 py-6">
            {/* Login Buttons in Mobile Menu */}
            <div className="mb-6 flex flex-row space-x-3">
              <a
                href="/student-login"
                className="flex items-center justify-center flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                onClick={() => handleNavClick('/student-login')}
              >
                <GraduationCap className="h-5 w-5 mr-2" />
                Student Login
              </a>
              <a
                href="/teacher-login"
                className="flex items-center justify-center flex-1 px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                onClick={() => handleNavClick('/teacher-login')}
              >
                <User className="h-5 w-5 mr-2" />
                Teacher Login
              </a>
            </div>

            {/* Navigation Items */}
            <div className="space-y-1">
              {NAV_ITEMS.map((item, index) => (
                <div key={item.label}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        className="w-full flex items-center justify-between py-4 px-4 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-xl font-medium transition-all duration-200 border-b-2 border-transparent hover:border-primary-600"
                        onClick={() => handleDropdownToggle(index)}
                      >
                        <span className="text-lg">{item.label}</span>
                        <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${
                          activeDropdown === index ? 'rotate-180 text-primary-600' : ''
                        }`} />
                      </button>
                      <div className={`ml-4 space-y-1 transition-all duration-300 ${
                        activeDropdown === index ? 'max-h-48 opacity-100 mb-2' : 'max-h-0 opacity-0 overflow-hidden'
                      }`}>
                        {item.dropdownItems?.map((dropItem) => (
                          <a
                            key={dropItem.label}
                            href={dropItem.path}
                            className="block py-3 px-4 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition-all duration-200 border-b-2 border-transparent hover:border-primary-600"
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
                      className="block py-4 px-4 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-xl font-medium transition-all duration-200 border-b-2 border-transparent hover:border-primary-600"
                      onClick={() => handleNavClick(item.path)}
                    >
                      <span className="text-lg">{item.label}</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
            
            {/* CTA Button in Mobile */}
            <a
              href="/"
              className="block w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-center py-4 px-4 rounded-xl font-bold text-lg mt-6 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={() => handleNavClick('/apply')}
            >
              Apply Now
            </a>
          </div>
        </div>
      </header>

      {/* Mobile menu backdrop */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;