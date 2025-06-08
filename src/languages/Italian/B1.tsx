import ItalianLevelTemplate from "./ItalyLevelTemplate";
import {
  Globe,
  Briefcase,
  Newspaper,
  Users2,
  BookOpen,
  Mic,
  PenTool,
} from "lucide-react";

const ItalianLevelB1 = () => {
  const levelData = {
    level: "B1",
    title: "Intermediate Italian",
    tagline: "Develop independent language skills for work, study, and travel",
    overview: "This intermediate Italian course helps you develop more sophisticated language skills for professional and academic contexts. You'll learn to express opinions, handle complex situations, and engage in meaningful discussions on various topics. The course focuses on building fluency and accuracy while expanding your cultural understanding.",
    format: "By the end of this course, you'll be able to deal with most situations likely to arise while traveling in Italian-speaking areas. You'll produce simple connected text on familiar topics and describe experiences, events, dreams, hopes, and ambitions.",
    objectives: [
      "Master intermediate grammar structures",
      "Develop vocabulary for professional contexts",
      "Improve fluency in complex conversations",
      "Enhance writing skills for various purposes",
      "Build confidence in expressing opinions",
      "Understand main ideas in complex texts"
    ],
    outcomes: [
      "Handle most situations while traveling in Italian-speaking areas",
      "Write clear, detailed text on familiar topics",
      "Describe experiences and express opinions",
      "Understand the main points of complex texts",
      "Interact with native speakers with reasonable fluency",
      "Present clear, detailed descriptions on various topics"
    ],
    learningAreas: [
      {
        title: "Professional Communication",
        description: "Develop skills for workplace interactions, meetings, and professional correspondence in Italian.",
        icon: Briefcase,
      },
      {
        title: "Cultural Understanding",
        description: "Explore Italian culture, customs, and current events while improving language skills.",
        icon: Globe,
      },
      {
        title: "Media and News",
        description: "Understand and discuss news articles, TV programs, and current events in Italian.",
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
      "Nuovo Espresso 3 textbook and workbook",
      "Authentic Italian media materials",
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
    targetAudience: "Students who have completed A2 or have intermediate Italian knowledge",
    duration: "3 months",
    certification: "Italian B1 Proficiency Certificate",
    focusAreas: "Professional Communication • Academic Skills • Cultural Understanding",
    price: "Kes 30,000",
    ctaText: "Achieve intermediate proficiency in Italian. Develop the skills needed for professional and academic success.",
  };

  return <ItalianLevelTemplate levelData={levelData} />;
};

export default ItalianLevelB1;
