import { Clock, Award, BookOpen,  UserCheck, CreditCard, ArrowUpCircle } from 'lucide-react';
import HospitalityCourseTemplate from './HospitalityCourseTemplate';

const CertificateFrontOffice = () => {
  const courseData = {
    title: "Certificate in Front Office Operations & Administration",
    type: 'Certificate' as const,
    duration: "ONE YEAR",
    price: "Contact for pricing",
    fullDescription: `
      International Institute of Foreign Languages and Hospitality  Management is committed to sustaining its mandate of training qualified professionals for the hospitality and tourism industry.
      
      This one-year programme provides students with professional skills on how to operate at the front office in various types of hotels. It entails both practical and theoretical training coupled with three months' industrial attachment in hotels.
      
      The driving philosophy behind this programme is to supply the labour market with a well-grounded employee who will enter the market at operational level and be able to rise through promotional ranks to the level of a supervisor at section level. Certificate training will also enable the graduate to advance in studies through diploma and eventually degree level.
    `,
    outcomes: [
      "Work independently as Front Desk Agents, Cashiers, and Receptionists",
      "Perform effectively as Reservation Clerks and food and beverage control clerks",
      "Handle front office operations in various hotel types",
      "Apply both theoretical knowledge and practical skills",
      "Progress to supervisory roles with experience",
      "Continue studies at diploma and degree levels"
    ],
    goals: [
      "To train competent young men and women to develop their career in the Hospitality industry"
    ],
    certification: "Certificate in Front Office Operations & Administration",
    targetAudience: "Individuals seeking professional front office skills for immediate employment in the hospitality industry",
    keyFeatures: [
      {
        icon: <Clock className="w-8 h-8 text-primary-600" />,
        title: "Duration",
        description: "One year (including 3 months industrial attachment)"
      },
      {
        icon: <Award className="w-8 h-8 text-primary-600" />,
        title: "Certification",
        description: "Certificate in Front Office Operations & Administration"
      },
      {
        icon: <BookOpen className="w-8 h-8 text-primary-600" />,
        title: "Training Approach",
        description: "Combination of classroom and practical training"
      },
      {
        icon: <UserCheck className="w-8 h-8 text-primary-600" />,
        title: "Career Entry",
        description: "Operational level with potential for promotion"
      },
      {
        icon: <CreditCard className="w-8 h-8 text-primary-600" />,
        title: "Practical Training",
        description: "At Campus Training Reception Room and Utalii Hotel"
      },
      {
        icon: <ArrowUpCircle className="w-8 h-8 text-primary-600" />,
        title: "Progression",
        description: "Pathway to diploma and degree-level studies"
      }
    ],
    careerOpportunities: [
      "Front Desk Agents",
      "Cashiers",
      "Receptionists",
      "Reservation Clerks",
      "Food and Beverage Control Clerks",
      "Front Office Assistants",
      "Guest Service Agents",
      "Hotel Administrative Assistants"
    ],
    modules: [
      "Front Office Operations Fundamentals",
      "Guest Registration Procedures",
      "Reservation Systems",
      "Cash Handling and Accounting",
      "Telephone Operations",
      "Guest Service Standards",
      "Property Management Systems",
      "Communication Skills",
      "Industry Software Applications",
      "Front Office Administration"
    ],
    internship: "Three months' industrial attachment in partner hotels",
    imageUrl: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
  };

  return <HospitalityCourseTemplate courseData={courseData} />;
};

export default CertificateFrontOffice;