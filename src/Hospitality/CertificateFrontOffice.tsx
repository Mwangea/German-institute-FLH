import { Clock, Award,CreditCard, ArrowUpCircle, Calendar, DollarSign } from 'lucide-react';
import HospitalityCourseTemplate from './HospitalityCourseTemplate';

const CertificateFrontOffice = () => {
  const courseData = {
    title: "Certificate in Front Office Operations & Administration",
    type: 'Certificate' as const,
    duration: "1 year (4 semesters)",
    price: "KES 30,000 per semester",
    fullDescription: `
      This intensive one-year certificate program (4 semesters of 3 months each) provides essential skills for front office operations in various hospitality establishments. The curriculum combines classroom instruction with hands-on training, preparing students for immediate employment in the industry.
      
      Students will gain practical experience through our campus training facilities and industry attachments, developing the competencies needed to excel in front office roles with potential for career advancement to supervisory positions.
    `,
    outcomes: [
      "Perform all front office operations competently",
      "Handle guest registration and reservations professionally",
      "Manage cash transactions and basic accounting",
      "Operate property management systems effectively",
      "Deliver exceptional guest service",
      "Progress to higher qualifications in hospitality management"
    ],
    goals: [
      "Provide foundational front office skills for immediate employment",
      "Develop professional competencies for guest service roles",
      "Prepare students for career progression in hospitality",
      "Offer a pathway to advanced diploma studies"
    ],
    certification: "Certificate in Front Office Operations & Administration",
    targetAudience: "Individuals seeking entry-level front office skills for the hospitality industry",
    keyFeatures: [
      {
        icon: <Clock className="w-8 h-8 text-primary-600" />,
        title: "Duration",
        description: "1 year (4 semesters)"
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
        icon: <Award className="w-8 h-8 text-primary-600" />,
        title: "Certification",
        description: "Professional Certificate"
      },
      {
        icon: <CreditCard className="w-8 h-8 text-primary-600" />,
        title: "Practical Training",
        description: "Campus facilities & industry attachment"
      },
      {
        icon: <ArrowUpCircle className="w-8 h-8 text-primary-600" />,
        title: "Progression",
        description: "Pathway to diploma programs"
      }
    ],
    careerOpportunities: [
      "Front Desk Agents",
      "Hotel Receptionists",
      "Reservation Agents",
      "Guest Service Representatives",
      "Front Office Assistants",
      "Night Auditors",
      "Telephone Operators",
      "Hospitality Administrative Staff"
    ],
    modules: [
      "Introduction to Hospitality Industry",
      "Front Office Procedures",
      "Guest Relations Management",
      "Reservation Systems Operation",
      "Cashiering and Basic Accounting",
      "Property Management Software",
      "Telephone Etiquette",
      "Communication Skills",
      "Customer Service Excellence",
      "Industry Software Applications"
    ],
    internship: "Industry attachment integrated in final semester",
    imageUrl: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
  };

  return <HospitalityCourseTemplate courseData={courseData} />;
};

export default CertificateFrontOffice;