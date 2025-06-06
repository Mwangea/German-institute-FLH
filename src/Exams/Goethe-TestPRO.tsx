import React from 'react';
import { Calendar, FileText, CheckCircle2, ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const GoetheTestProExam: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0">
          <img
            src="/GoetheTestPro.jpg"
            alt="Professional taking language test"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/30 mix-blend-multiply"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <span className="px-3 py-1 bg-primary-500 text-white text-sm font-medium rounded-full">
                Professional German
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white text-center mb-6">
              Goethe-Test PRO: Deutsch für den Beruf
            </h1>
            <p className="text-xl text-gray-300 text-center mb-8">
              Assess workplace German skills quickly and reliably
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
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">For your personal career:</h3>
                  <ul className="space-y-3">
                    {[
                      "Realistically assess your own language skills",
                      "Get ideas for training opportunities and suitable courses"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">For companies:</h3>
                  <ul className="space-y-3">
                    {[
                      "Check the language skills of job applicants and employees",
                      "Evaluate previous training successes",
                      "Create a valid basis for future training measures"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                The Goethe-Test PRO – Clarity in Only 60 Minutes
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Whether for your own professional career or company competitiveness: Success is based on trust. Trust is engendered when everyone speaks the same language. The question is: How good is your German? What language skills do your current or future employees possess?
              </p>
              <p className="text-gray-700 leading-relaxed">
                Goethe-Test PRO: German for Professionals provides an answer to this question. Our computer-based test evaluates listening and reading competence quickly and reliably in the workplace.
              </p>
            </div>

            {/* Features Section */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Tailored and informative
              </h2>
              <ul className="space-y-4">
                {[
                  "Evaluates personal language skills within 60-90 minutes using advanced technology",
                  "Adaptive testing adjusts difficulty based on your answers in real-time",
                  "Immediate results with detailed proficiency report after completion",
                  "Flexible online test available at test centers or company premises",
                  "Based on Business Language Testing Service (BULATS) methods and CEFR"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exam Information */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl shadow-sm p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-primary-500" />
                  <h3 className="text-xl font-semibold text-gray-900">Examination Availability</h3>
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
                  className="text-primary-600 hover:text-primary-700 hover:underline flex items-center gap-2 mb-4"
                >
                  <FileText className="w-4 h-4" />
                  Exam guideline Goethe-Test PRO (PDF, 274 KB)
                </a>
                <a 
                  href="https://www.goethe.de/en/spr/kup/kur/doln/fir.html" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 hover:underline flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Deutsch Online Company Training
                </a>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                How to connect with us
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Do you want clarity instead of vague assumptions about language skills? Contact us directly! We'll provide a non-binding quotation and support in preparing and conducting the test.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We'll advise you on suitable training measures and language courses for companies.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl shadow-lg p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-pattern opacity-10"></div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Ready to Assess Professional German Skills?
                </h2>
                <p className="text-white/90 mb-6">
                  Get precise language evaluation for individuals or your entire workforce.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="px-8 py-3 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Request Information
                  </button>
                  <button className="px-8 py-3 bg-transparent text-white border border-white rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105">
                    Company Solutions
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

export default GoetheTestProExam;