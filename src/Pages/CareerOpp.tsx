import { ArrowLeft } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../Components/SectionTitle';

const OpportunityHub: React.FC = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Hero Section */}
      
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        {/* Parallax Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full  bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(/career.jpg)",
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
              Opportunity Hub
              </h1>
              <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
              Your Gateway to <span className="text-accent-400">Germany</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
              For High School Graduates, College Students, and Alumni
            </p>
              <div className="flex flex-row justify-between gap-4 w-full max-w-md mx-auto">
                <Link to="/apprenticeships" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-3 bg-button-50 text-white rounded-full hover:bg-orange-600 transition-colors duration-300 text-sm sm:text-base">
                
                Explore Programs
                </Link>
                <Link 
                 to="/contact" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base">
                 Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mb-3 mt-3">
            <Link 
              to="/" 
              className="inline-flex items-center text-black hover:text-primary-200 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Home
            </Link>
          </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-8 py-16 md:py-24">
        {/* Introduction */}
        <section className="mb-20 max-w-4xl mx-auto">
          {/* <p className="text-sm text-gray-500 mb-6">Last Updated: 30 May 2025</p> */}
          <p className="text-lg text-gray-700 mb-8">
            Are you a recent high school graduate eager to kickstart your international career? Or a university graduate looking to enhance your skills and access training opportunities abroad? The International Institute for Foreign Languages and Hospitality Management proudly introduces our Opportunity Hub  a specialized platform that connects aspiring Kenyans with education and career pathways in Germany.
          </p>
        </section>

        {/* Why Germany */}
        <section className="mb-20 bg-primary-50 rounded-xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-800 mb-6">Why Germany?</h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                Germany offers world-class education, internationally recognized universities, and affordable tuition  often free for international students at public institutions.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4 text-primary-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Strong focus on research and innovation</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4 text-primary-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Excellent career prospects after graduation</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4 text-primary-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Diverse range of English-taught programs</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4 text-primary-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Safe and welcoming environment for international students</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer - Redesigned without cards */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto text-center mb-12">
            {/* <h2 className="text-3xl font-bold text-gray-900 mb-2">What We Offer</h2>
            <div className="w-24 h-1 bg-button-50 mx-auto mb-6"></div> */}
            <SectionTitle title='What We Offer' />
            <p className="text-lg text-gray-700">
              We provide personalized career consultancy services tailored for Kenyan high school leavers, university students, and alumni with ambitions to study, train, or work in Germany.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="space-y-8">
              {/* Apprenticeship Programs */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/4">
                  <h3 className="text-xl font-bold text-primary-700 mb-2">Apprenticeship Programs</h3>
                  <div className="w-full h-1 bg-button-50 mb-4"></div>
                </div>
                <div className="w-full md:w-3/4 bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    Vocational training programs that combine classroom learning with on-the-job experience in German companies.
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="mr-2 text-accent-500">•</span>
                      <span>Dual education system recognized worldwide</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-accent-500">•</span>
                      <span>Earn while you learn with competitive stipends</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-accent-500">•</span>
                      <span>Direct pathway to employment in Germany</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Undergraduate Degrees */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/4">
                  <h3 className="text-xl font-bold text-primary-700 mb-2">Undergraduate Degrees</h3>
                  <div className="w-full h-1 bg-button-50 mb-4"></div>
                </div>
                <div className="w-full md:w-3/4 bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    Bachelor's degree programs at top-ranked German universities and universities of applied sciences.
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="mr-2 text-accent-500">•</span>
                      <span>Tuition-free or low-cost education at public institutions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-accent-500">•</span>
                      <span>Wide range of English-taught programs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-accent-500">•</span>
                      <span>Opportunity to learn German alongside your studies</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Master's Degrees */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/4">
                  <h3 className="text-xl font-bold text-primary-700 mb-2">Master's Degrees</h3>
                  <div className="w-full h-1 bg-button-50 mb-4"></div>
                </div>
                <div className="w-full md:w-3/4 bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    Advanced degree programs designed to enhance your expertise and career prospects.
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="mr-2 text-accent-500">•</span>
                      <span>One to two-year programs with international recognition</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-accent-500">•</span>
                      <span>Research opportunities with leading experts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-accent-500">•</span>
                      <span>Post-study work visa options</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Job Market Access */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/4">
                  <h3 className="text-xl font-bold text-primary-700 mb-2">Job Market Access</h3>
                  <div className="w-full h-1 bg-button-50 mb-4"></div>
                </div>
                <div className="w-full md:w-3/4 bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    Support in connecting with potential employers and navigating the German job market.
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="mr-2 text-accent-500">•</span>
                      <span>Career counseling and job placement support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-accent-500">•</span>
                      <span>Workshops on German workplace culture</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-accent-500">•</span>
                      <span>Networking opportunities with industry professionals</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Started Section */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto text-center mb-12">
            {/* <h2 className="text-3xl font-bold text-gray-900 mb-2">Begin Your Journey</h2>
            <div className="w-24 h-1 bg-button-50 mx-auto mb-6"></div> */}
            <SectionTitle title='Begin Your Journey' />
            <p className="text-lg text-gray-700">
              Select your path below to explore the opportunities available to you and take the first step toward your international career.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                title: "Apprenticeship Programs in Germany",
                description: "Combine work and study in a German company",
                link: "/apprenticeships"
              },
              {
                title: "Undergraduate Degree Programs in Germany",
                description: "Pursue a bachelor's degree at top institutions",
                link: "/undergraduate"
              },
              {
                title: "Master's Degree Programs in Germany",
                description: "Advance your education with specialized programs",
                link: "/master-programs"
              }
            ].map((program, index) => (
              <div key={index} className="group relative overflow-hidden">
                <Link 
                  to={program.link}
                  className="block p-6 bg-white border-l-4 border-primary-500 hover:border-accent-400 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-gray-600">{program.description}</p>
                    </div>
                    <div className="text-primary-500 group-hover:text-primary-600 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-500 rounded-xl mb-20">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Future?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Book a consultation with our experts to create your personalized pathway to Germany.
            </p>
            <Link 
              to="/consultation" 
              className="inline-block px-8 py-3 bg-button-50 hover:bg-orange-700 text-white font-medium rounded-lg transition-all duration-300"
            >
              Schedule Your Consultation
            </Link>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-6">
            At the International Institute for Foreign Languages and Hospitality Management, we are committed to empowering young minds to succeed globally.
          </p>
          <p className="text-2xl font-bold text-primary-700">Your Future, Our Mission.</p>
        </section>
      </div>
    </div>
  );
};

export default OpportunityHub;