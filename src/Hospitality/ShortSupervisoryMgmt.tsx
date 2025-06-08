import { Users, Clock, Award, BookOpen } from "lucide-react";
import HospitalityCourseTemplate from "./HospitalityCourseTemplate";

const ShortSupervisoryMgmt = () => {
  const courseData = {
    title: "Supervisory Management in Organizations",
    type: "Short Course",
    duration: "2 months",
    price: "KES 50,000 total",
    fullDescription: "This comprehensive course enhances supervisory skills for effective management in hospitality settings. Students will learn leadership techniques, team motivation, performance evaluation, and conflict resolution. The program combines management theory with practical applications to prepare graduates for supervisory roles in various organizational settings.",
    outcomes: [
      "Develop effective leadership skills",
      "Master team motivation techniques",
      "Implement performance evaluation systems",
      "Learn conflict resolution strategies",
      "Create operational plans",
      "Manage team dynamics effectively"
    ],
    goals: [
      "To provide comprehensive training in supervisory management",
      "To develop leadership and team management skills",
      "To enhance performance evaluation abilities",
      "To implement effective conflict resolution",
      "To prepare students for supervisory roles"
    ],
    certification: "Certificate in Supervisory Management",
    targetAudience: "This course is designed for current supervisors seeking to enhance their skills, aspiring managers, and professionals looking to develop their leadership capabilities.",
    keyFeatures: [
      {
        icon: <Clock className="w-6 h-6 text-primary-600" />,
        title: "Duration",
        description: "2 months of intensive training"
      },
      {
        icon: <Award className="w-6 h-6 text-primary-600" />,
        title: "Certification",
        description: "Certificate in Supervisory Management"
      },
      {
        icon: <Users className="w-6 h-6 text-primary-600" />,
        title: "Class Size",
        description: "Small groups for interactive learning"
      },
      {
        icon: <BookOpen className="w-6 h-6 text-primary-600" />,
        title: "Learning Method",
        description: "Combination of theory and practical exercises"
      }
    ],
    careerOpportunities: [
      "Supervisor",
      "Team Leader",
      "Department Manager",
      "Operations Manager",
      "Project Coordinator",
      "Training Manager"
    ],
    modules: [
      "Leadership Skills",
      "Team Motivation",
      "Performance Evaluation",
      "Conflict Resolution",
      "Operational Planning",
      "Team Management"
    ],
    internship: "Optional 2-week practical training available",
    imageUrl: "/supervision1.jpg"
  };

  return <HospitalityCourseTemplate courseData={courseData} />;
};

export default ShortSupervisoryMgmt; 