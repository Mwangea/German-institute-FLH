import { Users, Clock, Award, BookOpen } from "lucide-react";
import HospitalityCourseTemplate from "./HospitalityCourseTemplate";

const ShortBarista = () => {
  const courseData = {
    title: "Barista & Bar Tending Course",
    type: "Short Course",
    duration: "2 months",
    price: "KES 40,000 total",
    fullDescription: "This comprehensive course covers coffee brewing techniques, cocktail mixing, and customer service in beverage operations. Students will learn professional coffee preparation, latte art, mixology basics, and bar setup procedures. The program combines technical skills with customer service excellence to prepare graduates for careers in coffee shops and bars.",
    outcomes: [
      "Master coffee preparation techniques",
      "Develop latte art skills",
      "Learn mixology fundamentals",
      "Execute proper bar setup",
      "Enhance customer interaction",
      "Implement beverage service standards"
    ],
    goals: [
      "To provide comprehensive training in coffee and beverage service",
      "To develop professional barista skills",
      "To master mixology techniques",
      "To enhance customer service abilities",
      "To prepare students for beverage industry roles"
    ],
    certification: "Certificate in Barista & Bar Tending",
    targetAudience: "This course is designed for aspiring baristas, bartenders, coffee shop staff, and individuals interested in pursuing careers in beverage service.",
    keyFeatures: [
      {
        icon: <Clock className="w-6 h-6 text-primary-600" />,
        title: "Duration",
        description: "2 months of intensive training"
      },
      {
        icon: <Award className="w-6 h-6 text-primary-600" />,
        title: "Certification",
        description: "Certificate in Barista & Bar Tending"
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
      "Barista",
      "Bartender",
      "Coffee Shop Manager",
      "Beverage Specialist",
      "Cafe Owner",
      "Beverage Trainer"
    ],
    modules: [
      "Coffee Preparation",
      "Latte Art",
      "Mixology Basics",
      "Bar Setup",
      "Customer Interaction",
      "Beverage Service"
    ],
    internship: "Optional 2-week practical training available",
    imageUrl: "/barista1.jpg"
  };

  return <HospitalityCourseTemplate courseData={courseData} />;
};

export default ShortBarista; 