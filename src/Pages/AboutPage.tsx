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

// interface Instructor {
//   id: number;
//   name: string;
//   role: string;
//   image: string;
//   bio: string;
//   expertise: string[];
//   education: string[];
//   achievements: string[];
//   socialLinks?: {
//     linkedin?: string;
//     twitter?: string;
//     website?: string;
//   };
// }

// interface Accreditation {
//   id: number;
//   name: string;
//   logo: string;
//   description: string;
// }

// const accreditations: Accreditation[] = [
//   {
//     id: 1,
//     name: "International Hospitality Council",
//     logo: "https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg",
//     description: "Recognized for excellence in hospitality education worldwide",
//   },
//   {
//     id: 2,
//     name: "World Tourism Organization",
//     logo: "https://images.pexels.com/photos/327541/pexels-photo-327541.jpeg",
//     description: "Certified provider of tourism and hospitality education",
//   },
//   {
//     id: 3,
//     name: "Global Education Standards Board",
//     logo: "https://images.pexels.com/photos/327542/pexels-photo-327542.jpeg",
//     description: "Meeting highest standards in educational excellence",
//   },
// ];

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

// const instructors: Instructor[] = [
//   {
//     id: 1,
//     name: "Dr. Sarah Anderson",
//     role: "Head of Hospitality Management",
//     image: "https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg",
//     bio: "Dr. Anderson brings over 15 years of experience in luxury hotel management and hospitality education. Her research focuses on sustainable tourism and innovative hospitality practices.",
//     expertise: [
//       "Luxury Hotel Management",
//       "Sustainable Tourism",
//       "Strategic Planning",
//     ],
//     education: [
//       "Ph.D. in Hospitality Management, Cornell University",
//       "MBA in International Business, INSEAD",
//       "BS in Hotel Administration, École hôtelière de Lausanne",
//     ],
//     achievements: [
//       "Best Educator Award 2024",
//       "Published author of 'Future of Luxury Hospitality'",
//       "Consultant for leading international hotel chains",
//     ],
//     socialLinks: {
//       linkedin: "https://linkedin.com",
//       twitter: "https://twitter.com",
//       website: "https://example.com",
//     },
//   },
//   {
//     id: 2,
//     name: "Prof. Michael Chen",
//     role: "Director of Culinary Arts",
//     image: "https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg",
//     bio: "Prof. Chen is a globally recognized culinary expert with experience in Michelin-starred restaurants. He specializes in fusion cuisine and modern cooking techniques.",
//     expertise: [
//       "Advanced Culinary Techniques",
//       "Restaurant Management",
//       "Menu Development",
//     ],
//     education: [
//       "Master in Culinary Arts, Le Cordon Bleu",
//       "BA in Restaurant Management, CIA",
//       "Advanced Wine Certification, Court of Master Sommeliers",
//     ],
//     achievements: [
//       "Former Executive Chef at 3-Michelin Star Restaurant",
//       "James Beard Award Winner",
//       "Host of 'Modern Cuisine Masterclass' Series",
//     ],
//     socialLinks: {
//       linkedin: "https://linkedin.com",
//       twitter: "https://twitter.com",
//     },
//   },
//   {
//     id: 3,
//     name: "Dr. Emma Rodriguez",
//     role: "Head of Language Department",
//     image: "https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg",
//     bio: "Dr. Rodriguez specializes in innovative language teaching methodologies and cross-cultural communication. She has developed several successful language programs for hospitality professionals.",
//     expertise: [
//       "Language Teaching Methodology",
//       "Cross-Cultural Communication",
//       "Curriculum Development",
//     ],
//     education: [
//       "Ph.D. in Applied Linguistics, Stanford University",
//       "MA in TESOL, Columbia University",
//       "BA in Modern Languages, Universidad de Barcelona",
//     ],
//     achievements: [
//       "Developer of 'Hospitality Language Training Program'",
//       "Author of bestselling language textbooks",
//       "International Education Innovation Award 2023",
//     ],
//     socialLinks: {
//       linkedin: "https://linkedin.com",
//       website: "https://example.com",
//     },
//   },
// ];

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

      {/* Stats Section */}
      {/* <section className="py-12 sm:py-16 bg-white">
  <div className="container mx-auto px-4">
  
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
    
      <div className="text-center p-2 sm:p-0">
        <CountUp 
          end={25} 
          duration={3} 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-500 mb-1 sm:mb-2" 
        />
        <div className="text-xs sm:text-sm md:text-base text-gray-600">Years of Excellence</div>
      </div>
      
      
      <div className="text-center p-2 sm:p-0">
        <CountUp 
          end={50} 
          duration={3} 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-500 mb-1 sm:mb-2" 
        />
        <div className="text-xs sm:text-sm md:text-base text-gray-600">Expert Instructors</div>
      </div>
      
  
      <div className="text-center p-2 sm:p-0">
        <CountUp 
          end={2000} 
          duration={3} 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-500 mb-1 sm:mb-2" 
        />
        <div className="text-xs sm:text-sm md:text-base text-gray-600">Alumni Worldwide</div>
      </div>
      
    
      <div className="text-center p-2 sm:p-0">
        <CountUp 
          end={95} 
          duration={3} 
          suffix="%" 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-500 mb-1 sm:mb-2" 
        />
        <div className="text-xs sm:text-sm md:text-base text-gray-600">Employment Rate</div>
      </div>
    </div>
  </div>
</section> */}

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
            {/* <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-button-50 mx-auto mb-6"></div> */}
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
            {/* <h2 className="text-4xl font-bold text-gray-900 mb-6">
              World-Class Facilities
            </h2>
            <div className="w-24 h-1 bg-button-50 mx-auto mb-6"></div> */}
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

      {/* Accreditations Section */}
      {/* <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Accreditations
            </h2>
            <p className="text-lg text-gray-700">
              Recognized and accredited by leading international education
              bodies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accreditations.map((accreditation) => (
              <div
                key={accreditation.id}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <img
                  src={accreditation.logo}
                  alt={accreditation.name}
                  className="w-24 h-24 object-contain mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {accreditation.name}
                </h3>
                <p className="text-gray-700">{accreditation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

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
  );
};

export default AboutPage;
