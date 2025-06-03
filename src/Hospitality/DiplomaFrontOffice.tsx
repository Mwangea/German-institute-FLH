import { Clock, Award, BookOpen, UserCheck, Bell, Calendar } from 'lucide-react';
import HospitalityCourseTemplate from './HospitalityCourseTemplate';

const DiplomaFrontOffice = () => {
  const courseData = {
    title: "Diploma in Front Office Operations & Administration",
    type: 'Diploma' as const,
    duration: "2 years (8 semesters)",
    price: "KES 30,000 per semester",
    fullDescription: `
      This comprehensive two-year program (8 semesters of 3 months each) provides students with professional skills for front office operations in various types of hotels. The curriculum combines practical and theoretical training with industry attachments.
      
      The program is designed to supply the labor market with well-trained professionals who can enter at operational levels and progress to supervisory positions. Graduates will be equipped with the skills to work in diverse front office roles and have a pathway for further studies to degree level.
    `,
    outcomes: [
      "Work independently as Front Desk Agents, Cashiers, and Receptionists",
      "Perform effectively as Reservation Clerks and food and beverage control clerks",
      "With experience, work as Front office supervisors",
      "Handle roles as Revenue controllers and night auditors",
      "Serve as Guests relation officers and credit controllers"
    ],
    goals: [
      "To train competent professionals for front office careers in the hospitality industry",
      "To provide hands-on experience through practical training components",
      "To prepare students for immediate employment and career advancement"
    ],
    certification: "Diploma in Front Office Operations & Administration",
    targetAudience: "Individuals seeking professional skills for front office operations in various types of hotels",
    keyFeatures: [
      {
        icon: <Clock className="w-8 h-8 text-primary-600" />,
        title: "Duration",
        description: "2 years (8 semesters)"
      },
      {
        icon: <Award className="w-8 h-8 text-primary-600" />,
        title: "Certification",
        description: "Diploma in Front Office"
      },
      {
        icon: <BookOpen className="w-8 h-8 text-primary-600" />,
        title: "Study Mode",
        description: "Semester-based (3 months per semester)"
      },
      {
        icon: <UserCheck className="w-8 h-8 text-primary-600" />,
        title: "Career Entry",
        description: "Operational to supervisory roles"
      },
      {
        icon: <Calendar className="w-8 h-8 text-primary-600" />,
        title: "Practical Training",
        description: "Integrated throughout program"
      },
      {
        icon: <Bell className="w-8 h-8 text-primary-600" />,
        title: "Tuition",
        description: "KES 30,000 per semester"
      }
    ],
    careerOpportunities: [
      "Front Desk Agents",
      "Cashiers",
      "Receptionists",
      "Reservation Clerks",
      "Food and Beverage Control Clerks",
      "Front Office Supervisors",
      "Revenue Controllers",
      "Night Auditors",
      "Guest Relation Officers",
      "Credit Controllers"
    ],
    modules: [
      "Front Office Operations Fundamentals",
      "Guest Service Procedures",
      "Reservation Systems Management",
      "Revenue Control Techniques",
      "Night Audit Procedures",
      "Guest Relations Management",
      "Credit Control Systems",
      "Property Management Systems",
      "Hospitality Accounting",
      "Communication Skills for Front Office"
    ],
    internship: "Industry attachments integrated throughout the 2-year program",
    imageUrl: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
  };

  return <HospitalityCourseTemplate courseData={courseData} />;
};

export default DiplomaFrontOffice;