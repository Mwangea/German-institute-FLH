import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";

const programs = [
  {
    title: "Diploma in Hospitality Management",
    path: "/diploma-hospitality",
    image: "/hospitality1.jpg",
    duration: "2 years",
    level: "Diploma",
    description:
      "Two-year program preparing learners for departmental manager roles with operational and managerial skills, plus foreign language training for the global hospitality industry.",
    modules: [
      "Hospitality Industry Overview",
      "Management Reporting",
      "Hospitality Marketing",
      "Facility Design Evaluation",
      "Human Resource Management",
      "Hotel Information Systems",
    ],
    fee: "KES 30,000 per semester (8 semesters total)",
  },
  {
    title: "Diploma in Front Office Operations & Administration",
    path: "/diploma-front-office",
    image: "/front1.jpg",
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
    fee: "KES 30,000 per semester (8 semesters total)",
  },
  {
    title: "Diploma in House Keeping & Laundry Operation",
    path: "/diploma-housekeeping",
    image: "/house1.jpg",
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
    fee: "KES 30,000 per semester (8 semesters total)",
  },
  {
    title: "Diploma in Travel and Tourism Management",
    path: "/diploma-travel-tourism",
    image: "/travel1.jpg",
    duration: "2 years",
    level: "Diploma",
    description:
      "Prepares students for supervisory roles in travel and tourism, with a 6-month industrial attachment and preparation for IATA Diploma examinations.",
    modules: [
      "Tourism Industry Fundamentals",
      "Travel Agency Operations",
      "Tour Planning & Management",
      "Customer Service in Tourism",
      "Sustainable Tourism Practices",
      "Tourism Marketing"
    ],
    fee: "KES 30,000 per semester (8 semesters total)",
    requirements: "KCSE aggregate C, English C+, and Mathematics/Geography C-"
  },
  {
    title: "Certificate in Front Office Operations & Administration",
    path: "/certificate-front-office",
    image: "/certOffice1.jpg",
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
    fee: "KES 30,000 per semester (4 semesters total)",
  },
  {
    title: "Certificate in Food Production",
    path: "/certificate-food-production",
    image: "/foodprod1.jpg",
    duration: "1 year",
    level: "Certificate",
    description:
      "Covers all aspects of food production with practical training in various Kenyan hotels.",
    modules: [
      "Food Preparation Techniques",
      "Kitchen Safety & Sanitation",
      "Menu Planning",
      "Nutrition Fundamentals",
      "Food Cost Control",
      "Bulk Food Production"
    ],
    fee: "KES 30,000 per semester (4 semesters total)",
    requirements: "KCSE Aggregate C-, English C-, and Mathematics/Home Science D+"
  },
  {
    title: "Certificate in Food & Beverage Service and Sales",
    path: "/certificate-fb-service",
    image: "/fbservice1.jpg",
    duration: "1 year",
    level: "Certificate",
    description:
      "Focuses on food and beverage operations and supervisory skills, including practical training.",
    modules: [
      "Beverage Knowledge",
      "Table Service Techniques",
      "Bar Operations",
      "Customer Service",
      "Sales Techniques",
      "Banquet Operations"
    ],
    fee: "KES 30,000 per semester (4 semesters total)",
    requirements: "KCSE Aggregate C-, English C-"
  },
  {
    title: "Certificate in Housekeeping and Laundry",
    path: "/certificate-housekeeping",
    image: "/housekeeping1.jpg",
    duration: "1 year",
    level: "Certificate",
    description:
      "Provides training in managing housekeeping and laundry operations in the hospitality industry.",
    modules: [
      "Cleaning Techniques",
      "Linen Management",
      "Laundry Operations",
      "Room Inspection",
      "Inventory Control",
      "Supervisory Skills"
    ],
    fee: "KES 30,000 per semester (4 semesters total)",
    requirements: "KCSE Aggregate C-, English C-"
  },
  {
    title: "Certificate in Travel Operations",
    path: "/certificate-travel-ops",
    image: "/travelops1.jpg",
    duration: "1 year",
    level: "Certificate",
    description:
      "Equips students with skills in travel operations, including ticketing and reservations.",
    modules: [
      "Travel Geography",
      "Ticketing Procedures",
      "Reservation Systems",
      "Customer Service",
      "Tour Operations",
      "Travel Documentation"
    ],
    fee: "KES 30,000 per semester (4 semesters total)",
    requirements: "KCSE Aggregate C-, English C-"
  },
  {
    title: "Certificate in Tour Guiding and Administration",
    path: "/certificate-tour-guiding",
    image: "/tourguide1.jpg",
    duration: "1 year",
    level: "Certificate",
    description:
      "Focuses on tour guiding techniques and administrative skills in the tourism sector.",
    modules: [
      "Tour Commentary",
      "Site Interpretation",
      "Group Management",
      "First Aid",
      "Tour Planning",
      "Cultural Heritage"
    ],
    fee: "KES 30,000 per semester (4 semesters total)",
    requirements: "KCSE Aggregate C-, English C-"
  },
  // Short Courses
  {
    title: "Front Desk Techniques",
    path: "/short-front-desk",
    image: "/frontdesk1.jpg",
    duration: "3 months",
    level: "Short Course",
    description:
      "Covers front office operations, customer service, and reservation systems.",
    modules: [
      "Guest Relations",
      "Reservation Systems",
      "Telephone Techniques",
      "Problem Solving",
      "Cash Handling"
    ],
    fee: "KES 30,000 total"
  },
  {
    title: "Hotel Information Systems (Opera)",
    path: "/short-opera",
    image: "/opera1.jpg",
    duration: "2 months",
    level: "Short Course",
    description:
      "Equips candidates with skills in hotel information systems for effective guest service through the guest cycle.",
    modules: [
      "Opera PMS Navigation",
      "Reservation Management",
      "Guest Check-in/out",
      "Room Assignment",
      "Reporting Functions"
    ],
    fee: "KES 30,000 total"
  },
  {
    title: "Food & Beverage Control",
    path: "/short-fb-control",
    image: "/fbcontrol1.jpg",
    duration: "2 months",
    level: "Short Course",
    description:
      "Focuses on controlling food and beverage costs, inventory management, and pricing strategies.",
    modules: [
      "Cost Control Methods",
      "Inventory Procedures",
      "Menu Pricing",
      "Purchasing Systems",
      "Waste Management"
    ],
    fee: "KES 30,000 total"
  },
  {
    title: "Cake Making & Decorations",
    path: "/short-cake-making",
    image: "/cake1.jpg",
    duration: "2 months",
    level: "Short Course",
    description:
      "Teaches cake baking techniques and decorative skills for various occasions.",
    modules: [
      "Baking Fundamentals",
      "Icing Techniques",
      "Theme Cakes",
      "Sugar Craft",
      "Business Basics"
    ],
    fee: "KES 50,000 total"
  },
  {
    title: "Kitchen Operations Techniques",
    path: "/short-kitchen-ops",
    image: "/kitchenops1.jpg",
    duration: "2 months",
    level: "Short Course",
    description:
      "Provides basic culinary arts techniques for various catering establishments.",
    modules: [
      "Knife Skills",
      "Cooking Methods",
      "Kitchen Organization",
      "Safety Procedures",
      "Equipment Use"
    ],
    fee: "KES 50,000 total"
  },
  {
    title: "Pastry & Bakery Techniques",
    path: "/short-pastry-bakery",
    image: "/pastry1.jpg",
    duration: "2 months",
    level: "Short Course",
    description:
      "Focuses on pastry and bakery production skills for the hospitality industry.",
    modules: [
      "Dough Preparation",
      "Baking Techniques",
      "Pastry Making",
      "Decoration Skills",
      "Quality Control"
    ],
    fee: "KES 50,000 total"
  },
  {
    title: "Food & Beverage Service Supervision",
    path: "/short-fb-supervision",
    image: "/fbsupervision1.jpg",
    duration: "2 months",
    level: "Short Course",
    description:
      "Prepares individuals for supervisory roles in food and beverage service operations.",
    modules: [
      "Staff Scheduling",
      "Service Standards",
      "Quality Control",
      "Training Techniques",
      "Problem Solving"
    ],
    fee: "KES 50,000 total"
  },
  {
    title: "Supervisory Management in Organizations",
    path: "/short-supervisory-mgmt",
    image: "/supervision1.jpg",
    duration: "2 months",
    level: "Short Course",
    description:
      "Enhances supervisory skills for effective management in hospitality settings.",
    modules: [
      "Leadership Skills",
      "Team Motivation",
      "Performance Evaluation",
      "Conflict Resolution",
      "Operational Planning"
    ],
    fee: "KES 50,000 total"
  },
  {
    title: "Barista & Bar Tending Course",
    path: "/short-barista",
    image: "/barista1.jpg",
    duration: "2 months",
    level: "Short Course",
    description:
      "Covers coffee brewing techniques, cocktail mixing, and customer service in beverage operations.",
    modules: [
      "Coffee Preparation",
      "Latte Art",
      "Mixology Basics",
      "Bar Setup",
      "Customer Interaction"
    ],
    fee: "KES 40,000 total"
  },
  {
    title: "Banqueting & Events Techniques Course",
    path: "/short-banqueting",
    image: "/banquet1.jpg",
    duration: "3 months",
    level: "Short Course",
    description:
      "Focuses on planning and managing banquets and events in hospitality venues.",
    modules: [
      "Event Planning",
      "Room Setup",
      "Service Styles",
      "Logistics Management",
      "Client Relations"
    ],
    fee: "KES 40,000 total"
  },
  {
    title: "Housekeeping Operational Skills",
    path: "/short-housekeeping",
    image: "/hkops1.jpg",
    duration: "3 months",
    level: "Short Course",
    description:
      "Provides training in housekeeping operations, including cleaning procedures and room maintenance.",
    modules: [
      "Cleaning Methods",
      "Room Inspection",
      "Linen Management",
      "Chemical Use",
      "Work Scheduling"
    ],
    fee: "KES 40,000 total"
  },
  {
    title: "Professional Homecare Management Program",
    path: "/short-homecare",
    image: "/homecare1.jpg",
    duration: "1 month",
    level: "Short Course",
    description:
      "Teaches skills for managing homecare services, including elderly and patient care.",
    modules: [
      "Care Techniques",
      "Home Management",
      "Nutrition Planning",
      "Safety Procedures",
      "Client Relations"
    ],
    fee: "KES 36,000 total"
  },
  {
    title: "Laundry and Dry-Cleaning Operational Skills",
    path: "/short-laundry",
    image: "/laundry1.jpg",
    duration: "3 months",
    level: "Short Course",
    description:
      "Covers laundry operations, fabric care, and dry-cleaning techniques.",
    modules: [
      "Fabric Types",
      "Stain Removal",
      "Equipment Use",
      "Quality Control",
      "Business Operations"
    ],
    fee: "KES 40,000 total"
  },
  {
    title: "Customer Care",
    path: "/short-customer-care",
    image: "/customercare1.jpg",
    duration: "2 months",
    level: "Short Course",
    description:
      "Enhances customer service skills for hospitality professionals.",
    modules: [
      "Communication Skills",
      "Problem Solving",
      "Service Recovery",
      "Cultural Awareness",
      "Quality Standards"
    ],
    fee: "KES 35,000 total"
  },
  {
    title: "Travel Agency Techniques (Foundation)",
    path: "/short-travel-foundation",
    image: "/travelfoundation1.jpg",
    duration: "6 months",
    level: "Short Course",
    description:
      "Introduces basics of travel agency operations, including ticketing and reservations.",
    modules: [
      "Travel Documentation",
      "Reservation Systems",
      "Geography Basics",
      "Customer Service",
      "Industry Overview"
    ],
    fee: "KES 50,000 total"
  },
  {
    title: "Travel Agency Techniques (Consultancy)",
    path: "/short-travel-consultancy",
    image: "/travelconsult1.jpg",
    duration: "6 months",
    level: "Short Course",
    description:
      "Advanced course covering air fares, ticketing, selling skills, and travel law.",
    modules: [
      "Fare Calculation",
      "Advanced Ticketing",
      "Sales Techniques",
      "Travel Law",
      "Business Management"
    ],
    fee: "KES 51,000 total"
  },
  {
    title: "Airline Cabin Crew",
    path: "/short-cabin-crew",
    image: "/cabincrew1.jpg",
    duration: "6 months",
    level: "Short Course",
    description:
      "Prepares candidates for careers as flight attendants, covering safety, customer service, and food & beverage knowledge.",
    modules: [
      "Safety Procedures",
      "Emergency Protocols",
      "In-Flight Service",
      "Passenger Handling",
      "Grooming Standards"
    ],
    fee: "KES 60,000 total"
  },
  {
    title: "Basic Certification for Practicing Tour Guide",
    path: "/short-tour-guide-cert",
    image: "/tourguidecert1.jpg",
    duration: "6 months",
    level: "Short Course",
    description:
      "Provides certification for practicing tour guides with at least two years of experience.",
    modules: [
      "Advanced Commentary",
      "Group Management",
      "First Aid",
      "Cultural Interpretation",
      "Professional Ethics"
    ],
    fee: "KES 50,000 total"
  }
];

