// src/pages/CertificateHouseKeeping.tsx
//import HospitalityCourseTemplate from '../components/Hospitality/HospitalityCourseTemplate';
import { Clock, Award, BookOpen, Users,  MapPin, Calendar } from 'lucide-react';
import HospitalityCourseTemplate from './HospitalityCourseTemplate';

const CertificateHouseKeeping = () => {
  const courseData = {
    title: "Certificate in Housekeeping Operations",
    type: 'Certificate' as const,
    duration: "6 Months (3 months theory + 3 months internship)",
    price: "KES 22,000",
    fullDescription: "This practical certificate program provides foundational skills for entry-level positions in housekeeping departments. Students learn cleaning techniques, room preparation, and basic supervisory skills for various hospitality and healthcare environments.",
    outcomes: [
      "Learn professional cleaning techniques",
      "Understand room preparation standards",
      "Develop time management skills",
      "Gain knowledge of cleaning chemicals and equipment",
      "Acquire basic supervisory skills"
    ],
    certification: "Certificate in Housekeeping Operations (Includes Chemical Handling Certificate)",
    targetAudience: "Beginners seeking entry-level positions in hotels, hospitals, or commercial cleaning services.",
    keyFeatures: [
      {
        icon: <Clock className="w-8 h-8 text-primary-600" />,
        title: "Duration",
        description: "6 Months (3 months theory + 3 months internship)"
      },
      {
        icon: <Award className="w-8 h-8 text-primary-600" />,
        title: "Certification",
        description: "Certificate in Housekeeping Operations"
      },
      {
        icon: <BookOpen className="w-8 h-8 text-primary-600" />,
        title: "Study Mode",
        description: "Full-time (Weekdays) with practical sessions"
      },
      {
        icon: <Users className="w-8 h-8 text-primary-600" />,
        title: "Class Size",
        description: "Limited to 20 students per class"
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
      "Room Attendant",
      "Housekeeping Assistant",
      "Hospital Cleaner",
      "Commercial Cleaning Supervisor",
      "Laundry Attendant",
      "Camp Housekeeping Staff"
    ],
    modules: [
      "Introduction to Housekeeping",
      "Cleaning Techniques and Procedures",
      "Room Preparation Standards",
      "Cleaning Chemicals and Equipment",
      "Laundry Basics",
      "Waste Management",
      "Safety Procedures",
      "Customer Service in Housekeeping",
      "Basic Supervision Skills"
    ],
    internship: "3-month practical training in partner hotels or facilities with job placement assistance.",
    imageUrl: "https://images.pexels.com/photos/4108714/pexels-photo-4108714.jpeg"
  };

  return <HospitalityCourseTemplate courseData={courseData} />;
};

export default CertificateHouseKeeping;