import { Users, Clock, Award, BookOpen } from "lucide-react";
import HospitalityCourseTemplate from "./HospitalityCourseTemplate";

const ShortTourGuideCert = () => {
  const courseData = {
    title: "Basic Certification for Practicing Tour Guide",
    type: "Short Course",
    duration: "6 months",
    price: "KES 50,000 total",
    fullDescription: "This certification program is designed for practicing tour guides with at least two years of experience. Students will learn advanced commentary techniques, group management, first aid, cultural interpretation, and professional ethics. The program combines advanced knowledge with practical skills to enhance the professional capabilities of experienced tour guides.",
    outcomes: [
      "Develop advanced commentary skills",
      "Master group management techniques",
      "Learn first aid procedures",
      "Enhance cultural interpretation",
      "Understand professional ethics",
      "Implement best practices in tour guiding"
    ],
    goals: [
      "To provide advanced training for practicing tour guides",
      "To develop professional commentary skills",
      "To master group management techniques",
      "To enhance cultural interpretation abilities",
      "To prepare guides for certification"
    ],
    certification: "Basic Certification for Practicing Tour Guide",
    targetAudience: "This course is designed for practicing tour guides with at least two years of experience who wish to obtain professional certification and enhance their skills.",
    keyFeatures: [
      {
        icon: <Clock className="w-6 h-6 text-primary-600" />,
        title: "Duration",
        description: "6 months of intensive training"
      },
      {
        icon: <Award className="w-6 h-6 text-primary-600" />,
        title: "Certification",
        description: "Basic Certification for Practicing Tour Guide"
      },
      {
        icon: <Users className="w-6 h-6 text-primary-600" />,
        title: "Class Size",
        description: "Small groups for advanced learning"
      },
      {
        icon: <BookOpen className="w-6 h-6 text-primary-600" />,
        title: "Learning Method",
        description: "Advanced theory and practical applications"
      }
    ],
    careerOpportunities: [
      "Certified Tour Guide",
      "Senior Tour Guide",
      "Tour Manager",
      "Cultural Heritage Guide",
      "Tour Guide Trainer",
      "Tourism Consultant"
    ],
    modules: [
      "Advanced Commentary",
      "Group Management",
      "First Aid",
      "Cultural Interpretation",
      "Professional Ethics",
      "Best Practices"
    ],
    internship: "Optional 1-month practical training available",
    imageUrl: "/tourguidecert1.jpg"
  };

  return <HospitalityCourseTemplate courseData={courseData} />;
};

export default ShortTourGuideCert; 