import { Users, Clock, Award, BookOpen } from "lucide-react";
import HospitalityCourseTemplate from "./HospitalityCourseTemplate";

const ShortFrontDesk = () => {
  const courseData = {
    title: "Front Desk Techniques",
    type: "Short Course",
    duration: "3 months",
    price: "KES 30,000 total",
    fullDescription: "This comprehensive short course covers essential front office operations, customer service excellence, and reservation systems management. Designed for individuals seeking to excel in front desk roles within the hospitality industry, this program provides hands-on training in guest relations, reservation management, and effective communication techniques.",
    outcomes: [
      "Master front office operations and guest service procedures",
      "Develop expertise in reservation systems and booking management",
      "Enhance telephone handling and communication skills",
      "Learn effective problem-solving techniques for guest issues",
      "Acquire professional cash handling and financial procedures",
      "Understand the importance of maintaining guest records and documentation"
    ],
    goals: [
      "To provide comprehensive training in front desk operations",
      "To develop professional customer service skills",
      "To master reservation and booking systems",
      "To enhance communication and problem-solving abilities",
      "To prepare students for immediate employment in front desk roles"
    ],
    certification: "Certificate in Front Desk Techniques",
    targetAudience: "This course is ideal for individuals seeking to start a career in hospitality front desk operations, current front desk staff looking to enhance their skills, and hospitality professionals transitioning to front desk roles.",
    keyFeatures: [
      {
        icon: <Clock className="w-6 h-6 text-primary-600" />,
        title: "Duration",
        description: "3 months of intensive training"
      },
      {
        icon: <Award className="w-6 h-6 text-primary-600" />,
        title: "Certification",
        description: "Certificate in Front Desk Techniques"
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
      "Front Desk Agent",
      "Guest Service Representative",
      "Reservation Agent",
      "Receptionist",
      "Customer Service Representative",
      "Hotel Front Office Staff"
    ],
    modules: [
      "Guest Relations and Service Excellence",
      "Reservation Systems and Booking Management",
      "Telephone Techniques and Communication Skills",
      "Problem Solving and Conflict Resolution",
      "Cash Handling and Financial Procedures",
      "Guest Records and Documentation"
    ],
    internship: "Optional 1-month internship placement available",
    imageUrl: "/frontdesk1.jpg"
  };

  return <HospitalityCourseTemplate courseData={courseData} />;
};

export default ShortFrontDesk; 