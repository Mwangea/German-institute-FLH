// src/pages/CertificateHouseKeeping.tsx
//import HospitalityCourseTemplate from '../components/Hospitality/HospitalityCourseTemplate';
import { Clock, Award, BookOpen, Users,  MapPin, Calendar } from 'lucide-react';
import HospitalityCourseTemplate from './HospitalityCourseTemplate';

const CertificateHousekeeping = () => {
  const courseData = {
    title: "Certificate in Housekeeping and Laundry",
    type: "Certificate",
    duration: "1 year",
    price: "KES 30,000 per semester (4 semesters total)",
    fullDescription: "This one-year program provides training in managing housekeeping and laundry operations in the hospitality industry. Students learn cleaning techniques, linen management, laundry operations, room inspection, inventory control, and supervisory skills.",
    outcomes: [
      "Master cleaning techniques and procedures",
      "Develop linen management skills",
      "Learn laundry operations",
      "Conduct effective room inspections",
      "Implement inventory control",
      "Apply supervisory skills"
    ],
    goals: [
      "To provide comprehensive training in housekeeping operations",
      "To develop professional cleaning skills",
      "To enhance laundry management abilities",
      "To master inventory control",
      "To prepare students for supervisory roles"
    ],
    certification: "Certificate in Housekeeping and Laundry",
    targetAudience: "This program is designed for aspiring housekeeping staff, room attendants, laundry operators, and individuals seeking to enter the hospitality housekeeping industry.",
    keyFeatures: [
      {
        icon: <Clock className="w-6 h-6 text-primary-600" />,
        title: "Duration",
        description: "1 year (4 semesters)"
      },
      {
        icon: <Award className="w-6 h-6 text-primary-600" />,
        title: "Certification",
        description: "Certificate in Housekeeping and Laundry"
      },
      {
        icon: <Users className="w-6 h-6 text-primary-600" />,
        title: "Class Size",
        description: "Small groups for practical training"
      },
      {
        icon: <BookOpen className="w-6 h-6 text-primary-600" />,
        title: "Learning Method",
        description: "Theory and practical training"
      }
    ],
    careerOpportunities: [
      "Room Attendant",
      "Housekeeping Supervisor",
      "Laundry Operator",
      "Floor Supervisor",
      "Housekeeping Manager",
      "Laundry Manager"
    ],
    modules: [
      "Cleaning Techniques",
      "Linen Management",
      "Laundry Operations",
      "Room Inspection",
      "Inventory Control",
      "Supervisory Skills"
    ],
    internship: "3-month industrial attachment included",
    imageUrl: "/housekeeping1.jpg"
  };

  return <HospitalityCourseTemplate courseData={courseData} />;
};

export default CertificateHousekeeping;