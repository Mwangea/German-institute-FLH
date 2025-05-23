import React from 'react';
import ProgramBlock from './ProgramBlock';
import ShapeBackground from './ShapeBackground';

// Program data
const programsData = [
  {
    id: 1,
    title: "Foreign Languages",
    description: "Master new languages with our comprehensive foreign language programs, designed for all proficiency levels.",
    icon: "Globe2",
    modules: [
      { id: 1, title: "English Language Course", level: "Beginner to Advanced" },
      { id: 2, title: "Spanish Language Course", level: "Beginner to Intermediate" },
      { id: 3, title: "French Language Course", level: "Beginner to Advanced" },
      { id: 4, title: "German Language Course", level: "Beginner to Intermediate" },
      { id: 5, title: "Mandarin Chinese Course", level: "Beginner" }
    ]
  },
  {
    id: 2,
    title: "Hospitality Management",
    description: "Develop essential skills for the hospitality industry with our specialized management and operational courses.",
    icon: "Hotel",
    modules: [
      { id: 1, title: "Diploma in Hospitality Management", level: "Advanced" },
      { id: 2, title: "Diploma in Front Office Operations & Administration", level: "Intermediate" },
      { id: 3, title: "Diploma in Food & Beverage Management", level: "Advanced" },
      { id: 4, title: "Diploma in House Keeping & Laundry Operation", level: "Intermediate" },
      { id: 5, title: "Certificate in Front Office Operations", level: "Beginner" },
      { id: 6, title: "Certificate in Food and Beverage Service & Sales", level: "Beginner" },
      { id: 7, title: "Certificate in House Keeping & Laundry", level: "Beginner" }
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