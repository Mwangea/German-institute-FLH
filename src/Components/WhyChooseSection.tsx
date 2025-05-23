import React from 'react';
import { Award, BookOpen, Users, Globe2, GraduationCap, Building2 } from 'lucide-react';

const WhyChooseSection: React.FC = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-primary-500" />,
      title: "Accredited Programs",
      description: "Our programs are internationally recognized and accredited by leading hospitality and education authorities, ensuring your qualification holds global value."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary-500" />,
      title: "Industry-Driven Curriculum",
      description: "Curriculum designed in collaboration with industry leaders, combining theoretical knowledge with practical skills that employers actively seek."
    },
    {
      icon: <Users className="w-8 h-8 text-primary-500" />,
      title: "Expert Faculty",
      description: "Learn from experienced professionals who bring real-world expertise to the classroom, providing insights that go beyond textbook knowledge."
    },
    {
      icon: <Globe2 className="w-8 h-8 text-primary-500" />,
      title: "Global Opportunities",
      description: "Strong industry partnerships provide international internship opportunities and job placements with leading hospitality brands worldwide."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-primary-500" />,
      title: "Career Support",
      description: "Comprehensive career services including resume workshops, interview preparation, and lifetime access to our alumni network and job portal."
    },
    {
      icon: <Building2 className="w-8 h-8 text-primary-500" />,
      title: "Modern Facilities",
      description: "State-of-the-art training facilities including professional kitchens, mock hotel rooms, and language labs equipped with the latest technology."
    }
  ];

  return (
    <section className="relative py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Choose Our Institution?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            With over two decades of excellence in hospitality and language education, we've established ourselves as a leading institution that transforms passionate learners into industry-ready professionals. Our comprehensive approach combines academic excellence with practical experience, preparing you for a successful global career.
          </p>
          <p className="text-lg text-gray-700">
            We pride ourselves on maintaining a perfect balance between traditional educational values and modern industry requirements, ensuring our graduates are well-equipped to meet the challenges of the evolving hospitality sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-primary-500 rounded-full hover:bg-primary-600 transition-colors duration-300">
            Enroll Now and Transform Your Future
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;