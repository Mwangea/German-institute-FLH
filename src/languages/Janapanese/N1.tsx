import JapaneseLevelTemplate from "./JapaneseLevelTemplate";
import {

  Globe,
  Newspaper,
  BookOpen,
  PenTool,
  Briefcase,
  Brain,

  FileText,
  Languages,
  ScrollText,
  Lightbulb,
} from "lucide-react";

const JapaneseLevelN1 = () => {
  const levelData = {
    level: "N1",
    title: "Mastery Japanese",
    tagline: "Achieve native-like proficiency and prepare for JLPT N1",
    overview: "The N1 Japanese course represents the highest level of Japanese language proficiency. Students will master approximately 2000 kanji, develop native-like comprehension and expression abilities, and gain deep cultural understanding. This level prepares students for professional, academic, and cultural leadership roles in Japanese contexts.",
    format: "By the end of the course, students will be able to understand and use Japanese at a level comparable to native speakers. They will master approximately 2000 kanji, understand subtle nuances in language, and develop the ability to handle any situation in Japanese with confidence and cultural sensitivity.",
    objectives: [
      "Master approximately 2000 kanji characters",
      "Understand and use advanced grammar with native-like accuracy",
      "Develop specialized vocabulary for various professional fields",
      "Achieve native-like reading and listening comprehension",
      "Master sophisticated writing and speaking skills",
      "Prepare for JLPT N1 examination"
    ],
    outcomes: [
      "Read and understand any Japanese text with ease",
      "Communicate effectively in any professional or academic setting",
      "Use advanced grammar patterns with native-like accuracy",
      "Understand and use approximately 2000 kanji",
      "Comprehend and analyze complex Japanese media and literature",
      "Pass the JLPT N1 examination"
    ],
    learningAreas: [
      {
        title: "Native-Level Grammar",
        description: "Master the most sophisticated sentence structures and grammar patterns.",
        icon: BookOpen,
      },
      {
        title: "Kanji Mastery",
        description: "Learn approximately 2000 kanji characters and their compounds.",
        icon: PenTool,
      },
      {
        title: "Professional Excellence",
        description: "Develop expert-level communication skills for any professional context.",
        icon: Briefcase,
      },
      {
        title: "Literary Analysis",
        description: "Master comprehension and analysis of complex literature and media.",
        icon: ScrollText,
      },
      {
        title: "Cultural Leadership",
        description: "Develop deep understanding of Japanese culture, society, and professional norms.",
        icon: Globe,
      },
      {
        title: "Research Excellence",
        description: "Develop advanced research and academic writing skills in Japanese.",
        icon: Brain,
      },
      {
        title: "Expert Writing",
        description: "Master writing skills for any professional or academic purpose.",
        icon: FileText,
      },
      {
        title: "Advanced Media",
        description: "Comprehend and analyze any form of Japanese media and content.",
        icon: Newspaper,
      },
      {
        title: "Language Mastery",
        description: "Understand and use Japanese with native-like proficiency.",
        icon: Languages,
      },
      {
        title: "Creative Expression",
        description: "Develop ability to express complex ideas and emotions in Japanese.",
        icon: Lightbulb,
      },
    ],
    assessment: "Progress is evaluated through advanced research projects, professional presentations, literary analysis, and practice JLPT N1 examinations. The course includes regular assessments and a final mock JLPT N1 test.",
    resources: [
      "Shin Kanzen Master N1 series",
      "JLPT N1 preparation materials",
      "Advanced Japanese literature and media",
      "Professional and academic research materials",
    ],
    studyPlans: [
      {
        name: "Regular Plan",
        duration: "2 months",
        hours: "2.5 hours per day",
      },
      {
        name: "Intensive Plan",
        duration: "2 months",
        hours: "5 hours per day",
      },
      {
        name: "Super-Intensive Plan",
        duration: "2 months",
        hours: "6 hours per day",
      },
      {
        name: "Accelerated Plan",
        duration: "2 months",
        hours: "8 hours per day",
      },
    ],
    targetAudience: "Students who have completed N2 or have equivalent knowledge",
    duration: "2 months",
    certification: "JLPT N1 Certificate",
    focusAreas: "Native-Level Japanese • Professional Mastery • Cultural Leadership",
    price: "Kes 20,000",
    ctaText: "Achieve the highest level of Japanese proficiency. Master native-like skills and prepare for the JLPT N1 examination.",
  };

  return <JapaneseLevelTemplate levelData={levelData} />;
};

export default JapaneseLevelN1; 