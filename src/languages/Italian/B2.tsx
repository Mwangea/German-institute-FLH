import ItalianLevelTemplate from "./ItalyLevelTemplate";
import {
  Globe,
  Briefcase,
  Newspaper,
  BookOpen,
  Mic,
  PenTool,
  Award,
} from "lucide-react";

const ItalianLevelB2 = () => {
  const levelData = {
    level: "B2",
    title: "Upper-Intermediate Italian",
    tagline: "Master sophisticated language skills for professional and academic excellence",
    overview: "This upper-intermediate Italian course focuses on developing advanced language skills for professional and academic contexts. You'll refine your ability to express complex ideas, engage in detailed discussions, and understand nuanced cultural references. The course emphasizes fluency, accuracy, and cultural competence.",
    format: "By the end of this course, you'll be able to understand the main ideas of complex text on both concrete and abstract topics. You'll interact with native speakers with a degree of fluency and spontaneity that makes regular interaction with native speakers quite possible without strain for either party.",
    objectives: [
      "Master complex grammar structures and nuances",
      "Develop sophisticated vocabulary for specialized topics",
      "Enhance fluency in professional and academic contexts",
      "Improve critical analysis and argumentation skills",
      "Refine writing style for various purposes",
      "Understand implicit meaning in complex texts"
    ],
    outcomes: [
      "Engage in detailed discussions on complex topics",
      "Write clear, well-structured texts on various subjects",
      "Understand extended speech and complex arguments",
      "Express viewpoints with precision and subtlety",
      "Handle professional and academic situations effectively",
      "Navigate cultural nuances in communication"
    ],
    learningAreas: [
      {
        title: "Advanced Professional Skills",
        description: "Master sophisticated workplace communication, negotiations, and professional presentations in Italian.",
        icon: Briefcase,
      },
      {
        title: "Cultural Expertise",
        description: "Deepen understanding of Italian culture, literature, and contemporary issues.",
        icon: Globe,
      },
      {
        title: "Advanced Media Analysis",
        description: "Critically analyze and discuss complex media content, including news, films, and literature.",
        icon: Newspaper,
      },
      {
        title: "Academic Excellence",
        description: "Develop advanced research and academic writing skills in Italian.",
        icon: BookOpen,
      },
      {
        title: "Advanced Public Speaking",
        description: "Master sophisticated presentation skills and public speaking techniques.",
        icon: Mic,
      },
      {
        title: "Professional Writing",
        description: "Create complex, well-structured texts for various professional purposes.",
        icon: PenTool,
      },
      {
        title: "Leadership Communication",
        description: "Develop skills for leading discussions and managing complex group interactions.",
        icon: Award,
      },
    ],
    assessment: "Progress is evaluated through advanced project work, research papers, professional presentations, and comprehensive examinations. The course includes regular feedback sessions and a final evaluation of all language skills.",
    resources: [
      "Nuovo Espresso 4 textbook and workbook",
      "Advanced Italian literature and media",
      "Professional and academic materials",
      "Interactive online platform with advanced exercises",
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
    targetAudience: "Students who have completed B1 or have strong intermediate Italian skills",
    duration: "3 months",
    certification: "Italian B2 Proficiency Certificate",
    focusAreas: "Professional Excellence • Academic Italian • Cultural Mastery",
    price: "Kes 30,000",
    ctaText: "Achieve professional-level Italian proficiency. Master sophisticated language skills for career advancement and academic success.",
  };

  return <ItalianLevelTemplate levelData={levelData} />;
};

export default ItalianLevelB2;
