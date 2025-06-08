import { Users, Clock, Award, BookOpen } from "lucide-react";
import HospitalityCourseTemplate from "./HospitalityCourseTemplate";

const ShortCakeMaking = () => {
  const courseData = {
    title: "Cake Making & Decorations",
    type: "Short Course",
    duration: "2 months",
    price: "KES 50,000 total",
    fullDescription: "This hands-on course provides comprehensive training in cake baking and decoration techniques. Students will learn professional cake making methods, various icing techniques, theme cake creation, and sugar craft. The program combines artistic creativity with practical skills to prepare graduates for careers in cake decoration and bakery operations.",
    outcomes: [
      "Master fundamental cake baking techniques",
      "Develop expertise in various icing methods",
      "Create professional theme cakes",
      "Learn advanced sugar craft techniques",
      "Understand cake business operations",
      "Execute professional cake decoration designs"
    ],
    goals: [
      "To provide comprehensive training in cake making",
      "To develop artistic decoration skills",
      "To master various icing techniques",
      "To understand cake business operations",
      "To prepare students for professional cake decoration careers"
    ],
    certification: "Certificate in Cake Making & Decorations",
    targetAudience: "This course is designed for aspiring cake decorators, bakery staff seeking to enhance their skills, and individuals interested in starting a cake decoration business.",
    keyFeatures: [
      {
        icon: <Clock className="w-6 h-6 text-primary-600" />,
        title: "Duration",
        description: "2 months of intensive training"
      },
      {
        icon: <Award className="w-6 h-6 text-primary-600" />,
        title: "Certification",
        description: "Certificate in Cake Making & Decorations"
      },
      {
        icon: <Users className="w-6 h-6 text-primary-600" />,
        title: "Class Size",
        description: "Small groups for hands-on practice"
      },
      {
        icon: <BookOpen className="w-6 h-6 text-primary-600" />,
        title: "Learning Method",
        description: "Practical training with expert guidance"
      }
    ],
    careerOpportunities: [
      "Cake Decorator",
      "Bakery Owner",
      "Pastry Chef",
      "Wedding Cake Specialist",
      "Cake Business Entrepreneur",
      "Bakery Production Manager"
    ],
    modules: [
      "Baking Fundamentals",
      "Icing Techniques",
      "Theme Cake Creation",
      "Sugar Craft",
      "Business Basics",
      "Professional Decoration"
    ],
    internship: "Optional 2-week practical training available",
    imageUrl: "/cake1.jpg"
  };

  return <HospitalityCourseTemplate courseData={courseData} />;
};

export default ShortCakeMaking; 