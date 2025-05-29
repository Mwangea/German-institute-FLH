import React from 'react';
import { Calendar, FileText, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const B2YoungExam: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0">
          <img
            src="/B2.jpg"
            alt="Advanced young German learners"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/30 mix-blend-multiply"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <span className="px-3 py-1 bg-primary-500 text-white text-sm font-medium rounded-full">
                B2 Level
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white text-center mb-6">
              Goethe-Zertifikat B2 for Young People
            </h1>
            <p className="text-xl text-gray-300 text-center mb-8">
              A German exam demonstrating advanced language proficiency for young learners
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
                  "Prepare to study at a university or institution of higher education in Germany",
                  "Provide evidence of your advanced German skills for a job application",
                  "Prepare to work in the medical field in Germany",
                  "Provide evidence that you have successfully passed Level B2",
                  "Hold an official, internationally recognised certificate"
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
                The Goethe-Zertifikat B2 is a German exam for young people and adults. It certifies that candidates have acquired advanced language skills and corresponds to the fourth level (B2) of the six-level scale of competence laid down in the Common European Framework of Reference for Languages (CEFR).
              </p>
            </div>

            {/* Skills Section */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Passing the exam demonstrates that you can...
              </h2>
              <ul className="space-y-4">
                {[
                  "Understand the main contents of complex texts on concrete and abstract topics",
                  "Communicate spontaneously and fluently with native speakers",
                  "Express your opinion on current issues in a clear and detailed manner",
                  "Explain your position on current issues and discuss advantages and disadvantages"
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
                <a 
                  href="#"
                  className="text-primary-600 hover:text-primary-700 hover:underline flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  B2 Exam Timetable 17.05.2025 (PDF, 108 KB)
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl shadow-lg p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-pattern opacity-10"></div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Interested in Taking the B2 Exam?
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

export default B2YoungExam;