const HospitalityPrograms = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionTitle title="Hospitality Programs" />

          <p className="text-xl text-gray-600">
            Professional training for hospitality industry careers
          </p>
        </div>

        {programs.map((program, index) => {
          const programImages = {
            "Diploma in Hospitality Management": [
              program.image,
              "/hospitality2.jpg",
              "/hospitality3.jpg",
              "/hospitality4.jpg",
            ],
            "Diploma in Front Office Operations & Administration": [
              program.image,
              "/front2.jpg",
              "/front3.jpg",
              "/front4.jpg",
            ],
            "Diploma in House Keeping & Laundry Operation": [
              program.image,
              "/house2.jpg",
              "/house3.jpg",
              "/house4.jpg",
            ],
            "Diploma in Travel and Tourism Management": [
              program.image,
              "/travel2.jpg",
              "/travel3.jpg",
              "/travel4.jpg",
            ],
            "Certificate in Front Office Operations & Administration": [
              program.image,
              "/certOffice2.jpg",
              "/certOffice3.jpg",
              "/certOffice4.jpg",
            ],
            "Certificate in Food Production": [
              program.image,
              "/foodprod2.jpg",
              "/foodprod3.jpg",
              "/foodprod4.jpg",
            ],
            "Certificate in Food & Beverage Service and Sales": [
              program.image,
              "/fbservice2.jpg",
              "/fbservice3.jpg",
              "/fbservice4.jpg",
            ],
            "Certificate in Housekeeping and Laundry": [
              program.image,
              "/housekeeping2.jpg",
              "/housekeeping3.jpg",
              "/housekeeping4.jpg",
            ],
            "Certificate in Travel Operations": [
              program.image,
              "/travelops2.jpg",
              "/travelops3.jpg",
              "/travelops4.jpg",
            ],
            "Certificate in Tour Guiding and Administration": [
              program.image,
              "/tourguide2.jpg",
              "/tourguide3.jpg",
              "/tourguide4.jpg",
            ],
            // Short courses images
            "Front Desk Techniques": [
              program.image,
              "/frontdesk2.jpg",
              "/frontdesk3.jpg",
              "/frontdesk4.jpg",
            ],
            "Hotel Information Systems (Opera)": [
              program.image,
              "/opera2.jpg",
              "/opera3.jpg",
              "/opera4.jpg",
            ],
            "Food & Beverage Control": [
              program.image,
              "/fbcontrol2.jpg",
              "/fbcontrol3.jpg",
              "/fbcontrol4.jpg",
            ],
            "Cake Making & Decorations": [
              program.image,
              "/cake2.jpg",
              "/cake3.jpg",
              "/cake4.jpg",
            ],
            "Kitchen Operations Techniques": [
              program.image,
              "/kitchenops2.jpg",
              "/kitchenops3.jpg",
              "/kitchenops4.jpg",
            ],
            "Pastry & Bakery Techniques": [
              program.image,
              "/pastry2.jpg",
              "/pastry3.jpg",
              "/pastry4.jpg",
            ],
            "Food & Beverage Service Supervision": [
              program.image,
              "/fbsupervision2.jpg",
              "/fbsupervision3.jpg",
              "/fbsupervision4.jpg",
            ],
            "Supervisory Management in Organizations": [
              program.image,
              "/supervision2.jpg",
              "/supervision3.jpg",
              "/supervision4.jpg",
            ],
            "Barista & Bar Tending Course": [
              program.image,
              "/barista2.jpg",
              "/barista3.jpg",
              "/barista4.jpg",
            ],
            "Banqueting & Events Techniques Course": [
              program.image,
              "/banquet2.jpg",
              "/banquet3.jpg",
              "/banquet4.jpg",
            ],
            "Housekeeping Operational Skills": [
              program.image,
              "/hkops2.jpg",
              "/hkops3.jpg",
              "/hkops4.jpg",
            ],
            "Professional Homecare Management Program": [
              program.image,
              "/homecare2.jpg",
              "/homecare3.jpg",
              "/homecare4.jpg",
            ],
            "Laundry and Dry-Cleaning Operational Skills": [
              program.image,
              "/laundry2.jpg",
              "/laundry3.jpg",
              "/laundry4.jpg",
            ],
            "Customer Care": [
              program.image,
              "/customercare2.jpg",
              "/customercare3.jpg",
              "/customercare4.jpg",
            ],
            "Travel Agency Techniques (Foundation)": [
              program.image,
              "/travelfoundation2.jpg",
              "/travelfoundation3.jpg",
              "/travelfoundation4.jpg",
            ],
            "Travel Agency Techniques (Consultancy)": [
              program.image,
              "/travelconsult2.jpg",
              "/travelconsult3.jpg",
              "/travelconsult4.jpg",
            ],
            "Airline Cabin Crew": [
              program.image,
              "/cabincrew2.jpg",
              "/cabincrew3.jpg",
              "/cabincrew4.jpg",
            ],
            "Basic Certification for Practicing Tour Guide": [
              program.image,
              "/tourguidecert2.jpg",
              "/tourguidecert3.jpg",
              "/tourguidecert4.jpg",
            ]
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
    requirements?: string;
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

        {program.requirements && (
          <div className="mb-4">
            <h4 className="font-semibold text-primary-500 mb-2">
              Entry Requirements:
            </h4>
            <p className="text-gray-700">{program.requirements}</p>
          </div>
        )}

        <div className="mb-6">
          <h4 className="font-semibold text-primary-500 mb-3">
            Key Modules:
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {program.modules.slice(0, 6).map((module, i) => (
              <div key={i} className="flex items-center">
                <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
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
            className="bg-button-50 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-colors flex items-center"
          >
            Explore Program <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HospitalityPrograms;