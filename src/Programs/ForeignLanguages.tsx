import React from 'react';
import {  Clock, BookOpen, Play } from 'lucide-react';
import LanguageCard from '../components/LanguageCard';
//import PageHeader from '../components/PageHeader';

// Define the language module type
interface LanguageModule {
  id: number;
  title: string;
  level: string;
  link: string;
  isAvailable: boolean;
}

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
    }
  ];

  // Filter available and coming soon courses
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
                <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors duration-300 text-sm sm:text-base">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  Watch Demo Class
                </button>
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