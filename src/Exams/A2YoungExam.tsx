import React from 'react';
import { Calendar, FileText, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const A2YoungExam: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0">
          <img
            src="/A2.jpg"
            alt="Young students learning German"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/30 mix-blend-multiply"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <span className="px-3 py-1 bg-primary-500 text-white text-sm font-medium rounded-full">
                A2 Level
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white text-center mb-6">
              Goethe-Zertifikat A2: Fit in Deutsch
            </h1>
            <p className="text-xl text-gray-300 text-center mb-8">
              A German exam specifically designed for young learners aged 12-16 years
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
            <Link 
              to="/programs/german-exams" 
              className="inline-flex items-center text-black hover:text-primary-200 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to German Exams
            </Link>
          </div> 
          <div className="max-w-3xl mx-auto">
            {/* Ideal For Section */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Ideal if you'd like to...
              </h2>
              <ul className="space-y-4">
                {[
                  "Take a German exam designed for young people between the ages of 12 and 16",
                  "Demonstrate that you have a basic knowledge of German",
                  "Prove that you have successfully reached level A2",
                  "Receive an official and internationally recognized certificate"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
              <p className="text-gray-700 mb-6 leading-relaxed">
                The Goethe-Zertifikat A2: Fit in Deutsch is a German exam for young people between the ages of 12 and 16. 
                It certifies that candidates have acquired basic language skills and corresponds to the second level (A2) 
                on the six-level scale of competence laid down in the Common European Framework of Reference for Languages (CEFR).
              </p>
            </div>

            {/* Skills Section */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Passing the exam demonstrates that you can...
              </h2>
              <ul className="space-y-4">
                {[
                  "Understand and use sentences and common expressions in everyday situations",
                  "Make yourself understood in simple, routine situations requiring an exchange of information on familiar and common topics",
                  "Describe your background and education, immediate surroundings and other matters associated with your immediate needs, in a simple way"
                ].map((skill, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exam Information */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl shadow-sm p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-primary-500" />
                  <h3 className="text-xl font-semibold text-gray-900">Examination Dates</h3>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <p className="text-gray-700 mb-2">
                    Unfortunately, no examination dates are currently available.
                  </p>
                  <p className="text-gray-700">
                    Please contact your language course office.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-primary-500" />
                  <h3 className="text-xl font-semibold text-gray-900">Important Documents</h3>
                </div>
                <p className="text-gray-700 italic">
                  *Timetable to be released before examinations commence.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl shadow-lg p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-pattern opacity-10"></div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Interested in Taking the A2 Exam?
                </h2>
                <p className="text-white/90 mb-6">
                  Contact our language course office to learn more about upcoming examination dates and registration process.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="px-8 py-3 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Contact Us
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default A2YoungExam;