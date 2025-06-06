import JapaneseLevelTemplate from "./JapaneseLevelTemplate";
import {
  MessageSquare,
  Globe,
  Newspaper,
  BookOpen,

  PenTool,
  Briefcase,

  Brain,
  Award,
  FileText,
  Languages,
} from "lucide-react";

const JapaneseLevelN2 = () => {
  const levelData = {
    level: "N2",
    title: "Advanced Japanese",
    tagline: "Achieve professional-level Japanese proficiency and prepare for JLPT N2",
    overview: "The N2 Japanese course focuses on developing advanced language skills for professional and academic contexts. Students will master complex grammar structures, approximately 1000 kanji, and develop the ability to understand and express nuanced ideas in Japanese.",
    format: "By the end of the course, students will be able to understand and use advanced Japanese in professional and academic settings. They will master approximately 1000 kanji, understand complex grammar patterns, and develop the ability to handle sophisticated language situations with confidence.",
    objectives: [
      "Master approximately 1000 kanji characters",
      "Understand advanced grammar structures",
      "Develop specialized vocabulary for various fields",
      "Improve advanced reading and listening comprehension",
      "Enhance professional writing and speaking skills",
      "Prepare for JLPT N2 examination"
    ],
    outcomes: [
      "Read and understand complex Japanese texts",
      "Communicate effectively in professional settings",
      "Use advanced grammar patterns correctly",
      "Understand and use approximately 1000 kanji",
      "Comprehend sophisticated Japanese media",
      "Pass the JLPT N2 examination"
    ],
    learningAreas: [
      {
        title: "Advanced Grammar",
        description: "Master sophisticated sentence structures and grammar patterns essential for N2 level.",
        icon: BookOpen,
      },
      {
        title: "Kanji Expertise",
        description: "Learn approximately 1000 kanji characters and their compounds.",
        icon: PenTool,
      },
      {
        title: "Professional Japanese",
        description: "Develop advanced communication skills for workplace and academic settings.",
        icon: Briefcase,
      },
      {
        title: "Advanced Media",
        description: "Master comprehension of complex news, literature, and technical materials.",
        icon: Newspaper,
      },
      {
        title: "Cultural Mastery",
        description: "Develop deep understanding of Japanese culture, society, and professional norms.",
        icon: Globe,
      },
      {
        title: "Academic Excellence",
        description: "Develop advanced reading and writing skills for academic research.",
        icon: Brain,
      },
      {
        title: "Technical Writing",
        description: "Master writing skills for professional documents and reports.",
        icon: FileText,
      },
      {
        title: "Advanced Communication",
        description: "Develop sophisticated communication skills for complex situations.",
        icon: MessageSquare,
      },
      {
        title: "Language Analysis",
        description: "Understand and analyze complex language patterns and usage.",
        icon: Languages,
      },
      {
        title: "Professional Leadership",
        description: "Develop language skills for leading complex discussions and negotiations.",
        icon: Award,
      },
    ],
    assessment: "Progress is evaluated through advanced tests, professional case studies, research projects, and practice JLPT N2 examinations. The course includes regular assessments and a final mock JLPT N2 test.",
    resources: [
      "Shin Kanzen Master N2 series",
      "JLPT N2 preparation materials",
      "Advanced Japanese literature and media",
      "Professional and academic materials",
    ],
    studyPlans: [
      {
        name: "Regular Plan",
        duration: "10 months",
        hours: "2 hours per day",
      },
      {
        name: "Intensive Plan",
        duration: "5 months",
        hours: "4 hours per day",
      },
      {
        name: "Super-Intensive Plan",
        duration: "4 months",
        hours: "5 hours per day",
      },
      {
        name: "Accelerated Plan",
        duration: "3 months",
        hours: "6 hours per day",
      },
    ],
    targetAudience: "Students who have completed N3 or have equivalent knowledge",
    duration: "3-10 months (flexible)",
    certification: "JLPT N2 Certificate",
    focusAreas: "Advanced Japanese • Professional Mastery • Cultural Expertise",
    price: "Kes 20,000",
    ctaText: "Achieve professional-level proficiency. Master advanced skills and prepare for the JLPT N2 examination.",
  };

  return <JapaneseLevelTemplate levelData={levelData} />;
};

export default JapaneseLevelN2;
