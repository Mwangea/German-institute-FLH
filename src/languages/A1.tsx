import {
  BookOpen,
  Clock,
  DollarSign,
  ChevronRight,
  CheckCircle,
  Users,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import GermanLevelForm from "../Forms/GermanLevelForm";

const GermanLevelA1 = () => {
  const levelData = {
    level: "A1",
    title: "Elementary use of language",
    fullDescription:
      "At the A1 level, you will learn to understand and use familiar, everyday expressions and very simple sentences, which relate to the satisfying of concrete needs. You will be able to introduce yourself and others as well as ask others about themselves – for example, where they live, who they know and what they own – and can respond to questions of this nature. You will be able to communicate in a simple manner if the person you are speaking to speaks slowly and clearly and is willing to help.",
    duration: "2 months",
    price: "Kes 20,000",
    outcomes: [
      "Understand and use familiar everyday expressions",
      "Introduce yourself and ask basic questions",
      "Interact in a simple way with slow, clear speech",
      "Write simple phrases and sentences",
      "Read and understand simple texts",
    ],
    certification: "Goethe-Zertifikat A1",
    targetAudience: "Absolute beginners with no prior German knowledge",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(/student.jpg)",
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
          <div className="container mx-auto px-4 text-center">
            <span className="inline-block px-3 py-1 text-sm font-medium text-primary-100 bg-primary-800 rounded-full mb-4">
              Beginner Level
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              German Level {levelData.level} Course
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              {levelData.title} • {levelData.duration} • {levelData.price}
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
                <h2 className="text-3xl text-center justify-center font-bold text-gray-900 mb-6">
                  Course Description
                </h2>
                <div className="w-24 h-1 bg-button-50 mx-auto mb-6"></div>

                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  {levelData.fullDescription}
                </p>

                <div className="bg-primary-500 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold text-black mb-4 flex items-center">
                    <Users className="w-6 h-6 text-accent-500 mr-2" />
                    Who is this course for?
                  </h3>
                  <p className="text-white">{levelData.targetAudience}</p>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Learning Outcomes
                </h3>
                <ul className="space-y-4">
                  {levelData.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Course Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-xl mr-4">
                      <Clock className="w-8 h-8 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 text-lg">
                        Duration
                      </h3>
                      <p className="text-gray-600">{levelData.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-xl mr-4">
                      <DollarSign className="w-8 h-8 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 text-lg">
                        Price
                      </h3>
                      <p className="text-gray-600">{levelData.price}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-xl mr-4">
                      <BookOpen className="w-8 h-8 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 text-lg">
                        Level
                      </h3>
                      <p className="text-gray-600">
                        {levelData.level} - {levelData.title}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-xl mr-4">
                      <Award className="w-8 h-8 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 text-lg">
                        Certification
                      </h3>
                      <p className="text-gray-600">{levelData.certification}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="bg-white rounded-xl shadow-md p-8 sticky top-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Register Now
              </h2>
              <GermanLevelForm level={levelData.level} />
            </div>
          </div>
        </div>
      </section>

      {/* Back to Courses Link */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <Link
            to="/courses/german"
            className="inline-flex items-center text-primary-600 hover:text-primary-800 text-lg"
          >
            <ChevronRight className="w-6 h-6 transform rotate-180 mr-2" />
            Back to all German courses
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GermanLevelA1;
