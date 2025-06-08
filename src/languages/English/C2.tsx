import EnglishLevelTemplate from "./EnglishLevelTemplate";

const EnglishLevelC2 = () => {
  const levelData = {
    level: "C2",
    title: "English Language Course: C2 Level (Mastery)",
    tagline: "Attain complete mastery of the English language",
    duration: {
      regular: "3 months",
      intensive: "3 months",
      accelerated: "1.5 months"
    },
    price: "Kes 30,000",
    overview: "The C2 level represents the highest level of English proficiency. Students will develop complete mastery of the language, enabling them to understand virtually everything heard or read, and express themselves spontaneously, very fluently, and precisely.",
    format: "Mastery-level language training focusing on perfecting all aspects of language use. Emphasis on cultural nuances, sophisticated expression, and professional expertise.",
    objectives: [
      "Understand with ease virtually everything heard or read",
      "Summarize information from different spoken and written sources",
      "Express oneself spontaneously, very fluently, and precisely",
      "Distinguish finer shades of meaning even in the most complex situations"
    ],
    outcomes: [
      "Communicate with complete mastery in any situation",
      "Understand and use subtle nuances of meaning",
      "Write sophisticated texts with perfect style and accuracy",
      "Express complex ideas with precision and elegance",
      "Handle any professional or academic situation with ease"
    ],
    targetAudience: "Students who have completed C1 level or have advanced English proficiency",
    certification: "CEFRL C2 English Proficiency Certificate",
    focusAreas: {
      speaking: [
        "Participating in any conversation or discussion with ease",
        "Expressing subtle shades of meaning precisely",
        "Using idiomatic expressions and colloquialisms appropriately",
        "Handling complex professional and academic situations"
      ],
      listening: [
        "Understanding any kind of spoken language with ease",
        "Following complex discussions and presentations",
        "Understanding various accents and dialects perfectly",
        "Recognizing subtle nuances and cultural references"
      ],
      reading: [
        "Understanding any kind of written text with ease",
        "Reading and analyzing complex literature and academic texts",
        "Understanding implicit meaning and cultural references",
        "Following complex arguments and specialized texts"
      ],
      writing: [
        "Writing clear, smoothly flowing, well-structured text",
        "Composing sophisticated texts with perfect style",
        "Writing formal and informal texts with appropriate tone",
        "Expressing complex ideas with precision and elegance"
      ]
    },
    courseMaterials: {
      coursebook: "English for Mastery (C2 Level)",
      supplementary: [
        "Authentic literature and specialized texts",
        "Advanced professional and academic materials",
        "Cultural and idiomatic expression resources",
        "Comprehensive online learning platform"
      ]
    },
    assessment: {
      continuous: "Regular assessments including complex presentations, essays, and projects",
      final: "Comprehensive examination demonstrating complete language mastery"
    },
    teachingMethods: [
      "Mastery-level discussion and debate",
      "Critical analysis of complex texts and media",
      "Professional and academic communication practice",
      "Cultural immersion and specialized workshops"
    ],
    ctaText: "Achieve complete mastery of English and communicate with perfect fluency and precision."
  };

  return <EnglishLevelTemplate levelData={levelData} />;
};

export default EnglishLevelC2;
