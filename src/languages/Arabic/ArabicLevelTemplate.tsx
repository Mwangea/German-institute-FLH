import {
  BookOpen,
  Clock,
  ChevronRight,
  CheckCircle,
  Users,
  Award,
  Mic,
  Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";
import ArabicLevelForm from "../../Forms/ArabicLevelForm";
//import ArabicLevelForm from "../Forms/ArabicLevelForm";

interface LevelData {
  level: string;
  title: string;
  tagline: string;
  duration: string;
  price: string;
  overview: string;
  format: string;
  objectives: string[];
  outcomes: string[];
  targetAudience: string;
  certification: string;
  focusAreas: string;
  ctaText: string;
}

interface ArabicLevelTemplateProps {
  levelData: LevelData;
}

const ArabicLevelTemplate = ({ levelData }: ArabicLevelTemplateProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/Arabic.jpg"
            alt="Arabic language class with students"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-800/80"></div>
        </div>

        <div className="relative z-10">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-block px-4 py-2 text-sm font-bold text-emerald-100 bg-primary-500 rounded-full mb-4">
              {levelData.level.includes('Basic') ? 'Foundational' : levelData.level}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 font-[Noto Sans Arabic]">
              {levelData.title}
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-6">
              {levelData.tagline}
            </p>
            <div className="flex justify-center gap-4 text-emerald-100">
              <span className="flex items-center">
                <Clock className="w-5 h-5 mr-1" /> {levelData.duration}
              </span>
              <span className="flex items-center">
                 {levelData.price}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Course Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Course Overview */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 text-center justify-center mb-6 flex items-center">
                  
                  Course Overview
                </h2>
            <div className="w-24 h-1 bg-button-50 mx-auto mb-6"></div>

                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  {levelData.overview}
                </p>

                {/* Course Format */}
                <div className="mt-10">
                  <h3 className="text-2xl font-semibold justify-center text-gray-900 mb-4 flex items-center">
                    
                    Course Format
                  </h3>
            <div className="w-24 h-1 bg-button-50 mx-auto mb-6"></div>

                  <p className="text-gray-700 mb-6">{levelData.format}</p>
                </div>
              </div>

              {/* Objectives & Outcomes */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    
                    Course Objectives
                  </h3>
                  <ul className="space-y-3 pl-2">
                    {levelData.objectives.map((obj, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-accent-100 p-1 rounded-full mr-3 mt-1">
                          <div className="w-2 h-2 bg-accent-600 rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  
                    Learning Outcomes
                  </h3>
                  <ul className="space-y-4">
                    {levelData.outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-emerald-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-lg">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Who Can Join */}
              <div className="bg-primary-500 rounded-xl shadow-md p-8 border-l-4 border-primary-500">
                <h3 className="text-2xl font-semibold text-black mb-4 flex items-center">
                  <Users className="w-6 h-6 text-accent-600 mr-3" />
                  Who Can Join?
                </h3>
                <p className="text-black">{levelData.targetAudience}</p>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-8">
              {/* Key Details */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Key Details
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-emerald-100 p-3 rounded-xl mr-4">
                      <Calendar className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Duration</h4>
                      <p className="text-gray-600">{levelData.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-emerald-100 p-3 rounded-xl mr-4">
                      <Award className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Certification</h4>
                      <p className="text-gray-600">{levelData.certification}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-emerald-100 p-3 rounded-xl mr-4">
                      <Mic className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Focus Areas</h4>
                      <p className="text-gray-600">{levelData.focusAreas}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Box */}
              <div className="bg-white rounded-xl shadow-md p-8 text-black">
                <h3 className="text-2xl font-bold mb-4">Begin Your Arabic Journey</h3>
                <p className="mb-6">{levelData.ctaText}</p>
                <ArabicLevelForm level={levelData.level} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Courses Link */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <Link
            to="/courses/arabic"
            className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium text-lg"
          >
            <ChevronRight className="w-6 h-6 transform rotate-180 mr-2" />
            Explore All Arabic Courses
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ArabicLevelTemplate;