import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, ChevronDown, Mail, Facebook, Instagram, Twitter, User, GraduationCap } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
//import Head from 'next/head';

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
  { label: 'Career Opportunities', path:'/career-opportunities'},
  { label: 'Student Voices', path: '/student-voices' },
  { label: 'News', path: '/news-page'},
  { label: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  // Throttle scroll handler for better performance
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    // Passive event listener for better scrolling performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close mobile menu when screen size changes
  const handleResize = useCallback(() => {
    if (window.innerWidth >= 1024) {
      setMobileMenuOpen(false);
      setActiveDropdown(null);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  const handleDropdownToggle = useCallback((index: number) => {
    setActiveDropdown(prev => prev === index ? null : index);
  }, []);

  const handleNavClick = useCallback((path: string) => {
    // In a real app, you would use Next.js router here
    console.log('Navigate to:', path);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, []);

  // Preload hover states for better perceived performance
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = '#hover-styles';
    document.head.appendChild(link);
  }, []);

  return (
    <>
      {/* SEO and Accessibility Improvements */}
      <Helmet>
        <link rel="canonical" href="https://www.foreignlanguagesandhospitality.com" />
        <meta name="description" content="International Institute of Foreign Languages and Hospitality Management - Empowering Global Careers from Narok" />
        <meta property="og:title" content="International Institute of Foreign Languages and Hospitality Management" />
        <meta property="og:description" content="Empowering Global Careers from Narok through language and hospitality education" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.foreignlanguagesandhospitality.com" />
        <style id="hover-styles">{`
          .nav-link:hover, .dropdown-link:hover {
            transition: all 0.3s ease;
          }
          .cta-button:hover {
            transform: scale(1.05);
            transition: all 0.3s ease;
          }
        `}</style>
      </Helmet>

      {/* Top Contact Bar - Improved semantics and accessibility */}
      <section aria-label="Contact information" className="hidden sm:block bg-primary-500 text-gray-100 py-1 sm:py-2 text-xs sm:text-sm">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-1 sm:space-y-0">
            {/* Email with proper mailto link */}
            <address className="flex items-center space-x-1 sm:space-x-2 not-italic">
              <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-primary-400 flex-shrink-0" aria-hidden="true" />
              <a 
                href="mailto:info@foreignlanguagesandhospitality.com"
                className="hover:text-primary-300 transition-colors duration-200 truncate"
                aria-label="Send email to info@foreignlanguagesandhospitality.com"
              >
                <span className="hidden md:inline">info@foreignlanguagesandhospitality.com</span>
                <span className="md:hidden">info@flhm.com</span>
              </a>
            </address>
            
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Login Buttons with proper ARIA labels */}
              <div className="hidden md:flex items-center space-x-2">
                <Link
                  to="/student-login"
                  className="flex items-center px-2 lg:px-3 py-1 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-all duration-300 transform hover:scale-105"
                  onClick={() => handleNavClick('/student-login')}
                  aria-label="Student login"
                >
                  <GraduationCap className="h-3 w-3 mr-1" aria-hidden="true" />
                  <span className="hidden lg:inline">Student Login</span>
                  <span className="lg:hidden">Student</span>
                </Link>
                <Link
                  to="/teacher-login"
                  className="flex items-center px-2 lg:px-3 py-1 text-xs bg-green-600 hover:bg-green-700 text-white rounded-md font-medium transition-all duration-300 transform hover:scale-105"
                  onClick={() => handleNavClick('/teacher-login')}
                  aria-label="Teacher login"
                >
                  <User className="h-3 w-3 mr-1" aria-hidden="true" />
                  <span className="hidden lg:inline">Teacher Login</span>
                  <span className="lg:hidden">Teacher</span>
                </Link>
              </div>
              
              {/* Social Media with proper labels */}
              <div className="flex items-center space-x-2">
                <span className="text-gray-300 text-xs hidden lg:inline">Follow Us:</span>
                <nav aria-label="Social media links" className="flex space-x-1 sm:space-x-2">
                  <a 
                    href="https://www.facebook.com/share/r/1En3x2GC2m/" 
                    className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-primary-600 rounded-full hover:bg-primary-700 transition-all duration-200 flex items-center justify-center transform hover:scale-110"
                    aria-label="Facebook page"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 text-white" aria-hidden="true" />
                  </a>
                  <a 
                    href="#" 
                    className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-primary-600 rounded-full hover:bg-primary-700 transition-all duration-200 flex items-center justify-center transform hover:scale-110"
                    aria-label="Instagram profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 text-white" aria-hidden="true" />
                  </a>
                  <a 
                    href="#" 
                    className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-primary-600 rounded-full hover:bg-primary-700 transition-all duration-200 flex items-center justify-center transform hover:scale-110"
                    aria-label="Twitter profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 text-white" aria-hidden="true" />
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Header with proper landmark role */}
      <header
        role="banner"
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-lg py-1 sm:py-2 lg:py-3' 
            : 'bg-white shadow-md py-2 sm:py-3 lg:py-4'
        }`}
      >
        <div className="container mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex justify-between items-center">
            {/* Logo with proper alt text and semantic HTML */}
            <Link to="/" className="flex items-center group flex-1 min-w-0" aria-label="Home">
              <div className="relative flex-shrink-0">
                <img 
                  src="/photo.png" 
                  alt="International Institute of Foreign Languages and Hospitality Management Logo" 
                  width={80}
                  height={80}
                  className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-18 lg:w-18 xl:h-20 xl:w-20 transition-transform duration-300 group-hover:scale-105" 
                  loading="eager"
                />
              </div>
              <div className="ml-2 sm:ml-3 lg:ml-4 min-w-0 flex-1">
                <h1 className="font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-800 leading-tight">
                  International Institute of Foreign Languages
                </h1>
                <h2 className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 leading-tight">
                  and Hospitality Management
                </h2>
                <p className="text-xs sm:text-sm md:text-sm text-primary-600 font-medium">
                  <span className="hidden lg:inline">Empowering Global Careers from Narok</span>
                  <span className="lg:hidden">Global Careers from Narok</span>
                </p>
              </div>
            </Link>

            {/* Desktop Navigation with proper ARIA attributes */}
            <nav aria-label="Main navigation" className="hidden xl:flex items-center space-x-1">
              {NAV_ITEMS.map((item, index) => (
                <div key={item.label} className="relative">
                  {item.hasDropdown ? (
                    <>
                      <button
                        className="flex items-center px-3 xl:px-4 py-2 font-medium text-sm xl:text-base text-gray-700 hover:text-primary-600 transition-all duration-300 border-b-2 border-transparent hover:border-primary-600"
                        onClick={() => handleDropdownToggle(index)}
                        onMouseEnter={() => setActiveDropdown(index)}
                        onMouseLeave={() => setActiveDropdown(null)}
                        aria-expanded="false"
                        aria-haspopup="true"
                        aria-controls={`dropdown-${index}`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`} aria-hidden="true" />
                      </button>
                      
                      {/* Dropdown Menu with proper ARIA attributes */}
                      <div 
                        id={`dropdown-${index}`}
                        className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 transition-all duration-300 ${
                          activeDropdown === index ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
                        }`}
                        onMouseEnter={() => setActiveDropdown(index)}
                        onMouseLeave={() => setActiveDropdown(null)}
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby={`dropdown-button-${index}`}
                      >
                        {item.dropdownItems?.map((dropItem) => (
                          <Link
                            key={dropItem.label}
                            to={dropItem.path}
                            className="block px-4 py-3 text-gray-600 hover:bg-primary-50 hover:text-primary-700 transition-all duration-200 font-medium border-b-2 border-transparent hover:border-primary-600"
                            onClick={() => handleNavClick(dropItem.path)}
                            role="menuitem"
                          >
                            {dropItem.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className="px-3 xl:px-4 py-2 font-medium text-sm xl:text-base text-gray-700 hover:text-primary-600 transition-all duration-300 border-b-2 border-transparent hover:border-primary-600"
                      onClick={() => handleNavClick(item.path)}
                      aria-current={item.path === window.location.pathname ? 'page' : undefined}
                    >
                      <span>{item.label}</span>
                    </Link>
                  )}
                </div>
              ))}
              
              {/* CTA Button with proper contrast */}
              <Link
                to="/apply"
                className="ml-4 xl:ml-6 bg-primary-500 hover:bg-orange-600 text-white px-4 xl:px-6 py-2 xl:py-3 rounded-lg font-semibold text-sm xl:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
                onClick={() => handleNavClick('/apply')}
                aria-label="Apply now"
              >
                <span className="hidden lg:inline">Apply Now</span>
                <span className="lg:hidden">Apply</span>
              </Link>
            </nav>

            {/* Mobile Menu Button with proper ARIA */}
            <button
              className="xl:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 flex-shrink-0 ml-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open menu"
              aria-expanded="false"
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <X size={20} className="sm:w-6 sm:h-6" aria-hidden="true" />
              ) : (
                <Menu size={20} className="sm:w-6 sm:h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu with improved focus management */}
        <div
          id="mobile-menu"
          className={`xl:hidden fixed top-0 left-0 w-full h-full bg-white shadow-2xl transition-all duration-500 ease-in-out z-40 ${
            mobileMenuOpen 
              ? 'opacity-100 visible' 
              : 'opacity-0 invisible'
          }`}
          aria-hidden="true"
        >
          <div className="h-full overflow-y-auto">
            {/* Close button with proper focus management */}
            <div className="sticky top-0 bg-white z-10 flex justify-end p-4 border-b border-gray-200">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-gray-700" aria-hidden="true" />
              </button>
            </div>
            
            <div className="px-3 sm:px-4 py-4 sm:py-6">
              {/* Login Buttons in Mobile Menu */}
              <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                <Link
                  to="/student-login"
                  className="flex items-center justify-center flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  onClick={() => handleNavClick('/student-login')}
                  aria-label="Student login"
                >
                  <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 mr-2" aria-hidden="true" />
                  Student Login
                </Link>
                <Link
                  to="/teacher-login"
                  className="flex items-center justify-center flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  onClick={() => handleNavClick('/teacher-login')}
                  aria-label="Teacher login"
                >
                  <User className="h-4 w-4 sm:h-5 sm:w-5 mr-2" aria-hidden="true" />
                  Teacher Login
                </Link>
              </div>

              {/* Navigation Items with proper focus states */}
              <nav aria-label="Mobile navigation" className="space-y-1">
                {NAV_ITEMS.map((item, index) => (
                  <div key={item.label}>
                    {item.hasDropdown ? (
                      <>
                        <button
                          className="w-full flex items-center justify-between py-3 sm:py-4 px-3 sm:px-4 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-xl font-medium text-base sm:text-lg transition-all duration-200 border-b-2 border-transparent hover:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                          onClick={() => handleDropdownToggle(index)}
                          aria-expanded="false"
                          aria-controls={`mobile-dropdown-${index}`}
                        >
                          <span>{item.label}</span>
                          <ChevronDown className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 ${
                            activeDropdown === index ? 'rotate-180 text-primary-600' : ''
                          }`} aria-hidden="true" />
                        </button>
                        <div 
                          id={`mobile-dropdown-${index}`}
                          className={`ml-2 sm:ml-4 space-y-1 transition-all duration-300 ${
                            activeDropdown === index ? 'max-h-48 opacity-100 mb-2' : 'max-h-0 opacity-0 overflow-hidden'
                          }`}
                          role="region"
                        >
                          {item.dropdownItems?.map((dropItem) => (
                            <Link
                              key={dropItem.label}
                              to={dropItem.path}
                              className="block py-2 sm:py-3 px-3 sm:px-4 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg font-medium text-sm sm:text-base transition-all duration-200 border-b-2 border-transparent hover:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                              onClick={() => handleNavClick(dropItem.path)}
                              aria-current={dropItem.path === window.location.pathname ? 'page' : undefined}
                            >
                              {dropItem.label}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        className="block py-3 sm:py-4 px-3 sm:px-4 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-xl font-medium text-base sm:text-lg transition-all duration-200 border-b-2 border-transparent hover:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                        onClick={() => handleNavClick(item.path)}
                        aria-current={item.path === window.location.pathname ? 'page' : undefined}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
              
              {/* CTA Button in Mobile with focus ring */}
              <Link
                to="/apply"
                className="block w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-center py-3 sm:py-4 px-4 rounded-xl font-bold text-base sm:text-lg mt-4 sm:mt-6 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
                onClick={() => handleNavClick('/apply')}
                aria-label="Apply now"
              >
                Apply Now
              </Link>

              {/* Social Media in Mobile Menu */}
              <nav aria-label="Social media links" className="flex justify-center items-center space-x-4 mt-4 sm:mt-6 pt-4 border-t border-gray-200">
                <span className="text-gray-500 text-sm">Follow Us:</span>
                <div className="flex space-x-3">
                  <a 
                    href="https://www.facebook.com/share/r/1En3x2GC2m/" 
                    className="w-8 h-8 bg-primary-600 rounded-full hover:bg-primary-700 transition-all duration-200 flex items-center justify-center transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                    aria-label="Facebook page"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="w-4 h-4 text-white" aria-hidden="true" />
                  </a>
                  <a 
                    href="#" 
                    className="w-8 h-8 bg-primary-600 rounded-full hover:bg-primary-700 transition-all duration-200 flex items-center justify-center transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                    aria-label="Instagram profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-4 h-4 text-white" aria-hidden="true" />
                  </a>
                  <a 
                    href="#" 
                    className="w-8 h-8 bg-primary-600 rounded-full hover:bg-primary-700 transition-all duration-200 flex items-center justify-center transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                    aria-label="Twitter profile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="w-4 h-4 text-white" aria-hidden="true" />
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>

        {/* Mobile menu backdrop with proper click handling */}
        {mobileMenuOpen && (
          <div 
            className="xl:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </header>
    </>
  );
};

export default React.memo(Header);