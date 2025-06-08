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

const ItalianLevelC1 = () => {
  const levelData = {
    level: "C1",
    title: "Advanced Italian",
    tagline: "Achieve near-native proficiency for academic and professional excellence",
    overview: "This advanced Italian course is designed for highly proficient speakers who want to refine their language skills to near-native levels. You'll master complex linguistic structures, develop sophisticated cultural understanding, and achieve the fluency needed for high-level academic and professional contexts.",
    format: "By the end of this course, you'll be able to understand a wide range of demanding, longer texts, and recognize implicit meaning. You'll express yourself fluently and spontaneously without much obvious searching for expressions, and use language flexibly and effectively for social, academic, and professional purposes.",
    objectives: [
      "Master complex linguistic structures and nuances",
      "Develop sophisticated cultural and literary understanding",
      "Enhance critical analysis and academic writing skills",
      "Refine professional communication and presentation abilities",
      "Achieve near-native fluency in all contexts",
      "Master specialized vocabulary for various fields"
    ],
    outcomes: [
      "Understand and analyze complex texts and abstract topics",
      "Express ideas fluently and spontaneously",
      "Produce clear, well-structured, detailed text on complex subjects",
      "Use language flexibly and effectively in professional contexts",
      "Understand subtle nuances and implicit meaning",
      "Navigate complex cultural and social situations with ease"
    ],
    learningAreas: [
      {
        title: "Advanced Cultural Studies",
        description: "Explore sophisticated aspects of Italian culture, literature, and contemporary society.",
        icon: Globe,
      },
      {
        title: "Executive Communication",
        description: "Master high-level professional communication, negotiations, and leadership skills.",
        icon: Briefcase,
      },
      {
        title: "Literary Analysis",
        description: "Develop advanced skills in analyzing and discussing Italian literature and media.",
        icon: BookOpen,
      },
      {
        title: "Academic Research",
        description: "Conduct advanced research and produce sophisticated academic writing in Italian.",
        icon: Brain,
      },
      {
        title: "Advanced Public Speaking",
        description: "Master sophisticated presentation and public speaking techniques for various contexts.",
        icon: Mic,
      },
      {
        title: "Professional Writing",
        description: "Create complex, nuanced texts for various professional and academic purposes.",
        icon: PenTool,
      },
      {
        title: "Leadership Excellence",
        description: "Develop advanced skills for leading complex discussions and managing professional interactions.",
        icon: Award,
      },
    ],
    assessment: "Progress is evaluated through advanced research projects, professional presentations, academic papers, and comprehensive examinations. The course includes regular feedback sessions and a final evaluation of all language skills at an advanced level.",
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
    targetAudience: "Students who have completed B2 or have advanced Italian proficiency",
    duration: "3 months",
    certification: "Italian C1 Proficiency Certificate",
    focusAreas: "Academic Excellence • Professional Mastery • Cultural Expertise",
    price: "Kes 30,000",
    ctaText: "Achieve near-native Italian proficiency. Master advanced language skills for academic research, professional leadership, and cultural expertise.",
  };

  return <ItalianLevelTemplate levelData={levelData} />;
};

export default ItalianLevelC1;
