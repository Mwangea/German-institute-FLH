import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, FileText, CheckCircle2, Phone, ArrowLeft } from 'lucide-react';

interface ExamDate {
  date: string;
  location: string;
  registrationPeriod: string;
  price: string;
  discountedPrice: string;
  bookableFrom: string;
  singleModulePrice: string;
  discountedSingleModule: string;
}

const examDates: ExamDate[] = [
  { 
    date: "25.07. - 26.07.2025", 
    location: "Mombasa", 
    registrationPeriod: "23.06.2025 - 27.06.2025", 
    price: "KES 25.000,00", 
    discountedPrice: "KES 19.000,00", 
    bookableFrom: "23.06.2025",
    singleModulePrice: "KES 6.250,00",
    discountedSingleModule: "KES 4.750,00"
  },
  { 
    date: "31.07.2025", 
    location: "Nairobi", 
    registrationPeriod: "27.06.2025 - 03.07.2025", 
    price: "KES 25.000,00", 
    discountedPrice: "KES 19.000,00", 
    bookableFrom: "27.06.2025",
    singleModulePrice: "KES 6.250,00",
    discountedSingleModule: "KES 4.750,00"
  },
  { 
    date: "01.08.2025", 
    location: "Nairobi", 
    registrationPeriod: "27.06.2025 - 03.07.2025", 
    price: "KES 25.000,00", 
    discountedPrice: "KES 19.000,00", 
    bookableFrom: "27.06.2025",
    singleModulePrice: "KES 6.250,00",
    discountedSingleModule: "KES 4.750,00"
  },
  { 
    date: "20.08.2025", 
    location: "Nairobi", 
    registrationPeriod: "16.07.2025 - 23.07.2025", 
    price: "KES 25.000,00", 
    discountedPrice: "KES 19.000,00", 
    bookableFrom: "16.07.2025",
    singleModulePrice: "KES 6.250,00",
    discountedSingleModule: "KES 4.750,00"
  },
  { 
    date: "21.08.2025", 
    location: "Nairobi", 
    registrationPeriod: "16.07.2025 - 23.07.2025", 
    price: "KES 25.000,00", 
    discountedPrice: "KES 19.000,00", 
    bookableFrom: "16.07.2025",
    singleModulePrice: "KES 6.250,00",
    discountedSingleModule: "KES 4.750,00"
  },
  { 
    date: "03.10.2025", 
    location: "Nairobi", 
    registrationPeriod: "08.09.2025 - 12.09.2025", 
    price: "KES 25.000,00", 
    discountedPrice: "KES 19.000,00", 
    bookableFrom: "08.09.2025",
    singleModulePrice: "KES 6.250,00",
    discountedSingleModule: "KES 4.750,00"
  },
  { 
    date: "04.10.2025", 
    location: "Nairobi", 
    registrationPeriod: "08.09.2025 - 12.09.2025", 
    price: "KES 25.000,00", 
    discountedPrice: "KES 19.000,00", 
    bookableFrom: "08.09.2025",
    singleModulePrice: "KES 6.250,00",
    discountedSingleModule: "KES 4.750,00"
  },
  { 
    date: "21.11. - 22.11.2025", 
    location: "Mombasa", 
    registrationPeriod: "20.10.2025 - 24.10.2025", 
    price: "KES 25.000,00", 
    discountedPrice: "KES 19.000,00", 
    bookableFrom: "20.10.2025",
    singleModulePrice: "KES 6.250,00",
    discountedSingleModule: "KES 4.750,00"
  },
  { 
    date: "27.11. - 28.11.2025", 
    location: "Nairobi", 
    registrationPeriod: "24.10.2025 - 30.10.2025", 
    price: "KES 25.000,00", 
    discountedPrice: "KES 19.000,00", 
    bookableFrom: "24.10.2025",
    singleModulePrice: "KES 6.250,00",
    discountedSingleModule: "KES 4.750,00"
  }
];

const B2AdultsExam: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0">
          <img 
            src="/B2.jpg" 
            alt="Advanced German language student" 
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
              Goethe-Zertifikat B2
            </h1>
            <p className="text-xl text-gray-300 text-center mb-8">
              A German exam demonstrating advanced language proficiency
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Link */}
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
                  "Hold an official, internationally recognized certificate"
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
                  "Understand the main contents of complex texts on concrete and abstract topics, as well as technical discussions in your own area of specialization",
                  "Communicate so spontaneously and fluently that a normal conversation with native speakers is readily possible without a great deal of effort on either side",
                  "Express your opinion on current issues in a clear and detailed manner, explain your position on a current issue and state the benefits and drawbacks of various options"
                ].map((skill, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exam Dates Table */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-primary-500" />
                <h2 className="text-2xl font-bold text-gray-900">Examination Dates</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Location</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registration Period</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {examDates.map((exam, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{exam.date}</div>
                          <div className="text-sm text-gray-500">{exam.location}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{exam.registrationPeriod}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{exam.price}</div>
                          <div className="text-sm text-primary-600">{exam.discountedPrice} *</div>
                          <div className="text-xs text-gray-500 mt-1">Single module: {exam.singleModulePrice}</div>
                          <div className="text-xs text-primary-500">Single module: {exam.discountedSingleModule} *</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            Bookable from {exam.bookableFrom}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                * The cheaper price displayed applies if you have already participated in a German language course at the International Institute in the past six months. The six months refer to the period between when the language course ended and the date of the German language exam. In this case, the price will change automatically during the booking procedure. If not, please contact the course office.
              </p>
            </div>

            {/* Documents */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
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

            {/* Disclaimer */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
              <div className="flex items-start gap-3">
                <Phone className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Disclaimer</h3>
                  <p className="text-gray-700 mb-4">
                    Please note that given the high number of inquiries we are currently receiving it may take some time before our team responds to you on email.
                  </p>
                  <p className="text-gray-700 mb-4">
                    For a faster response, we encourage you to reach us by phone at:
                  </p>
                  <div className="space-y-2">
                    <a href="tel:0719455215" className="block text-primary-600 hover:text-primary-700 hover:underline">0719455215</a>
                    <a href="tel:+0786555442" className="block text-primary-600 hover:text-primary-700 hover:underline">+0786555442</a>
                  </div>
                  <p className="text-gray-700 mt-4">
                    We appreciate your patience and understanding.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl shadow-lg p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-pattern opacity-10"></div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Ready to Demonstrate Advanced German Skills?
                </h2>
                <p className="text-white/90 mb-6">
                  Register for your B2 German examination today and take the next step in your academic or professional journey.
                </p>
                <button className="px-8 py-3 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default B2AdultsExam;