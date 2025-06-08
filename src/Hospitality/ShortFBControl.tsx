import { Users, Clock, Award, BookOpen } from "lucide-react";
import HospitalityCourseTemplate from "./HospitalityCourseTemplate";

const ShortFBControl = () => {
  const courseData = {
    title: "Food & Beverage Control",
    type: "Short Course",
    duration: "2 months",
    price: "KES 30,000 total",
    fullDescription: "This intensive course focuses on the essential aspects of food and beverage cost control in the hospitality industry. Students will learn effective inventory management, cost control methods, menu pricing strategies, and waste management techniques. The program combines theoretical knowledge with practical applications to ensure graduates can implement effective control systems in any food service operation.",
    outcomes: [
      "Master food and beverage cost control methods",
      "Implement effective inventory management systems",
      "Develop strategic menu pricing strategies",
      "Execute efficient purchasing procedures",
      "Manage waste and reduce operational costs",
      "Analyze and optimize profit margins"
    ],
    goals: [
      "To provide comprehensive training in F&B cost control",
      "To develop expertise in inventory management",
      "To enhance menu pricing and profitability",
      "To implement effective purchasing systems",
      "To optimize operational efficiency and reduce waste"
    ],
    certification: "Certificate in Food & Beverage Control",
    targetAudience: "This course is ideal for food and beverage managers, restaurant owners, kitchen supervisors, and hospitality professionals seeking to enhance their cost control skills and operational efficiency.",
    keyFeatures: [
      {
        icon: <Clock className="w-6 h-6 text-primary-600" />,
        title: "Duration",
        description: "2 months of intensive training"
      },
      {
        icon: <Award className="w-6 h-6 text-primary-600" />,
        title: "Certification",
        description: "Certificate in Food & Beverage Control"
      },
      {
        icon: <Users className="w-6 h-6 text-primary-600" />,
        title: "Class Size",
        description: "Small groups for personalized attention"
      },
      {
        icon: <BookOpen className="w-6 h-6 text-primary-600" />,
        title: "Learning Method",
        description: "Combination of theory and practical exercises"
      }
    ],
    careerOpportunities: [
      "Food & Beverage Controller",
      "Restaurant Manager",
      "Cost Control Specialist",
      "Inventory Manager",
      "Purchasing Manager",
      "Operations Analyst"
    ],
    modules: [
      "Cost Control Methods and Techniques",
      "Inventory Management Systems",
      "Menu Pricing Strategies",
      "Purchasing and Procurement",
      "Waste Management",
      "Profit Analysis and Optimization"
    ],
    internship: "Optional 2-week practical training available",
    imageUrl: "/fbcontrol1.jpg"
  };

  return <HospitalityCourseTemplate courseData={courseData} />;
};

export default ShortFBControl; 