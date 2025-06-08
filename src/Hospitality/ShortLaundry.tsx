import { Users, Clock, Award, BookOpen } from "lucide-react";
import HospitalityCourseTemplate from "./HospitalityCourseTemplate";

const ShortLaundry = () => {
  const courseData = {
    title: "Laundry and Dry-Cleaning Operational Skills",
    type: "Short Course",
    duration: "3 months",
    price: "KES 40,000 total",
    fullDescription: "This comprehensive course covers laundry operations, fabric care, and dry-cleaning techniques. Students will learn about different fabric types, stain removal methods, equipment operation, quality control, and business operations. The program combines technical skills with practical knowledge to prepare graduates for roles in laundry and dry-cleaning services.",
    outcomes: [
      "Master fabric care techniques",
      "Develop stain removal expertise",
      "Learn equipment operation",
      "Implement quality control measures",
      "Understand business operations",
      "Execute efficient laundry processes"
    ],
    goals: [
      "To provide comprehensive training in laundry operations",
      "To develop professional fabric care skills",
      "To master dry-cleaning techniques",
      "To enhance quality control procedures",
      "To prepare students for laundry industry roles"
    ],
    certification: "Certificate in Laundry and Dry-Cleaning Operations",
    targetAudience: "This course is designed for aspiring laundry operators, current laundry staff seeking to enhance their skills, and individuals interested in pursuing careers in laundry and dry-cleaning services.",
    keyFeatures: [
      {
        icon: <Clock className="w-6 h-6 text-primary-600" />,
        title: "Duration",
        description: "3 months of intensive training"
      },
      {
        icon: <Award className="w-6 h-6 text-primary-600" />,
        title: "Certification",
        description: "Certificate in Laundry and Dry-Cleaning Operations"
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
      "Laundry Operator",
      "Dry-Cleaning Specialist",
      "Fabric Care Manager",
      "Laundry Supervisor",
      "Quality Control Inspector",
      "Laundry Business Owner"
    ],
    modules: [
      "Fabric Types",
      "Stain Removal",
      "Equipment Use",
      "Quality Control",
      "Business Operations",
      "Laundry Processes"
    ],
    internship: "Optional 2-week practical training available",
    imageUrl: "/laundry1.jpg"
  };

  return <HospitalityCourseTemplate courseData={courseData} />;
};

export default ShortLaundry; 