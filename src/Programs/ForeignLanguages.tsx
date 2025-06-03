import React from 'react';
import {  Clock, BookOpen, } from 'lucide-react';
import LanguageCard from '../Components/LanguageCard';
//import PageHeader from '../components/PageHeader';

// Define the language module type
interface LanguageModule {
  id: number;
  title: string;
  level: string;
  link: string;
  isAvailable: boolean;
}

// interface LanguageSchool {
//   id: number;
//   name: string;
//   location: string;
//   type: 'online' | 'in-person' | 'both';
//   pricing: {
//     group?: string;
//     private?: string;
//     other?: string;
//   };
//   description: string;
//   link?: string;
// }

const ForeignLanguages: React.FC = () => {
  // Language modules data
  const modules: LanguageModule[] = [
    { 
      id: 1, 
      title: "German Language Course", 
      level: "Beginner to Intermediate",
      link: "/courses/german",
      isAvailable: true
    },
    { 
      id: 2, 
      title: "English Language Course", 
      level: "Beginner to Advanced",
      link: "/courses/english",
      isAvailable: false
    },
    { 
      id: 3, 
      title: "Spanish Language Course", 
      level: "Beginner to Intermediate",
      link: "/courses/spanish",
      isAvailable: false
    },
    { 
      id: 4, 
      title: "French Language Course", 
      level: "Beginner to Advanced",
      link: "/courses/french",
      isAvailable: false
    },
    { 
      id: 5, 
      title: "Mandarin Chinese Course", 
      level: "Beginner",
      link: "/courses/mandarin",
      isAvailable: false
    },
    { 
      id: 6, 
      title: "Kiswahili Language Course", 
      level: "Beginner to Advanced",
      link: "/courses/kiswahili",
      isAvailable: true
    }
  ];

  // Kiswahili course providers
  // const kiswahiliProviders: LanguageSchool[] = [
  //   {
  //     id: 1,
  //     name: "Sprachenatelier Berlin",
  //     location: "Berlin (Online & In-Person)",
  //     type: 'both',
  //     pricing: {
  //       group: "€195–€265 (12 weeks, 3-9 students)",
  //       private: "€450 for 10 sessions (45 minutes each)"
  //     },
  //     description: "Offers Kiswahili courses from A1 to C2 levels, available in the evenings.",
  //     link: "https://www.sprachenatelier-berlin.de"
  //   },
  //   {
  //     id: 2,
  //     name: "Lugha Swahili School",
  //     location: "UK-Based (Online)",
  //     type: 'online',
  //     pricing: {
  //       private: "$18/hour",
  //       other: "$9.99/month membership (includes beginner courses, live sessions)"
  //     },
  //     description: "Focuses on Tanzanian Kiswahili with flexible online learning options.",
  //     link: "https://www.lughaswahilischool.com"
  //   },
  //   {
  //     id: 3,
  //     name: "The Language Garage",
  //     location: "Online",
  //     type: 'online',
  //     pricing: {
  //       group: "$199 for 10 weeks (1 hour/week)",
  //       private: "$55/hour"
  //     },
  //     description: "Offers small group classes and private tutoring with free learning materials.",
  //     link: "https://www.thelanguagegarage.com"
  //   },
  //   {
  //     id: 4,
  //     name: "AmazingTalker",
  //     location: "Online",
  //     type: 'online',
  //     pricing: {
  //       private: "$10–$30/hour (varies by tutor)"
  //     },
  //     description: "Connects students with tutors for personalized lessons on your schedule.",
  //     link: "https://www.amazingtalker.com"
  //   }
  // ];

  const availableCourses = modules.filter(module => module.isAvailable);
  const comingSoonCourses = modules.filter(module => !module.isAvailable);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        {/* Parallax Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
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
                Master New Languages
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
                Embark on a journey of language discovery with our comprehensive courses. 
                Learn from expert instructors and join a community of passionate language learners.
              </p>
              <div className="flex flex-row justify-between gap-4 w-full max-w-md mx-auto">
                
                <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base">
                  Explore Courses
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <main className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
        {/* Available Courses Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <BookOpen className="h-6 w-6 text-primary-500 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Available Courses</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableCourses.map(course => (
              <LanguageCard 
                key={course.id}
                title={course.title}
                level={course.level}
                link={course.link}
                isAvailable={course.isAvailable}
              />
            ))}
          </div>
        </section>

        {/* <section className="mb-12">
          <div className="flex items-center mb-6">
            <Globe className="h-6 w-6 text-blue-500 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Kiswahili Learning Options</h2>
          </div>
          
          <div className="space-y-6">
            {kiswahiliProviders.map(provider => (
              <div key={provider.id} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{provider.name}</h3>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    provider.type === 'online' ? 'bg-blue-100 text-blue-800' :
                    provider.type === 'in-person' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {provider.type === 'both' ? 'Online & In-Person' : provider.type}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-2 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {provider.location}
                </p>
                
                <div className="mb-4">
                  {provider.pricing.group && (
                    <p className="text-gray-700 mb-1 flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span className="font-medium">Group:</span> {provider.pricing.group}
                    </p>
                  )}
                  {provider.pricing.private && (
                    <p className="text-gray-700 mb-1 flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span className="font-medium">Private:</span> {provider.pricing.private}
                    </p>
                  )}
                  {provider.pricing.other && (
                    <p className="text-gray-700 mb-1">
                      <span className="font-medium">Other:</span> {provider.pricing.other}
                    </p>
                  )}
                </div>
                
                <p className="text-gray-600 mb-4">{provider.description}</p>
                
                {provider.link && (
                  <a 
                    href={provider.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    Visit Website
                  </a>
                )}
              </div>
            ))}
          </div>
        </section> */}

        {/* Coming Soon Courses Section */}
        <section>
          <div className="flex items-center mb-6">
            <Clock className="h-6 w-6 text-secondary-500 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Coming Soon</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comingSoonCourses.map(course => (
              <LanguageCard
                key={course.id}
                title={course.title}
                level={course.level}
                link={course.link}
                isAvailable={course.isAvailable}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ForeignLanguages;