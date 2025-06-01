import React from 'react';
import ProgramBlock from './ProgramBlock';
import ShapeBackground from './ShapeBackground';

// Program data with module links
const programsData = [
  {
    id: 1,
    title: "Foreign Languages",
    description: "Master new languages with our comprehensive foreign language programs, designed for all proficiency levels.",
    icon: "Globe2",
    link: "/programs/foreign-languages",
    modules: [
      { 
        id: 1, 
        title: "German Language Course", 
        level: "Beginner to Intermediate",
        link: "/courses/german",
        isAvailable: true
      },
      { 
        id: 2, 
        title: "English Language Course", 
        level: "Beginner to Advanced",
        link: "/courses/english",
        isAvailable: false
      },
      { 
        id: 3, 
        title: "Spanish Language Course", 
        level: "Beginner to Intermediate",
        link: "/courses/spanish",
        isAvailable: false
      },
      { 
        id: 4, 
        title: "French Language Course", 
        level: "Beginner to Advanced",
        link: "/courses/french",
        isAvailable: false
      },
      { 
        id: 5, 
        title: "Mandarin Chinese Course", 
        level: "Beginner",
        link: "/courses/mandarin",
        isAvailable: false
      }
    ]
  },
  {
    id: 2,
    title: "Hospitality Management",
    description: "Develop essential skills for the hospitality industry with our specialized management and operational courses.",
    icon: "Hotel",
    link: "/programs/hospitality-management",
    modules: [
      { 
        id: 1, 
        title: "Diploma in Hospitality Management", 
        level: "Advanced",
        link: "/diploma-hospitality" 
      },
      { 
        id: 2, 
        title: "Diploma in Front Office Operations & Administration", 
        level: "Intermediate",
        link: "/diploma-front-office" 
      },
      // { 
      //   id: 3, 
      //   title: "Diploma in Food & Beverage Management", 
      //   level: "Advanced",
      //   link: "/diploma-food-beverage" 
      // },
      { 
        id: 4, 
        title: "Diploma in House Keeping & Laundry Operation", 
        level: "Intermediate",
        link: "/diploma-housekeeping" 
      },
      { 
        id: 5, 
        title: "Certificate in Front Office Operations", 
        level: "Beginner",
        link: "/certificate-front-office" 
      },
      // { 
      //   id: 6, 
      //   title: "Certificate in Food and Beverage Service & Sales", 
      //   level: "Beginner",
      //   link: "/certificate-food-beverage" 
      // },
      // { 
      //   id: 7, 
      //   title: "Certificate in House Keeping & Laundry", 
      //   level: "Beginner",
      //   link: "/certificate-housekeeping" 
      // }
    ]
  }
];

const ProgramsSection: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden" id='features'>
      <ShapeBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Our <span className="text-primary-500">Programs</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover our comprehensive range of professional programs designed to help you excel in your career.
          </p>
        </div>

        <div className="space-y-24 max-w-6xl mx-auto">
          {programsData.map((program, index) => (
            <ProgramBlock 
              key={program.id} 
              program={program}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;