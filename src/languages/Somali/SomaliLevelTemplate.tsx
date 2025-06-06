import {
  Clock,
  ChevronRight,
  CheckCircle,
  Users,
  Award,
  Calendar,
  BookOpen,
  GraduationCap,
  Clock4,
  LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";
import SomaliLevelForm from "../../Forms/SomaliLevelForm";
//import SomaliLevelForm from "../../Forms/SomaliLevelForm";

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
  learningAreas: {
    title: string;
    description: string;
    icon: LucideIcon;
  }[];
  assessment: string;
  resources: string[];
  studyPlans: {
    name: string;
    duration: string;
    hours: string;
  }[];
}

interface SomaliLevelTemplateProps {
  levelData: LevelData;
}

const SomaliLevelTemplate = ({ levelData }: SomaliLevelTemplateProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/Somali.jpg"
            alt="Somali language class with students"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-800/80"></div>
        </div>

        <div className="relative z-10">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-block px-4 py-2 text-sm font-bold text-emerald-100 bg-primary-500 rounded-full mb-4">
              CEFR {levelData.level}
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

                {/* Course Objectives */}
                <div className="mt-10">
                  <h3 className="text-2xl font-semibold justify-center text-gray-900 mb-4 flex items-center">
                    Course Objectives
                  </h3>
                  <div className="w-24 h-1 bg-button-50 mx-auto mb-6"></div>
                  <ul className="space-y-3">
                    {levelData.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 mt-1" />
                        {objective}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* What You Will Learn */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                  What You Will Learn
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {levelData.learningAreas.map((area, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-emerald-100 p-3 rounded-xl">
                        {React.createElement(area.icon, { className: "w-6 h-6 text-emerald-600" })}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{area.title}</h4>
                        <p className="text-gray-600">{area.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Assessment & Resources */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                      <GraduationCap className="w-6 h-6 text-emerald-600 mr-3" />
                      Assessment
                    </h3>
                    <p className="text-gray-700">{levelData.assessment}</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                      <BookOpen className="w-6 h-6 text-emerald-600 mr-3" />
                      Course Materials
                    </h3>
                    <ul className="space-y-2">
                      {levelData.resources.map((resource, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <CheckCircle className="w-5 h-5 text-emerald-500 mr-2" />
                          {resource}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Study Plans */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                  Study Plans
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {levelData.studyPlans.map((plan, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{plan.name}</h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p className="flex items-center">
                          <Clock4 className="w-4 h-4 mr-2" />
                          {plan.duration}
                        </p>
                        <p>{plan.hours}</p>
                      </div>
                    </div>
                  ))}
                </div>
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
                <h3 className="text-2xl font-bold mb-4">Begin Your Somali Journey</h3>
                <p className="mb-6">{levelData.ctaText}</p>
                <SomaliLevelForm level={levelData.level} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Courses Link */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <Link
            to="/courses/somalia"
            className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium text-lg"
          >
            <ChevronRight className="w-6 h-6 transform rotate-180 mr-2" />
            Explore All Somali Courses
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SomaliLevelTemplate;
