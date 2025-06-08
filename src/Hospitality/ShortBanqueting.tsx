import { Users, Clock, Award, BookOpen } from "lucide-react";
import HospitalityCourseTemplate from "./HospitalityCourseTemplate";

const ShortBanqueting = () => {
  const courseData = {
    title: "Banqueting & Events Techniques Course",
    type: "Short Course",
    duration: "3 months",
    price: "KES 40,000 total",
    fullDescription: "This comprehensive course focuses on planning and managing banquets and events in hospitality venues. Students will learn event planning, room setup, service styles, logistics management, and client relations. The program combines practical skills with industry knowledge to prepare graduates for careers in event management and banqueting operations.",
    outcomes: [
      "Master event planning and coordination",
      "Develop room setup expertise",
      "Learn various service styles",
      "Execute logistics management",
      "Enhance client relations",
      "Implement event service standards"
    ],
    goals: [
      "To provide comprehensive training in banqueting and events",
      "To develop event planning and management skills",
      "To master service techniques for different events",
      "To enhance client relationship management",
      "To prepare students for event industry roles"
    ],
    certification: "Certificate in Banqueting & Events Techniques",
    targetAudience: "This course is designed for aspiring event planners, banqueting staff, hospitality professionals, and individuals interested in pursuing careers in event management.",
    keyFeatures: [
      {
        icon: <Clock className="w-6 h-6 text-primary-600" />,
        title: "Duration",
        description: "3 months of intensive training"
      },
      {
        icon: <Award className="w-6 h-6 text-primary-600" />,
        title: "Certification",
        description: "Certificate in Banqueting & Events Techniques"
      },
      {
        icon: <Users className="w-6 h-6 text-primary-600" />,
        title: "Class Size",
        description: "Small groups for hands-on practice"
      },
      {
        icon: <BookOpen className="w-6 h-6 text-primary-600" />,
        title: "Learning Method",
        description: "Practical training in event settings"
      }
    ],
    careerOpportunities: [
      "Event Planner",
      "Banquet Manager",
      "Events Coordinator",
      "Catering Manager",
      "Venue Manager",
      "Events Service Supervisor"
    ],
    modules: [
      "Event Planning",
      "Room Setup",
      "Service Styles",
      "Logistics Management",
      "Client Relations",
      "Event Operations"
    ],
    internship: "Optional 2-week practical training available",
    imageUrl: "/banquet1.jpg"
  };

  return <HospitalityCourseTemplate courseData={courseData} />;
};

export default ShortBanqueting; 