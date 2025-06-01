import { Clock, Award,  Users, ClipboardList, ShieldCheck, Layers } from 'lucide-react';
import HospitalityCourseTemplate from './HospitalityCourseTemplate';

const DiplomaHouseKeeping = () => {
  const courseData = {
    title: "Diploma in House Keeping & Laundry Operation",
    type: 'Diploma' as const,
    duration: "2 Years",
    price: "Contact for pricing",
    fullDescription: `
      International Institute of Foreign Languages and Hospitality  Management is committed to sustaining its mandate of training qualified professionals for the hospitality and tourism industry.
      
      This is a two-year program that provides students with competencies on supervision, scheduling, inventory control, selection, and maintenance of fabrics, furniture and floor coverings and supervising operations of a laundry plant.
    `,
    outcomes: [
      "Plan and schedule housekeeping duties effectively",
      "Organize and manage the housekeeping department",
      "Supervise laundry operations with expertise",
      "Maintain high standards of health and safety",
      "Implement proper cleaning procedures",
      "Manage inventory control systems",
      "Adhere to standard operating procedures",
      "Deliver high standards of service for guest satisfaction"
    ],
    goals: [
      "Develop supervisory skills for housekeeping operations",
      "Train professionals in fabric and furniture maintenance",
      "Provide expertise in laundry plant supervision",
      "Equip students with inventory control competencies"
    ],
    certification: "Diploma in House Keeping & Laundry Operation",
    targetAudience: "Individuals seeking comprehensive training in housekeeping and laundry operations for the hospitality industry",
    keyFeatures: [
      {
        icon: <Clock className="w-8 h-8 text-primary-600" />,
        title: "Duration",
        description: "2 years comprehensive training"
      },
      {
        icon: <Award className="w-8 h-8 text-primary-600" />,
        title: "Certification",
        description: "Diploma in House Keeping & Laundry Operation"
      },
      {
        icon: <ClipboardList className="w-8 h-8 text-primary-600" />,
        title: "Skills Focus",
        description: "Supervision, scheduling, and inventory control"
      },
      {
        icon: <Layers className="w-8 h-8 text-primary-600" />,
        title: "Material Expertise",
        description: "Selection and maintenance of fabrics and furniture"
      },
      {
        icon: <ShieldCheck className="w-8 h-8 text-primary-600" />,
        title: "Operations",
        description: "Supervising laundry plant operations"
      },
      {
        icon: <Users className="w-8 h-8 text-primary-600" />,
        title: "Career Level",
        description: "Supervisory positions in hospitality"
      }
    ],
    careerOpportunities: [
      "Floor Supervisors",
      "Housekeeping Desk Coordinators",
      "Public Area Supervisors",
      "Linen and Uniform Supervisors",
      "Laundry Supervisors",
      "Hospital Housekeeping Managers",
      "Resort Maintenance Supervisors"
    ],
    modules: [
      "Housekeeping Department Organization",
      "Supervision Techniques",
      "Scheduling and Duty Planning",
      "Inventory Control Systems",
      "Fabric and Furniture Maintenance",
      "Floor Covering Care",
      "Laundry Plant Operations",
      "Health and Safety Standards",
      "Cleaning Procedures and Techniques",
      "Guest Satisfaction Strategies"
    ],
    internship: "Practical training component included in the 2-year program",
    imageUrl: "https://images.pexels.com/photos/5997993/pexels-photo-5997993.jpeg"
  };

  return <HospitalityCourseTemplate courseData={courseData} />;
};

export default DiplomaHouseKeeping;