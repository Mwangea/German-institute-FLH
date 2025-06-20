import React, { useState } from "react";
import { Play, Quote, ChevronRight, X } from "lucide-react";
import SectionTitle from "../Components/SectionTitle";
<<<<<<< HEAD
import SEO from '../Components/SEO';
=======
>>>>>>> 060b1ce7abdc06bd39dde140897ff81cbd322821

interface StudentTestimonial {
  id: number;
  name: string;
  program: string;
  quote?: string;
  videoUrl: string;
  thumbnail: string;
}

const testimonials: StudentTestimonial[] = [
  {
    id: 1,
    name: "Damaris",
    program: "Student Studying In Germany",
    quote:
      "Studying in Germany has been a life-changing experience. The comprehensive language training and cultural immersion through the Institution of Foreign Language and Hospitality Management have broadened my global outlook and communication skills immensely.",
    videoUrl: "Damaris.mp4",
    thumbnail: "Damaris.png",
  },

  {
    id: 2,
    name: "Daniel",
    program: "Student Studying in Germany",
    quote:
      "Studying in Germany has been an incredible journey. I strongly encourage others to learn languages through the Institution of Foreign Language and Hospitality Management—it has helped me immensely in adapting, communicating, and thriving in a new environment.",
    videoUrl: "Daniel.mp4",
    thumbnail: "Daniel.png",
  },

  {
    id: 3,
    name: "Zablon Ledama kimong'o.",
    program:
      "Languages and Culinary Arts through the Institution of Foreign Language and Hospitality Management",
    quote:
      "Coming from Kenya to Germany, my journey has been truly life-changing. The Institution of Foreign Language and Hospitality Management gave me the language skills and hospitality training that opened doors to work abroad. I'm now working in Germany as a chef, and I strongly urge others to take this opportunity—it can transform your future.",
    videoUrl: "chef.mp4",
    thumbnail: "chef.png",
  },
  
];

const StudentVoicesPage: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<StudentTestimonial | null>(
    null
  );
  const [, setIsPlaying] = useState(false);

  const handleVideoClick = (testimonial: StudentTestimonial) => {
    setSelectedVideo(testimonial);
    setIsPlaying(true);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    setIsPlaying(false);
  };

  const chefVideo = {
    id: 100,
    name: "Master Chef",
    program: "Culinary Arts Graduate",
    videoUrl: "new-chef.mp4",
    thumbnail: "new-chef.png"
  };
