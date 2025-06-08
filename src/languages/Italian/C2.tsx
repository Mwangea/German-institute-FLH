import ItalianLevelTemplate from "./ItalyLevelTemplate";
import {
  Globe,
  Briefcase,
  BookOpen,
  Mic,
  PenTool,
  Award,
  Brain,
} from "lucide-react";

const ItalianLevelC2 = () => {
  const levelData = {
    level: "C2",
    title: "Mastery Italian",
    tagline: "Achieve native-like proficiency and cultural mastery",
    overview: "This mastery-level Italian course is designed for those who want to achieve the highest level of language proficiency. You'll develop native-like fluency, master the most subtle nuances of the language, and gain deep cultural understanding. This course prepares you for the most demanding academic, professional, and cultural contexts.",
    format: "By the end of this course, you'll be able to understand with ease virtually everything heard or read. You'll summarize information from different spoken and written sources, reconstructing arguments and accounts in a coherent presentation. You'll express yourself spontaneously, very fluently and precisely, differentiating finer shades of meaning even in the most complex situations.",
    objectives: [
      "Achieve native-like fluency and accuracy",
      "Master the most subtle nuances of Italian",
      "Develop expert-level cultural understanding",
      "Excel in academic and professional contexts",
      "Create sophisticated and nuanced content",
      "Lead complex discussions and negotiations"
    ],
    outcomes: [
      "Understand and analyze any form of written or spoken Italian",
      "Express yourself spontaneously and precisely",
      "Create sophisticated, nuanced texts on any subject",
      "Navigate complex cultural and professional situations with ease",
      "Lead high-level discussions and negotiations",
      "Achieve cultural and linguistic mastery"
    ],
    learningAreas: [
      {
        title: "Cultural Mastery",
        description: "Develop deep understanding of Italian culture, history, and contemporary society.",
        icon: Globe,
      },
      {
        title: "Professional Excellence",
        description: "Master high-level professional communication and leadership in Italian.",
        icon: Briefcase,
      },
      {
        title: "Literary Expertise",
        description: "Analyze and create sophisticated literary works in Italian.",
        icon: BookOpen,
      },
      {
        title: "Academic Leadership",
        description: "Conduct advanced research and lead academic discussions in Italian.",
        icon: Brain,
      },
      {
        title: "Masterful Communication",
        description: "Develop expert-level presentation and public speaking skills.",
        icon: Mic,
      },
      {
        title: "Creative Writing",
        description: "Create sophisticated, nuanced texts for various purposes.",
        icon: PenTool,
      },
      {
        title: "Cultural Leadership",
        description: "Lead complex cultural discussions and professional interactions.",
        icon: Award,
      },
    ],
    assessment: "Progress is evaluated through advanced research projects, professional presentations, academic papers, and comprehensive examinations. The course includes regular feedback sessions and a final evaluation of all language skills at a mastery level.",
    resources: [
      "Advanced Italian literature and academic texts",
      "Professional and research materials",
      "Authentic Italian media and cultural resources",
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
    targetAudience: "Students who have completed C1 or have near-native Italian proficiency",
    duration: "3 months",
    certification: "Italian C2 Mastery Certificate",
    focusAreas: "Native-like Fluency • Cultural Mastery • Professional Excellence",
    price: "Kes 30,000",
    ctaText: "Achieve native-like Italian proficiency. Master the language at the highest level for academic research, professional leadership, and cultural expertise.",
  };

  return <ItalianLevelTemplate levelData={levelData} />;
};

export default ItalianLevelC2;
