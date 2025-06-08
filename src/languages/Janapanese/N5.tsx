import JapaneseLevelTemplate from "./JapaneseLevelTemplate";
import {
  MessageSquare,
  Clock,
  Calendar,
  ShoppingBag,
  MapPin,
  Home,
  Users2,
  BookOpen,
  Mic,
  PenTool,
} from "lucide-react";

const JapaneseLevelN5 = () => {
  const levelData = {
    level: "N5",
    title: "Introduction to Japanese Language",
    tagline: "Build foundational skills in Japanese with a structured, JLPT-aligned approach",
    overview: "The N5 Japanese course is designed for complete beginners, introducing fundamental vocabulary, grammar, and communication skills. This level focuses on basic Japanese language structures, essential kanji, and everyday expressions needed for simple interactions in Japanese.",
    format: "By the end of the course, students will be able to understand and use basic Japanese expressions and phrases. They will learn to read and write hiragana and katakana, understand basic kanji, and communicate in simple everyday situations. The course prepares students for the JLPT N5 examination.",
    objectives: [
      "Master hiragana and katakana writing systems",
      "Learn approximately 100 basic kanji characters",
      "Understand basic grammar structures and sentence patterns",
      "Develop essential vocabulary for daily life",
      "Build confidence in basic conversations",
      "Prepare for JLPT N5 examination"
    ],
    outcomes: [
      "Read and write hiragana and katakana fluently",
      "Recognize and use basic kanji characters",
      "Understand and use basic Japanese grammar",
      "Communicate in simple everyday situations",
      "Understand basic written materials",
      "Pass the JLPT N5 examination"
    ],
    learningAreas: [
      {
        title: "Writing Systems",
        description: "Master hiragana and katakana, and learn basic kanji characters essential for N5 level.",
        icon: PenTool,
      },
      {
        title: "Basic Grammar",
        description: "Learn fundamental sentence structures, particles, and verb conjugations.",
        icon: BookOpen,
      },
      {
        title: "Daily Communication",
        description: "Develop essential vocabulary and phrases for everyday situations.",
        icon: MessageSquare,
      },
      {
        title: "Time and Dates",
        description: "Learn to tell time, discuss schedules, and understand dates in Japanese.",
        icon: Clock,
      },
      {
        title: "Daily Life",
        description: "Master vocabulary and phrases for common daily activities and routines.",
        icon: Calendar,
      },
      {
        title: "Shopping and Services",
        description: "Learn essential phrases for shopping, ordering food, and using basic services.",
        icon: ShoppingBag,
      },
      {
        title: "Navigation",
        description: "Master basic directions and location-based vocabulary in Japanese.",
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
      {
        title: "Speaking Practice",
        description: "Build confidence in basic conversation through role-plays and dialogues.",
        icon: Mic,
      },
    ],
    assessment: "Progress is evaluated through regular vocabulary quizzes, kanji tests, listening comprehension tasks, and practice JLPT N5 examinations. The course includes continuous assessment and a final mock JLPT N5 test to evaluate overall proficiency.",
    resources: [
      "Genki I textbook and workbook",
      "JLPT N5 preparation materials",
      "Audio materials and online interactive resources",
      "Kanji practice worksheets and flashcards",
    ],
    studyPlans: [
      {
        name: "Regular Plan",
        duration: "3 months",
        hours: "1 hour per day",
      },
      {
        name: "Intensive Plan",
        duration: "3 months",
        hours: "2 hours per day",
      },
      {
        name: "Super-Intensive Plan",
        duration: "3 months",
        hours: "3 hours per day",
      },
      {
        name: "Accelerated Plan",
        duration: "3 months",
        hours: "6 hours per day",
      },
    ],
    targetAudience: "Complete beginners with no prior knowledge of Japanese",
    duration: "3 months",
    certification: "JLPT N5 Certificate",
    focusAreas: "Basic Japanese • Writing Systems • Daily Communication",
    price: "Kes 30,000",
    ctaText: "Start your Japanese language journey. Build a strong foundation in Japanese and prepare for the JLPT N5 examination.",
  };

  return <JapaneseLevelTemplate levelData={levelData} />;
};

export default JapaneseLevelN5;
