import { Users, Clock, Award, BookOpen } from "lucide-react";
import HospitalityCourseTemplate from "./HospitalityCourseTemplate";

const ShortCustomerCare = () => {
  const courseData = {
    title: "Customer Care",
    type: "Short Course",
    duration: "2 months",
    price: "KES 35,000 total",
    fullDescription: "This comprehensive course enhances customer service skills for hospitality professionals. Students will learn effective communication techniques, problem-solving strategies, service recovery methods, cultural awareness, and quality standards implementation. The program combines theoretical knowledge with practical applications to prepare graduates for customer-facing roles in the hospitality industry.",
    outcomes: [
      "Master communication skills",
      "Develop problem-solving abilities",
      "Learn service recovery techniques",
      "Enhance cultural awareness",
      "Implement quality standards",
      "Handle customer interactions professionally"
    ],
    goals: [
      "To provide comprehensive training in customer care",
      "To develop professional communication skills",
      "To master problem-solving techniques",
      "To enhance cultural sensitivity",
      "To prepare students for customer service roles"
    ],
    certification: "Certificate in Customer Care",
    targetAudience: "This course is designed for customer service representatives, hospitality staff, and individuals seeking to enhance their customer interaction skills.",
    keyFeatures: [
      {
        icon: <Clock className="w-6 h-6 text-primary-600" />,
        title: "Duration",
        description: "2 months of intensive training"
      },
      {
        icon: <Award className="w-6 h-6 text-primary-600" />,
        title: "Certification",
        description: "Certificate in Customer Care"
      },
      {
        icon: <Users className="w-6 h-6 text-primary-600" />,
        title: "Class Size",
        description: "Small groups for interactive learning"
      },
      {
        icon: <BookOpen className="w-6 h-6 text-primary-600" />,
        title: "Learning Method",
        description: "Combination of theory and role-playing"
      }
    ],
    careerOpportunities: [
      "Customer Service Representative",
      "Guest Relations Officer",
      "Customer Care Manager",
      "Service Quality Coordinator",
      "Client Relations Specialist",
      "Customer Experience Manager"
    ],
    modules: [
      "Communication Skills",
      "Problem Solving",
      "Service Recovery",
      "Cultural Awareness",
      "Quality Standards",
      "Customer Interaction"
    ],
    internship: "Optional 2-week practical training available",
    imageUrl: "/customercare1.jpg"
  };

  return <HospitalityCourseTemplate courseData={courseData} />;
};

export default ShortCustomerCare; 