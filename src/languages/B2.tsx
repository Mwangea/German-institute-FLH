import { BookOpen, Clock, DollarSign, ChevronRight, CheckCircle, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import GermanLevelForm from '../Forms/GermanLevelForm';

const GermanLevelB2 = () => {
    const levelData = {
      level: 'B2',
      title: 'Independent language use',
      fullDescription: 'At the B2 level, you will achieve a degree of independence that allows you to understand the main ideas of complex text on both concrete and abstract topics, including technical discussions in your field of specialization. You can interact with a degree of fluency and spontaneity that makes regular interaction with native speakers quite possible without strain for either party. You can produce clear, detailed text on a wide range of subjects and explain a viewpoint on a topical issue.',
      duration: '3 months',
      price: 'Kes 30,000',
      outcomes: [
        'Understand complex texts on concrete/abstract topics',
        'Interact fluently and spontaneously with native speakers',
        'Produce clear, detailed text on various subjects',
        'Explain viewpoints on topical issues',
        'Understand specialized articles in your field'
      ],
      certification: 'Goethe-Zertifikat B2',
      targetAudience: 'Intermediate learners (completed B1)'
    };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        {/* Background Image */}
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

        {/* Content */}
        <div className="relative z-10">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-block px-3 py-1 text-sm font-medium text-primary-100 bg-primary-800 rounded-full mb-4">
              Beginner Level
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              German Level {levelData.level} Course
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              {levelData.title} • {levelData.duration} • {levelData.price}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Course Details */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-3xl font-bold text-center justify-center text-gray-900 mb-6">Course Description</h2>
                <div className="w-24 h-1 bg-button-50 mx-auto mb-6"></div>

                <p className="text-gray-700 mb-6 text-lg leading-relaxed">{levelData.fullDescription}</p>
                
                <div className="bg-primary-500 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold text-black mb-4 flex items-center">
                    <Users className="w-6 h-6 text-accent-600 mr-2" />
                    Who is this course for?
                  </h3>
                  <p className="text-white">{levelData.targetAudience}</p>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Learning Outcomes</h3>
                <ul className="space-y-4">
                  {levelData.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Course Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-xl mr-4">
                      <Clock className="w-8 h-8 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 text-lg">Duration</h3>
                      <p className="text-gray-600">{levelData.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-xl mr-4">
                      <DollarSign className="w-8 h-8 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 text-lg">Price</h3>
                      <p className="text-gray-600">{levelData.price}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-xl mr-4">
                      <BookOpen className="w-8 h-8 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 text-lg">Level</h3>
                      <p className="text-gray-600">{levelData.level} - {levelData.title}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-xl mr-4">
                      <Award className="w-8 h-8 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 text-lg">Certification</h3>
                      <p className="text-gray-600">{levelData.certification}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="bg-white rounded-xl shadow-md p-8 sticky top-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Register Now</h2>
              <GermanLevelForm level={levelData.level} />
            </div>
          </div>
        </div>
      </section>

      {/* Back to Courses Link */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <Link 
            to="/courses/german" 
            className="inline-flex items-center text-primary-600 hover:text-primary-800 text-lg"
          >
            <ChevronRight className="w-6 h-6 transform rotate-180 mr-2" />
            Back to all German courses
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GermanLevelB2;