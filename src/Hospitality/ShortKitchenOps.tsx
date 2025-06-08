import { Users, Clock, Award, BookOpen } from "lucide-react";
import HospitalityCourseTemplate from "./HospitalityCourseTemplate";

const ShortKitchenOps = () => {
  const courseData = {
    title: "Kitchen Operations Techniques",
    type: "Short Course",
    duration: "2 months",
    price: "KES 50,000 total",
    fullDescription: "This comprehensive course provides essential training in kitchen operations and culinary techniques. Students will learn professional cooking methods, kitchen safety procedures, equipment handling, and kitchen organization. The program combines theoretical knowledge with practical training to prepare graduates for roles in various catering establishments.",
    outcomes: [
      "Master fundamental cooking techniques",
      "Develop professional knife skills",
      "Implement kitchen safety procedures",
      "Learn proper equipment handling",
      "Understand kitchen organization",
      "Execute efficient food preparation methods"
    ],
    goals: [
      "To provide comprehensive training in kitchen operations",
      "To develop professional culinary skills",
      "To ensure kitchen safety and hygiene",
      "To master equipment handling",
      "To prepare students for kitchen operations roles"
    ],
    certification: "Certificate in Kitchen Operations Techniques",
    targetAudience: "This course is designed for aspiring chefs, kitchen staff seeking to enhance their skills, and individuals interested in pursuing careers in food service operations.",
    keyFeatures: [
      {
        icon: <Clock className="w-6 h-6 text-primary-600" />,
        title: "Duration",
        description: "2 months of intensive training"
      },
      {
        icon: <Award className="w-6 h-6 text-primary-600" />,
        title: "Certification",
        description: "Certificate in Kitchen Operations Techniques"
      },
      {
        icon: <Users className="w-6 h-6 text-primary-600" />,
        title: "Class Size",
        description: "Small groups for hands-on practice"
      },
      {
        icon: <BookOpen className="w-6 h-6 text-primary-600" />,
        title: "Learning Method",
        description: "Practical training in professional kitchen"
      }
    ],
    careerOpportunities: [
      "Kitchen Staff",
      "Line Cook",
      "Prep Cook",
      "Kitchen Supervisor",
      "Food Service Manager",
      "Catering Operations Staff"
    ],
    modules: [
      "Knife Skills",
      "Cooking Methods",
      "Kitchen Organization",
      "Safety Procedures",
      "Equipment Use",
      "Food Preparation"
    ],
    internship: "Optional 2-week practical training available",
    imageUrl: "/kitchenops1.jpg"
  };

  return <HospitalityCourseTemplate courseData={courseData} />;
};

export default ShortKitchenOps; 