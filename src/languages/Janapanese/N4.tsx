import JapaneseLevelTemplate from "./JapaneseLevelTemplate";
import {
  MessageSquare,
  Calendar,
  ShoppingBag,
  MapPin,

  Users2,
  BookOpen,
  Mic,
  PenTool,
  Globe,
  Newspaper,
} from "lucide-react";

const JapaneseLevelN4 = () => {
  const levelData = {
    level: "N4",
    title: "Elementary Japanese",
    tagline: "Advance your Japanese skills and prepare for JLPT N4",
    overview: "The N4 Japanese course builds upon N5 knowledge, focusing on more complex grammar structures, additional kanji, and enhanced communication skills. This level prepares students for everyday situations in Japan and provides a solid foundation for intermediate Japanese study.",
    format: "By the end of the course, students will be able to understand and use more complex Japanese expressions and grammar patterns. They will expand their kanji knowledge, improve reading comprehension, and develop more natural conversation skills. The course prepares students for the JLPT N4 examination.",
    objectives: [
      "Master approximately 300 kanji characters",
      "Understand intermediate grammar structures",
      "Develop more sophisticated vocabulary",
      "Improve reading and listening comprehension",
      "Enhance conversational abilities",
      "Prepare for JLPT N4 examination"
    ],
    outcomes: [
      "Read and understand basic Japanese texts",
      "Communicate in various everyday situations",
      "Use intermediate grammar patterns correctly",
      "Understand and use approximately 300 kanji",
      "Comprehend basic Japanese media",
      "Pass the JLPT N4 examination"
    ],
    learningAreas: [
      {
        title: "Intermediate Grammar",
        description: "Master more complex sentence structures and grammar patterns essential for N4 level.",
        icon: BookOpen,
      },
      {
        title: "Kanji Expansion",
        description: "Learn approximately 300 kanji characters and their compounds.",
        icon: PenTool,
      },
      {
        title: "Enhanced Communication",
        description: "Develop more sophisticated conversation skills for various situations.",
        icon: MessageSquare,
      },
      {
        title: "Reading Comprehension",
        description: "Improve ability to read and understand basic Japanese texts and materials.",
        icon: Newspaper,
      },
      {
        title: "Cultural Understanding",
        description: "Learn about Japanese customs, traditions, and social norms.",
        icon: Globe,
      },
      {
        title: "Daily Life Skills",
        description: "Master vocabulary and expressions for more complex daily situations.",
        icon: Calendar,
      },
      {
        title: "Shopping and Services",
        description: "Enhance ability to handle various shopping and service situations.",
        icon: ShoppingBag,
      },
      {
        title: "Travel and Navigation",
        description: "Develop skills for more complex travel and navigation scenarios.",
        icon: MapPin,
      },
      {
        title: "Social Interaction",
        description: "Build confidence in more complex social situations and conversations.",
        icon: Users2,
      },
      {
        title: "Speaking Practice",
        description: "Improve pronunciation and natural conversation flow through practice.",
        icon: Mic,
      },
    ],
    assessment: "Progress is evaluated through regular vocabulary quizzes, kanji tests, grammar exercises, and practice JLPT N4 examinations. The course includes continuous assessment and a final mock JLPT N4 test to evaluate overall proficiency.",
    resources: [
      "Genki II textbook and workbook",
      "JLPT N4 preparation materials",
      "Intermediate Japanese reading materials",
      "Audio and video resources for listening practice",
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
    targetAudience: "Students who have completed N5 or have equivalent knowledge",
    duration: "1-6 months (flexible)",
    certification: "JLPT N4 Certificate",
    focusAreas: "Intermediate Japanese • Enhanced Communication • Cultural Understanding",
    price: "Kes 20,000",
    ctaText: "Take your Japanese skills to the next level. Build on your foundation and prepare for the JLPT N4 examination.",
  };

  return <JapaneseLevelTemplate levelData={levelData} />;
};

export default JapaneseLevelN4;
