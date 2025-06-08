import EnglishLevelTemplate from "./EnglishLevelTemplate";

const EnglishLevelC1 = () => {
  const levelData = {
    level: "C1",
    title: "English Language Course: C1 Level (Advanced)",
    tagline: "Achieve near-native proficiency in English",
    duration: {
      regular: "3 months",
      intensive: "3 months",
      accelerated: "1.5 months"
    },
    price: "Kes 30,000",
    overview: "The C1 level focuses on developing near-native proficiency in English. Students will learn to express themselves fluently and spontaneously, use language flexibly and effectively for social, academic, and professional purposes.",
    format: "Advanced language training with emphasis on sophisticated language use, cultural nuances, and professional expertise. Focus on developing native-like fluency and accuracy.",
    objectives: [
      "Understand a wide range of demanding, longer texts and recognize implicit meaning",
      "Express ideas fluently and spontaneously without much obvious searching for expressions",
      "Use language flexibly and effectively for social, academic, and professional purposes",
      "Produce clear, well-structured, detailed text on complex subjects"
    ],
    outcomes: [
      "Communicate with native-like fluency and accuracy",
      "Understand complex ideas in both written and spoken English",
      "Write sophisticated texts on complex subjects",
      "Express viewpoints with precision and subtlety",
      "Handle any situation in an English-speaking environment"
    ],
    targetAudience: "Students who have completed B2 level or have upper-intermediate English proficiency",
    certification: "CEFRL C1 English Proficiency Certificate",
    focusAreas: {
      speaking: [
        "Participating in complex discussions with native speakers",
        "Presenting sophisticated arguments and viewpoints",
        "Using language flexibly and effectively in social situations",
        "Handling professional and academic interactions with ease"
      ],
      listening: [
        "Understanding extended speech even when not clearly structured",
        "Following complex academic lectures and professional presentations",
        "Understanding various accents and dialects",
        "Recognizing subtle nuances in spoken English"
      ],
      reading: [
        "Understanding complex texts on various topics",
        "Reading and analyzing sophisticated literature",
        "Understanding implicit meaning in texts",
        "Following complex lines of argument in academic texts"
      ],
      writing: [
        "Writing clear, well-structured, detailed text on complex subjects",
        "Composing sophisticated essays and reports",
        "Writing formal and informal texts with appropriate style",
        "Expressing viewpoints with precision and subtlety"
      ]
    },
    courseMaterials: {
      coursebook: "English for Advanced Learners (C1 Level)",
      supplementary: [
        "Authentic literature and academic texts",
        "Advanced professional communication materials",
        "Specialized vocabulary and idiom resources",
        "Comprehensive online learning platform"
      ]
    },
    assessment: {
      continuous: "Regular assessments including complex presentations, essays, and projects",
      final: "Comprehensive examination with focus on advanced language skills"
    },
    teachingMethods: [
      "Advanced discussion and debate",
      "Critical analysis of complex texts",
      "Professional and academic communication practice",
      "Cultural immersion activities"
    ],
    ctaText: "Achieve near-native proficiency and master English at the highest level."
  };

  return <EnglishLevelTemplate levelData={levelData} />;
};

export default EnglishLevelC1;
