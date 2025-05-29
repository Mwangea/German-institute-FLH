import React from 'react';
import { BookOpen, CheckCircle, AlertCircle, FileText, ChevronRight } from 'lucide-react';

interface ExamType {
  title: string;
  description?: string;
  categories: ExamCategory[];
}

interface ExamCategory {
  name: string;
  url: string;
}

const examTypes: ExamType[] = [
  {
    title: "Goethe-Zertifikat A1",
    description: "Basic language use for beginners",
    categories: [
      { name: "Young people (Fit in Deutsch 1)", url: "/exams/a1/young" },
      { name: "Adults (Start Deutsch 1)", url: "/exams/a1/adults" }
    ]
  },
  {
    title: "Goethe-Zertifikat A2",
    description: "Elementary language use",
    categories: [
      { name: "Young people (Fit in Deutsch)", url: "/exams/a2/young" },
      { name: "Adults", url: "/exams/a2/adults" }
    ]
  },
  {
    title: "Goethe-Zertifikat B1",
    description: "Independent language use",
    categories: [
      { name: "Young people", url: "/exams/b1/young" },
      { name: "Adults", url: "/exams/b1/adults" }
    ]
  },
  {
    title: "Goethe-Zertifikat B2",
    description: "Advanced independent language use",
    categories: [
      { name: "Young people", url: "/exams/b2/young" },
      { name: "Adults", url: "/exams/b2/adults" }
    ]
  },
  {
    title: "Goethe-Zertifikat C1",
    description: "Effective operational proficiency",
    categories: [
      { name: "Adults", url: "/exams/c1/adults" }
    ]
  },
  {
    title: "Goethe-Zertifikat C2",
    description: "Mastery of language",
    categories: [
      { name: "Adults", url: "/exams/c2/adults" }
    ]
  },
  {
    title: "TestDaF",
    description: "Test of German as a Foreign Language",
    categories: [
      { name: "For students", url: "/exams/testdaf/students" }
    ]
  },
  {
    title: "Goethe-Test PRO",
    description: "German for professional contexts",
    categories: [
      { name: "For professionals", url: "/exams/pro/professionals" }
    ]
  }
];

const GermanExams: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        {/* Parallax Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full  bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(/German-Exam.jpg)",
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
              German Language Examinations
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
              Do you require evidence of your German language skills that is recognized all over the world? 
              If so, then you've come to the right place! We run German exams for all levels of ability, 
              ranging from A1 to C2.
              </p>
              <div className="flex flex-row justify-between gap-4 w-full max-w-md mx-auto">
                <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors duration-300 text-sm sm:text-base">
                  
                Register for Exam
                </button>
                <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base">
                View Exam Dates
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Exams Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Available Examinations
            </h2>
            <p className="text-lg text-gray-700">
              Choose from our comprehensive range of internationally recognized German language certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {examTypes.map((exam, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100 group hover:border-primary-200 hover:translate-y-[-4px]"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {exam.title}
                </h3>
                {exam.description && (
                  <p className="text-gray-600 mb-4 text-sm">{exam.description}</p>
                )}
                <ul className="space-y-3">
                  {exam.categories.map((category, idx) => (
                    <li 
                      key={idx}
                      className="group/item"
                    >
                      <a 
                        href={category.url}
                        className="flex items-center text-gray-700 hover:text-primary-600 transition-colors py-1"
                      >
                        <ChevronRight className="w-4 h-4 text-primary-500 mr-2 group-hover/item:translate-x-1 transition-transform" />
                        <span className="group-hover/item:underline">{category.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Examination Process
            </h2>

            <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-8 lg:gap-12">
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group hover:border-l-4 hover:border-l-primary-500">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500 transition-colors duration-300">
                  <CheckCircle className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    Registration
                  </h3>
                  <p className="text-gray-700">
                    Complete the registration form and select your preferred examination date.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group hover:border-l-4 hover:border-l-primary-500">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500 transition-colors duration-300">
                  <BookOpen className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    Preparation
                  </h3>
                  <p className="text-gray-700">
                    Access our preparation materials and mock tests to ensure you're ready for the examination.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group hover:border-l-4 hover:border-l-primary-500">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500 transition-colors duration-300">
                  <AlertCircle className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    Examination Day
                  </h3>
                  <p className="text-gray-700">
                    Arrive on time with required documents. The exam includes written and oral components.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group hover:border-l-4 hover:border-l-primary-500">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500 transition-colors duration-300">
                  <FileText className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    Certification
                  </h3>
                  <p className="text-gray-700">
                    Receive your internationally recognized certificate upon successful completion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join our community of ambitious learners and future hospitality
              leaders. Your journey to excellence starts here.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-500 rounded-full hover:bg-gray-100 transition-colors duration-300">
              Register for Exam
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors duration-300">
              Contact an Advisor
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GermanExams;