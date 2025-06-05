import React, { useState } from 'react';
import { Clock, BookOpen, Search } from 'lucide-react';
import LanguageCard from '../Components/LanguageCard';

interface LanguageModule {
  id: number;
  title: string;
  level: string;
  link: string;
  isAvailable: boolean;
  category?: string;
}

const ForeignLanguages: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const modules: LanguageModule[] = [
    { 
      id: 1, 
      title: "German Language Course", 
      level: "Beginner to Intermediate",
      link: "/courses/german",
      isAvailable: true,
      category: "european"
    },
    { 
      id: 2, 
      title: "English Language Course", 
      level: "Beginner to Advanced",
      link: "/courses/english",
      isAvailable: true,
      category: "global"
    },
    { 
      id: 3, 
      title: "Spanish Language Course", 
      level: "Beginner to Intermediate",
      link: "/courses/spanish",
      isAvailable: true,
      category: "european"
    },
    { 
      id: 4, 
      title: "French Language Course", 
      level: "Beginner to Advanced",
      link: "/courses/french",
      isAvailable: true,
      category: "european"
    },
    { 
      id: 5, 
      title: "Mandarin Chinese Course", 
      level: "Beginner",
      link: "/courses/mandarin",
      isAvailable: true,
      category: "asian"
    },
    { 
      id: 6, 
      title: "Kiswahili Language Course", 
      level: "Beginner to Advanced",
      link: "/courses/kiswahili",
      isAvailable: true,
      category: "african"
    },
    { 
      id: 7, 
      title: "Arabic Language Course", 
      level: "Beginner to Advanced",
      link: "/courses/arabic",
      isAvailable: true,
      category: "middle-eastern"
    },
    { 
      id: 8, 
      title: "Italian Language Course", 
      level: "Beginner to Advanced",
      link: "/courses/italian",
      isAvailable: true,
      category: "european"
    },
    { 
      id: 9, 
      title: "Japanese Language Course", 
      level: "Beginner to Advanced",
      link: "/courses/japanese",
      isAvailable: true,
      category: "asian"
    },
    { 
      id: 10, 
      title: "Portuguese Language Course", 
      level: "Beginner to Advanced",
      link: "/courses/portuguese",
      isAvailable: true,
      category: "european"
    },
    { 
      id: 11, 
      title: "Russian Language Course", 
      level: "Beginner to Advanced",
      link: "/courses/russian",
      isAvailable: true,
      category: "european"
    },
    { 
      id: 12, 
      title: "Dutch Language Course", 
      level: "Beginner to Advanced",
      link: "/courses/dutch",
      isAvailable: true,
      category: "european"
    },
    { 
      id: 13, 
      title: "Turkish Language Course", 
      level: "Beginner to Advanced",
      link: "/courses/turkish",
      isAvailable: true,
      category: "middle-eastern"
    },
    { 
      id: 14, 
      title: "Somali Language Course", 
      level: "Beginner to Advanced",
      link: "/courses/somalia",
      isAvailable: true,
      category: "african"
    },
  ];

  const comingSoonCourses = modules.filter(module => !module.isAvailable);

  const filteredCourses = modules.filter(module => {
    const matchesSearch = module.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         module.level.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTab = activeTab === 'all' || 
                      (activeTab === 'available' && module.isAvailable) ||
                      (activeTab === 'coming' && !module.isAvailable) ||
                      (module.category === activeTab);
    
    return matchesSearch && matchesTab;
  });

  const categories = [
    { id: 'all', name: 'All Languages' },
    { id: 'available', name: 'Available Now' },
    { id: 'coming', name: 'Coming Soon' },
    { id: 'european', name: 'European' },
    { id: 'asian', name: 'Asian' },
    { id: 'african', name: 'African' },
    { id: 'middle-eastern', name: 'Middle Eastern' },
    { id: 'global', name: 'Global' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section (unchanged) */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
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
        {/* Search and Filter Section */}
        <section className="mb-12 bg-white rounded-xl shadow-sm p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Find Your Language Course</h2>
            
            <div className="relative w-full md:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          {/* Category Tabs */}
          <div className="overflow-x-auto">
            <div className="flex space-x-2 pb-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    activeTab === category.id
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Grid Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <BookOpen className="h-6 w-6 text-primary-500 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">
              {activeTab === 'available' ? 'Available Now' : 
               activeTab === 'coming' ? 'Coming Soon' : 
               'All Language Courses'}
            </h2>
          </div>
          
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCourses.map(course => (
                <LanguageCard 
                  key={course.id}
                  title={course.title}
                  level={course.level}
                  link={course.link}
                  isAvailable={course.isAvailable}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <Search className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-lg font-medium text-gray-900">No courses found</h3>
              <p className="mt-1 text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </section>

        {/* Features Section */}
        <section className="mb-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Why Learn With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Certified Instructors</h3>
              <p className="text-white/90">Learn from native speakers and certified language experts with years of teaching experience.</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Structured Curriculum</h3>
              <p className="text-white/90">Our courses follow a proven learning path from beginner to advanced levels.</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Community Learning</h3>
              <p className="text-white/90">Join study groups, language exchanges, and cultural events with fellow learners.</p>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        {comingSoonCourses.length > 0 && activeTab !== 'coming' && (
          <section>
            <div className="flex items-center mb-6">
              <Clock className="h-6 w-6 text-secondary-500 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Coming Soon</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {comingSoonCourses.slice(0, 3).map(course => (
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
        )}
      </main>
    </div>
  );
};

export default ForeignLanguages;