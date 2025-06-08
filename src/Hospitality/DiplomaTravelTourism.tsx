import { Users, Clock, Award, BookOpen } from "lucide-react";
import HospitalityCourseTemplate from "./HospitalityCourseTemplate";

const DiplomaTravelTourism = () => {
  const courseData = {
    title: "Diploma in Travel and Tourism Management",
    type: "Diploma",
    duration: "2 years",
    price: "KES 30,000 per semester (8 semesters total)",
    fullDescription: "This two-year program prepares students for supervisory roles in travel and tourism, with a 6-month industrial attachment and preparation for IATA Diploma examinations. The curriculum covers tourism industry fundamentals, travel agency operations, tour planning, customer service, sustainable tourism practices, and tourism marketing.",
    outcomes: [
      "Master tourism industry fundamentals",
      "Develop travel agency operations skills",
      "Learn tour planning and management",
      "Enhance customer service in tourism",
      "Understand sustainable tourism practices",
      "Implement effective tourism marketing strategies"
    ],
    goals: [
      "To provide comprehensive training in travel and tourism management",
      "To develop professional skills for supervisory roles",
      "To prepare students for IATA Diploma examinations",
      "To enhance practical experience through industrial attachment",
      "To prepare graduates for global tourism industry roles"
    ],
    certification: "Diploma in Travel and Tourism Management",
    targetAudience: "This program is designed for individuals seeking supervisory roles in the travel and tourism industry, including travel agencies, tour operations, and tourism organizations.",
    keyFeatures: [
      {
        icon: <Clock className="w-6 h-6 text-primary-600" />,
        title: "Duration",
        description: "2 years (8 semesters)"
      },
      {
        icon: <Award className="w-6 h-6 text-primary-600" />,
        title: "Certification",
        description: "Diploma in Travel and Tourism Management"
      },
      {
        icon: <Users className="w-6 h-6 text-primary-600" />,
        title: "Class Size",
        description: "Small groups for personalized attention"
      },
      {
        icon: <BookOpen className="w-6 h-6 text-primary-600" />,
        title: "Learning Method",
        description: "Theory and practical training"
      }
    ],
    careerOpportunities: [
      "Travel Agency Manager",
      "Tour Operations Supervisor",
      "Tourism Marketing Specialist",
      "Travel Consultant",
      "Tourism Development Officer",
      "Destination Manager"
    ],
    modules: [
      "Tourism Industry Fundamentals",
      "Travel Agency Operations",
      "Tour Planning & Management",
      "Customer Service in Tourism",
      "Sustainable Tourism Practices",
      "Tourism Marketing"
    ],
    internship: "6-month industrial attachment included",
    imageUrl: "/travel1.jpg"
  };

  return <HospitalityCourseTemplate courseData={courseData} />;
};

export default DiplomaTravelTourism; 