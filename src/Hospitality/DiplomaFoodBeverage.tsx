// src/pages/DiplomaFoodBeverage.tsx
//import HospitalityCourseTemplate from '../components/Hospitality/HospitalityCourseTemplate';
import { Clock, Award, BookOpen, Users, MapPin, Calendar } from 'lucide-react';
import HospitalityCourseTemplate from './HospitalityCourseTemplate';

const DiplomaFoodBeverage = () => {
  const courseData = {
    title: "Diploma in Food and Beverage Management",
    type: 'Diploma' as const,
    duration: "12 Months (6 months theory + 6 months internship)",
    price: "KES 50,000",
    fullDescription: "This comprehensive program prepares students for management positions in food service establishments. The curriculum covers restaurant operations, beverage management, food safety, and customer service excellence in diverse food service environments.",
    outcomes: [
      "Master food and beverage service techniques",
      "Develop menu planning and costing skills",
      "Learn bar and beverage management",
      "Understand food safety and hygiene standards",
      "Gain supervisory and management skills"
    ],
    certification: "Diploma in Food and Beverage Management",
    targetAudience: "Aspiring restaurant managers, food service professionals, and entrepreneurs looking to start their own food business.",
    keyFeatures: [
      {
        icon: <Clock className="w-8 h-8 text-primary-600" />,
        title: "Duration",
        description: "12 Months (6 months theory + 6 months internship)"
      },
      {
        icon: <Award className="w-8 h-8 text-primary-600" />,
        title: "Certification",
        description: "Diploma in Food and Beverage Management"
      },
      {
        icon: <BookOpen className="w-8 h-8 text-primary-600" />,
        title: "Study Mode",
        description: "Full-time (Weekdays) or Part-time (Weekends)"
      },
      {
        icon: <Users className="w-8 h-8 text-primary-600" />,
        title: "Class Size",
        description: "Limited to 15 students for practical sessions"
      },
      {
        icon: <MapPin className="w-8 h-8 text-primary-600" />,
        title: "Location",
        description: "Nairobi Campus (with commercial kitchen facilities)"
      },
      {
        icon: <Calendar className="w-8 h-8 text-primary-600" />,
        title: "Intakes",
        description: "January, May, and September"
      }
    ],
    careerOpportunities: [
      "Restaurant Manager",
      "Food Service Supervisor",
      "Beverage Manager",
      "Banquet Manager",
      "Catering Manager",
      "Food Entrepreneur"
    ],
    modules: [
      "Food and Beverage Service",
      "Menu Planning and Cost Control",
      "Beverage Management",
      "Food Safety and Hygiene",
      "Restaurant Operations",
      "Banquet Service",
      "Wine and Bar Knowledge",
      "Customer Service Excellence",
      "Hospitality Marketing",
      "Financial Management"
    ],
    internship: "6-month internship at premium restaurants, hotels, or catering companies with potential for employment.",
    imageUrl: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
  };

  return <HospitalityCourseTemplate courseData={courseData} />;
};

export default DiplomaFoodBeverage;