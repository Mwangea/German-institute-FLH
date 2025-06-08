import { Users, Clock, Award, BookOpen } from "lucide-react";
import HospitalityCourseTemplate from "./HospitalityCourseTemplate";

const CertificateFBService = () => {
  const courseData = {
    title: "Certificate in Food & Beverage Service and Sales",
    type: "Certificate",
    duration: "1 year",
    price: "KES 30,000 per semester (4 semesters total)",
    fullDescription: "This one-year program focuses on food and beverage operations and supervisory skills, including practical training. Students learn beverage knowledge, table service techniques, bar operations, customer service, sales techniques, and banquet operations.",
    outcomes: [
      "Master beverage knowledge and service",
      "Develop table service techniques",
      "Learn bar operations management",
      "Enhance customer service skills",
      "Implement effective sales techniques",
      "Execute banquet operations"
    ],
    goals: [
      "To provide comprehensive training in food and beverage service",
      "To develop professional service skills",
      "To enhance customer interaction abilities",
      "To master sales techniques",
      "To prepare students for supervisory roles"
    ],
    certification: "Certificate in Food & Beverage Service and Sales",
    targetAudience: "This program is designed for aspiring food and beverage service staff, waiters, bartenders, and individuals seeking to enter the hospitality service industry.",
    keyFeatures: [
      {
        icon: <Clock className="w-6 h-6 text-primary-600" />,
        title: "Duration",
        description: "1 year (4 semesters)"
      },
      {
        icon: <Award className="w-6 h-6 text-primary-600" />,
        title: "Certification",
        description: "Certificate in Food & Beverage Service and Sales"
      },
      {
        icon: <Users className="w-6 h-6 text-primary-600" />,
        title: "Class Size",
        description: "Small groups for practical training"
      },
      {
        icon: <BookOpen className="w-6 h-6 text-primary-600" />,
        title: "Learning Method",
        description: "Theory and practical training"
      }
    ],
    careerOpportunities: [
      "Food & Beverage Server",
      "Bartender",
      "Banquet Server",
      "Restaurant Supervisor",
      "Bar Manager",
      "Food & Beverage Manager"
    ],
    modules: [
      "Beverage Knowledge",
      "Table Service Techniques",
      "Bar Operations",
      "Customer Service",
      "Sales Techniques",
      "Banquet Operations"
    ],
    internship: "3-month industrial attachment included",
    imageUrl: "/fbservice1.jpg"
  };

  return <HospitalityCourseTemplate courseData={courseData} />;
};

export default CertificateFBService; 