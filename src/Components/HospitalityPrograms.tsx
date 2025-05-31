import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const programs = [
    {
      title: "Diploma in Hospitality Management",
      path: "/diploma-hospitality",
      image: "https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg",
      duration: "18 months",
      level: "Diploma",
      description:
        "Comprehensive program covering all aspects of hotel operations, management principles, and hospitality services.",
      modules: [
        "Front Office Operations",
        "Housekeeping Management",
        "Food & Beverage Service",
        "Hospitality Accounting",
        "Human Resource Management",
        "Marketing for Hospitality",
      ],
      fee: "KES 20,000 per semester",
      //  icon: <Hotel className="w-6 h-6 text-primary-500" />
    },
    {
      title: "Diploma in Front Office Operations & Administration",
      path: "/diploma-front-office",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      duration: "12 months",
      level: "Diploma",
      description:
        "Specialized training in front office management, guest relations, and hotel administration systems.",
      modules: [
        "Reservation Systems",
        "Guest Service Excellence",
        "Property Management Software",
        "Night Auditing",
        "Yield Management",
        "Concierge Services",
      ],
      fee: "KES 20,000 per semester",
      // icon: <UserCheck className="w-6 h-6 text-primary-500" />
    },
    {
      title: "Diploma in Food & Beverage Management",
      path: "/diploma-food-beverage",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
      duration: "12 months",
      level: "Diploma",
      description:
        "Professional training in restaurant operations, bar management, and culinary supervision.",
      modules: [
        "Menu Planning & Engineering",
        "Beverage Management",
        "Food Safety & Hygiene",
        "Banquet Operations",
        "Restaurant Service Techniques",
        "Wine & Bar Service",
      ],
      fee: "KES 20,000 per semester",
      // icon: <Utensils className="w-6 h-6 text-primary-500" />
    },
    {
      title: "Diploma in House Keeping & Laundry Operation",
      path: "/diploma-housekeeping",
      image: "https://images.pexels.com/photos/4107112/pexels-photo-4107112.jpeg",
      duration: "12 months",
      level: "Diploma",
      description:
        "Advanced training in professional housekeeping, laundry operations, and facilities maintenance.",
      modules: [
        "Cleaning Science & Technology",
        "Linen & Uniform Management",
        "Quality Control Systems",
        "Supervisory Skills",
        "Pest Control Management",
        "Laundry Operations",
      ],
      fee: "KES 20,000 per semester",
      // icon: <WashingMachine className="w-6 h-6 text-primary-500" />
    },
    {
      title: "Certificate in Front Office Operations",
      path: "/certificate-front-office",
      image: "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg",
      duration: "6 months",
      level: "Certificate",
      description:
        "Fundamental training in front desk operations, guest services, and basic reservation systems.",
      modules: [
        "Guest Registration",
        "Telephone Etiquette",
        "Cash Handling",
        "Basic PMS Operations",
        "Customer Service Skills",
        "Complaint Handling",
      ],
      fee: "KES 20,000 full course",
      //icon: <Bellhop className="w-6 h-6 text-primary-500" />
    },
    {
      title: "Certificate in Food and Beverage Service & Sales",
      path: "/certificate-food-beverage",
      image: "https://images.pexels.com/photos/3434523/pexels-photo-3434523.jpeg",
      duration: "6 months",
      level: "Certificate",
      description:
        "Practical training in food service techniques, beverage knowledge, and upselling strategies.",
      modules: [
        "Table Service Techniques",
        "Beverage Knowledge",
        "Order Taking Procedures",
        "Upselling Strategies",
        "Banquet Service Basics",
        "Bar Service Fundamentals",
      ],
      fee: "KES 20,000 full course",
      //icon: <Utensils className="w-6 h-6 text-primary-500" />
    },
    {
      title: "Certificate in House Keeping & Laundry",
      path: "/certificate-housekeeping",
      image: "https://images.pexels.com/photos/3771110/pexels-photo-3771110.jpeg",
      duration: "6 months",
      level: "Certificate",
      description:
        "Entry-level training in professional cleaning, room preparation, and basic laundry operations.",
      modules: [
        "Cleaning Procedures",
        "Room Preparation",
        "Chemical Handling",
        "Equipment Maintenance",
        "Laundry Basics",
        "Waste Management",
      ],
      fee: "KES 20,000 full course",
      // icon: <WashingMachine className="w-6 h-6 text-primary-500" />
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
              Comprehensive training for hospitality professionals
            </p>
          </div>

          {/* Alternating Program Layouts */}
          {programs.map((program, index) => {
            // Define unique image sets for each program
            const programImages = {
              "Diploma in Hospitality Management": [
                program.image,
                "https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg",
                "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
                "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg",
                "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg",
              ],
              "Diploma in Front Office Operations & Administration": [
                program.image,
                "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
                "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg",
                "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg",
                "https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg",
              ],
              "Diploma in Food & Beverage Management": [
                program.image,
                "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
                "https://images.pexels.com/photos/3434523/pexels-photo-3434523.jpeg",
                "https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg",
                "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg",
              ],
              "Diploma in House Keeping & Laundry Operation": [
                program.image,
                "https://images.pexels.com/photos/4107112/pexels-photo-4107112.jpeg",
                "https://images.pexels.com/photos/3771110/pexels-photo-3771110.jpeg",
                "https://images.pexels.com/photos/4107113/pexels-photo-4107113.jpeg",
                "https://images.pexels.com/photos/4107114/pexels-photo-4107114.jpeg",
              ],
              "Certificate in Front Office Operations": [
                program.image,
                "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg",
                "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg",
                "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
                "https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg",
              ],
              "Certificate in Food and Beverage Service & Sales": [
                program.image,
                "https://images.pexels.com/photos/3434523/pexels-photo-3434523.jpeg",
                "https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg",
                "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg",
                "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
              ],
              "Certificate in House Keeping & Laundry": [
                program.image,
                "https://images.pexels.com/photos/3771110/pexels-photo-3771110.jpeg",
                "https://images.pexels.com/photos/4107112/pexels-photo-4107112.jpeg",
                "https://images.pexels.com/photos/4107113/pexels-photo-4107113.jpeg",
                "https://images.pexels.com/photos/4107114/pexels-photo-4107114.jpeg",
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
            <div className="mt-16 text-center">
              <Link
                to="/all-programs"
                className="inline-flex items-center px-6 py-3 border border-primary-500 text-primary-500 rounded-full hover:bg-primary-50 transition-colors"
              >
                View all program details and curriculum
              </Link>
            </div>
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
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className={`mb-20 flex flex-col ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } items-center gap-8 transition-all duration-500 ease-in-out hover:shadow-lg rounded-xl p-6 hover:bg-white`}
    >
      {/* Image Gallery with auto-sliding */}
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

      {/* Program Content (keep your existing content) */}
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