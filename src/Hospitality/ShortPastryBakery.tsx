import { Users, Clock, Award, BookOpen } from "lucide-react";
import HospitalityCourseTemplate from "./HospitalityCourseTemplate";

const ShortPastryBakery = () => {
  const courseData = {
    title: "Pastry & Bakery Techniques",
    type: "Short Course",
    duration: "2 months",
    price: "KES 50,000 total",
    fullDescription: "This specialized course provides comprehensive training in pastry and bakery production. Students will learn professional baking techniques, pastry making, decoration skills, and quality control methods. The program combines artistic creativity with technical skills to prepare graduates for careers in bakery operations and pastry production.",
    outcomes: [
      "Master dough preparation techniques",
      "Develop professional baking skills",
      "Learn pastry making methods",
      "Acquire decoration expertise",
      "Implement quality control measures",
      "Understand bakery operations"
    ],
    goals: [
      "To provide comprehensive training in pastry and bakery",
      "To develop professional baking skills",
      "To master pastry production techniques",
      "To enhance decoration abilities",
      "To prepare students for bakery industry roles"
    ],
    certification: "Certificate in Pastry & Bakery Techniques",
    targetAudience: "This course is designed for aspiring bakers, pastry chefs, bakery staff seeking to enhance their skills, and individuals interested in pursuing careers in bakery operations.",
    keyFeatures: [
      {
        icon: <Clock className="w-6 h-6 text-primary-600" />,
        title: "Duration",
        description: "2 months of intensive training"
      },
      {
        icon: <Award className="w-6 h-6 text-primary-600" />,
        title: "Certification",
        description: "Certificate in Pastry & Bakery Techniques"
      },
      {
        icon: <Users className="w-6 h-6 text-primary-600" />,
        title: "Class Size",
        description: "Small groups for hands-on practice"
      },
      {
        icon: <BookOpen className="w-6 h-6 text-primary-600" />,
        title: "Learning Method",
        description: "Practical training in professional bakery"
      }
    ],
    careerOpportunities: [
      "Pastry Chef",
      "Baker",
      "Bakery Production Staff",
      "Pastry Decorator",
      "Bakery Manager",
      "Cake and Pastry Specialist"
    ],
    modules: [
      "Dough Preparation",
      "Baking Techniques",
      "Pastry Making",
      "Decoration Skills",
      "Quality Control",
      "Bakery Operations"
    ],
    internship: "Optional 2-week practical training available",
    imageUrl: "/pastry1.jpg"
  };

  return <HospitalityCourseTemplate courseData={courseData} />;
};

export default ShortPastryBakery; 