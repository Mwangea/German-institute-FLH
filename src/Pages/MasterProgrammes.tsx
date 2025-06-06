import { ArrowLeft } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MasterEnrollmentForm from '../Forms/masterProgrammes';

const MastersPrograms: React.FC = () => {
    const [showEnrollmentModal, setShowEnrollmentModal] = useState(false);

  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        {/* Parallax Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
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
        {/* Introduction */}
        <section className="mb-20 max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-8">
            Are you planning to pursue your master's studies in Germany? Whether you're seeking English-taught programs or specialized fields in German, this guide outlines the key requirements for Kenyan and other international students.
          </p>
          <p className="text-gray-700">
            At the International Institute for Foreign Languages and Hospitality Management (IIFLHM), we offer personalized guidance to help students successfully navigate their postgraduate journey in Germany.
          </p>
        </section>

        {/* Comprehensive Requirements Section */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Master's Degree Application Requirements for Kenyan Students</h2>
            
            {/* General Requirements */}
            <div className="mb-12 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">✅ General Requirements</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-800 mb-2">1. Bachelor's Degree</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>A recognized undergraduate degree (usually with a GPA of at least Second Class Upper or equivalent)</li>
                  <li>The degree should be related to the Master's program you're applying for</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-800 mb-2">2. Proof of English or German Language Proficiency</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded border border-gray-200">
                    <h5 className="font-semibold text-blue-700">For English-taught programs:</h5>
                    <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1">
                      <li>TOEFL (typically ≥ 80 iBT)</li>
                      <li>IELTS (typically ≥ 6.0 or 6.5)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded border border-gray-200">
                    <h5 className="font-semibold text-blue-700">For German-taught programs:</h5>
                    <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1">
                      <li>TestDaF, DSH, or Goethe-Institut certificates</li>
                      <li>Usually B2 or C1 level required</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Required Documents */}
            <div className="mb-12 bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">📄 Required Documents</h3>
              <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">1.</span>
                  <span>Passport (valid)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">2.</span>
                  <span>Bachelor's degree certificate</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">3.</span>
                  <span>Transcript of academic records</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">4.</span>
                  <span>Curriculum Vitae (CV)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">5.</span>
                  <span>Letter of Motivation / Statement of Purpose</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">6.</span>
                  <span>Two recommendation letters (academic or professional)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">7.</span>
                  <span>Language test certificates (English or German)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">8.</span>
                  <span>APS Certificate – Mandatory for Kenyans from 2023 onwards</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">9.</span>
                  <span>Proof of application fee payment (if applicable)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">10.</span>
                  <span>Portfolio (for art/design programs)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">11.</span>
                  <span>Work experience (if required by the program)</span>
                </li>
              </ul>
              <div className="mt-4 text-sm text-gray-600">
                <p>APS = Akademische Prüfstelle – an academic verification process by the German Embassy</p>
              </div>
            </div>
            
            {/* Application Process */}
            <div className="mb-12 bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">🌐 Application Process</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-2">1. Research universities and programs</h4>
                  <p className="text-gray-700">Use platforms like:</p>
                  <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1">
                    <li><a href="https://www.daad.de" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DAAD Germany</a></li>
                    <li><a href="https://www.uni-assist.de" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Uni-Assist</a></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-2">2. Check program-specific requirements</h4>
                  <p className="text-gray-700">Some programs require interviews, GRE, or specific academic backgrounds.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-2">3. Apply via:</h4>
                  <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1">
                    <li>University's own portal</li>
                    <li>Or Uni-Assist, a central application platform</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-2">4. Apply for APS (Academic Evaluation Center)</h4>
                  <p className="text-gray-700">Website: <a href="https://aps-cert.de" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://aps-cert.de</a></p>
                  <p className="text-gray-700 mt-1">It validates your degree before you apply for a visa</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-2">5. Apply for a student visa at the German Embassy Nairobi</h4>
                  <p className="text-gray-700">You'll need a blocked bank account (about €11,208/year) or scholarship proof</p>
                </div>
              </div>
            </div>
            
            {/* Financial Requirements */}
            <div className="mb-12 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">💰 Financial Requirements</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Blocked account (Sperrkonto): approx. €934/month (~ KES 130,000), total ~€11,208/year</li>
                <li>OR: a DAAD scholarship / sponsorship letter</li>
                <li>Proof of accommodation (in some cases)</li>
              </ul>
            </div>
            
            {/* Tips for Kenyan Applicants */}
            <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-500">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">📌 Tips for Kenyan Applicants</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Start at least 6–12 months in advance of the semester</li>
                <li>Most intakes are in October (Winter) and April (Summer)</li>
                <li>Apply early for APS and visa—they take time!</li>
                <li>Strong motivation letters and clear academic goals really matter</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Detailed Financial Requirements */}
        <section className="py-16 bg-indigo-50 mb-8 rounded-xl">
          <div className="max-w-4xl mx-auto px-6">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Financial Requirements for Studying in Germany</h2>
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
                  <li className="flex items-start">
                    <span className="mr-3 bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span>
                    <span>APS certification guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span>
                    <span>Financial planning advice</span>
                  </li>
                </ul>
              </div>
              {/* <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Track Record</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-3 bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span>
                    <span>50+ students placed in German universities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span>
                    <span>90% success rate in visa applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span>
                    <span>Specialized guidance for Kenyan applicants</span>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Take the Next Step?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Book a one-on-one consultation to begin your master's degree journey in Germany.
          </p>
          <div className="text-center">
            <button
              onClick={() => setShowEnrollmentModal(true)}
              className="inline-block px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-all duration-300 text-lg"
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