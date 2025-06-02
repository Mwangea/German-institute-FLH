import { ArrowLeft } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const UndergraduatePrograms: React.FC = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Hero Section */}
      {/* <section className="relative py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-6">
              Undergraduate Studies
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Study <span className="text-yellow-400">Undergraduate</span> Programs in Germany
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
              Requirements and Guidance for Kenyan Students
            </p>
            <div className="bg-yellow-500 text-blue-900 font-bold px-6 py-3 rounded-lg inline-block">
               World-class education with low tuition costs
            </div>
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
              backgroundImage: "url(/Undergraduate.jpg)",
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
                Undergraduate Studies
              </h1>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                Study <span className="text-yellow-400">Undergraduate</span>{" "}
                Programs in Germany
              </h1>
              <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
                Requirements and Guidance for Kenyan Students
              </p>
              <div className="bg-yellow-500 text-blue-900 font-bold px-6 py-3 rounded-lg inline-block">
                World-class education with low tuition costs
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
        <div className="max-w-4xl mx-auto text-left mb-12">
          <p className="text-sm text-gray-500">Last Updated: 08 April 2025</p>
        </div>

        {/* Introduction */}
        <section className="mb-20 max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-8">
            Are you a Kenyan high school graduate exploring international
            undergraduate opportunities? Germany offers world-class education,
            low tuition costs, and a wide range of English- and German-taught
            programs. At the International Institute for Foreign Languages and
            Hospitality Management (IIFLHM), we provide expert consultation and
            guidance to help you start your academic journey in Germany.
          </p>
        </section>

        {/* Admission Pathways */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Admission Pathways
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-primary-800 mb-4">
                  Direct Admission
                </h3>
                <p className="text-gray-700 mb-4">
                  For students who meet the German university entrance
                  qualifications.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span>KCSE with minimum grade requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span>Direct entry to degree programs</span>
                  </li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-8 rounded-xl border-l-4 border-yellow-500">
                <h3 className="text-xl font-semibold text-yellow-800 mb-4">
                  Indirect Admission
                </h3>
                <p className="text-gray-700 mb-4">
                  For students who need preparatory courses before enrolling.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500">•</span>
                    <span>Foundation year (Studienkolleg)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-yellow-500">•</span>
                    <span>Language preparation courses</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Core Requirements */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Core Admission Requirements
            </h2>

            {/* Requirement 1 */}
            <div className="mb-12">
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  High School Certificate (KCSE or Equivalent)
                </h3>
              </div>
              <div className="ml-12">
                <p className="text-gray-700 mb-4">
                  A minimum grade of C+ in KCSE is required for university
                  consideration.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-300">
                  <p className="text-gray-700">
                    If you hold other international qualifications (e.g.
                    A-Levels, IB, etc.), feel free to reach out for personalized
                    guidance.
                  </p>
                </div>
              </div>
            </div>

            {/* Requirement 2 */}
            <div className="mb-12">
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  German Language Proficiency
                </h3>
              </div>
              <div className="ml-12">
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-primary-700 mb-2">
                      English-taught programs
                    </h4>
                    <p className="text-gray-700">
                      Most universities accept applicants with A1 or A2
                      proficiency in German.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-primary-700 mb-2">
                      German-taught programs
                    </h4>
                    <p className="text-gray-700">
                      A minimum of C1-level proficiency is required.
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  If you do not meet direct entry requirements, you must hold at
                  least a B1/B2 certificate in German before applying.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <p className="text-blue-800 font-medium">
                    Tip: Starting early with German language learning increases
                    your study and scholarship options!
                  </p>
                </div>
              </div>
            </div>

            {/* Requirement 3 */}
            <div className="mb-12">
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Financial Proof
                </h3>
              </div>
              <div className="ml-12">
                <p className="text-gray-700 mb-4">
                  To study in Germany, you must demonstrate financial stability
                  through one of the following:
                </p>
                <ul className="space-y-3 text-gray-700 mb-4">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span>
                      A blocked account with a minimum of €11,904 (2025
                      requirement)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span>A scholarship from a recognized institution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span>
                      A financial sponsor who can support your studies and
                      living expenses
                    </span>
                  </li>
                </ul>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <p className="text-gray-700">
                    <span className="font-semibold">Note:</span> Undergraduate
                    scholarships are limited, so begin your search early while
                    still in your home country.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation Services */}
        <section className="mb-20 bg-gray-50 rounded-xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Career and Study Consultation Services
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              We offer one-on-one career counseling and have already helped over
              20 students secure placements in undergraduate and master's degree
              programs in Germany.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Our Track Record
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-3 bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                      ✓
                    </span>
                    <span>25 students placed in nursing apprenticeships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                      ✓
                    </span>
                    <span>
                      Expanding into new academic and vocational sectors
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  How We Can Help You
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-3 bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                      ✓
                    </span>
                    <span>Personalized university selection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                      ✓
                    </span>
                    <span>Application process guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                      ✓
                    </span>
                    <span>Visa and documentation support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Ready to Take the Next Step?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              If you meet the qualifications above, book a personal consultation
              session with our advisors to receive tailored guidance on:
            </p>

            <div className="space-y-8 mb-16">
              <ul className="space-y-6">
                {[
                  "Course selection guidance",
                  "Language proficiency preparation",
                  "University application strategy",
                  "Visa and financial documentation support",
                  "Scholarship opportunity assessment",
                  "Career path development planning",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 text-lg leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <Link
                to="/"
                className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all duration-300 text-lg"
              >
                👉 Book Your Career Consultation Here
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-primary-800 rounded-xl">
          <div className="max-w-2xl mx-auto text-center px-6">
            <h2 className="text-3xl font-bold text-white mb-6">
              Study in Germany. Invest in your future.
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let IIFLHM guide your journey from Kenya to Europe.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UndergraduatePrograms;
