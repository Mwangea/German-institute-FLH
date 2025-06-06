// JapaneseLanguage.tsx
import {  Clock, ChevronRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const japaneseLevels = [
  {
    level: 'N1',
    title: 'Beginner Japanese',
    description: 'Learn Hiragana, Katakana, and basic phrases for greetings and introductions.',
    duration: '3 months',
    price: 'Kes 20,000',
    url: '/japanese-levels/n1',
  },
  {
    level: 'N2',
    title: 'Elementary Japanese',
    description: 'Gain skills to navigate simple daily situations like dining or shopping in Japanese.',
    duration: '3 months',
    price: 'Kes 20,000',
    url: '/japanese-levels/n2',
  },
  {
    level: 'N3',
    title: 'Intermediate Japanese',
    description: 'Develop conversational skills and understand common written Japanese.',
    duration: '3 months',
    price: 'Kes 20,000',
    url: '/japanese-levels/n3',
  },
  {
    level: 'N4',
    title: 'Upper Intermediate Japanese',
    description: 'Discuss familiar topics with fluency and grasp more complex grammar and kanji.',
    duration: '3 months',
    price: 'Kes 20,000',
    url: '/japanese-levels/n4',
  },
  {
    level: 'N5',
    title: 'Advanced Japanese',
    description: 'Use Japanese effectively in academic or business environments with high fluency.',
    duration: '3 months',
    price: 'Kes 20,000',
    url: '/japanese-levels/n5',
  },
  
];

const JapaneseLanguage = () => (
  <div className="min-h-screen bg-gray-50">
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url(/Japanese.jpg)",
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
              Japanese Language Courses
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Master Japanese step-by-step. Our CEFR-aligned program builds your skills with culture and confidence.
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

    <section className="py-20 bg-white">
      <div className="mb-6 mt-6 px-4">
        <Link to="/programs/foreign-languages" className="inline-flex items-center text-black hover:text-primary-200">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Foreign Languages
        </Link>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Levels N1–N5</h2>
          <div className="w-24 h-1 bg-button-50 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Structured Japanese courses aligned with CEFR standards (Common European Framework of Reference for Languages).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {japaneseLevels.map((level, index) => (
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

    <section className="py-20 bg-primary-500 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">Ready to Learn Japanese?</h2>
        <p className="text-lg mb-6">Gain language skills and cultural knowledge with our immersive Japanese program.</p>
        <button
          //to="/enroll"
          className="inline-block px-8 py-3 bg-white text-primary-600 font-medium rounded-full hover:bg-gray-100 transition"
        >
          Enroll Today
        </button>
      </div>
    </section>
  </div>
);

export default JapaneseLanguage;
