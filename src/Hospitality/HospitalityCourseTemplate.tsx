
import {

    ChevronRight,
    CheckCircle,
    Users,

    Briefcase,
    
    
  } from "lucide-react";
  import { Link } from "react-router-dom";
  import HospitalityForm from "../Forms/HospitalityForm";
  
  interface HospitalityCourseData {
    title: string;
    type: 'Diploma' | 'Certificate';
    duration: string;
    price: string;
    fullDescription: string;
    outcomes: string[];
    certification: string;
    targetAudience: string;
    keyFeatures: {
      icon: React.ReactNode;
      title: string;
      description: string;
    }[];
    careerOpportunities: string[];
    modules: string[];
    internship: string;
    imageUrl: string;
  }
  
  const HospitalityCourseTemplate = ({ courseData }: { courseData: HospitalityCourseData }) => {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${courseData.imageUrl})`,
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
            <div className="container mx-auto px-4 text-center">
              <span className="inline-block px-3 py-1 text-sm font-medium text-primary-100 bg-primary-800 rounded-full mb-4">
                {courseData.type} Program
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                {courseData.title}
              </h1>
              <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                {courseData.duration} • {courseData.price}
              </p>
            </div>
          </div>
        </section>
  
        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Course Details */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white rounded-xl shadow-md p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Program Description
                  </h2>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    {courseData.fullDescription}
                  </p>
  
                  <div className="bg-primary-50 rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Users className="w-6 h-6 text-primary-600 mr-2" />
                      Who is this program for?
                    </h3>
                    <p className="text-gray-700">{courseData.targetAudience}</p>
                  </div>
  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Key Learning Outcomes
                  </h3>
                  <ul className="space-y-4">
                    {courseData.outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-lg">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
  
                <div className="bg-white rounded-xl shadow-md p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Program Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {courseData.keyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-primary-100 p-3 rounded-xl mr-4">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 text-lg">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
  
                <div className="bg-white rounded-xl shadow-md p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Curriculum
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {courseData.modules.map((module, index) => (
                      <div key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-secondary-500 rounded-full mt-2.5 mr-3"></span>
                        <span className="text-gray-700">{module}</span>
                      </div>
                    ))}
                  </div>
                  {courseData.internship && (
                    <div className="mt-6 bg-secondary-50 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Internship Component
                      </h3>
                      <p className="text-gray-700">{courseData.internship}</p>
                    </div>
                  )}
                </div>
  
                <div className="bg-white rounded-xl shadow-md p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Career Opportunities
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {courseData.careerOpportunities.map((career, index) => (
                      <div key={index} className="flex items-start">
                        <Briefcase className="w-5 h-5 text-secondary-500 mt-0.5 mr-3" />
                        <span className="text-gray-700">{career}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
  
              {/* Registration Form */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-md p-8 sticky top-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Apply Now
                  </h2>
                  <HospitalityForm courseName={courseData.title} />
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Back to Courses Link */}
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <Link
              to="/programs/hospitality-management"
              className="inline-flex items-center text-primary-600 hover:text-primary-800 text-lg"
            >
              <ChevronRight className="w-6 h-6 transform rotate-180 mr-2" />
              Back to all Hospitality programs
            </Link>
          </div>
        </section>
      </div>
    );
  };
  
  export default HospitalityCourseTemplate;