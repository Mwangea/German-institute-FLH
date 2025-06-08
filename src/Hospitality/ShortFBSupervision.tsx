import { Users, Clock, Award, BookOpen } from "lucide-react";
import HospitalityCourseTemplate from "./HospitalityCourseTemplate";

const ShortFBSupervision = () => {
  const courseData = {
    title: "Food & Beverage Service Supervision",
    type: "Short Course",
    duration: "2 months",
    price: "KES 50,000 total",
    fullDescription: "This comprehensive course prepares individuals for supervisory roles in food and beverage service operations. Students will learn staff management, service standards implementation, quality control, and problem-solving techniques. The program combines leadership skills with operational knowledge to prepare graduates for supervisory positions in the hospitality industry.",
    outcomes: [
      "Master staff scheduling and management",
      "Implement service standards effectively",
      "Develop quality control procedures",
      "Learn training and development techniques",
      "Handle customer service challenges",
      "Manage operational efficiency"
    ],
    goals: [
      "To provide comprehensive training in F&B supervision",
      "To develop leadership and management skills",
      "To enhance service quality standards",
      "To implement effective training methods",
      "To prepare students for supervisory roles"
    ],
    certification: "Certificate in Food & Beverage Service Supervision",
    targetAudience: "This course is designed for current F&B staff seeking promotion, aspiring supervisors, and hospitality professionals looking to enhance their management skills.",
    keyFeatures: [
      {
        icon: <Clock className="w-6 h-6 text-primary-600" />,
        title: "Duration",
        description: "2 months of intensive training"
      },
      {
        icon: <Award className="w-6 h-6 text-primary-600" />,
        title: "Certification",
        description: "Certificate in Food & Beverage Service Supervision"
      },
      {
        icon: <Users className="w-6 h-6 text-primary-600" />,
        title: "Class Size",
        description: "Small groups for interactive learning"
      },
      {
        icon: <BookOpen className="w-6 h-6 text-primary-600" />,
        title: "Learning Method",
        description: "Combination of theory and practical training"
      }
    ],
    careerOpportunities: [
      "F&B Supervisor",
      "Restaurant Manager",
      "Service Team Leader",
      "Operations Supervisor",
      "Quality Control Manager",
      "Training Coordinator"
    ],
    modules: [
      "Staff Scheduling",
      "Service Standards",
      "Quality Control",
      "Training Techniques",
      "Problem Solving",
      "Operational Management"
    ],
    internship: "Optional 2-week practical training available",
    imageUrl: "/fbsupervision1.jpg"
  };

  return <HospitalityCourseTemplate courseData={courseData} />;
};

export default ShortFBSupervision; 