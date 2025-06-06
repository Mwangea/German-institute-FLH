import { useState } from "react";
import KiswahiliForm from "../Forms/KiswahiliForm";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import SectionTitle from "../Components/SectionTitle";
//import FormModal from "./FormModal";

const CoursesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const openModal = (courseTitle: string) => {
    setSelectedCourse(courseTitle);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      {/* <section className="bg-primary-500 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Kiswahili Language Courses
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Master the beautiful Swahili language with our comprehensive courses,
            available both online and in-person.
          </p>
          <div className="space-x-4">
            <button
              onClick={() => openModal("Kiswahili Course")}
              className="bg-accent-500 hover:bg-accent-600 text-gray-900 font-bold py-3 px-6 rounded-lg text-lg transition duration-300"
            >
              Enroll Now
            </button>
            <button className="bg-white hover:bg-gray-100 text-primary-500 font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section> */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(/kiswahili.jpg)",
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              transform: "translateZ(0)",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-800/80"></div>
        </div>

        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-4 md:mb-6">
                Kiswahili Language Courses
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
              Master the beautiful Swahili language with our comprehensive courses,
              available both online and in-person.
              </p>
              <div className="flex flex-row justify-between gap-4 w-full max-w-md mx-auto">
                <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-3 bg-button-50 text-white rounded-full hover:bg-orange-600 transition-colors duration-300 text-sm sm:text-base">
                  Enroll Now
                </button>
                <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base">
                  Course Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Courses Section */}
      <section className="py-16 container mx-auto px-4 max-w-7xl">
  {/* Back Navigation */}
  <div className="mb-12">
    <Link 
      to="/programs/foreign-languages" 
      className="inline-flex items-center text-gray-600 hover:text-primary-500 transition-colors group"
    >
      <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
      <span className="font-medium">Back to Foreign Languages</span>
    </Link>
  </div>

  {/* Section Header */}
  <div className="text-center mb-16">
    {/* <h2 className="text-4xl font-bold text-gray-900 mb-4">
      Available Kiswahili Courses
    </h2>
    <div className="w-20 h-1 bg-button-50 mx-auto mb-6 rounded-full"></div> */}
            <SectionTitle title='Available Kiswahili Courses' />

    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
      Choose from our selection of high-quality language programs tailored to different learning preferences and schedules.
    </p>
  </div>

  {/* Courses Grid */}
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Course Card - Sprachenatelier Berlin */}
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-gray-900">
            Sprachenatelier Berlin
          </h3>
          <span className="bg-primary-50 text-primary-600 text-xs font-semibold px-3 py-1 rounded-full">
            Hybrid
          </span>
        </div>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          Comprehensive Kiswahili courses from A1 to C2 levels, available in evenings with flexible learning options.
        </p>

        <div className="space-y-5 mb-8">
          <div className="pl-4 border-l-2 border-secondary-500">
            <h4 className="font-semibold text-gray-900 mb-1">Group Courses</h4>
            <ul className="text-gray-700 text-sm space-y-1">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Standard (5–9 students): <span className="font-medium">€195–€215</span></span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>Mini Group (3–5): <span className="font-medium">€245–€265</span></span>
              </li>
            </ul>
          </div>

          <div className="pl-4 border-l-2 border-accent-500">
            <h4 className="font-semibold text-gray-900 mb-1">Private Lessons</h4>
            <p className="text-gray-700 text-sm flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>€450 for 10 sessions (45 min each)</span>
            </p>
          </div>
        </div>

        <button
          onClick={() => openModal("Sprachenatelier Berlin - Kiswahili")}
          className="w-full bg-gradient-to-r from-button-50 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5"
        >
          Enroll Now
        </button>
      </div>
    </div>

    {/* Course Card - Lugha Swahili School */}
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-gray-900">
            Lugha Swahili School
          </h3>
          <span className="bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
            Online
          </span>
        </div>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          Focus on Tanzanian Kiswahili with flexible online learning options and community support.
        </p>

        <div className="space-y-5 mb-8">
          <div className="pl-4 border-l-2 border-secondary-500">
            <h4 className="font-semibold text-gray-900 mb-1">One-to-One Classes</h4>
            <p className="text-gray-700 text-sm flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span><span className="font-medium">$18/hour</span> personalized sessions</span>
            </p>
          </div>

          <div className="pl-4 border-l-2 border-accent-500">
            <h4 className="font-semibold text-gray-900 mb-1">Membership</h4>
            <p className="text-gray-700 text-sm flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span><span className="font-medium">$9.99/month</span> - Courses + live sessions</span>
            </p>
          </div>
        </div>

        <button
          onClick={() => openModal("Lugha Swahili School - Kiswahili")}
          className="w-full bg-gradient-to-r from-button-50 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5"
        >
          Enroll Now
        </button>
      </div>
    </div>

    {/* Course Card - The Language Garage */}
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-gray-900">
            The Language Garage
          </h3>
          <span className="bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
            Online
          </span>
        </div>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          Small group classes and private tutoring with free learning materials included.
        </p>

        <div className="space-y-5 mb-8">
          <div className="pl-4 border-l-2 border-secondary-500">
            <h4 className="font-semibold text-gray-900 mb-1">Group Classes</h4>
            <p className="text-gray-700 text-sm flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span><span className="font-medium">$199</span> for 10 weeks (1hr/week)</span>
            </p>
          </div>

          <div className="pl-4 border-l-2 border-accent-500">
            <h4 className="font-semibold text-gray-900 mb-1">Private Tutoring</h4>
            <p className="text-gray-700 text-sm flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span><span className="font-medium">$55/hour</span> customized lessons</span>
            </p>
          </div>
        </div>

        <button
          onClick={() => openModal("The Language Garage - Kiswahili")}
          className="w-full bg-gradient-to-r from-button-50 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5"
        >
          Enroll Now
        </button>
      </div>
    </div>

    {/* Course Card - AmazingTalker (full width on md) */}
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300 md:col-span-2 lg:col-span-1">
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-gray-900">
            AmazingTalker
          </h3>
          <span className="bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
            Online
          </span>
        </div>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          Personalized lessons with vetted tutors, scheduled at your convenience.
        </p>

        <div className="space-y-5 mb-8">
          <div className="pl-4 border-l-2 border-secondary-500">
            <h4 className="font-semibold text-gray-900 mb-1">Tutoring Rates</h4>
            <p className="text-gray-700 text-sm flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span><span className="font-medium">$10–$30/hour</span> based on tutor</span>
            </p>
          </div>

          <div className="pl-4 border-l-2 border-accent-500">
            <h4 className="font-semibold text-gray-900 mb-1">Flexibility</h4>
            <p className="text-gray-700 text-sm flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Schedule lessons when you want</span>
            </p>
          </div>
        </div>

        <button
          onClick={() => openModal("AmazingTalker - Kiswahili")}
          className="w-full bg-gradient-to-r from-button-50 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5"
        >
          Find Your Tutor
        </button>
      </div>
    </div>
  </div>
