import { Clock, Award, BookOpen, Users, MapPin, Calendar } from 'lucide-react';
import HospitalityCourseTemplate from './HospitalityCourseTemplate';

const DiplomaHospitalityManagement = () => {
    const courseData = {
        title: "Diploma in Hospitality Management",
        type: 'Diploma' as const,
        duration: "2 years (8 semesters)",
        price: "KES 30,000 per semester",
        fullDescription: "This two-year program prepares learners for departmental manager roles by equipping them with operational and managerial skills. The curriculum includes foreign language training to prepare students for the global hospitality industry. The program consists of 8 semesters (3 months each) with practical training components.",
        outcomes: [
            "To describe the hospitality industry and nature of hospitality product",
            "To distinguish the management reports used in hospitality operations",
            "To examine the hospitality and tourism marketing strategies",
            "To evaluate the various hospitality facility designs",
            "To plan and execute a Gastronomy event",
            "To integrate leisure and recreational activities for enriched guest experience",
            "To describe importance of Human Resource management in hospitality industry",
            "To evaluate hotel information systems"
        ],
        goals: [
            "Introduction to the hospitality and tourism industry",
            "Report writing for managers",
            "Hospitality and tourism marketing",
            "Research methodology and corporate planning",
            "Food hygiene and safety",
            "Rooms Division Management",
            "Food & Beverage Service Management",
            "Hotel Information Systems",
            "Cost control",
            "Menu planning and costing"
        ],
        certification: "Diploma in Hospitality Management",
        targetAudience: "Anyone interested in working as a departmental head and could progress to management.",
        keyFeatures: [
            {
                icon: <Clock className="w-8 h-8 text-primary-600" />,
                title: "Duration",
                description: "2 years (8 semesters)"
            },
            {
                icon: <Award className="w-8 h-8 text-primary-600" />,
                title: "Certification",
                description: "Diploma in Hospitality Management"
            },
            {
                icon: <BookOpen className="w-8 h-8 text-primary-600" />,
                title: "Study Mode",
                description: "Full-time program"
            },
            {
                icon: <Users className="w-8 h-8 text-primary-600" />,
                title: "Target Group",
                description: "Future departmental managers"
            },
            {
                icon: <MapPin className="w-8 h-8 text-primary-600" />,
                title: "Language",
                description: "Includes foreign language training"
            },
            {
                icon: <Calendar className="w-8 h-8 text-primary-600" />,
                title: "Program Structure",
                description: "8 semesters (3 months each)"
            }
        ],
        careerOpportunities: [
            "Hotels as supervisors or departmental managers",
            "General manager positions",
            "Catering and hospitality establishments",
            "Hospitals with catering facilities",
            "Schools with catering facilities",
            "Apartments and other accommodation facilities"
        ],
        modules: [
            "Hospitality Industry Overview",
            "Management Reporting",
            "Hospitality Marketing",
            "Facility Design Evaluation",
            "Gastronomy Event Planning",
            "Leisure and Recreational Activities",
            "Human Resource Management",
            "Hotel Information Systems"
        ],
        internship: "Practical training component included throughout the program",
        imageUrl: "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg"
    };

    return <HospitalityCourseTemplate courseData={courseData} />;
};

export default DiplomaHospitalityManagement;