import { Users, Clock, Award, BookOpen } from "lucide-react";
import HospitalityCourseTemplate from "./HospitalityCourseTemplate";

const ShortCabinCrew = () => {
  const courseData = {
    title: "Airline Cabin Crew",
    type: "Short Course",
    duration: "6 months",
    price: "KES 60,000 total",
    fullDescription: "This comprehensive course prepares candidates for careers as flight attendants. Students will learn safety procedures, emergency protocols, in-flight service, passenger handling, and grooming standards. The program combines theoretical knowledge with practical training to prepare graduates for roles in the airline industry.",
    outcomes: [
      "Master safety procedures",
      "Learn emergency protocols",
      "Develop in-flight service skills",
      "Handle passenger interactions",
      "Maintain grooming standards",
      "Execute cabin operations"
    ],
    goals: [
      "To provide comprehensive training for cabin crew",
      "To develop safety and emergency response skills",
      "To master in-flight service procedures",
      "To enhance passenger handling abilities",
      "To prepare students for airline industry roles"
    ],
    certification: "Certificate in Airline Cabin Crew Operations",
    targetAudience: "This course is designed for aspiring flight attendants, customer service professionals, and individuals interested in pursuing careers in the airline industry.",
    keyFeatures: [
      {
        icon: <Clock className="w-6 h-6 text-primary-600" />,
        title: "Duration",
        description: "6 months of intensive training"
      },
      {
        icon: <Award className="w-6 h-6 text-primary-600" />,
        title: "Certification",
        description: "Certificate in Airline Cabin Crew Operations"
      },
      {
        icon: <Users className="w-6 h-6 text-primary-600" />,
        title: "Class Size",
        description: "Small groups for hands-on practice"
      },
      {
        icon: <BookOpen className="w-6 h-6 text-primary-600" />,
        title: "Learning Method",
        description: "Combination of theory and practical training"
      }
    ],
    careerOpportunities: [
      "Flight Attendant",
      "Cabin Crew Member",
      "Airline Customer Service",
      "In-Flight Service Manager",
      "Airline Safety Officer",
      "Aviation Service Specialist"
    ],
    modules: [
      "Safety Procedures",
      "Emergency Protocols",
      "In-Flight Service",
      "Passenger Handling",
      "Grooming Standards",
      "Cabin Operations"
    ],
    internship: "Optional 1-month practical training available",
    imageUrl: "/cabincrew1.jpg"
  };

  return <HospitalityCourseTemplate courseData={courseData} />;
};

export default ShortCabinCrew; 