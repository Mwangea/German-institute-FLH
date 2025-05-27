import React from "react";
import { Target, Eye, Users } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left side - Image and floating cards */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <img
                src="/choose.png"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary-500/10" />
            </div>

            {/* Floating achievement cards */}
            <div className="absolute -right-8 top-1/4 transform translate-y-8 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <Users className="text-primary-500" size={24} />
                <div>
                  <p className="text-2xl font-bold text-gray-900">2000+</p>
                  <p className="text-sm text-gray-600">Students Enrolled</p>
                </div>
              </div>
            </div>

            <div className="absolute -left-8 bottom-1/4 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <Target className="text-secondary-500" size={24} />
                <div>
                  <p className="text-2xl font-bold text-gray-900">95%</p>
                  <p className="text-sm text-gray-600">Success Rate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Empowering Future Leaders in
                <span className="text-primary-500"> Hospitality</span>
              </h2>

              <p className="text-lg text-gray-700 mb-8">
                We are dedicated to providing world-class education in
                hospitality and languages, preparing our students for successful
                careers in the global hospitality industry. Our comprehensive
                programs combine theoretical knowledge with practical
                experience, ensuring our graduates are ready to excel in their
                chosen fields.
              </p>

              <div className="space-y-8">
                {/* Vision */}
                <div className="bg-gray-50 rounded-xl p-6 transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center">
                      <Eye className="text-primary-500" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    To be a renowned institution recognized for excellence in
                    Language Training and Hospitality Management, shaping
                    globally competent professionals who contribute to
                    international understanding and industry growth.
                  </p>
                </div>

                {/* Mission */}
                <div className="bg-gray-50 rounded-xl p-6 transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-secondary-50 flex items-center justify-center">
                      <Target className="text-secondary-500" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    To equip individuals with practical language skills and and
                    Hospitality Expertise that empower them to thrive in global
                    environments, foster cultural understanding, and enhance
                    career opportunities in the international job market
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
