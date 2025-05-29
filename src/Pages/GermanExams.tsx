import React from 'react';
import { BookOpen, Calendar, Clock, CheckCircle, AlertCircle, FileText, ChevronRight } from 'lucide-react';

interface ExamType {
  title: string;
  categories: string[];
}

const examTypes: ExamType[] = [
  {
    title: "Goethe-Zertifikat A1",
    categories: ["Young people (Fit in Deutsch 1)", "Adults (Start Deutsch 1)"]
  },
  {
    title: "Goethe-Zertifikat A2",
    categories: ["Young people (Fit in Deutsch)", "Adults"]
  },
  {
    title: "Goethe-Zertifikat B1",
    categories: ["Young people", "Adults"]
  },
  {
    title: "Goethe-Zertifikat B2",
    categories: ["Young people", "Adults"]
  },
  {
    title: "Goethe-Zertifikat C1",
    categories: ["Adults"]
  },
  {
    title: "Goethe-Zertifikat C2",
    categories: ["Adults"]
  },
  {
    title: "TestDaF",
    categories: ["For students"]
  },
  {
    title: "Goethe-Test PRO",
    categories: ["For professionals"]
  }
];

const GermanExams: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg"
            alt="Students taking exam"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              German Language Examinations
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Do you require evidence of your German language skills that is recognised all over the world? 
              If so, then you've come to the right place! We run German exams for all levels of ability, 
              ranging from A1 to C2.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-300">
                Register for Exam
              </button>
              <button className="px-8 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                View Exam Dates
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Available Exams Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
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
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {exam.title}
                </h3>
                <ul className="space-y-2 mb-6">
                  {exam.categories.map((category, idx) => (
                    <li 
                      key={idx}
                      className="flex items-center text-gray-700"
                    >
                      <ChevronRight className="w-4 h-4 text-primary-500 mr-2" />
                      {category}
                    </li>
                  ))}
                </ul>
                <button className="w-full px-4 py-2 bg-primary-50 text-primary-600 rounded-lg hover:bg-primary-100 transition-colors duration-300 flex items-center justify-center gap-2">
                  Learn More
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Examination Process
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Registration</h3>
                  <p className="text-gray-700">
                    Complete the registration form and select your preferred examination date.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Preparation</h3>
                  <p className="text-gray-700">
                    Access our preparation materials and mock tests to ensure you're ready for the examination.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-5 h-5 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Examination Day</h3>
                  <p className="text-gray-700">
                    Arrive on time with required documents. The exam includes written and oral components.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Certification</h3>
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
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Certify Your German Language Skills?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Take the next step in your language journey with an official certification.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-white text-primary-500 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                Register for Exam
              </button>
              <button className="px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300">
                Contact an Advisor
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GermanExams;