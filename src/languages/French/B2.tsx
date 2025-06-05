import FrenchLevelTemplate from "./FrenchLevelTemplate";
import {
  Globe,
  Briefcase,
  Newspaper,
  BookOpen,
  Mic,
  PenTool,
  Award,
} from "lucide-react";

const FrenchLevelB2 = () => {
  const levelData = {
    level: "B2",
    title: "Upper-Intermediate French",
    tagline: "Master sophisticated language skills for professional and academic excellence",
    overview: "This upper-intermediate French course focuses on developing advanced language skills for professional and academic contexts. You'll refine your ability to express complex ideas, engage in detailed discussions, and understand nuanced cultural references. The course emphasizes fluency, accuracy, and cultural competence.",
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
        description: "Master sophisticated workplace communication, negotiations, and professional presentations in French.",
        icon: Briefcase,
      },
      {
        title: "Cultural Expertise",
        description: "Deepen understanding of French culture, literature, and contemporary issues.",
        icon: Globe,
      },
      {
        title: "Advanced Media Analysis",
        description: "Critically analyze and discuss complex media content, including news, films, and literature.",
        icon: Newspaper,
      },
      {
        title: "Academic Excellence",
        description: "Develop advanced research and academic writing skills in French.",
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
      "Cosmopolite 4 textbook and workbook",
      "Advanced French literature and media",
      "Professional and academic materials",
      "Interactive online platform with advanced exercises",
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
    targetAudience: "Students who have completed B1 or have strong intermediate French skills",
    duration: "1-6 months (flexible)",
    certification: "French B2 Proficiency Certificate",
    focusAreas: "Professional Excellence • Academic French • Cultural Mastery",
    price: "Kes 20,000",
    ctaText: "Achieve professional-level French proficiency. Master sophisticated language skills for career advancement and academic success.",
  };

  return <FrenchLevelTemplate levelData={levelData} />;
};

export default FrenchLevelB2;
