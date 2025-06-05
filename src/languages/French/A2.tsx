import FrenchLevelTemplate from "./FrenchLevelTemplate";
import {
  MessageSquare,
  Clock,
  Calendar,
  ShoppingBag,
  MapPin,
  Home,
  Users2,
} from "lucide-react";

const FrenchLevelA2 = () => {
  const levelData = {
    level: "A2",
    title: "Elementary French",
    tagline: "Strengthen your foundation and expand your French communication skills",
    overview: "This elementary French course builds upon your basic knowledge, helping you develop more confidence in everyday communication. You'll expand your vocabulary, improve your grammar, and enhance your ability to handle common situations in French-speaking environments.",
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
      "Handle most travel situations in French-speaking areas",
      "Describe experiences and events in simple terms",
      "Write short, simple notes and messages",
      "Understand the main points of clear standard input",
      "Communicate in simple and routine tasks",
      "Describe your background and immediate environment"
    ],
    learningAreas: [
      {
        title: "Enhanced Communication",
        description: "Develop more natural conversations and handle a wider range of everyday situations with increased confidence and fluency.",
        icon: MessageSquare,
      },
      {
        title: "Advanced Time Management",
        description: "Master complex time expressions, schedules, and planning activities with more detailed vocabulary and structures.",
        icon: Clock,
      },
      {
        title: "Extended Daily Life",
        description: "Discuss daily routines, hobbies, and personal interests with more detail and natural expression.",
        icon: Calendar,
      },
      {
        title: "Shopping and Services",
        description: "Handle more complex shopping situations, understand prices and discounts, and communicate effectively in various service contexts.",
        icon: ShoppingBag,
      },
      {
        title: "Travel and Transportation",
        description: "Navigate more complex travel situations, understand transportation schedules, and handle travel-related problems.",
        icon: MapPin,
      },
      {
        title: "Social Interactions",
        description: "Engage in more detailed conversations about family, friends, and social activities with improved fluency.",
        icon: Users2,
      },
      {
        title: "Home and Community",
        description: "Describe your living situation, neighborhood, and local community with more detailed vocabulary and structures.",
        icon: Home,
      },
    ],
    assessment: "Progress is evaluated through regular quizzes, role-play exercises, written assignments, and oral presentations. The course concludes with a comprehensive final assessment covering all four language skills.",
    resources: [
      "Cosmopolite 2 textbook and workbook",
      "Interactive online exercises and activities",
      "Authentic French materials and videos",
      "Supplementary grammar and vocabulary exercises",
    ],
    studyPlans: [
      {
        name: "Regular Plan",
        duration: "6 months",
        hours: "1 hour per day",
      },
      {
        name: "Intensive Plan",
        duration: "3 months",
        hours: "2 hours per day",
      },
      {
        name: "Super-Intensive Plan",
        duration: "2 months",
        hours: "3 hours per day",
      },
      {
        name: "Accelerated Plan",
        duration: "1 month",
        hours: "6 hours per day",
      },
    ],
    targetAudience: "Students who have completed A1 or have basic French knowledge",
    duration: "1-6 months (flexible)",
    certification: "French A2 Proficiency Certificate",
    focusAreas: "Enhanced Communication • Daily Life • Travel • Social Skills",
    price: "Kes 25,000",
    ctaText: "Take your French skills to the next level. Build confidence in everyday communication and prepare for more advanced language learning.",
  };

  return <FrenchLevelTemplate levelData={levelData} />;
};

export default FrenchLevelA2;
