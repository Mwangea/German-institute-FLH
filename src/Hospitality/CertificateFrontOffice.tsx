// src/pages/CertificateFrontOffice.tsx
//import HospitalityCourseTemplate from '../components/Hospitality/HospitalityCourseTemplate';
import { Clock, Award, BookOpen, Users, MapPin, Calendar } from 'lucide-react';
import HospitalityCourseTemplate from './HospitalityCourseTemplate';

const CertificateFrontOffice = () => {
  const courseData = {
    title: "Certificate in Front Office Operations",
    type: 'Certificate' as const,
    duration: "6 Months (3 months theory + 3 months internship)",
    price: "KES 25,000",
    fullDescription: "This certificate program provides foundational skills for entry-level positions in hotel front offices. Students learn essential guest service techniques, reservation systems, and front office procedures used in the hospitality industry.",
    outcomes: [
      "Understand front office operations",
      "Develop basic guest service skills",
      "Learn reservation and check-in procedures",
      "Handle telephone and email inquiries professionally",
      "Process payments and billing accurately"
    ],
    certification: "Certificate in Front Office Operations",
    targetAudience: "Beginners seeking entry-level positions in hotels, resorts, or guest service environments.",
    keyFeatures: [
      {
        icon: <Clock className="w-8 h-8 text-primary-600" />,
        title: "Duration",
        description: "6 Months (3 months theory + 3 months internship)"
      },
      {
        icon: <Award className="w-8 h-8 text-primary-600" />,
        title: "Certification",
        description: "Certificate in Front Office Operations"
      },
      {
        icon: <BookOpen className="w-8 h-8 text-primary-600" />,
        title: "Study Mode",
        description: "Full-time (Weekdays) or Part-time (Weekends)"
      },
      {
        icon: <Users className="w-8 h-8 text-primary-600" />,
        title: "Class Size",
        description: "Limited to 25 students per class"
      },
      {
        icon: <MapPin className="w-8 h-8 text-primary-600" />,
        title: "Location",
        description: "Nairobi Campus or Online"
      },
      {
        icon: <Calendar className="w-8 h-8 text-primary-600" />,
        title: "Intakes",
        description: "Monthly intakes available"
      }
    ],
    careerOpportunities: [
      "Front Desk Agent",
      "Reservations Agent",
      "Guest Service Representative",
      "Telephone Operator",
      "Night Auditor Trainee"
    ],
    modules: [
      "Introduction to Front Office",
      "Guest Service Basics",
      "Reservation Systems",
      "Check-in/Check-out Procedures",
      "Telephone Etiquette",
      "Basic Accounting Procedures",
      "Communication Skills",
      "Safety and Security Awareness"
    ],
    internship: "3-month internship at partner hotels with job placement assistance upon completion.",
    imageUrl: "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg"
  };

  return <HospitalityCourseTemplate courseData={courseData} />;
};

export default CertificateFrontOffice;