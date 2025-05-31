// src/pages/CertificateFoodBeverage.tsx
//import HospitalityCourseTemplate from '../components/Hospitality/HospitalityCourseTemplate';
import { Clock, Award, BookOpen, Users, MapPin, Calendar } from 'lucide-react';
import HospitalityCourseTemplate from './HospitalityCourseTemplate';

const CertificateFoodBeverage = () => {
  const courseData = {
    title: "Certificate in Food and Beverage Service",
    type: 'Certificate' as const,
    duration: "6 Months (3 months theory + 3 months internship)",
    price: "KES 28,000",
    fullDescription: "This practical certificate program equips students with essential skills for food service positions in restaurants, hotels, and catering companies. The curriculum focuses on hands-on training in food service techniques and customer interaction.",
    outcomes: [
      "Master basic food service techniques",
      "Learn table setting and service styles",
      "Understand menu knowledge",
      "Develop customer interaction skills",
      "Gain food safety certification"
    ],
    certification: "Certificate in Food and Beverage Service (Includes Food Handler's Certificate)",
    targetAudience: "Individuals seeking entry-level positions in restaurants, hotels, or catering services.",
    keyFeatures: [
      {
        icon: <Clock className="w-8 h-8 text-primary-600" />,
        title: "Duration",
        description: "6 Months (3 months theory + 3 months internship)"
      },
      {
        icon: <Award className="w-8 h-8 text-primary-600" />,
        title: "Certification",
        description: "Certificate in Food and Beverage Service"
      },
      {
        icon: <BookOpen className="w-8 h-8 text-primary-600" />,
        title: "Study Mode",
        description: "Full-time (Weekdays) with practical sessions"
      },
      {
        icon: <Users className="w-8 h-8 text-primary-600" />,
        title: "Class Size",
        description: "Limited to 15 students for practical training"
      },
      {
        icon: <MapPin className="w-8 h-8 text-primary-600" />,
        title: "Location",
        description: "Nairobi Campus (with training restaurant)"
      },
      {
        icon: <Calendar className="w-8 h-8 text-primary-600" />,
        title: "Intakes",
        description: "January, April, July, and October"
      }
    ],
    careerOpportunities: [
      "Waiter/Waitress",
      "Food Service Assistant",
      "Banquet Server",
      "Barista",
      "Catering Assistant"
    ],
    modules: [
      "Food Service Fundamentals",
      "Table Setting and Service",
      "Beverage Service Basics",
      "Menu Knowledge",
      "Customer Service Skills",
      "Food Safety and Hygiene",
      "Barista Training",
      "Banquet Service Basics"
    ],
    internship: "3-month practical training in our training restaurant or partner establishments.",
    imageUrl: "https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg"
  };

  return <HospitalityCourseTemplate courseData={courseData} />;
};

export default CertificateFoodBeverage;