<<<<<<< HEAD

  return (
    <>
      <SEO 
        title="Student Voices"
        description="Hear from our students about their experiences at the International Institute of Foreign Languages and Hospitality Management. Real stories from our diverse community."
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
          {/* Parallax Background Image */}
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full  bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url(/our-student-success-stories.jpg)",
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
                  Our Students' Stories
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
                  Hear directly from our students about their transformative
                  journeys, experiences, and how our institution helped shape
                  their careers in the hospitality industry.
                </p>
                <div className="flex flex-row justify-between gap-4 w-full max-w-md mx-auto">
                  <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-3 bg-button-50 text-white rounded-full hover:bg-orange-600 transition-colors duration-300 text-sm sm:text-base">
                    <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                    Watch Stories
                  </button>
                  <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base">
                    Share Your Story
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-r from-orange-50 to-amber-50">
          <div className="container mx-auto px-4">
            <SectionTitle 
            className="text-center justify-center"
              title="Chef Spotlight" 
             // icon="👨‍🍳"
            />
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Watch our professional chefs in action at our state-of-the-art culinary facilities
=======

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        {/* Parallax Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full  bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(/our-student-success-stories.jpg)",
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
                Our Students' Stories
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
                Hear directly from our students about their transformative
                journeys, experiences, and how our institution helped shape
                their careers in the hospitality industry.
              </p>
              <div className="flex flex-row justify-between gap-4 w-full max-w-md mx-auto">
                <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-3 bg-button-50 text-white rounded-full hover:bg-orange-600 transition-colors duration-300 text-sm sm:text-base">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  Watch Stories
                </button>
                <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base">
                  Share Your Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
          className="text-center justify-center"
            title="Chef Spotlight" 
           // icon="👨‍🍳"
          />
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Watch our professional chefs in action at our state-of-the-art culinary facilities
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div 
              className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group shadow-lg"
              onClick={() => handleVideoClick(chefVideo)}
            >
              <img
                src={chefVideo.thumbnail}
                alt="Professional Chef Demonstration"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center border-2 border-white">
                    <Play className="w-10 h-10 text-white fill-current" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 text-white text-lg font-medium bg-black/40 px-3 py-1 rounded">
                {chefVideo.name}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            {/* <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Voices of Success
            </h2>
            <div className="w-24 h-1 bg-button-50 mx-auto mb-6"></div> */}
            <SectionTitle title="Voices of Success" />

            <p className="text-lg text-gray-700">
              Our students come from diverse backgrounds and pursue various
              paths in hospitality. Each story is unique, yet they all share a
              common thread of transformation and achievement.
>>>>>>> 060b1ce7abdc06bd39dde140897ff81cbd322821
            </p>
            
            <div className="max-w-4xl mx-auto">
              <div 
                className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group shadow-lg"
                onClick={() => handleVideoClick(chefVideo)}
              >
                <img
                  src={chefVideo.thumbnail}
                  alt="Professional Chef Demonstration"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center border-2 border-white">
                      <Play className="w-10 h-10 text-white fill-current" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white text-lg font-medium bg-black/40 px-3 py-1 rounded">
                  {chefVideo.name}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              {/* <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Voices of Success
              </h2>
              <div className="w-24 h-1 bg-button-50 mx-auto mb-6"></div> */}
              <SectionTitle title="Voices of Success" />

              <p className="text-lg text-gray-700">
                Our students come from diverse backgrounds and pursue various
                paths in hospitality. Each story is unique, yet they all share a
                common thread of transformation and achievement.
              </p>
            </div>

            <div className="space-y-24">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`flex flex-col lg:flex-row gap-12 items-center ${
                    index % 2 === 0 ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Video Side */}
                  <div className="w-full lg:w-1/2">
                    <div
                      className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group shadow-xl"
                      onClick={() => handleVideoClick(testimonial)}
                    >
                      <img
                        src={testimonial.thumbnail}
                        alt={testimonial.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <Play className="w-10 h-10 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quote Side */}
                  <div className="w-full lg:w-1/2">
                    <div className="bg-gray-50 p-8 rounded-xl relative">
                      <Quote className="absolute top-4 left-4 w-8 h-8 text-primary-200" />
                      <div className="ml-8">
                        <p className="text-base text-gray-700 italic mb-6">
                          "{testimonial.quote}"
                        </p>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {testimonial.name}
                          </h3>
                          <p className="text-primary-600">
                            {testimonial.program}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
<<<<<<< HEAD
              ))}
            </div>
=======

                {/* Quote Side */}
                <div className="w-full lg:w-1/2">
                  <div className="bg-gray-50 p-8 rounded-xl relative">
                    <Quote className="absolute top-4 left-4 w-8 h-8 text-primary-200" />
                    <div className="ml-8">
                      <p className="text-base text-gray-700 italic mb-6">
                        "{testimonial.quote}"
                      </p>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {testimonial.name}
                        </h3>
                        <p className="text-primary-600">
                          {testimonial.program}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
>>>>>>> 060b1ce7abdc06bd39dde140897ff81cbd322821
          </div>
        </section>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl mx-auto">
              <button
                onClick={closeVideo}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300"
                aria-label="Close video"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <video
                  className="w-full h-full"
                  src={selectedVideo.videoUrl}
                  controls
                  autoPlay
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        )}

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 bg-primary-500">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join our community of ambitious learners and future hospitality
                leaders. Your journey to excellence starts here.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-500 rounded-full hover:bg-gray-100 transition-colors duration-300">
                  Apply Now
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-button-50 text-white rounded-full hover:bg-orange-700 transition-colors duration-300">
                  Request Information
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
=======
      {/* CTA Section */}
      <section className="py-20 bg-primary-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join our community of ambitious learners and future hospitality
              leaders. Your journey to excellence starts here.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-500 rounded-full hover:bg-gray-100 transition-colors duration-300">
                Apply Now
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-button-50 text-white rounded-full hover:bg-orange-700 transition-colors duration-300">
                Request Information
                <ChevronRight className="w-5 h-5" />
              </button>
>>>>>>> 060b1ce7abdc06bd39dde140897ff81cbd322821
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default StudentVoicesPage;
