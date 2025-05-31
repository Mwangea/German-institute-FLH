import { Link } from "react-router-dom";
import { Award, Play, Users, Briefcase, Globe } from "lucide-react";
import HospitalityPrograms from "../Components/HospitalityPrograms";


const HospitalityMgt = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Parallax */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        {/* Parallax Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg')",
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              transform: "translateZ(0)",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-800/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-4 md:mb-6">
                Professional Hospitality Education
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
                Accredited programs designed in partnership with leading hotel
                chains to prepare you for management positions in the global
                hospitality industry.
              </p>
              <div className="flex flex-row justify-between gap-4 w-full max-w-md mx-auto">
                <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors duration-300 text-sm sm:text-base">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  Virtual Tour
                </button>
                <Link
                  to="/apply"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-500 mb-4">
              Why Choose Our Programs?
            </h2>
            <p className="text-xl text-gray-600">
              Industry-recognized training with practical experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <Briefcase className="w-8 h-8 text-primary-500 mr-3" />
                <h3 className="text-xl font-semibold">Industry Partnerships</h3>
              </div>
              <p className="text-gray-600">
                Direct recruitment pathways with international hotel chains
                including Marriott, Hilton, and Serena Hotels.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-primary-500 mr-3" />
                <h3 className="text-xl font-semibold">Practical Training</h3>
              </div>
              <p className="text-gray-600">
                Minimum 600 hours of mandatory internship in 4-5 star properties
                with evaluation by industry supervisors.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8 text-primary-500 mr-3" />
                <h3 className="text-xl font-semibold">Global Curriculum</h3>
              </div>
              <p className="text-gray-600">
                Internationally benchmarked curriculum meeting AHLEI and City &
                Guilds standards.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-primary-500 mr-3" />
                <h3 className="text-xl font-semibold">Dual Certification</h3>
              </div>
              <p className="text-gray-600">
                Graduate with both academic certification and professional
                competency certificates.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <HospitalityPrograms />

      {/* Industry Partners Section */}

      {/* Logo Marquee Container */}
      <div className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-500 mb-4">
              Industry Partners
            </h2>
            <p className="text-xl text-gray-600">
              Our graduates work with leading hospitality brands worldwide
            </p>
          </div>

          {/* Logo Marquee Container */}
          <div className="relative w-full overflow-hidden h-32">
            {/* First Marquee */}
            <div className="absolute flex items-center h-full animate-marquee whitespace-nowrap">
              {[
                "/Marriott_International.png",
                "/serena.png",
                "/sarova.svg",
                "/Hyatt_Logo.png",
                "/ihg-logo-nav.avif",
                "/HOTEL_ZOO.png",
                // Duplicate the logos to prevent empty space during loop
                "/Marriott_International.png",
                "/serena.png",
                "/sarova.svg",
                "/Hyatt_Logo.png",
                "/ihg-logo-nav.avif",
                "/HOTEL_ZOO.png",
              ].map((logo, index) => (
                <div
                  key={`logo-${index}`}
                  className="inline-flex items-center justify-center mx-4 md:mx-8 p-4 bg-white rounded-lg shadow-sm h-24 w-40 md:w-48"
                >
                  <img
                    src={logo}
                    alt="Partner logo"
                    className="max-h-12 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Admissions CTA */}
      <div className="bg-primary-500 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Begin Your Hospitality Career
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Applications are open for our next intake. Limited spaces available.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/apply"
              className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Apply Online
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all"
            >
              Speak to Advisor
            </Link>
          </div>

          <div className="mt-8 text-white/80">
            <p>Upcoming intake: June 15, 2025</p>
            <p className="mt-2">Early application deadline: May 31, 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalityMgt;
