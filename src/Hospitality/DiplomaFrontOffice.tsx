import { Clock, Award, BookOpen, UserCheck, CreditCard, Bell } from 'lucide-react';
import HospitalityCourseTemplate from './HospitalityCourseTemplate';

const DiplomaFrontOffice = () => {
  const courseData = {
    title: "Diploma in Front Office Operations & Administration",
    type: 'Diploma' as const,
    duration: "TWO YEARS",
    price: "Contact for pricing",
    fullDescription: `
      International Institute of Foreign Languages and Hospitality  Management is committed to sustaining its mandate of training qualified professionals for the hospitality and tourism industry.
      
      This two years' programme provides students with professional skills on how to operate at the front office in various types of hotels. It entails both practical and theoretical training coupled with six months' external industrial attachment in hotels. 
      
      The driving philosophy behind this programme is to supply the labour market with a well-grounded employee who will enter the market at operational level and be able to rise through promotional ranks to the level of a supervisor at section level. The diploma training will also enable the graduate to advance in studies through to degree level.
    `,
    outcomes: [
      "Work independently as Front Desk Agents, Cashiers, and Receptionists",
      "Perform effectively as Reservation Clerks and food and beverage control clerks",
      "With experience, work as Front office supervisors",
      "Handle roles as Revenue controllers and night auditors",
      "Serve as Guests relation officers and credit controllers"
    ],
    goals: [
      "To train competent young men and women to develop their career in the Hospitality industry"
    ],
    certification: "Diploma in Front Office Operations & Administration",
    targetAudience: "Individuals seeking professional skills for front office operations in various types of hotels",
    keyFeatures: [
      {
        icon: <Clock className="w-8 h-8 text-primary-600" />,
        title: "Duration",
        description: "Two years (including 6 months industrial attachment)"
      },
      {
        icon: <Award className="w-8 h-8 text-primary-600" />,
        title: "Certification",
        description: "Diploma in Front Office Operations & Administration"
      },
      {
        icon: <BookOpen className="w-8 h-8 text-primary-600" />,
        title: "Training Approach",
        description: "Combination of practical and theoretical training"
      },
      {
        icon: <UserCheck className="w-8 h-8 text-primary-600" />,
        title: "Career Entry",
        description: "Operational level with potential to supervisory roles"
      },
      {
        icon: <CreditCard className="w-8 h-8 text-primary-600" />,
        title: "Practical Training",
        description: "At Utalii Hotel facilities"
      },
      {
        icon: <Bell className="w-8 h-8 text-primary-600" />,
        title: "Progression",
        description: "Pathway to degree-level studies"
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
    internship: "Six months' external industrial attachment in hotels",
    imageUrl: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
  };

  return <HospitalityCourseTemplate courseData={courseData} />;
};

export default DiplomaFrontOffice;