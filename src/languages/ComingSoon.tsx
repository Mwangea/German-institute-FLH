import React from 'react';
import { Clock, Calendar, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ComingSoonCourseProps {
  courseName: string;
  description: string;
  expectedLaunch?: string;
  features?: string[];
  availableCoursesLink: string;
  availableCoursesText?: string;
}

const ComingSoonCourse: React.FC<ComingSoonCourseProps> = ({
  courseName,
  description,
  expectedLaunch = 'Coming Soon',
  features = [],
  availableCoursesLink,
  availableCoursesText = 'Browse Available Courses'
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4 px-6 py-2 bg-blue-100 text-blue-800 rounded-full">
            <Clock className="w-5 h-5 mr-2" />
            <span className="font-medium">{expectedLaunch}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {courseName}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          {/* Visual Header */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-white bg-opacity-20 p-3 rounded-full">
                <BookOpen className="w-8 h-8" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-center mb-2">
              Exciting New Course Coming Soon!
            </h2>
            <p className="text-center text-indigo-100 opacity-90">
              We're working hard to bring you this valuable learning experience
            </p>
          </div>

          {/* Features Section */}
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-indigo-500" />
              What to Expect
            </h3>
            
            {features.length > 0 ? (
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                      </div>
                    </div>
                    <span className="ml-3 text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                    </div>
                  </div>
                  <span className="ml-3 text-gray-700">
                    Comprehensive curriculum designed by language experts
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                    </div>
                  </div>
                  <span className="ml-3 text-gray-700">
                    Interactive learning materials and practical exercises
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                    </div>
                  </div>
                  <span className="ml-3 text-gray-700">
                    Flexible learning options to fit your schedule
                  </span>
                </div>
              </div>
            )}

            {/* Notification Form */}
            <div className="mt-10 bg-blue-50 rounded-lg p-6">
              <h4 className="text-lg font-medium text-gray-800 mb-3">
                Get notified when this course launches
              </h4>
              <form className="sm:flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="mt-3 sm:mt-0 px-6 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                  Notify Me
                </button>
              </form>
              <p className="mt-2 text-sm text-gray-500">
                We'll send you an email when this course becomes available
              </p>
            </div>
          </div>
        </div>

        {/* Available Courses CTA */}
        <div className="text-center">
          <h3 className="text-xl font-medium text-gray-700 mb-4">
            In the meantime, explore our current course offerings
          </h3>
          <Link
            to={availableCoursesLink}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all transform hover:scale-105"
          >
            {availableCoursesText}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonCourse;