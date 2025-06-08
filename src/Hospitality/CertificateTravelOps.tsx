import { Users, Clock, Award, BookOpen } from "lucide-react";
import HospitalityCourseTemplate from "./HospitalityCourseTemplate";

const CertificateTravelOps = () => {
  const courseData = {
    title: "Certificate in Travel Operations",
    type: "Certificate",
    duration: "1 year",
    price: "KES 30,000 per semester (4 semesters total)",
    fullDescription: "This one-year program equips students with skills in travel operations, including ticketing and reservations. The curriculum covers travel geography, ticketing procedures, reservation systems, customer service, tour operations, and travel documentation.",
    outcomes: [
      "Master travel geography",
      "Develop ticketing procedures",
      "Learn reservation systems",
      "Enhance customer service skills",
      "Understand tour operations",
      "Handle travel documentation"
    ],
    goals: [
      "To provide comprehensive training in travel operations",
      "To develop professional ticketing skills",
      "To enhance reservation management abilities",
      "To master customer service techniques",
      "To prepare students for travel industry roles"
    ],
    certification: "Certificate in Travel Operations",
    targetAudience: "This program is designed for aspiring travel agents, reservation agents, and individuals seeking to enter the travel and tourism industry.",
    keyFeatures: [
      {
        icon: <Clock className="w-6 h-6 text-primary-600" />,
        title: "Duration",
        description: "1 year (4 semesters)"
      },
      {
        icon: <Award className="w-6 h-6 text-primary-600" />,
        title: "Certification",
        description: "Certificate in Travel Operations"
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
      "Travel Agent",
      "Reservation Agent",
      "Customer Service Representative",
      "Travel Consultant",
      "Tour Coordinator",
      "Travel Agency Staff"
    ],
    modules: [
      "Travel Geography",
      "Ticketing Procedures",
      "Reservation Systems",
      "Customer Service",
      "Tour Operations",
      "Travel Documentation"
    ],
    internship: "3-month industrial attachment included",
    imageUrl: "/travelops1.jpg"
  };

  return <HospitalityCourseTemplate courseData={courseData} />;
};

export default CertificateTravelOps; 