</section>

      {/* Description Section */}
      <section className="py-20 bg-white">
  <div className="container mx-auto px-6 max-w-3xl">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-3">
        Why Learn Kiswahili?
      </h2>
      <div className="w-16 h-1 bg-button-50 mx-auto rounded-full"></div>
    </div>

    <div className="prose prose-lg text-gray-600 space-y-6">
      <p className="leading-relaxed">
        Kiswahili, also known as Swahili, is one of the most widely
        spoken languages in Africa, with over 100 million speakers. It
        serves as a lingua franca in much of East Africa and is an
        official language in Tanzania, Kenya, Uganda, and the Democratic
        Republic of Congo.
      </p>
      
      <p className="leading-relaxed">
        Learning Kiswahili opens doors to rich cultural experiences,
        business opportunities, and deeper connections with East African
        communities. Whether you're planning to travel, work, or simply
        expand your linguistic horizons, our courses provide the perfect
        foundation.
      </p>
      
      <p className="leading-relaxed">
        Our experienced instructors use immersive teaching methods to help
        you develop practical language skills quickly. From basic
        greetings to advanced conversation, we tailor our approach to
        your learning goals.
      </p>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Kiswahili Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of students who've successfully learned Kiswahili with
            our proven teaching methods.
          </p>
          <button
            onClick={() => openModal("Kiswahili Course")}
            className="bg-button-50 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-lg"
          >
            Enroll Today
          </button>
        </div>
      </section>

      {/* Form Modal */}
      <KiswahiliForm
        isOpen={isModalOpen}
        onClose={closeModal}
        courseTitle={selectedCourse}
      />
    </div>
  );
};

export default CoursesPage;