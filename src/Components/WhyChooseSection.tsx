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
    <section className="relative py-24 bg-blue-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto  mb-16">
          {/* <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
            Why Choose Our Institution?
          </h2>
        <div className="w-24 h-1 bg-button-50 mx-auto mb-6"></div> */}
        <div className="inline-block justify-center text-center py-6">
  <h2 className="text-4xl font-bold text-center justify-center text-gray-900 mb-4">Why Choose Our Institution?</h2>
  <div className="h-1 bg-button-50 w-full"></div>
</div>


          <p className="text-lg text-left text-gray-700 mb-8">
          We combine modern hospitality management standards with cutting-edge technology to deliver industry-focused education.By blending language skills with hospitality training, we provide a high-quality, well-rounded learning experience that prepares you for a global career.
          </p>
          <p className="text-lg text-left text-gray-700">
          Our approach balances traditional values with modern demands, ensuring you're ready for today’s competitive hospitality industry.
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
          <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-button-50 rounded-full hover:bg-orange-600 transition-colors duration-300">
            Enroll Now and Transform Your Future
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;