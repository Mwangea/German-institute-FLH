import {
  Clock,
  ChevronRight,
  CheckCircle,
  Users,
  Award,
  Mic,
  Calendar,
  
} from "lucide-react";
import { Link } from "react-router-dom";
import DutchLevelForm from "../../Forms/DutchLevelForm";

interface StudyPlan {
  name: string;
  duration: string;
  hoursPerDay: string;
}

interface CourseContent {
  title: string;
  items: string[];
}

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
  studyPlans: StudyPlan[];
  courseContent: CourseContent[];
  assessment: string[];
  materials: {
    textbook: string;
    additionalResources: string[];
  };
  learningMethodology: string;
}

interface DutchLevelTemplateProps {
  levelData: LevelData;
}

const DutchLevelTemplate = ({ levelData }: DutchLevelTemplateProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/Dutch.jpg"
            alt="Dutch language class with students"
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
      <section className="py-16">
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

                {/* Study Plans */}
                <div className="mt-10">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Study Plans</h3>
                  <div className="w-24 h-1 bg-button-50 mb-6"></div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {levelData.studyPlans.map((plan, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">{plan.name}</h4>
                        <p className="text-gray-700">{plan.duration} ({plan.hoursPerDay})</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Course Content */}
                <div className="mt-10">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">What You'll Learn</h3>
                  <div className="w-24 h-1 bg-button-50 mb-6"></div>
                  <div className="space-y-6">
                    {levelData.courseContent.map((content, index) => (
                      <div key={index}>
                        <h4 className="text-xl font-semibold text-gray-900 mb-3">{content.title}</h4>
                        <ul className="space-y-2">
                          {content.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Assessment */}
                <div className="mt-10">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Assessment</h3>
                  <div className="w-24 h-1 bg-button-50 mb-6"></div>
                  <ul className="space-y-2">
                    {levelData.assessment.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Course Materials */}
                <div className="mt-10">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Course Materials</h3>
                  <div className="w-24 h-1 bg-button-50 mb-6"></div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Textbook</h4>
                      <p className="text-gray-700">{levelData.materials.textbook}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Additional Resources</h4>
                      <ul className="space-y-2">
                        {levelData.materials.additionalResources.map((resource, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{resource}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Learning Methodology */}
                <div className="mt-10">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Learning Methodology</h3>
                  <div className="w-24 h-1 bg-button-50 mb-6"></div>
                  <p className="text-gray-700">{levelData.learningMethodology}</p>
                </div>
              </div>

              {/* Objectives & Outcomes */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Course Objectives</h3>
                    <ul className="space-y-3">
                      {levelData.objectives.map((objective, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1" />
                          <span>{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Learning Outcomes</h3>
                    <ul className="space-y-3">
                      {levelData.outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Course Info */}
              {/* <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Course Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center bg-emerald-100 p-3 rounded-xl">
                    <Users className="w-5 h-5  text-emerald-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Target Audience</p>
                      <p className="font-medium">{levelData.targetAudience}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-gray-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Certification</p>
                      <p className="font-medium">{levelData.certification}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mic className="w-5 h-5 text-gray-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Focus Areas</p>
                      <p className="font-medium">{levelData.focusAreas}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-gray-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-medium">{levelData.duration}</p>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="space-y-8">
              {/* Key Details */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Course Information
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
                      <Mic className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Focus Areas</h4>
                      <p className="text-gray-600">{levelData.focusAreas}</p>
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
            </div>

              {/* Enrollment Form */}
              <div className="bg-white rounded-xl shadow-md p-8 text-black">
                <h3 className="text-2xl font-bold mb-4">Begin Your Dutch Journey</h3>
                <p className="mb-6">{levelData.ctaText}</p>
                <DutchLevelForm level={levelData.level} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Courses Link */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <Link
            to="/courses/dutch"
            className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium text-lg"
          >
            <ChevronRight className="w-6 h-6 transform rotate-180 mr-2" />
            Explore All Dutch Courses
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DutchLevelTemplate;

