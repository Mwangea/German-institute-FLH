import {
  Clock,
  ChevronRight,
  CheckCircle,
  Users,
  Award,
  Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";
import SpanishLevelForm from "../../Forms/SpanishLevelForm";

interface LevelData {
  level: string;
  title: string;
  tagline: string;
  duration: {
    regular: string;
    intensive: string;
    superIntensive: string;
    accelerated: string;
  };
  price: string;
  overview: string;
  format: string;
  objectives: string[];
  outcomes: string[];
  targetAudience: string;
  certification: string;
  focusAreas: {
    speaking: string[];
    listening: string[];
    reading: string[];
    writing: string[];
  };
  courseMaterials: {
    coursebook: string;
    supplementary: string[];
  };
  assessment: {
    continuous: string;
    final: string;
  };
  teachingMethods: string[];
  ctaText: string;
}

interface SpanishLevelTemplateProps {
  levelData: LevelData;
}

const SpanishLevelTemplate = ({ levelData }: SpanishLevelTemplateProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/spanish.jpg"
            alt="Spanish language class with students"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-800/80"></div>
        </div>

        <div className="relative z-10">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-block px-4 py-2 text-sm font-bold text-emerald-100 bg-primary-500 rounded-full mb-4">
              {levelData.level}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              {levelData.title}
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-6">
              {levelData.tagline}
            </p>
            <div className="flex justify-center gap-4 text-emerald-100">
              <span className="flex items-center">
                <Clock className="w-5 h-5 mr-1" /> Regular: {levelData.duration.regular}
              </span>
              <span className="flex items-center">
                {levelData.price}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Course Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Course Overview */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
                  Course Overview
                </h2>
                <div className="w-24 h-1 bg-button-50 mx-auto mb-6"></div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  {levelData.overview}
                </p>

                {/* Course Format */}
                <div className="mt-10">
                  <h3 className="text-2xl font-semibold justify-center text-center text-gray-900 mb-4">
                    Course Format
                  </h3>
                  <div className="w-24 h-1 bg-button-50 mx-auto mb-6"></div>
                  <p className="text-gray-700 mb-6">{levelData.format}</p>
                </div>
              </div>

              {/* Learning Objectives & Outcomes */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Learning Objectives
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
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
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

              {/* Course Content */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Course Content
                </h3>
                <div className="space-y-8">
                  {/* Speaking */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Speaking</h4>
                    <ul className="space-y-2">
                      {levelData.focusAreas.speaking.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                            <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Listening */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Listening</h4>
                    <ul className="space-y-2">
                      {levelData.focusAreas.listening.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                            <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Reading */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Reading</h4>
                    <ul className="space-y-2">
                      {levelData.focusAreas.reading.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                            <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Writing */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Writing</h4>
                    <ul className="space-y-2">
                      {levelData.focusAreas.writing.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                            <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Course Materials & Assessment */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Course Materials */}
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Course Materials
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900">Coursebook</h4>
                        <p className="text-gray-700">{levelData.courseMaterials.coursebook}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Supplementary Materials</h4>
                        <ul className="list-disc list-inside text-gray-700">
                          {levelData.courseMaterials.supplementary.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Assessment */}
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Assessment
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900">Continuous Assessment</h4>
                        <p className="text-gray-700">{levelData.assessment.continuous}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Final Examination</h4>
                        <p className="text-gray-700">{levelData.assessment.final}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
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
                      <h4 className="font-medium text-gray-900">Duration Options</h4>
                      <ul className="text-gray-600">
                        <li>Regular: {levelData.duration.regular}</li>
                        <li>Intensive: {levelData.duration.intensive}</li>
                        <li>Super Intensive: {levelData.duration.superIntensive}</li>
                        <li>Accelerated: {levelData.duration.accelerated}</li>
                      </ul>
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
                      <Users className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Target Audience</h4>
                      <p className="text-gray-600">{levelData.targetAudience}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Box */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-2xl font-bold mb-4">Begin Your Spanish Journey</h3>
                <p className="mb-6">{levelData.ctaText}</p>
                <SpanishLevelForm level={levelData.level} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Courses Link */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <Link
            to="/courses/spanish"
            className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium text-lg"
          >
            <ChevronRight className="w-6 h-6 transform rotate-180 mr-2" />
            Explore All Spanish Courses
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SpanishLevelTemplate;
