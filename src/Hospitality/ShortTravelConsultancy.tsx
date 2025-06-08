import { Users, Clock, Award, BookOpen } from "lucide-react";
import HospitalityCourseTemplate from "./HospitalityCourseTemplate";

const ShortTravelConsultancy = () => {
  const courseData = {
    title: "Travel Agency Techniques (Consultancy)",
    type: "Short Course",
    duration: "6 months",
    price: "KES 51,000 total",
    fullDescription: "This advanced course covers air fares, ticketing, selling skills, and travel law. Students will learn fare calculation, advanced ticketing procedures, sales techniques, travel law, and business management. The program combines advanced technical knowledge with practical applications to prepare graduates for consultancy roles in the travel industry.",
    outcomes: [
      "Master fare calculation methods",
      "Develop advanced ticketing skills",
      "Learn sales techniques",
      "Understand travel law",
      "Implement business management",
      "Handle complex travel arrangements"
    ],
    goals: [
      "To provide advanced training in travel consultancy",
      "To develop expertise in fare calculation",
      "To master advanced ticketing procedures",
      "To enhance sales and business skills",
      "To prepare students for travel consultancy roles"
    ],
    certification: "Certificate in Travel Agency Techniques (Consultancy)",
    targetAudience: "This course is designed for experienced travel agents seeking to advance their careers, travel consultants, and individuals interested in pursuing senior roles in the travel industry.",
    keyFeatures: [
      {
        icon: <Clock className="w-6 h-6 text-primary-600" />,
        title: "Duration",
        description: "6 months of intensive training"
      },
      {
        icon: <Award className="w-6 h-6 text-primary-600" />,
        title: "Certification",
        description: "Certificate in Travel Agency Techniques (Consultancy)"
      },
      {
        icon: <Users className="w-6 h-6 text-primary-600" />,
        title: "Class Size",
        description: "Small groups for advanced learning"
      },
      {
        icon: <BookOpen className="w-6 h-6 text-primary-600" />,
        title: "Learning Method",
        description: "Advanced theory and practical applications"
      }
    ],
    careerOpportunities: [
      "Travel Consultant",
      "Senior Travel Agent",
      "Travel Agency Manager",
      "Business Travel Specialist",
      "Travel Sales Manager",
      "Travel Industry Consultant"
    ],
    modules: [
      "Fare Calculation",
      "Advanced Ticketing",
      "Sales Techniques",
      "Travel Law",
      "Business Management",
      "Complex Travel Arrangements"
    ],
    internship: "Optional 1-month practical training available",
    imageUrl: "/travelconsult1.jpg"
  };

  return <HospitalityCourseTemplate courseData={courseData} />;
};

export default ShortTravelConsultancy; 