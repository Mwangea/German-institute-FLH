import React, { useState, useEffect } from "react";
import {
  Play,
  Star,
  Award,
  BookOpen,
  Users,
  Globe2,
  Target,
  ChevronRight,
} from "lucide-react";
//import CountUp from "react-countup";
import Faculty from "../Components/Facaulty";
import SectionTitle from "../Components/SectionTitle";
import SEO from '../Components/SEO';


const facilities = [
  {
    title: "State-of-the-Art Training Kitchens",
    description: "Professional-grade equipment and modern cooking facilities",
    image: "https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg",
  },
  {
    title: "Mock Hotel Rooms",
    description: "Realistic training environment for hospitality students",
    image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
  },
  {
    title: "Language Labs",
    description: "Advanced technology for immersive language learning",
    image: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg",
  },
  {
    title: "Conference Center",
    description: "Modern facilities for events and practical training",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
  },
];

const videos = [
  {
    url: "teacher.mp4",
    type: "video/mp4",
  },
  {
    url: "food.mp4",
    type: "video/mp4",
  },
  {
    url: "student.mp4",
    type: "video/mp4",
  },
];

const AboutPage: React.FC = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        setIsTransitioning(false);
      }, 500);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SEO 
        title="About Us"
        description="Learn about the International Institute of Foreign Languages and Hospitality Management - our mission, vision, and commitment to excellence in education."
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] bg-gray-900 overflow-hidden">
          {/* Video background */}
          <video
            key={currentVideoIndex}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
              isTransitioning ? "opacity-0" : "opacity-50"
            }`}
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src={videos[currentVideoIndex].url}
              type={videos[currentVideoIndex].type}
            />
          </video>

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-gray-900/50" />

          {/* Content container - added justify-center to center the content block horizontally */}
          <div className="relative h-full container mx-auto px-4 flex items-center justify-center">
            {/* Text and buttons container - already has text-center and button flex container has justify-center */}
            <div className="max-w-3xl text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">
                Shaping the Future of Hospitality Education
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                With world-class faculty, innovative programs, and industry
                partnerships, we're committed to developing the next generation of
                hospitality leaders.
              </p>
              {/* Buttons container - uses flex and justify-center to center buttons */}
              <div className="flex gap-4 flex-wrap justify-center">
                <button className="inline-flex items-center gap-2 px-4 py-4 sm:px-8 sm:py-4 bg-button-50 text-white rounded-full hover:bg-orange-600 transition-colors duration-300">
                  <Play className="w-5 h-5" />
                  Watch Our Story
                </button>
                <button className="inline-flex items-center gap-2 px-5 py-4 sm:px-8 sm:py-4 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors duration-300">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </section>

        

        {/* Mission & Vision Section */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center">
                      <Target className="w-6 h-6 text-accent-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    To equip individuals with practical language skills and hospitality expertise that empower them to thrive in global
                    environments, foster cultural understanding, and enhance
                    career opportunities in the international job market.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center">
                      <Globe2 className="w-6 h-6 text-accent-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    To be a renowned institution recognized for excellence in
                    Language Training and Hospitality Management, shaping globally
                    competent professionals who contribute to international
                    understanding and industry growth.
                  </p>
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg"
                  alt="Campus life"
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              
              <SectionTitle title="Our Core Values" />

              <p className="text-lg text-gray-700">
                These principles guide everything we do, from curriculum
                development to student support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Star className="w-8 h-8 text-primary-500" />,
                  title: "Excellence",
                  description:
                    "Committed to delivering the highest quality education and maintaining exceptional standards across all programs.",
                },
                {
                  icon: <Award className="w-8 h-8 text-primary-500" />,
                  title: "Innovation",
                  description:
                    "Embracing new technologies and teaching methods to prepare students for the future of hospitality.",
                },
                {
                  icon: <Users className="w-8 h-8 text-primary-500" />,
                  title: "Diversity",
                  description:
                    "Celebrating different cultures and perspectives, creating an inclusive learning environment.",
                },
                {
                  icon: <BookOpen className="w-8 h-8 text-primary-500" />,
                  title: "Practical Learning",
                  description:
                    "Combining theoretical knowledge with hands-on experience for comprehensive skill development.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              
              <SectionTitle title="World class Facilities" />

              <p className="text-lg text-gray-700">
                Our campus features modern facilities designed to provide hands-on
                learning experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl"
                >
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {facility.title}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      {facility.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Faculty Section */}
        <Faculty />


        {/* CTA Section */}
        <section className="py-24 bg-primary-500">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Begin Your Journey in Hospitality Excellence
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join our community of future hospitality leaders and start your
                path to success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-500 rounded-full hover:bg-gray-100 transition-colors duration-300">
                  Apply Now
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-button-50 text-white rounded-full hover:bg-orange-700 transition-colors duration-300">
                  Download Brochure
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
