import { ArrowLeft } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MasterEnrollmentForm from '../Forms/masterProgrammes';

const MastersPrograms: React.FC = () => {
    const [showEnrollmentModal, setShowEnrollmentModal] = useState(false);

  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Hero Section */}
      {/* <section className="relative py-20 bg-gradient-to-b from-indigo-900 to-indigo-800">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-6">
              Postgraduate Studies
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Master's Degree Programs in <span className="text-teal-300">Germany</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
              Requirements and Guidance for Kenyan Students
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white transform skew-y-1 origin-bottom-left"></div>
      </section> */}

<section className="relative py-20 md:py-28 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        {/* Parallax Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full  bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(/masters.jpg)",
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
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-4 md:mb-6">
              Postgraduate Studies
              </h1>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
              Master's Degree Programs in <span className="text-yellow-300">Germany</span>

              </h1>
              <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
                Requirements and Guidance for Kenyan Students
              </p>
             
            </div>
          </div>
        </div>
      </section>

      <div className="mb-6 mt-6">
            <Link 
              to="/career-opportunities" 
              className="inline-flex items-center text-black hover:text-primary-200 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Career Opportunities
            </Link>
          </div>


      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-8 py-16 md:py-24">
        {/* Last Updated */}
        <div className="max-w-4xl mx-auto text-left mb-12">
          <p className="text-sm text-gray-500">Last Updated: 15 April 2025</p>
        </div>

        {/* Introduction */}
        <section className="mb-20 max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-8">
            Are you planning to pursue your master's studies in Germany? Whether you're seeking English-taught programs or specialized fields in German, this guide outlines the key requirements for Kenyan and other international students.
          </p>
          <p className="text-gray-700">
            At the International Institute for Foreign Languages and Hospitality Management (IIFLHM), we offer personalized guidance to help students successfully navigate their postgraduate journey in Germany.
          </p>
        </section>

        {/* Essential Requirements */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Essential Admission Requirements</h2>
            
            {/* Requirement 1 */}
            <div className="mb-12">
              <div className="flex items-start mb-4">
                <div className="bg-indigo-100 text-indigo-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</div>
                <h3 className="text-xl font-semibold text-gray-800">Recognized Bachelor's Degree</h3>
              </div>
              <div className="ml-12">
                <p className="text-gray-700 mb-4">
                  You must hold a recognized undergraduate degree in a related field to the master's program you intend to pursue.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-300">
                  <p className="text-gray-700">
                    The degree must be from an accredited institution and equivalent to a German bachelor's degree.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Requirement 2 */}
            <div className="mb-12">
              <div className="flex items-start mb-4">
                <div className="bg-indigo-100 text-indigo-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</div>
                <h3 className="text-xl font-semibold text-gray-800">Language Proficiency</h3>
              </div>
              <div className="ml-12">
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-primary-700 mb-2">German-taught programs</h4>
                    <p className="text-gray-700">
                      A DSH certificate or equivalent (e.g. TestDaF or telc C1 Hochschule) is typically required.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-primary-700 mb-2">English-taught programs</h4>
                    <p className="text-gray-700">
                      TOEFL, IELTS, or equivalent scores required. Some may ask for basic German (A1/A2).
                    </p>
                  </div>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
                  <p className="text-primary-800">
                    Some institutions offer language courses alongside the degree program.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Requirement 3 */}
            <div className="mb-12">
              <div className="flex items-start mb-4">
                <div className="bg-indigo-100 text-indigo-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</div>
                <h3 className="text-xl font-semibold text-gray-800">Academic Performance</h3>
              </div>
              <div className="ml-12">
                <p className="text-gray-700 mb-4">
                  Most German universities expect a minimum academic grade equivalent to 2.5 on the German grading scale (Second Class Upper Division or better).
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-300">
                  <p className="text-gray-700">
                    Specific grade requirements may vary based on the course and university.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Requirement 4 */}
            <div className="mb-12">
              <div className="flex items-start mb-4">
                <div className="bg-indigo-100 text-indigo-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">4</div>
                <h3 className="text-xl font-semibold text-gray-800">Additional Requirements</h3>
              </div>
              <div className="ml-12">
                <p className="text-gray-700 mb-4">
                  Some programs may require:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  {[
                    "Work experience",
                    "Internships",
                    "Letters of motivation",
                    "Reference letters",
                    "Entrance exams",
                    "Interviews"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <span className="mr-2 text-indigo-500">•</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <p className="text-gray-700">
                    <span className="font-semibold">Important:</span> Always check the specific requirements listed on the university's official program page before applying.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Requirements */}
        <section className="py-16 bg-indigo-50 mb-8 rounded-xl">
  <div className="max-w-4xl mx-auto px-6">
    <div className="mb-10">
      <h2 className="text-3xl font-bold text-gray-900  mb-4">Financial Requirements for Studying in Germany</h2>
      <p className="text-lg text-gray-700">
        To obtain a student visa, you must demonstrate sufficient financial resources through one of these approved methods:
      </p>
    </div>

    <div className="space-y-8 mb-12">
      <div className="border-b border-gray-200 pb-6">
        <h3 className="text-xl font-semibold text-primary-800 mb-2">Blocked Account</h3>
        <p className="text-gray-700">Minimum deposit of €11,904 (2025 requirement) in a German blocked account</p>
      </div>
      
      <div className="border-b border-gray-200 pb-6">
        <h3 className="text-xl font-semibold text-primary-800 mb-2">Scholarship</h3>
        <p className="text-gray-700">Official funding from recognized institutions or government programs</p>
      </div>
      
      <div className="border-b border-gray-200 pb-6">
        <h3 className="text-xl font-semibold text-primary-800 mb-2">Sponsorship</h3>
        <p className="text-gray-700">Notarized financial support from a qualified sponsor in Germany</p>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">Important Advice</h3>
      <p className="text-gray-700 leading-relaxed">
        While scholarships are available for international students, most are highly competitive. Begin your scholarship search at least 12 months before your intended start date, and consider applying to multiple funding sources to increase your chances.
      </p>
    </div>
  </div>
</section>

        {/* Consultation Services */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Career Consultation Services</h2>
            <p className="text-lg text-gray-700 mb-8">
              Do you meet the requirements listed above? Let us help you move forward with your master's degree application.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Track Record</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-3 bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span>
                    <span>20+ students placed in undergraduate and master's programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span>
                    <span>25 students in nursing apprenticeships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span>
                    <span>Expanding into new academic and vocational fields</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">How We Can Help</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-3 bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span>
                    <span>Program selection guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span>
                    <span>Application process support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span>
                    <span>Visa documentation assistance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-20 bg-gradient-to-r from-primary-700 to-primary-600 rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Take the Next Step?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Book a one-on-one consultation to begin your master's degree journey in Germany.
          </p>
          <div className="text-center">
        <button
          onClick={() => setShowEnrollmentModal(true)}
          className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all duration-300 text-lg"
        >
          👉 Book Your Career Consultation Here
        </button>
      </div>
        </section>

        {/* Final Message */}
        <section className="max-w-4xl mx-auto text-center">
          <p className="text-2xl font-bold text-indigo-800 mb-4">Shape your future. Study in Germany.</p>
          <p className="text-lg text-gray-700">Let IIFLHM be your bridge to success.</p>
        </section>
      </div>
      {/* Enrollment Modal */}
      {showEnrollmentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setShowEnrollmentModal(false)}
              className="float-right text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
            <MasterEnrollmentForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default MastersPrograms;