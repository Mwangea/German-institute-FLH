import { Users, Clock, Award, BookOpen } from "lucide-react";
import HospitalityCourseTemplate from "./HospitalityCourseTemplate";

const CertificateFoodProduction = () => {
  const courseData = {
    title: "Certificate in Food Production",
    type: "Certificate",
    duration: "1 year",
    price: "KES 30,000 per semester (4 semesters total)",
    fullDescription: "This one-year program covers all aspects of food production with practical training in various Kenyan hotels. Students learn essential culinary skills, kitchen safety, menu planning, nutrition fundamentals, food cost control, and bulk food production techniques.",
    outcomes: [
      "Master food preparation techniques",
      "Implement kitchen safety and sanitation",
      "Develop menu planning skills",
      "Understand nutrition fundamentals",
      "Apply food cost control methods",
      "Execute bulk food production"
    ],
    goals: [
      "To provide comprehensive training in food production",
      "To develop professional culinary skills",
      "To ensure kitchen safety and hygiene",
      "To enhance menu planning abilities",
      "To prepare students for food production roles"
    ],
    certification: "Certificate in Food Production",
    targetAudience: "This program is designed for aspiring chefs, kitchen staff, and individuals seeking to enter the food production industry.",
    keyFeatures: [
      {
        icon: <Clock className="w-6 h-6 text-primary-600" />,
        title: "Duration",
        description: "1 year (4 semesters)"
      },
      {
        icon: <Award className="w-6 h-6 text-primary-600" />,
        title: "Certification",
        description: "Certificate in Food Production"
      },
      {
        icon: <Users className="w-6 h-6 text-primary-600" />,
        title: "Class Size",
        description: "Small groups for hands-on training"
      },
      {
        icon: <BookOpen className="w-6 h-6 text-primary-600" />,
        title: "Learning Method",
        description: "Theory and practical training"
      }
    ],
    careerOpportunities: [
      "Commis Chef",
      "Line Cook",
      "Kitchen Supervisor",
      "Food Production Assistant",
      "Catering Chef",
      "Kitchen Manager"
    ],
    modules: [
      "Food Preparation Techniques",
      "Kitchen Safety & Sanitation",
      "Menu Planning",
      "Nutrition Fundamentals",
      "Food Cost Control",
      "Bulk Food Production"
    ],
    internship: "3-month industrial attachment included",
    imageUrl: "/foodprod1.jpg"
  };

  return <HospitalityCourseTemplate courseData={courseData} />;
};

export default CertificateFoodProduction; 