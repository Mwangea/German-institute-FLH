import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const programs = [
  {
    title: "Diploma in Hospitality Management",
    path: "/diploma-hospitality",
    image: "https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg",
    duration: "3 years",
    level: "Diploma",
    description:
      "Three-year program preparing learners for departmental manager roles with operational and managerial skills, plus foreign language training for the global hospitality industry.",
    modules: [
      "Hospitality Industry Overview",
      "Management Reporting",
      "Hospitality Marketing",
      "Facility Design Evaluation",
      "Human Resource Management",
      "Hotel Information Systems",
    ],
    fee: "Contact for pricing",
  },
  {
    title: "Diploma in Front Office Operations & Administration",
    path: "/diploma-front-office",
    image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
    duration: "2 years",
    level: "Diploma",
    description:
      "Two-year program providing professional skills for front office operations in various hotels, with practical training and six months' industrial attachment.",
    modules: [
      "Front Office Operations",
      "Guest Service Procedures",
      "Reservation Systems",
      "Revenue Control",
      "Night Audit Procedures",
      "Guest Relations",
    ],
    fee: "Contact for pricing",
  },
  {
    title: "Diploma in House Keeping & Laundry Operation",
    path: "/diploma-housekeeping",
    image: "https://images.pexels.com/photos/5997993/pexels-photo-5997993.jpeg",
    duration: "2 years",
    level: "Diploma",
    description:
      "Two-year program providing competencies in supervision, scheduling, inventory control, and maintenance of fabrics and furniture, plus laundry plant operations.",
    modules: [
      "Housekeeping Department Organization",
      "Supervision Techniques",
      "Inventory Control",
      "Fabric Maintenance",
      "Laundry Plant Operations",
      "Health and Safety Standards",
    ],
    fee: "Contact for pricing",
  },
  {
    title: "Certificate in Front Office Operations & Administration",
    path: "/certificate-front-office",
    image: "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg",
    duration: "1 year",
    level: "Certificate",
    description:
      "One-year program providing professional front office skills with three months' industrial attachment, preparing students for operational roles with promotion potential.",
    modules: [
      "Front Office Operations",
      "Guest Registration",
      "Reservation Systems",
      "Cash Handling",
      "Property Management Systems",
      "Communication Skills",
    ],
    fee: "Contact for pricing",
  },
];

const HospitalityPrograms = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-500 mb-4">
            Hospitality Programs
          </h2>
          <p className="text-xl text-gray-600">
            Professional training for hospitality industry careers
          </p>
        </div>

        {programs.map((program, index) => {
          const programImages = {
            "Diploma in Hospitality Management": [
              program.image,
              "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg",
              "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg",
              "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg",
            ],
            "Diploma in Front Office Operations & Administration": [
              program.image,
              "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
              "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg",
              "https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg",
            ],
            "Diploma in House Keeping & Laundry Operation": [
              program.image,
              "https://images.pexels.com/photos/4107112/pexels-photo-4107112.jpeg",
              "https://images.pexels.com/photos/3771110/pexels-photo-3771110.jpeg",
              "https://images.pexels.com/photos/4107113/pexels-photo-4107113.jpeg",
            ],
            "Certificate in Front Office Operations & Administration": [
              program.image,
              "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
              "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg",
              "https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg",
            ],
          };
          return (
            <ProgramCard 
              key={index}
              program={program}
              index={index}
              images={programImages[program.title as keyof typeof programImages]}
            />
          );
        })}
      </div>
    </div>
  );
};

interface ProgramCardProps {
  program: {
    title: string;
    level: string;
    duration: string;
    image: string;
    description: string;
    modules: string[];
    fee: string;
    path: string;
  };
  index: number;
  images: string[];
}

const ProgramCard = ({ program, index, images }: ProgramCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className={`mb-20 flex flex-col ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } items-center gap-8 transition-all duration-500 ease-in-out hover:shadow-lg rounded-xl p-6 hover:bg-white`}
    >
      {/* Image Gallery */}
      <div className="w-full md:w-1/2 h-96 relative group overflow-hidden rounded-lg">
        <div className="absolute inset-0 flex">
          {images.map((img, imgIndex) => (
            <div
              key={imgIndex}
              className={`min-w-full h-full transition-opacity duration-1000 ease-in-out ${
                imgIndex === currentImageIndex ? 'opacity-100' : 'opacity-0 absolute'
              }`}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
        </div>
        <div className="absolute bottom-4 left-4 flex space-x-2">
          {images.map((_, dotIndex) => (
            <div
              key={dotIndex}
              className={`w-3 h-3 rounded-full ${
                dotIndex === currentImageIndex ? "bg-primary-500" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Program Content */}
      <div className="w-full md:w-1/2 p-4">
        <div className="flex items-center mb-4">
          <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
            {program.level}
          </span>
          <span className="text-gray-600">{program.duration}</span>
        </div>

        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          {program.title}
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          {program.description}
        </p>

        <div className="mb-6">
          <h4 className="font-semibold text-primary-500 mb-3">
            Key Modules:
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {program.modules.slice(0, 4).map((module, i) => (
              <div key={i} className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                <span className="text-gray-700">{module}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-primary-500">
            {program.fee}
          </span>
          <Link
            to={program.path}
            className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-full transition-colors flex items-center"
          >
            Explore Program <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HospitalityPrograms;