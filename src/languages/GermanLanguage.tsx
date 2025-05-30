import { BookOpen, Clock, DollarSign, ChevronRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LanguageLevel {
  level: string;
  title: string;
  description: string;
  duration: string;
  price: string;  // Now includes "Kes" prefix directly
  url: string;
}

const languageLevels: LanguageLevel[] = [
  {
    level: 'A1',
    title: 'Elementary use of language',
    description: 'Can understand and use familiar, everyday expressions and very simple sentences...',
    duration: '3 months',
    price: 'Kes 20,000',
    url: '/german-levels/a1'
  },
  {
    level: 'A2',
    title: 'Elementary use of language',
    description: 'Can understand sentences and commonly used expressions associated with topics...',
    duration: '3 months',
    price: 'Kes 20,000',
    url: '/german-levels/a2'
  },
  {
    level: 'B1',
    title: 'Independent language use',
    description: 'Can understand the main points when clear, standard language is used...',
    duration: '3 months',
    price: 'Kes 20,000',
    url: '/german-levels/b1'
  },
  {
    level: 'B2',
    title: 'Independent language use',
    description: 'Can understand the main contents of complex texts on concrete and abstract topics...',
    duration: '3 months',
    price: 'Kes 20,000',
    url: '/german-levels/b2'
  },
  {
    level: 'C1',
    title: 'Autonomous language ability',
    description: 'Can understand a wide range of challenging, longer texts and also grasp implicit meanings...',
    duration: '3 months',
    price: 'Kes 20,000',
    url: '/german-levels/c1'
  },
  {
    level: 'C2',
    title: 'Autonomous language ability',
    description: 'Can effortlessly understand practically everything which he/she reads or hears...',
    duration: '3 months',
    price: 'Kes 20,000',
    url: '/german-levels/c2'
  }
];

const GermanLanguage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(/student.jpg)",
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
                German Language Courses
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
                Comprehensive German language courses from beginner (A1) to mastery (C2) level.
                Each module lasts 3 months and costs Kes 20,000 with internationally recognized certification.
              </p>
              <div className="flex flex-row justify-between gap-4 w-full max-w-md mx-auto">
                <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors duration-300 text-sm sm:text-base">
                  Enroll Now
                </button>
                <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base">
                  Course Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Levels Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Course Levels A1-C2
            </h2>
            <p className="text-lg text-gray-700">
              Structured German courses following the Common European Framework of Reference for Languages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {languageLevels.map((level, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 group hover:border-primary-200 hover:translate-y-[-4px]"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {level.level}
                  </h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {level.title.split(' ')[0]}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm">{level.description}</p>
                
                <div className="flex items-center space-x-4 mb-4 text-sm">
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{level.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                   
                    <span>{level.price}</span>
                  </div>
                </div>
                
                <Link
                  to={level.url}
                  className="inline-flex items-center text-sm text-primary-600 hover:text-primary-800 transition-colors mt-4 group/link"
                >
                  <span className="group-hover/link:underline">View course details</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Choose Our Courses
            </h2>

            <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-8 lg:gap-12">
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group hover:border-l-4 hover:border-l-primary-500">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500 transition-colors duration-300">
                  <BookOpen className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    Comprehensive Curriculum
                  </h3>
                  <p className="text-gray-700">
                    Covers all aspects of language learning: reading, writing, listening, and speaking with cultural insights.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group hover:border-l-4 hover:border-l-primary-500">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500 transition-colors duration-300">
                  <Clock className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    Flexible Schedule
                  </h3>
                  <p className="text-gray-700">
                    Morning and evening batches available to accommodate working professionals and students.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group hover:border-l-4 hover:border-l-primary-500">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500 transition-colors duration-300">
                  <DollarSign className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    Affordable Pricing
                  </h3>
                  <p className="text-gray-700">
                    High-quality instruction at competitive prices with installment payment options available.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group hover:border-l-4 hover:border-l-primary-500">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500 transition-colors duration-300">
                  <CheckCircle className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    Certified Instructors
                  </h3>
                  <p className="text-gray-700">
                    Learn from native-speaking instructors with formal teaching qualifications and years of experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your German Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of students who've successfully learned German with our proven teaching methodology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-500 rounded-full hover:bg-gray-100 transition-colors duration-300">
                Enroll Now
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors duration-300">
                Contact Advisor
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default GermanLanguage;
