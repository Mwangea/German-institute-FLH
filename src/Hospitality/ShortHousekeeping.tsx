import { Users, Clock, Award, BookOpen } from "lucide-react";
import HospitalityCourseTemplate from "./HospitalityCourseTemplate";

const ShortHousekeeping = () => {
  const courseData = {
    title: "Housekeeping Operational Skills",
    type: "Short Course",
    duration: "3 months",
    price: "KES 40,000 total",
    fullDescription: "This comprehensive course provides training in housekeeping operations, including cleaning procedures and room maintenance. Students will learn professional cleaning methods, room inspection techniques, linen management, chemical use, and work scheduling. The program combines practical skills with operational knowledge to prepare graduates for roles in housekeeping departments.",
    outcomes: [
      "Master professional cleaning methods",
      "Develop room inspection expertise",
      "Learn linen management procedures",
      "Understand chemical safety and usage",
      "Create effective work schedules",
      "Implement quality control measures"
    ],
    goals: [
      "To provide comprehensive training in housekeeping operations",
      "To develop professional cleaning skills",
      "To master room maintenance procedures",
      "To enhance operational efficiency",
      "To prepare students for housekeeping roles"
    ],
    certification: "Certificate in Housekeeping Operational Skills",
    targetAudience: "This course is designed for aspiring housekeeping staff, current housekeeping employees seeking to enhance their skills, and individuals interested in pursuing careers in hospitality housekeeping.",
    keyFeatures: [
      {
        icon: <Clock className="w-6 h-6 text-primary-600" />,
        title: "Duration",
        description: "3 months of intensive training"
      },
      {
        icon: <Award className="w-6 h-6 text-primary-600" />,
        title: "Certification",
        description: "Certificate in Housekeeping Operational Skills"
      },
      {
        icon: <Users className="w-6 h-6 text-primary-600" />,
        title: "Class Size",
        description: "Small groups for hands-on practice"
      },
      {
        icon: <BookOpen className="w-6 h-6 text-primary-600" />,
        title: "Learning Method",
        description: "Practical training in professional setting"
      }
    ],
    careerOpportunities: [
      "Housekeeping Staff",
      "Room Attendant",
      "Housekeeping Supervisor",
      "Cleaning Operations Manager",
      "Facility Maintenance Staff",
      "Quality Control Inspector"
    ],
    modules: [
      "Cleaning Methods",
      "Room Inspection",
      "Linen Management",
      "Chemical Use",
      "Work Scheduling",
      "Quality Control"
    ],
    internship: "Optional 2-week practical training available",
    imageUrl: "/hkops1.jpg"
  };

  return <HospitalityCourseTemplate courseData={courseData} />;
};

export default ShortHousekeeping; 