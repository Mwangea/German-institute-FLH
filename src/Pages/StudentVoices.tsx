import React, { useState } from "react";
import { Play, Quote, ChevronRight, X } from "lucide-react";

interface StudentTestimonial {
  id: number;
  name: string;
  program: string;
  quote: string;
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
    program: "Student Studying in German",
    quote:
      "Studying in Germany has been an incredible journey. I strongly encourage others to learn languages through the Institution of Foreign Language and Hospitality Management—it has helped me immensely in adapting, communicating, and thriving in a new environment.",
    videoUrl: "Daniel.mp4",
    thumbnail: "Daniel.png",
  },

  {
    id: 3,
    name: "XYZ",
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
                <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors duration-300 text-sm sm:text-base">
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

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Voices of Success
            </h2>
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
                      <p className="text-xl text-gray-700 italic mb-6">
                        "{testimonial.quote}"
                      </p>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
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
          </div>
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
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors duration-300">
                Request Information
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentVoicesPage;
