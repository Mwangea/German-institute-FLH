import JapaneseLevelTemplate from "./JapaneseLevelTemplate";
import {
  MessageSquare,
  Globe,
  Newspaper,
  BookOpen,
  Mic,
  PenTool,
  Briefcase,
  Users2,
  Brain,
  Award,
} from "lucide-react";

const JapaneseLevelN3 = () => {
  const levelData = {
    level: "N3",
    title: "Intermediate Japanese",
    tagline: "Master intermediate Japanese and prepare for JLPT N3",
    overview: "The N3 Japanese course focuses on developing intermediate-level language skills, with emphasis on practical communication, business Japanese, and cultural understanding. This level bridges the gap between basic and advanced Japanese, preparing students for more complex language situations.",
    format: "By the end of the course, students will be able to understand and use intermediate-level Japanese in various contexts. They will master approximately 650 kanji, understand complex grammar patterns, and develop the ability to handle most situations encountered in daily life and work in Japan.",
    objectives: [
      "Master approximately 650 kanji characters",
      "Understand complex grammar structures",
      "Develop business and professional vocabulary",
      "Improve reading and listening comprehension",
      "Enhance writing and speaking skills",
      "Prepare for JLPT N3 examination"
    ],
    outcomes: [
      "Read and understand intermediate Japanese texts",
      "Communicate effectively in business settings",
      "Use complex grammar patterns correctly",
      "Understand and use approximately 650 kanji",
      "Comprehend Japanese media and news",
      "Pass the JLPT N3 examination"
    ],
    learningAreas: [
      {
        title: "Advanced Grammar",
        description: "Master complex sentence structures and grammar patterns essential for N3 level.",
        icon: BookOpen,
      },
      {
        title: "Kanji Mastery",
        description: "Learn approximately 650 kanji characters and their compounds.",
        icon: PenTool,
      },
      {
        title: "Business Japanese",
        description: "Develop professional communication skills for workplace situations.",
        icon: Briefcase,
      },
      {
        title: "Media Comprehension",
        description: "Improve ability to understand news, articles, and other media content.",
        icon: Newspaper,
      },
      {
        title: "Cultural Expertise",
        description: "Deepen understanding of Japanese culture, society, and business practices.",
        icon: Globe,
      },
      {
        title: "Academic Skills",
        description: "Develop reading and writing skills for academic contexts.",
        icon: Brain,
      },
      {
        title: "Professional Communication",
        description: "Master formal and informal communication styles.",
        icon: MessageSquare,
      },
      {
        title: "Social Dynamics",
        description: "Understand and navigate complex social situations in Japanese.",
        icon: Users2,
      },
      {
        title: "Public Speaking",
        description: "Build confidence in presentations and formal speaking situations.",
        icon: Mic,
      },
      {
        title: "Leadership Skills",
        description: "Develop language skills for leading discussions and meetings.",
        icon: Award,
      },
    ],
    assessment: "Progress is evaluated through comprehensive tests, business case studies, media comprehension exercises, and practice JLPT N3 examinations. The course includes regular assessments and a final mock JLPT N3 test.",
    resources: [
      "Tobira: Gateway to Advanced Japanese",
      "JLPT N3 preparation materials",
      "Business Japanese textbooks",
      "Authentic Japanese media resources",
    ],
    studyPlans: [
      {
        name: "Regular Plan",
        duration: "3 months",
        hours: "1.5 hours per day",
      },
      {
        name: "Intensive Plan",
        duration: "3 months",
        hours: "3 hours per day",
      },
      {
        name: "Super-Intensive Plan",
        duration: "3 months",
        hours: "4 hours per day",
      },
      {
        name: "Accelerated Plan",
        duration: "3 months",
        hours: "6 hours per day",
      },
    ],
    targetAudience: "Students who have completed N4 or have equivalent knowledge",
    duration: "3 months",
    certification: "JLPT N3 Certificate",
    focusAreas: "Intermediate-Advanced Japanese • Business Basics • Cultural Fluency",
    price: "Kes 30,000",
    ctaText: "Advance your Japanese proficiency. Master intermediate-advanced skills and prepare for the JLPT N3 examination.",
  };

  return <JapaneseLevelTemplate levelData={levelData} />;
};

export default JapaneseLevelN3;
