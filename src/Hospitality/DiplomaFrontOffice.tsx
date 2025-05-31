// src/pages/DiplomaFrontOffice.tsx
//import HospitalityCourseTemplate from '../components/Hospitality/HospitalityCourseTemplate';
import { Clock, Award, BookOpen, Users, MapPin, Calendar } from 'lucide-react';
import HospitalityCourseTemplate from './HospitalityCourseTemplate';

const DiplomaFrontOffice = () => {
  const courseData = {
    title: "Diploma in Front Office Operations",
    type: 'Diploma' as const,
    duration: "12 Months (6 months theory + 6 months internship)",
    price: "KES 45,000",
    fullDescription: "Our Diploma in Front Office Operations provides comprehensive training in all aspects of front office management in the hospitality industry. Students will gain practical skills in guest services, reservations, billing systems, and front office technology used in hotels and resorts worldwide.",
    outcomes: [
      "Master front office operations and management",
      "Develop exceptional guest service skills",
      "Learn property management systems (PMS)",
      "Understand revenue management principles",
      "Handle guest complaints and special requests professionally"
    ],
    certification: "Diploma in Front Office Operations",
    targetAudience: "Individuals seeking careers in hotel front office, guest services, or reservations. Suitable for both beginners and those with some hospitality experience.",
    keyFeatures: [
      {
        icon: <Clock className="w-8 h-8 text-primary-600" />,
        title: "Duration",
        description: "12 Months (6 months theory + 6 months internship)"
      },
      {
        icon: <Award className="w-8 h-8 text-primary-600" />,
        title: "Certification",
        description: "Diploma in Front Office Operations"
      },
      {
        icon: <BookOpen className="w-8 h-8 text-primary-600" />,
        title: "Study Mode",
        description: "Full-time (Weekdays) or Part-time (Weekends)"
      },
      {
        icon: <Users className="w-8 h-8 text-primary-600" />,
        title: "Class Size",
        description: "Limited to 20 students per class"
      },
      {
        icon: <MapPin className="w-8 h-8 text-primary-600" />,
        title: "Location",
        description: "Nairobi Campus or Mombasa Campus"
      },
      {
        icon: <Calendar className="w-8 h-8 text-primary-600" />,
        title: "Intakes",
        description: "January, May, and September"
      }
    ],
    careerOpportunities: [
      "Front Office Manager",
      "Guest Service Agent",
      "Reservations Supervisor",
      "Concierge",
      "Night Auditor",
      "Revenue Manager"
    ],
    modules: [
      "Introduction to Hospitality Industry",
      "Front Office Operations",
      "Property Management Systems",
      "Guest Service Excellence",
      "Reservation Techniques",
      "Revenue Management",
      "Housekeeping Coordination",
      "Communication Skills",
      "Hospitality Accounting",
      "Safety and Security Procedures"
    ],
    internship: "6-month guaranteed internship at leading hotels and resorts with potential for employment after completion.",
    imageUrl: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
  };

  return <HospitalityCourseTemplate courseData={courseData} />;
};

export default DiplomaFrontOffice;