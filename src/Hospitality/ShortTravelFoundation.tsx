import { Users, Clock, Award, BookOpen } from "lucide-react";
import HospitalityCourseTemplate from "./HospitalityCourseTemplate";

const ShortTravelFoundation = () => {
  const courseData = {
    title: "Travel Agency Techniques (Foundation)",
    type: "Short Course",
    duration: "6 months",
    price: "KES 50,000 total",
    fullDescription: "This foundation course introduces the basics of travel agency operations, including ticketing, reservations, and customer service. Students will learn travel documentation, reservation systems, geography basics, and industry overview. The program combines theoretical knowledge with practical skills to prepare graduates for entry-level positions in travel agencies.",
    outcomes: [
      "Master travel documentation procedures",
      "Learn reservation system operations",
      "Understand geography basics",
      "Develop customer service skills",
      "Gain industry knowledge",
      "Handle basic travel arrangements"
    ],
    goals: [
      "To provide comprehensive foundation in travel agency operations",
      "To develop basic travel documentation skills",
      "To master reservation system usage",
      "To enhance customer service abilities",
      "To prepare students for travel industry roles"
    ],
    certification: "Certificate in Travel Agency Techniques (Foundation)",
    targetAudience: "This course is designed for aspiring travel agents, customer service representatives, and individuals interested in starting a career in the travel industry.",
    keyFeatures: [
      {
        icon: <Clock className="w-6 h-6 text-primary-600" />,
        title: "Duration",
        description: "6 months of intensive training"
      },
      {
        icon: <Award className="w-6 h-6 text-primary-600" />,
        title: "Certification",
        description: "Certificate in Travel Agency Techniques (Foundation)"
      },
      {
        icon: <Users className="w-6 h-6 text-primary-600" />,
        title: "Class Size",
        description: "Small groups for personalized attention"
      },
      {
        icon: <BookOpen className="w-6 h-6 text-primary-600" />,
        title: "Learning Method",
        description: "Combination of theory and practical training"
      }
    ],
    careerOpportunities: [
      "Travel Agent",
      "Reservation Agent",
      "Customer Service Representative",
      "Travel Consultant",
      "Tour Coordinator",
      "Travel Agency Staff"
    ],
    modules: [
      "Travel Documentation",
      "Reservation Systems",
      "Geography Basics",
      "Customer Service",
      "Industry Overview",
      "Travel Arrangements"
    ],
    internship: "Optional 1-month practical training available",
    imageUrl: "/travelfoundation1.jpg"
  };

  return <HospitalityCourseTemplate courseData={courseData} />;
};

export default ShortTravelFoundation; 