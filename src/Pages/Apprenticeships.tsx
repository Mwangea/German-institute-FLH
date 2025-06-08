import { ArrowLeft } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const HealthcareApprenticeships: React.FC = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Hero Section */}
      
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        {/* Parallax Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full  bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(/Healthcare.jpg)",
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
                Healthcare Apprenticeships
              </h1>
              <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                Nursing & Medical Radiology <span className="text-accent-400">Apprenticeships</span> in Germany
              </h1>
              <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
                Empowering Kenyan Youth for Global Healthcare Careers
              </p>
              <div className="bg-button-50 text-white font-bold px-6 py-3 rounded-lg inline-block mb-8">
                Applications for the next intake will open soon
              </div>
              
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
        {/* <div className="max-w-4xl mx-auto text-left mb-12">
          <p className="text-sm text-gray-500">Last Updated: 15 April 2025</p>
        </div> */}

        {/* Introduction */}
        <section className="mb-20 max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-8">
            Are you a Kenyan high school graduate passionate about healthcare? Do you dream of becoming a nurse or medical radiologist while training and working in Germany? If you have B2-level German proficiency, this is your chance to launch a life-changing international career.
          </p>
        </section>

        {/* Why Apprenticeships */}
        <section className="mb-20 bg-blue-50 rounded-xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-800 mb-8">Why German Healthcare Apprenticeships?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-primary-700 mb-4">About Ausbildungen</h3>
                <p className="text-gray-700 mb-6">
                  In Germany, Ausbildungen are formal apprenticeship programs that combine academic training with hands-on work experience. As a student, you'll be employed part-time by a healthcare institution while receiving classroom instruction.
                </p>
                <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
                  <p className="font-medium text-gray-800">
                    Training usually runs for three years, during which students receive a monthly salary to support their living expenses.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-700 mb-4">Requirements</h3>
                <p className="text-gray-700 mb-4">
                  To qualify, candidates must:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500">•</span>
                    <span>Secure placement with a German training institution or hospital</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500">•</span>
                    <span>Demonstrate strong German language skills (B2 level)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pathways Section */}
        {/* <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Pathways for Kenyan Graduates</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Through a collaborative initiative between Hochschule Koblenz (Germany) and IIFLHM, we have successfully placed Kenyan students in German hospitals.
                </p>
                <p className="text-gray-700 mb-6">
                  This project, part of a sustainability-focused research study by Hochschule Koblenz, explores ways to streamline international healthcare recruitment.
                </p>
                <Link 
                  to="/" 
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-800"
                >
                  Learn more about the research project
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-800 mb-4">Current Training Locations</h3>
                <p className="text-gray-700 mb-4">
                   13 Kenyan students are already training at:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500">•</span>
                    <span>Caritas Hospital in Bad Mergentheim</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500">•</span>
                    <span>Krankenhaus Tauberbischofsheim</span>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-white rounded-lg">
                  <p className="font-medium text-gray-800">
                    Starting September 2025: New medical radiology training program available!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Partnership Section */}
        {/* <section className="mb-20 bg-gray-50 rounded-xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our International Partnership</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-6">
                  In 2022, AG-Career Hub initiated a key partnership between Hochschule Koblenz and IIFLHM, with the mission of providing Kenyan students with access to high-quality healthcare training in Germany.
                </p>
                <p className="text-gray-700">
                  By 2023, the first pilot project had launched, allowing students to begin their journey with a preparatory course at IIFLHM before transitioning to Germany for formal training.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Success Stories</h3>
                <p className="text-gray-700 mb-4">
                  Our first group of students arrived in Germany in April 2024, followed by a second cohort later that year:
                </p>
                <div className="space-y-3">
                  <Link to="/" className="flex items-center text-primary-600 hover:text-primary-800">
                    
                    <span>First Cohort of Nursing Apprenticeship Students from Kenya arrives in Germany</span>
                  </Link>
                  <Link to="/" className="flex items-center text-primary-600 hover:text-primary-800">
                    
                    <span>Second Cohort of Nursing Apprenticeship Students from Kenya arrives in Germany</span>
                  </Link>
                  <Link to="/" className="flex items-center text-primary-600 hover:text-primary-800">
                    
                    <span>Aus Kenia zur Pflegeausbildung nach Deutschland</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Eligibility Section */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Who Is Eligible?</h2>
            <p className="text-lg text-gray-700 mb-8">
              To qualify for our apprenticeship program in Germany, you must meet the following criteria:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Academic Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2 text-green-500">✅</span>
                    <span>German Language Certificate – Level B2 (Issued within the past year)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-500">✅</span>
                    <span>KCSE Certificate – Minimum Grade C (Lower grades may be considered if B2-level German is achieved)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2 text-green-500">✅</span>
                    <span>Age: 18–29 years</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-500">✅</span>
                    <span>Strong interest in healthcare careers – nursing or medical radiology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-500">✅</span>
                    <span>Motivated and ready to adapt to a new cultural and professional environment</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
              <p className="text-gray-700">
                <span className="font-semibold">Note:</span> Candidates who have passed some B2 modules may still apply.
              </p>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-20 bg-blue-50 rounded-xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-800 mb-8">Application Process</h2>
            <p className="text-lg text-gray-700 mb-8">
              The next intake will open soon. Only applicants who meet the requirements will be shortlisted for interviews.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-primary-700 mb-4">How to Apply</h3>
                <p className="text-gray-700 mb-6">
                  Interested candidates will submit an application form (available soon) and undergo a screening process to ensure readiness for the program.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-700 mb-4">After Selection</h3>
                <p className="text-gray-700 mb-4">
                  Successful applicants will enroll in a preparatory course at IIFLHM :
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    
                    <span>Intercultural Training – Adjusting to life and work in Germany</span>
                  </li>
                  <li className="flex items-start">
                    
                    <span>German Medical Terminology – Essential vocabulary and usage</span>
                  </li>
                  <li className="flex items-start">
                    
                    <span>Basic Nursing Skills – Foundation in professional healthcare practice</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Support */}
        {/* <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Partners Will Assist With</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "✈️", text: "Visa document processing" },
                { icon: "🗓️", text: "Visa interview scheduling" },
                { icon: "🚐", text: "Airport pickup and accommodation logistics" },
                { icon: "🤝", text: "Ongoing support throughout your stay and training in Germany" }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}
        {/* <section className="py-20 bg-white">
  <div className="max-w-5xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
      End-to-End Support for Your Journey
    </h2>
    
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-1/4">
          <h3 className="text-xl font-semibold text-gray-800 border-b-2 border-primary-500 pb-2">
            Visa Documentation
          </h3>
        </div>
        <p className="text-gray-600 md:w-3/4">
          Our partners handle all paperwork with German precision, ensuring your visa application is complete and compliant.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-1/4">
          <h3 className="text-xl font-semibold text-gray-800 border-b-2 border-primary-500 pb-2">
            Interview Preparation
          </h3>
        </div>
        <p className="text-gray-600 md:w-3/4">
          We coordinate your visa interview schedule and provide coaching to help you present your case effectively.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-1/4">
          <h3 className="text-xl font-semibold text-gray-800 border-b-2 border-primary-500 pb-2">
            Arrival Services
          </h3>
        </div>
        <p className="text-gray-600 md:w-3/4">
          From airport pickup to temporary housing, we ensure your transition to Germany is smooth and stress-free.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-1/4">
          <h3 className="text-xl font-semibold text-gray-800 border-b-2 border-primary-500 pb-2">
            Ongoing Assistance
          </h3>
        </div>
        <p className="text-gray-600 md:w-3/4">
          Continuous support throughout your stay, including cultural orientation and professional training programs.
        </p>
      </div>
    </div>
  </div>
</section> */}

        {/* Final CTA */}
        <section className="py-16 bg-primary-500 rounded-xl">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl font-bold text-white mb-6">Start Your Healthcare Journey Today</h2>
            <p className="text-xl text-primary-100 mb-8">
              Join us at the International Institute for Foreign Languages and Hospitality Management and take your first step toward a career in global healthcare.
            </p>
            <div className="text-2xl font-bold text-yellow-300 mb-8">
              Your ambition. Our support. A world of opportunities.
            </div>
            <Link 
              to="/" 
              className="inline-block px-8 py-3 bg-button-50 hover:bg-yellow-600 text-white font-medium rounded-lg transition-all duration-300"
            >
             Application for the next intake will open soon

            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HealthcareApprenticeships;