import FrenchLevelTemplate from "./FrenchLevelTemplate";
import {
  Globe,
  Briefcase,
  Newspaper,
  Users2,
  BookOpen,
  Mic,
  PenTool,
} from "lucide-react";

const FrenchLevelB1 = () => {
  const levelData = {
    level: "B1",
    title: "Intermediate French",
    tagline: "Develop independent language skills for work, study, and travel",
    overview: "This intermediate French course helps you develop more sophisticated language skills for professional and academic contexts. You'll learn to express opinions, handle complex situations, and engage in meaningful discussions on various topics. The course focuses on building fluency and accuracy while expanding your cultural understanding.",
    format: "By the end of this course, you'll be able to deal with most situations likely to arise while traveling in French-speaking areas. You'll produce simple connected text on familiar topics and describe experiences, events, dreams, hopes, and ambitions.",
    objectives: [
      "Master intermediate grammar structures",
      "Develop vocabulary for professional contexts",
      "Improve fluency in complex conversations",
      "Enhance writing skills for various purposes",
      "Build confidence in expressing opinions",
      "Understand main ideas in complex texts"
    ],
    outcomes: [
      "Handle most situations while traveling in French-speaking areas",
      "Write clear, detailed text on familiar topics",
      "Describe experiences and express opinions",
      "Understand the main points of complex texts",
      "Interact with native speakers with reasonable fluency",
      "Present clear, detailed descriptions on various topics"
    ],
    learningAreas: [
      {
        title: "Professional Communication",
        description: "Develop skills for workplace interactions, meetings, and professional correspondence in French.",
        icon: Briefcase,
      },
      {
        title: "Cultural Understanding",
        description: "Explore French culture, customs, and current events while improving language skills.",
        icon: Globe,
      },
      {
        title: "Media and News",
        description: "Understand and discuss news articles, TV programs, and current events in French.",
        icon: Newspaper,
      },
      {
        title: "Academic Skills",
        description: "Develop reading and writing skills necessary for academic contexts and research.",
        icon: BookOpen,
      },
      {
        title: "Public Speaking",
        description: "Build confidence in giving presentations and participating in group discussions.",
        icon: Mic,
      },
      {
        title: "Creative Writing",
        description: "Express yourself through various writing styles, from formal to creative.",
        icon: PenTool,
      },
      {
        title: "Social Dynamics",
        description: "Navigate complex social situations and understand cultural nuances in communication.",
        icon: Users2,
      },
    ],
    assessment: "Progress is evaluated through project-based assessments, presentations, written reports, and oral examinations. The course includes regular feedback sessions and a comprehensive final evaluation.",
    resources: [
      "Cosmopolite 3 textbook and workbook",
      "Authentic French media materials",
      "Professional and academic texts",
      "Online learning platform with interactive exercises",
    ],
    studyPlans: [
      {
        name: "Regular Plan",
        duration: "3 months",
        hours: "1 hour per day",
      },
      {
        name: "Intensive Plan",
        duration: "2 months",
        hours: "2 hours per day",
      },
      {
        name: "Super-Intensive Plan",
        duration: "1.5 months",
        hours: "3 hours per day",
      },
      {
        name: "Accelerated Plan",
        duration: "1 month",
        hours: "6 hours per day",
      },
    ],
    targetAudience: "Students who have completed A2 or have intermediate French knowledge",
    duration: "3 months",
    certification: "French B1 Proficiency Certificate",
    focusAreas: "Professional Skills • Cultural Understanding • Academic French",
    price: "Kes 30,000",
    ctaText: "Advance your French skills for professional and academic success. Develop the confidence to express yourself fluently in any situation.",
  };

  return <FrenchLevelTemplate levelData={levelData} />;
};

export default FrenchLevelB1;
