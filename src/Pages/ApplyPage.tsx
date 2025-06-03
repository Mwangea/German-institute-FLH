import React, { useState } from 'react';
import {  Clock, Calendar, ChevronRight, Play, } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Program {
  id: number;
  title: string;
  type: 'language' | 'hospitality';
  duration: string;
  price: number;
  level?: string;
  description: string;
  startDates: string[];
  prerequisites?: string[];
  slug: string;
}

const programs: Program[] = [
  // German Language Courses
  {
    id: 1,
    title: "German A1",
    type: "language",
    duration: "3 months",
    price: 20000,
    level: "Beginner",
    description: "Start your journey in German language with our comprehensive A1 course. Master basic communication skills and fundamental grammar.",
    startDates: ["January", "April", "July", "October"],
    prerequisites: ["No prior German knowledge required"],
    slug: "/german-levels/a1"
  },
  {
    id: 2,
    title: "German A2",
    type: "language",
    duration: "3 months",
    price: 20000,
    level: "Elementary",
    description: "Build upon your basic German skills and enhance your ability to communicate in everyday situations.",
    startDates: ["January", "April", "July", "October"],
    prerequisites: ["Completion of A2 level or equivalent"],
    slug: "/german-levels/a2"
  },
  {
    id: 3,
    title: "German B1",
    type: "language",
    duration: "3 months",
    price: 20000,
    level: "Intermediate",
    description: "Advance your German language skills to handle complex conversations and professional situations.",
    startDates: ["January", "April", "July", "October"],
    prerequisites: ["Completion of B1 level or equivalent"],
    slug: "/german-levels/b1"
  },
  {
    id: 4,
    title: "German B2",
    type: "language",
    duration: "3 months",
    price: 20000,
    level: "Intermediate",
    description: "Advance your German language skills to handle complex conversations and professional situations.",
    startDates: ["January", "April", "July", "October"],
    prerequisites: ["Completion of B2 level or equivalent"],
    slug: "/german-levels/b2"
  },
  {
    id: 5,
    title: "German C1",
    type: "language",
    duration: "3 months",
    price: 20000,
    level: "Intermediate",
    description: "Advance your German language skills to handle complex conversations and professional situations.",
    startDates: ["January", "April", "July", "October"],
    prerequisites: ["Completion of C1 level or equivalent"],
    slug: "/german-levels/c1"
  },
  {
    id: 6,
    title: "German C2",
    type: "language",
    duration: "3 months",
    price: 20000,
    level: "Intermediate",
    description: "Advance your German language skills to handle complex conversations and professional situations.",
    startDates: ["January", "April", "July", "October"],
    prerequisites: ["Completion of C2 level or equivalent"],
    slug: "/german-levels/c2"
  },
  // Hospitality Management Courses
  {
    id: 7,
    title: "Diploma in Hospitality Management",
    type: "hospitality",
    duration: "2 years (8 semesters)",
    price: 30000,
    description: "Comprehensive program covering all aspects of hospitality management. 8 semesters of 3 months each with practical training components.",
    startDates: ["January", "June", "September"],
    prerequisites: ["High school diploma or equivalent", "Basic English proficiency"],
    level: "Diploma",
    slug: "/diploma-hospitality"
  },
  {
    id: 8,
    title: "Diploma in Front Office Operations & Administration",
    type: "hospitality",
    duration: "2 years (8 semesters)",
    price: 30000,
    description: "Specialized training in front office operations. 8 semesters of professional development with industry attachments.",
    startDates: ["February", "July", "November"],
    prerequisites: ["High school diploma or equivalent"],
    level: "Diploma",
    slug: "/diploma-front-office"
  },
  // {
  //   id: 6,
  //   title: "Diploma in Food & Beverage Management",
  //   type: "hospitality",
  //   duration: "2 years (8 semesters)",
  //   price: 30000,
  //   description: "Professional training in food and beverage service management. Semester-based program with hands-on training.",
  //   startDates: ["March", "August", "December"],
  //   prerequisites: ["High school diploma or equivalent"],
  //   level: "Diploma"
  // },
  {
    id: 9,
    title: "Diploma in House Keeping & Laundry Operation",
    type: "hospitality",
    duration: "2 years (8 semesters)",
    price: 30000,
    description: "Comprehensive housekeeping management program. 8 semesters combining theory and practical skills.",
    startDates: ["January", "June", "September"],
    prerequisites: ["High school diploma or equivalent"],
    level: "Diploma",
    slug: "/diploma-housekeeping"
  },
  {
    id: 10,
    title: "Certificate in Front Office Operations",
    type: "hospitality",
    duration: "1 year (4 semesters)",
    price: 30000,
    description: "Essential skills for front office operations. 4-semester program focused on immediate employability.",
    startDates: ["Monthly intake"],
    prerequisites: ["Basic English communication skills"],
    level: "Certificate",
    slug: "/certificate-front-office"
  },
  // {
  //   id: 9,
  //   title: "Certificate in Food and Beverage Service",
  //   type: "hospitality",
  //   duration: "1 year (4 semesters)",
  //   price: 30000,
  //   description: "Practical training in food service. 4-semester certificate program with industry-relevant skills.",
  //   startDates: ["Monthly intake"],
  //   prerequisites: ["Basic English communication skills"],
  //   level: "Certificate"
  // }
];

const ApplyPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<'all' | 'language' | 'hospitality'>('all');
  //const [, setSelectedProgram] = useState<Program | null>(null);

  const filteredPrograms = selectedType === 'all' 
    ? programs 
    : programs.filter(program => program.type === selectedType);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        {/* Parallax Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(/student-boardroom.jpeg)",
              backgroundAttachment: 'fixed',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              transform: 'translateZ(0)'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-800/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-4 md:mb-6">
                Begin Your Journey to Excellence
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8">
                Choose from our wide range of accredited programs in hospitality management 
                and language studies. Transform your passion into a successful career.
              </p>
              <div className="flex flex-row justify-between gap-4 w-full max-w-md mx-auto">
                <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-3 bg-button-50 text-white rounded-full hover:bg-orange-600 transition-colors duration-300 text-sm sm:text-base">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  Campus Tour
                </button>
                <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-3 bg-white text-primary-600 rounded-full hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base">
                  Download Prospectus
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Programs
            </h2>
            <div className="w-24 h-1 bg-button-50 mx-auto mb-6"></div>

            <p className="text-lg text-gray-700 mb-8">
              Choose from our diverse range of programs designed to prepare you for 
              success in the global hospitality industry.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setSelectedType('all')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors duration-300 ${
                  selectedType === 'all'
                    ? 'bg-button-50 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                All Programs
              </button>
              <button
                onClick={() => setSelectedType('language')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors duration-300 ${
                  selectedType === 'language'
                    ? 'bg-button-50 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Language Courses
              </button>
              <button
                onClick={() => setSelectedType('hospitality')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors duration-300 ${
                  selectedType === 'hospitality'
                    ? 'bg-button-50 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Hospitality Programs
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {program.title}
                      </h3>
                      {program.level && (
                        <span className="inline-block px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm">
                          {program.level}
                        </span>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary-500">
                        Ksh {program.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">Total Fee</div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6">
                    {program.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary-500" />
                      <span className="text-gray-700">{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-primary-500" />
                      <span className="text-gray-700">
                        Starts: {program.startDates.join(', ')}
                      </span>
                    </div>
                  </div>

                  {program.prerequisites && (
                    <div className="mb-6">
                      <h4 className="font-medium text-gray-900 mb-2">Prerequisites:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {program.prerequisites.map((prereq, index) => (
                          <li key={index}>{prereq}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="w-full text-center mt-4">
                  <Link
  to={`${program.slug}`}
  className="inline-flex items-center gap-2 text-button-50 hover:underline font-semibold text-sm"
>
  View More <ChevronRight className="w-4 h-4" />
</Link>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Experience Our Campus Life
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Take a virtual tour of our state-of-the-art facilities, meet our expert 
                instructors, and see our students in action. Get a glimpse of the 
                enriching learning environment that awaits you.
              </p>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 rounded-full hover:bg-gray-100 transition-colors duration-300">
                <Play className="w-5 h-5" />
                Watch Campus Tour
              </button>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <video
                className="w-full h-full object-cover"
                poster="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg"
                controls
              >
                <source src="https://player.vimeo.com/external/371839264.sd.mp4?s=99b2cca4c11fbe2c3c14f4a7ef8b54419a146b25&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Take the first step towards your dream career. Our admissions team is 
              here to guide you through the application process.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-500 rounded-full hover:bg-gray-100 transition-colors duration-300">
                Apply Now
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-button-50 text-white rounded-full hover:bg-orange-700 transition-colors duration-300">
                Schedule a Consultation
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplyPage;