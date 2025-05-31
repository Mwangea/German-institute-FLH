// src/pages/DiplomaHospitalityManagement.tsx
//import HospitalityCourseTemplate from '../components/Hospitality/HospitalityCourseTemplate';
import { Clock, Award, BookOpen, Users, MapPin, Calendar } from 'lucide-react';
import HospitalityCourseTemplate from './HospitalityCourseTemplate';

const DiplomaHospitalityManagement = () => {
  const courseData = {
    title: "Diploma in Hospitality Management",
    type: 'Diploma' as const,
    duration: "18 Months (12 months theory + 6 months internship)",
    price: "KES 60,000",
    fullDescription: "Our flagship hospitality program provides comprehensive training in all aspects of hotel and restaurant management. This intensive diploma combines theoretical knowledge with practical training across all major hospitality departments, preparing students for management positions in the industry.",
    outcomes: [
      "Master all core hospitality operations",
      "Develop strong management and leadership skills",
      "Learn revenue and cost control techniques",
      "Understand hospitality marketing strategies",
      "Gain hands-on experience in all departments"
    ],
    certification: "Diploma in Hospitality Management",
    targetAudience: "Individuals seeking comprehensive hospitality training for management careers in hotels, resorts, or restaurants.",
    keyFeatures: [
      {
        icon: <Clock className="w-8 h-8 text-primary-600" />,
        title: "Duration",
        description: "18 Months (12 months theory + 6 months internship)"
      },
      {
        icon: <Award className="w-8 h-8 text-primary-600" />,
        title: "Certification",
        description: "Diploma in Hospitality Management"
      },
      {
        icon: <BookOpen className="w-8 h-8 text-primary-600" />,
        title: "Study Mode",
        description: "Full-time (Weekdays) with rotating department training"
      },
      {
        icon: <Users className="w-8 h-8 text-primary-600" />,
        title: "Class Size",
        description: "Limited to 15 students for personalized attention"
      },
      {
        icon: <MapPin className="w-8 h-8 text-primary-600" />,
        title: "Location",
        description: "Nairobi Campus (with training hotel facilities)"
      },
      {
        icon: <Calendar className="w-8 h-8 text-primary-600" />,
        title: "Intakes",
        description: "January and July"
      }
    ],
    careerOpportunities: [
      "Hotel Operations Manager",
      "Restaurant General Manager",
      "Front Office Manager",
      "Food and Beverage Manager",
      "Rooms Division Manager",
      "Hospitality Entrepreneur"
    ],
    modules: [
      "Front Office Operations",
      "Food and Beverage Management",
      "Housekeeping Management",
      "Hospitality Accounting",
      "Human Resource Management",
      "Marketing for Hospitality",
      "Facility Management",
      "Event Management",
      "Revenue Management",
      "Strategic Management"
    ],
    internship: "6-month rotational internship at 4-5 star hotels with high employment potential after completion.",
    imageUrl: "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg"
  };

  return <HospitalityCourseTemplate courseData={courseData} />;
};

export default DiplomaHospitalityManagement;