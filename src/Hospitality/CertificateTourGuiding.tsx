import { Users, Clock, Award, BookOpen } from "lucide-react";
import HospitalityCourseTemplate from "./HospitalityCourseTemplate";

const CertificateTourGuiding = () => {
  const courseData = {
    title: "Certificate in Tour Guiding and Administration",
    type: "Certificate",
    duration: "1 year",
    price: "KES 30,000 per semester (4 semesters total)",
    fullDescription: "This one-year program focuses on tour guiding techniques and administrative skills in the tourism sector. Students learn tour commentary, site interpretation, group management, first aid, tour planning, and cultural heritage.",
    outcomes: [
      "Master tour commentary techniques",
      "Develop site interpretation skills",
      "Learn group management",
      "Acquire first aid knowledge",
      "Plan and execute tours",
      "Understand cultural heritage"
    ],
    goals: [
      "To provide comprehensive training in tour guiding",
      "To develop professional commentary skills",
      "To enhance group management abilities",
      "To ensure safety through first aid training",
      "To prepare students for tour guiding roles"
    ],
    certification: "Certificate in Tour Guiding and Administration",
    targetAudience: "This program is designed for aspiring tour guides, tourism professionals, and individuals seeking to enter the tour guiding industry.",
    keyFeatures: [
      {
        icon: <Clock className="w-6 h-6 text-primary-600" />,
        title: "Duration",
        description: "1 year (4 semesters)"
      },
      {
        icon: <Award className="w-6 h-6 text-primary-600" />,
        title: "Certification",
        description: "Certificate in Tour Guiding and Administration"
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
      "Tour Guide",
      "Tour Coordinator",
      "Site Interpreter",
      "Tour Manager",
      "Cultural Heritage Guide",
      "Tourism Consultant"
    ],
    modules: [
      "Tour Commentary",
      "Site Interpretation",
      "Group Management",
      "First Aid",
      "Tour Planning",
      "Cultural Heritage"
    ],
    internship: "3-month industrial attachment included",
    imageUrl: "/tourguide1.jpg"
  };

  return <HospitalityCourseTemplate courseData={courseData} />;
};

export default CertificateTourGuiding; 