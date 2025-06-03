import { Clock, Award, Users, ClipboardList, Calendar, DollarSign } from 'lucide-react';
import HospitalityCourseTemplate from './HospitalityCourseTemplate';

const DiplomaHouseKeeping = () => {
  const courseData = {
    title: "Diploma in House Keeping & Laundry Operation",
    type: 'Diploma' as const,
    duration: "2 years (8 semesters)",
    price: "KES 30,000 per semester",
    fullDescription: `
      This two-year diploma program (8 semesters of 3 months each) provides comprehensive training in housekeeping and laundry operations for the hospitality industry. The curriculum combines theoretical knowledge with practical skills in supervision, scheduling, inventory control, and maintenance of fabrics and furniture.
      
      Students will gain hands-on experience in managing housekeeping departments and supervising laundry plant operations, preparing them for supervisory roles in various hospitality establishments.
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
      "Equip students with inventory control competencies",
      "Prepare graduates for immediate employment in the hospitality industry"
    ],
    certification: "Diploma in House Keeping & Laundry Operation",
    targetAudience: "Individuals seeking comprehensive training in housekeeping and laundry operations for the hospitality industry",
    keyFeatures: [
      {
        icon: <Clock className="w-8 h-8 text-primary-600" />,
        title: "Duration",
        description: "2 years (8 semesters)"
      },
      {
        icon: <Award className="w-8 h-8 text-primary-600" />,
        title: "Certification",
        description: "Professional Diploma"
      },
      {
        icon: <Calendar className="w-8 h-8 text-primary-600" />,
        title: "Program Structure",
        description: "3-month semesters"
      },
      {
        icon: <DollarSign className="w-8 h-8 text-primary-600" />,
        title: "Tuition",
        description: "KES 30,000/semester"
      },
      {
        icon: <ClipboardList className="w-8 h-8 text-primary-600" />,
        title: "Practical Training",
        description: "Integrated throughout program"
      },
      {
        icon: <Users className="w-8 h-8 text-primary-600" />,
        title: "Career Level",
        description: "Supervisory positions"
      }
    ],
    careerOpportunities: [
      "Floor Supervisors",
      "Housekeeping Desk Coordinators",
      "Public Area Supervisors",
      "Linen and Uniform Supervisors",
      "Laundry Supervisors",
      "Hospital Housekeeping Managers",
      "Resort Maintenance Supervisors",
      "Executive Housekeepers",
      "Facility Maintenance Supervisors"
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
      "Guest Satisfaction Strategies",
      "Staff Training Methods",
      "Quality Assurance in Housekeeping"
    ],
    internship: "Practical training integrated throughout the 8-semester program",
    imageUrl: "https://images.pexels.com/photos/5997993/pexels-photo-5997993.jpeg"
  };

  return <HospitalityCourseTemplate courseData={courseData} />;
};

export default DiplomaHouseKeeping;