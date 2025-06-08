import ItalianLevelTemplate from "./ItalyLevelTemplate";
import {
  MessageSquare,
  Clock,
  Calendar,
  ShoppingBag,
  MapPin,
  Home,
  Users2,
} from "lucide-react";

const ItalianLevelA1 = () => {
  const levelData = {
    level: "A1",
    title: "Introduction to Italian Language",
    tagline: "Build foundational skills in Italian with a structured, internationally recognized approach",
    overview: "This beginner-level Italian course is ideal for learners with little to no prior experience in the language. It provides a comprehensive introduction to the fundamentals of Italian and builds essential skills in listening, speaking, reading, and writing. The course follows the standards of the Common European Framework of Reference for Languages (CEFR), ensuring a structured and internationally recognized approach to language acquisition.",
    format: "By the end of the course, you will be able to understand and use everyday expressions and simple phrases to meet basic communication needs. You'll gain the ability to introduce yourself and others, ask and respond to personal questions, and interact in routine conversations—provided your conversation partner speaks slowly and clearly.",
    objectives: [
      "Master everyday interactions and basic communication",
      "Learn numbers, time, and dates for daily use",
      "Develop vocabulary for shopping and dining",
      "Build confidence in basic conversations",
      "Understand and use simple phrases",
      "Write basic sentences about familiar topics"
    ],
    outcomes: [
      "Communicate in simple everyday situations",
      "Introduce yourself and others in Italian",
      "Ask and answer basic personal questions",
      "Handle simple shopping and dining scenarios",
      "Give and understand basic directions",
      "Describe your home, family, and daily routines"
    ],
    learningAreas: [
      {
        title: "Basic Communication",
        description: "Master essential greetings, introductions, and everyday expressions in Italian.",
        icon: MessageSquare,
      },
      {
        title: "Time and Dates",
        description: "Learn to tell time, discuss schedules, and understand dates in Italian.",
        icon: Clock,
      },
      {
        title: "Daily Life",
        description: "Develop vocabulary and phrases for common daily activities and routines.",
        icon: Calendar,
      },
      {
        title: "Shopping and Services",
        description: "Learn essential phrases for shopping, ordering food, and using basic services.",
        icon: ShoppingBag,
      },
      {
        title: "Navigation",
        description: "Master basic directions and location-based vocabulary in Italian.",
        icon: MapPin,
      },
      {
        title: "Home and Family",
        description: "Learn vocabulary and phrases related to home life and family relationships.",
        icon: Home,
      },
      {
        title: "Social Interaction",
        description: "Develop skills for basic social interactions and making new acquaintances.",
        icon: Users2,
      },
    ],
    assessment: "Your progress will be measured through regular vocabulary quizzes, listening comprehension tasks, oral presentations, and written assignments. The course concludes with a final oral and written exam to evaluate overall proficiency.",
    resources: [
      "Nuovo Espresso 1 textbook and workbook",
      "Audio materials and online interactive resources",
      "Flashcards and digital tools for practice",
      "Supplementary worksheets and handouts",
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
    targetAudience: "Ideal for learners with little to no prior experience in Italian",
    duration: "2 months",
    certification: "Italian A1 Proficiency Certificate",
    focusAreas: "Basic Communication • Daily Life • Travel • Family",
    price: "Kes 20,000",
    ctaText: "Join us to discover the richness of Italian language and culture. Whether you're preparing for travel, academic study, or personal growth, this course will provide the foundational tools to start speaking Italian with confidence.",
  };

  return <ItalianLevelTemplate levelData={levelData} />;
};

export default ItalianLevelA1;
