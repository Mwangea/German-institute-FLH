import { BookOpen, Clock, DollarSign, ChevronRight, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LanguageLevel {
  level: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  url: string;
}

const languageLevels: LanguageLevel[] = [
  {
    level: 'A1',
    title: 'Beginner Italian',
    description: 'Understand and use familiar Italian expressions and very basic phrases aimed at satisfying simple needs.',
    duration: '3 months',
    price: 'Kes 20,000',
    url: '/italian-levels/a1',
  },
  {
    level: 'A2',
    title: 'Elementary Italian',
    description: 'Understand frequently used expressions related to areas of most immediate relevance (e.g., personal info, shopping).',
    duration: '3 months',
    price: 'Kes 20,000',
    url: '/italian-levels/a2',
  },
  {
    level: 'B1',
    title: 'Intermediate Italian',
    description: 'Understand the main points of clear standard input on familiar matters regularly encountered in work, school, etc.',
    duration: '3 months',
    price: 'Kes 20,000',
    url: '/italian-levels/b1',
  },
  {
    level: 'B2',
    title: 'Upper Intermediate Italian',
    description: 'Understand the main ideas of complex text on both concrete and abstract topics including technical discussions.',
    duration: '3 months',
    price: 'Kes 20,000',
    url: '/italian-levels/b2',
  },
  {
    level: 'C1',
    title: 'Advanced Italian',
    description: 'Understand a wide range of demanding, longer texts, and recognize implicit meaning.',
    duration: '3 months',
    price: 'Kes 20,000',
    url: '/italian-levels/c1',
  },
  {
    level: 'C2',
    title: 'Mastery Italian',
    description: 'Express yourself spontaneously, very fluently and precisely, even in more complex situations.',
    duration: '3 months',
    price: 'Kes 20,000',
    url: '/italian-levels/c2',
  },
];

const ItalyLanguage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url(/Italy.jpg)",
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-800/80"></div>
        </div>

        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold font-serif text-white mb-6">
                Italian Language Courses
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Master Italian from beginner to fluent speaker. Internationally recognized certification after each 3-month level.
              </p>
              <div className="flex flex-row justify-center gap-4">
                <button className="px-6 py-3 bg-button-50 text-white rounded-full hover:bg-orange-600 transition">
                  Enroll Now
                </button>
                <button className="px-6 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition">
                  Course Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Levels */}
      <section className="py-16">
        <div className="mb-6 mt-6 px-4">
          <Link to="/programs/foreign-languages" className="inline-flex items-center text-black hover:text-primary-200">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Foreign Languages
          </Link>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Levels A1–C2</h2>
            <div className="w-24 h-1 bg-button-50 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">
              Structured Italian courses aligned with CEFR standards (Common European Framework of Reference for Languages).
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {languageLevels.map((level, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm p-6 border hover:shadow-md hover:border-primary-200 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{level.level}</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    {level.title}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{level.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {level.duration}
                  </div>
                  <div>{level.price}</div>
                </div>
                <Link to={level.url} className="text-primary-600 hover:text-primary-800 text-sm inline-flex items-center">
                  <span className="underline">View course details</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Italian Courses</h2>
            <div className="w-24 h-1 bg-button-50 mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: BookOpen,
                title: 'Comprehensive Curriculum',
                desc: 'Master reading, writing, speaking, and listening – all with cultural context and immersive practice.'
              },
              {
                icon: Clock,
                title: 'Flexible Scheduling',
                desc: 'Morning and evening classes available to suit your daily routine and commitments.'
              },
              {
                icon: DollarSign,
                title: 'Affordable Pricing',
                desc: 'Cost-effective and installment options to ensure quality Italian education for all.'
              },
              {
                icon: CheckCircle,
                title: 'Qualified Instructors',
                desc: 'Learn from certified Italian language experts and native speakers.'
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="flex gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="bg-black w-12 h-12 flex items-center justify-center rounded-full text-white">
                  <Icon className="w-6 h-6 text-accent-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-700">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to Learn Italian?</h2>
          <p className="text-lg mb-6">Join our next intake and become fluent with our expert-led Italian courses.</p>
          <Link
            to="/enroll"
            className="inline-block px-8 py-3 bg-white text-primary-600 font-medium rounded-full hover:bg-gray-100 transition"
          >
            Enroll Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ItalyLanguage;
