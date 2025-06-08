import FrenchLevelTemplate from "./FrenchLevelTemplate";
import {
  Globe,
  Briefcase,
  BookOpen,
  Mic,
  PenTool,
  Brain,
  Sparkles,
} from "lucide-react";

const FrenchLevelC2 = () => {
  const levelData = {
    level: "C2",
    title: "Mastery French",
    tagline: "Achieve native-like proficiency and cultural mastery",
    overview: "This mastery-level French course is designed for highly advanced speakers who want to achieve native-like proficiency. You'll perfect your command of the language, master subtle nuances, and develop an exceptional understanding of French culture and society. This level represents the highest standard of language proficiency.",
    format: "By the end of this course, you'll be able to understand with ease virtually everything heard or read. You'll summarize information from different spoken and written sources, reconstructing arguments and accounts in a coherent presentation. You'll express yourself spontaneously, very fluently and precisely, differentiating finer shades of meaning even in the most complex situations.",
    objectives: [
      "Achieve native-like fluency and accuracy",
      "Master subtle linguistic nuances and cultural references",
      "Develop exceptional writing and speaking skills",
      "Perfect professional and academic communication",
      "Master specialized terminology across various fields",
      "Develop deep cultural and literary understanding"
    ],
    outcomes: [
      "Understand and produce complex language with native-like precision",
      "Master subtle nuances and implicit cultural references",
      "Excel in professional and academic contexts",
      "Create sophisticated, nuanced texts in any style",
      "Lead complex discussions and negotiations",
      "Navigate any situation with cultural sensitivity"
    ],
    learningAreas: [
      {
        title: "Cultural Mastery",
        description: "Achieve deep understanding of French culture, literature, and contemporary society.",
        icon: Globe,
      },
      {
        title: "Executive Excellence",
        description: "Master high-level professional communication and leadership in French contexts.",
        icon: Briefcase,
      },
      {
        title: "Literary Expertise",
        description: "Develop exceptional skills in analyzing and creating sophisticated French literature.",
        icon: BookOpen,
      },
      {
        title: "Research Mastery",
        description: "Conduct advanced research and produce exceptional academic work in French.",
        icon: Brain,
      },
      {
        title: "Elite Communication",
        description: "Master sophisticated presentation and public speaking at the highest level.",
        icon: Mic,
      },
      {
        title: "Advanced Writing",
        description: "Create exceptional texts across all styles and purposes with native-like precision.",
        icon: PenTool,
      },
      {
        title: "Professional Leadership",
        description: "Excel in leading complex professional and academic discussions in French.",
        icon: Sparkles,
      },
    ],
    assessment: "Progress is evaluated through advanced research projects, professional presentations, academic papers, and comprehensive examinations. The course includes regular feedback sessions and a final evaluation of all language skills at a mastery level.",
    resources: [
      "Advanced French literature and academic texts",
      "Professional and research materials",
      "Authentic French media and cultural resources",
      "Specialized online learning platform",
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
    targetAudience: "Students who have completed C1 or have near-native French proficiency",
    duration: "3 months",
    certification: "French C2 Mastery Certificate",
    focusAreas: "Native-like Proficiency • Cultural Mastery • Professional Excellence",
    price: "Kes 30,000",
    ctaText: "Achieve the highest level of French proficiency. Master the language with native-like precision and cultural expertise.",
  };

  return <FrenchLevelTemplate levelData={levelData} />;
};

export default FrenchLevelC2;
