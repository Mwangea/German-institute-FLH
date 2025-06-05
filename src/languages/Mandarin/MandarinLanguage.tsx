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
    level: 'HSK 1',
    title: 'Beginner Mandarin',
    description: 'Learn basic Chinese characters, pronunciation, and essential phrases for daily communication.',
    duration: '6 months',
    price: 'Kes 20,000',
    url: '/mandarin-levels/hsk1',
  },
  {
    level: 'HSK 2',
    title: 'Elementary Mandarin',
    description: 'Expand vocabulary and grammar for more complex daily situations and basic conversations.',
    duration: '6 months',
    price: 'Kes 20,000',
    url: '/mandarin-levels/hsk2',
  },
  {
    level: 'HSK 3',
    title: 'Intermediate Mandarin',
    description: 'Develop fluency in common topics and handle most situations while traveling in China.',
    duration: '6 months',
    price: 'Kes 20,000',
    url: '/mandarin-levels/hsk3',
  },
  {
    level: 'HSK 4',
    title: 'Upper Intermediate Mandarin',
    description: 'Master complex topics and express opinions on various subjects with confidence.',
    duration: '6 months',
    price: 'Kes 20,000',
    url: '/mandarin-levels/hsk4',
  },
  {
    level: 'HSK 5',
    title: 'Advanced Mandarin',
    description: 'Understand complex texts and express ideas fluently in professional contexts.',
    duration: '6 months',
    price: 'Kes 20,000',
    url: '/mandarin-levels/hsk5',
  },
  {
    level: 'HSK 6',
    title: 'Mastery Mandarin',
    description: 'Achieve near-native proficiency and understand complex Chinese literature and media.',
    duration: '6 months',
    price: 'Kes 20,000',
    url: '/mandarin-levels/hsk6',
  },
];

const MandarinLanguage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url(/chineese.jpg)",
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
                Chinese Language Courses
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Master Mandarin Chinese from beginner to fluent speaker. Internationally recognized HSK certification after each level.
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
      <section className="py-20 bg-white">
        <div className="mb-6 mt-6 px-4">
          <Link to="/programs/foreign-languages" className="inline-flex items-center text-black hover:text-primary-200">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Foreign Languages
          </Link>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Levels HSK 1–6</h2>
            <div className="w-24 h-1 bg-button-50 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">
              Structured Chinese courses aligned with HSK standards (Hanyu Shuiping Kaoshi).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Chinese Courses</h2>
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
                desc: 'Cost-effective and installment options to ensure quality Chinese education for all.'
              },
              {
                icon: CheckCircle,
                title: 'Qualified Instructors',
                desc: 'Learn from certified Chinese language experts and native speakers.'
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

      {/* Call To Action */}
      <section className="py-20 bg-primary-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to Learn Chinese?</h2>
          <p className="text-lg mb-6">Join our next intake and become fluent with our expert-led Chinese courses.</p>
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

export default MandarinLanguage;
