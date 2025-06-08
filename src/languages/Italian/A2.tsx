import ItalianLevelTemplate from "./ItalyLevelTemplate";
import {
  MessageSquare,
  Clock,
  Calendar,
  ShoppingBag,
  MapPin,
  Home,
  Users2,
  BookOpen,
} from "lucide-react";

const ItalianLevelA2 = () => {
  const levelData = {
    level: "A2",
    title: "Elementary Italian",
    tagline: "Strengthen your foundation and expand your Italian communication skills",
    overview: "This elementary Italian course builds upon your basic knowledge, helping you develop more confidence in everyday communication. You'll expand your vocabulary, improve your grammar, and enhance your ability to handle common situations in Italian-speaking environments.",
    format: "By the end of this course, you'll be able to communicate in simple and routine tasks requiring a simple and direct exchange of information on familiar and routine matters. You'll describe aspects of your background, immediate environment, and matters in areas of immediate need.",
    objectives: [
      "Expand vocabulary for everyday situations",
      "Improve grammar accuracy in basic structures",
      "Enhance listening comprehension skills",
      "Develop more natural conversation flow",
      "Build confidence in written communication",
      "Understand and use common expressions"
    ],
    outcomes: [
      "Handle most travel situations in Italian-speaking areas",
      "Describe experiences and events in simple terms",
      "Write short, simple notes and messages",
      "Understand the main points of clear standard input",
      "Communicate in simple and routine tasks",
      "Describe your background and immediate environment"
    ],
    learningAreas: [
      {
        title: "Enhanced Communication",
        description: "Develop more sophisticated conversation skills and expand your vocabulary for daily interactions.",
        icon: MessageSquare,
      },
      {
        title: "Time Management",
        description: "Learn to discuss schedules, make appointments, and manage time-related activities.",
        icon: Clock,
      },
      {
        title: "Daily Routines",
        description: "Master vocabulary and phrases for describing daily activities and personal routines.",
        icon: Calendar,
      },
      {
        title: "Shopping and Services",
        description: "Enhance your ability to handle shopping situations and use various services.",
        icon: ShoppingBag,
      },
      {
        title: "Travel and Navigation",
        description: "Develop skills for navigating cities and handling travel-related situations.",
        icon: MapPin,
      },
      {
        title: "Home and Community",
        description: "Learn to describe your living situation and interact with your community.",
        icon: Home,
      },
      {
        title: "Social Connections",
        description: "Build stronger social interaction skills and develop meaningful relationships.",
        icon: Users2,
      },
      {
        title: "Reading and Writing",
        description: "Improve your ability to read simple texts and write short messages.",
        icon: BookOpen,
      },
    ],
    assessment: "Progress is evaluated through regular vocabulary quizzes, listening comprehension tasks, oral presentations, and written assignments. The course includes continuous assessment and a final examination to evaluate overall proficiency.",
    resources: [
      "Nuovo Espresso 2 textbook and workbook",
      "Interactive online exercises and activities",
      "Authentic Italian materials and videos",
      "Supplementary grammar and vocabulary exercises",
    ],
    studyPlans: [
      {
        name: "Regular Plan",
        duration: "2 months",
        hours: "1 hour per day",
      },
      {
        name: "Intensive Plan",
        duration: "2 months",
        hours: "2 hours per day",
      },
      {
        name: "Super-Intensive Plan",
        duration: "2 months",
        hours: "3 hours per day",
      },
      {
        name: "Accelerated Plan",
        duration: "2 months",
        hours: "6 hours per day",
      },
    ],
    targetAudience: "Students who have completed A1 or have basic Italian knowledge",
    duration: "2 months",
    certification: "Italian A2 Proficiency Certificate",
    focusAreas: "Enhanced Communication • Daily Life • Travel • Social Skills",
    price: "20,000",
    ctaText: "Take your Italian skills to the next level. Build confidence in everyday communication and prepare for more advanced language learning.",
  };

  return <ItalianLevelTemplate levelData={levelData} />;
};

export default ItalianLevelA2;
