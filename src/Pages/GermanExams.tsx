import React from 'react';
import { BookOpen, Calendar, Clock, CheckCircle, AlertCircle, FileText, GraduationCap } from 'lucide-react';

interface ExamLevel {
  name: string;
  description: string;
  duration: string;
  price: number;
  dates: string[];
  requirements: string[];
}

const examLevels: ExamLevel[] = [
  {
    name: 'A1 Exam',
    description: 'Basic language use. Can understand and use familiar everyday expressions and basic phrases.',
    duration: '45 minutes',
    price: 15000,
    dates: ['March 15, 2024', 'June 20, 2024', 'September 10, 2024'],
    requirements: [
      'Completion of A1 level course or equivalent',
      'Valid ID document',
      'Exam registration at least 2 weeks in advance'
    ]
  },
  {
    name: 'A2 Exam',
    description: 'Elementary language use. Can communicate in simple and routine tasks.',
    duration: '60 minutes',
    price: 18000,
    dates: ['March 16, 2024', 'June 21, 2024', 'September 11, 2024'],
    requirements: [
      'Completion of A2 level course or equivalent',
      'Valid ID document',
      'Exam registration at least 2 weeks in advance'
    ]
  },
  {
    name: 'B1 Exam',
    description: 'Intermediate language use. Can deal with most situations likely to arise while traveling.',
    duration: '90 minutes',
    price: 22000,
    dates: ['March 17, 2024', 'June 22, 2024', 'September 12, 2024'],
    requirements: [
      'Completion of B1 level course or equivalent',
      'Valid ID document',
      'Exam registration at least 3 weeks in advance'
    ]
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
              Certify your German language proficiency with our internationally recognized examinations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-300">
                Register for Exam
              </button>
              <button className="px-8 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                Download Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Information Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Available Examinations
            </h2>
            <p className="text-lg text-gray-700">
              Choose the examination level that matches your current German language proficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {examLevels.map((exam) => (
              <div key={exam.name} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{exam.name}</h3>
                  <p className="text-gray-700 mb-6">{exam.description}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary-500" />
                      <span className="text-gray-700">Duration: {exam.duration}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-primary-500" />
                      <span className="text-gray-700">Fee: KES {exam.price.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Upcoming Dates:</h4>
                    <ul className="space-y-2">
                      {exam.dates.map((date, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary-500" />
                          <span className="text-gray-700">{date}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-300">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Process Section */}
      <section className="py-20 bg-white">
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
                    Complete the online registration form and pay the examination fee at least two weeks before your preferred examination date.
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
                    Access our preparation materials and mock tests. Consider joining our exam preparation courses for additional support.
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
                    Arrive 30 minutes before the scheduled time with your ID document. The examination consists of written and oral components.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Certification</h3>
                  <p className="text-gray-700">
                    Receive your results within 4-6 weeks. Successful candidates will be awarded an internationally recognized certificate.
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
              Take the next step in your language journey and prove your proficiency with an official certification.
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