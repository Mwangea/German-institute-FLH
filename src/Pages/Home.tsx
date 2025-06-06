import { ChevronDown } from "lucide-react";
import { carouselData } from "../Data/carouselData";
import { useState, useEffect } from "react";
import ApplyModal from "../Forms/ApplyModal";
import ProgramsSection from "../Components/ProgramsSection";
import AboutSection from "../Components/AboutSection";
import WhyChooseSection from "../Components/WhyChooseSection";
import TestimonialSection from "../Components/TestimonialSection";
import FAQSection from "../Components/FAQSection";
//import  { ExpandingBanner } from "../Components/LocationsSection";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === carouselData.length - 1 ? 0 : prev + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
    <div className="relative h-screen w-full overflow-hidden">
      {/* Carousel */}
      <div className="absolute inset-0">
        {carouselData.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[4000ms] ease-out ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-125"
            }`}
            style={{ transformOrigin: "center center" }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[4000ms] ease-out"
              style={{
                backgroundImage: `url(${slide.image})`,
                transform: index === currentSlide ? "scale(1)" : "scale(1.25)",
              }}
            />
            {/* Gradient Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center z-10">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-16 sm:pt-20">
          <h1 className="text-3xl shadow-text sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-serif text-white mb-6 sm:mb-8 transition-all duration-700 animate-fade-in leading-tight tracking-tight">
            {carouselData[currentSlide].title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto mb-8 sm:mb-10 lg:mb-12 transition-all duration-700 animate-fade-in delay-500 leading-relaxed font-light font-serif">
            {carouselData[currentSlide].subtitle}
          </p>

          {/* Button Group */}
          <div className="mt-8 flex flex-row items-center justify-center gap-4 sm:gap-6 transition-all duration-700 animate-fade-in delay-700">
            <a className="w-[90%] sm:w-auto">
              <button 
              onClick={() => setIsApplyModalOpen(true)}
              className="w-full bg-button-50  text-white hover:bg-button-orange px-6 py-3 sm:px-10 lg:px-12 sm:py-3.5 rounded-lg font-semibold font-serif transition-all duration-300 text-sm sm:text-lg transform hover:scale-105 shadow-md whitespace-nowrap">
                Apply Now
              </button>
            </a>

            <a href="/programs" className="w-[90%] sm:w-auto">
              <button className="w-full border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 sm:px-10 lg:px-12 sm:py-3.5 rounded-lg font-semibold font-serif transition-all duration-300 text-sm sm:text-lg transform hover:scale-105 backdrop-blur-sm whitespace-nowrap">
                Explore Programs
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <button
        onClick={scrollToFeatures}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-10"
        aria-label="Scroll Down"
      >
        <ChevronDown size={28} className="sm:w-8 sm:h-8" />
      </button>

      <ApplyModal 
        isOpen={isApplyModalOpen} 
        onClose={() => setIsApplyModalOpen(false)} 
      />
      
    </div>
    
    <div className="min-h-screen bg-gray-50">
      {/* June Intake Video Section */}
      <div className="bg-white py-16 px-6 sm:px-12 md:px-20 lg:px-32 text-center">
  <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 font-serif">
    🎓 June Intake 2025 Now Open
  </h2>
  <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
    Get a glimpse of our vibrant international community and world-class programs. Apply now to join our June 2025 cohort!
  </p>
  <div className="max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden shadow-lg">
    <video
      autoPlay
      muted
      loop
      controls
      className="w-full h-full object-cover"
      src="/juneIntake.mp4"
    >
      <source  type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>
      
      <ProgramsSection />
      <AboutSection />
      <WhyChooseSection />
      <TestimonialSection />
      
      <FAQSection />
    </div>
    </>
  );
};

export default Home;
