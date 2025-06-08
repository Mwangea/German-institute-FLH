import { Users, Clock, Award, BookOpen } from "lucide-react";
import HospitalityCourseTemplate from "./HospitalityCourseTemplate";

const ShortHomecare = () => {
  const courseData = {
    title: "Professional Homecare Management Program",
    type: "Short Course",
    duration: "1 month",
    price: "KES 36,000 total",
    fullDescription: "This intensive program teaches essential skills for managing homecare services, including elderly and patient care. Students will learn care techniques, home management, nutrition planning, safety procedures, and client relations. The program combines practical skills with professional knowledge to prepare graduates for roles in homecare management.",
    outcomes: [
      "Master care techniques for different clients",
      "Develop home management skills",
      "Learn nutrition planning methods",
      "Implement safety procedures",
      "Enhance client relations",
      "Manage care schedules effectively"
    ],
    goals: [
      "To provide comprehensive training in homecare management",
      "To develop professional care skills",
      "To master home management techniques",
      "To enhance client relationship management",
      "To prepare students for homecare industry roles"
    ],
    certification: "Certificate in Professional Homecare Management",
    targetAudience: "This course is designed for aspiring homecare managers, current care providers seeking to enhance their skills, and individuals interested in pursuing careers in homecare services.",
    keyFeatures: [
      {
        icon: <Clock className="w-6 h-6 text-primary-600" />,
        title: "Duration",
        description: "1 month of intensive training"
      },
      {
        icon: <Award className="w-6 h-6 text-primary-600" />,
        title: "Certification",
        description: "Certificate in Professional Homecare Management"
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
      "Homecare Manager",
      "Care Coordinator",
      "Patient Care Manager",
      "Home Health Aide",
      "Care Service Provider",
      "Homecare Business Owner"
    ],
    modules: [
      "Care Techniques",
      "Home Management",
      "Nutrition Planning",
      "Safety Procedures",
      "Client Relations",
      "Care Management"
    ],
    internship: "Optional 1-week practical training available",
    imageUrl: "/homecare1.jpg"
  };

  return <HospitalityCourseTemplate courseData={courseData} />;
};

export default ShortHomecare; 