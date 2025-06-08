import EnglishLevelTemplate from "./EnglishLevelTemplate";

const EnglishLevelB2 = () => {
  const levelData = {
    level: "B2",
    title: "English Language Course: B2 Level (Upper-Intermediate)",
    tagline: "Master English for professional and academic contexts",
    duration: {
      regular: "3 months",
      intensive: "3 months",
      accelerated: "1.5 months"
    },
    price: "Kes 30,000",
    overview: "The B2 level focuses on developing advanced language skills for professional and academic contexts. Students will learn to interact with a degree of fluency and spontaneity, and produce clear, detailed text on a wide range of subjects.",
    format: "Advanced language training with emphasis on professional and academic contexts. Focus on developing sophisticated language use and critical thinking skills.",
    objectives: [
      "Understand the main ideas of complex text on both concrete and abstract topics",
      "Interact with a degree of fluency and spontaneity with native speakers",
      "Produce clear, detailed text on a wide range of subjects",
      "Explain a viewpoint on a topical issue giving advantages and disadvantages"
    ],
    outcomes: [
      "Communicate effectively in professional and academic settings",
      "Understand complex ideas in both written and spoken English",
      "Write clear, well-structured texts on complex subjects",
      "Express viewpoints and participate in detailed discussions",
      "Handle most situations in an English-speaking environment"
    ],
    targetAudience: "Students who have completed B1 level or have intermediate English proficiency",
    certification: "CEFRL B2 English Proficiency Certificate",
    focusAreas: {
      speaking: [
        "Participating in detailed discussions on complex topics",
        "Presenting clear, detailed descriptions and arguments",
        "Expressing viewpoints and defending opinions",
        "Handling professional and academic interactions"
      ],
      listening: [
        "Understanding extended speech and complex arguments",
        "Following academic lectures and professional presentations",
        "Understanding most TV news and current affairs programs",
        "Recognizing different accents and speech patterns"
      ],
      reading: [
        "Understanding complex texts on various topics",
        "Reading and analyzing academic articles",
        "Understanding contemporary literary prose",
        "Following complex lines of argument"
      ],
      writing: [
        "Writing clear, detailed text on complex subjects",
        "Composing well-structured essays and reports",
        "Writing formal letters and professional emails",
        "Expressing viewpoints with supporting arguments"
      ]
    },
    courseMaterials: {
      coursebook: "English for Upper-Intermediate Learners (B2 Level)",
      supplementary: [
        "Academic articles and research papers",
        "Professional communication materials",
        "Advanced grammar and vocabulary resources",
        "Online learning platform with practice exercises"
      ]
    },
    assessment: {
      continuous: "Regular assessments including presentations, essays, and projects",
      final: "Comprehensive examination with focus on professional and academic skills"
    },
    teachingMethods: [
      "Academic discussion and debate",
      "Professional communication practice",
      "Critical analysis of complex texts",
      "Project-based learning"
    ],
    ctaText: "Elevate your English skills to professional and academic excellence."
  };

  return <EnglishLevelTemplate levelData={levelData} />;
};

export default EnglishLevelB2;
