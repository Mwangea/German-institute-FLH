import { ChevronDown } from "lucide-react"
import { carouselData } from "../Data/carouselData"
import { useState, useEffect } from "react"



const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Carousel */}
      <div className="absolute inset-0">
        {carouselData.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-primary-900/50"></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="container mx-auto px-4 pt-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-500 animate-fade-in">
            {carouselData[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 transition-all duration-500 animate-fade-in delay-300">
            {carouselData[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 transition-all duration-500 animate-fade-in delay-500">
            <button className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-3 rounded-md font-medium transition-colors duration-200">
              Apply Now
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-md font-medium transition-colors duration-200">
              Explore Programs
            </button>
          </div>
        </div>
      </div>
      
      {/* Carousel Indicators */}
      {/* <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-2">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-10' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
      
      {/* Scroll Down Button */}
      <button 
        onClick={scrollToFeatures}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll Down"
      >
        <ChevronDown size={32} />
      </button>
    </div>
  )
}

export default Home