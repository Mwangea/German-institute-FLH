import { Users, Clock, Award, BookOpen } from "lucide-react";
import HospitalityCourseTemplate from "./HospitalityCourseTemplate";

const ShortOpera = () => {
  const courseData = {
    title: "Hotel Information Systems (Opera)",
    type: "Short Course",
    duration: "2 months",
    price: "KES 30,000 total",
    fullDescription: "This specialized course provides comprehensive training in Opera Property Management System (PMS), the industry-leading hotel management software. Students will learn to navigate and utilize Opera PMS effectively for managing reservations, guest check-in/out, room assignments, and reporting functions. This hands-on training prepares participants for immediate employment in modern hotel operations.",
    outcomes: [
      "Master Opera PMS navigation and interface",
      "Handle reservation management and booking processes",
      "Execute guest check-in and check-out procedures",
      "Manage room assignments and housekeeping status",
      "Generate and analyze operational reports",
      "Implement revenue management strategies"
    ],
    goals: [
      "To provide expert training in Opera PMS operations",
      "To develop proficiency in hotel management systems",
      "To enhance operational efficiency in hotel management",
      "To prepare students for modern hotel technology roles",
      "To bridge the gap between traditional and digital hospitality operations"
    ],
    certification: "Certificate in Hotel Information Systems (Opera)",
    targetAudience: "This course is designed for hospitality professionals seeking to enhance their technical skills, front office staff transitioning to digital systems, and individuals aspiring to work in modern hotel operations.",
    keyFeatures: [
      {
        icon: <Clock className="w-6 h-6 text-primary-600" />,
        title: "Duration",
        description: "2 months of intensive training"
      },
      {
        icon: <Award className="w-6 h-6 text-primary-600" />,
        title: "Certification",
        description: "Certificate in Hotel Information Systems (Opera)"
      },
      {
        icon: <Users className="w-6 h-6 text-primary-600" />,
        title: "Class Size",
        description: "Small groups for hands-on practice"
      },
      {
        icon: <BookOpen className="w-6 h-6 text-primary-600" />,
        title: "Learning Method",
        description: "Practical training on Opera PMS software"
      }
    ],
    careerOpportunities: [
      "Front Office Systems Specialist",
      "Hotel Operations Manager",
      "Reservation Systems Coordinator",
      "Revenue Management Analyst",
      "Hotel Technology Consultant",
      "Property Management System Trainer"
    ],
    modules: [
      "Opera PMS Navigation and Interface",
      "Reservation Management",
      "Guest Check-in/out Procedures",
      "Room Assignment and Management",
      "Reporting Functions and Analysis",
      "Revenue Management Tools"
    ],
    internship: "Optional 2-week practical training available",
    imageUrl: "/opera1.jpg"
  };

  return <HospitalityCourseTemplate courseData={courseData} />;
};

export default ShortOpera; 