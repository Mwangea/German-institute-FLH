// src/pages/DiplomaHouseKeeping.tsx
//import HospitalityCourseTemplate from '../components/Hospitality/HospitalityCourseTemplate';
import { Clock, Award, BookOpen, Users,  MapPin, Calendar } from 'lucide-react';
import HospitalityCourseTemplate from './HospitalityCourseTemplate';

const DiplomaHouseKeeping = () => {
  const courseData = {
    title: "Diploma in Housekeeping Operations",
    type: 'Diploma' as const,
    duration: "12 Months (6 months theory + 6 months internship)",
    price: "KES 40,000",
    fullDescription: "This comprehensive diploma program prepares students for supervisory and management roles in housekeeping departments of hotels, hospitals, and large facilities. The curriculum covers cleaning techniques, laundry operations, staff supervision, and quality control in housekeeping services.",
    outcomes: [
      "Master housekeeping operations and management",
      "Learn advanced cleaning techniques",
      "Develop supervisory and leadership skills",
      "Understand inventory and linen management",
      "Implement quality control systems"
    ],
    certification: "Diploma in Housekeeping Operations",
    targetAudience: "Individuals seeking careers in hotel housekeeping management, facility maintenance, or hospital housekeeping supervision.",
    keyFeatures: [
      {
        icon: <Clock className="w-8 h-8 text-primary-600" />,
        title: "Duration",
        description: "12 Months (6 months theory + 6 months internship)"
      },
      {
        icon: <Award className="w-8 h-8 text-primary-600" />,
        title: "Certification",
        description: "Diploma in Housekeeping Operations"
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
      "Executive Housekeeper",
      "Housekeeping Supervisor",
      "Laundry Manager",
      "Facility Maintenance Manager",
      "Hospital Housekeeping Manager",
      "Cruise Ship Housekeeping Officer"
    ],
    modules: [
      "Principles of Housekeeping",
      "Cleaning Science and Techniques",
      "Laundry Operations",
      "Inventory and Linen Management",
      "Housekeeping Administration",
      "Quality Control in Housekeeping",
      "Staff Training and Supervision",
      "Safety and Sanitation Standards",
      "Pest Control Management",
      "Hospital Housekeeping Specialization"
    ],
    internship: "6-month internship at 4-5 star hotels or large facilities with potential for employment after completion.",
    imageUrl: "https://images.pexels.com/photos/5997993/pexels-photo-5997993.jpeg"
  };

  return <HospitalityCourseTemplate courseData={courseData} />;
};

export default DiplomaHouseKeeping;