import SpanishLevelTemplate from "./SpanishLevelTemplate";

const SpanishLevelC1 = () => {
  const levelData = {
    level: "C1",
    title: "Spanish Course: C1 Level (Advanced)",
    tagline: "Achieve near-native proficiency in Spanish",
    duration: {
      regular: "3 months",
      intensive: "3 months",
      superIntensive: "3 months",
      accelerated: "3 months"
    },
    price: "Kes 30,000",
    overview: "The Spanish C1 course represents an advanced level of proficiency, focusing on sophisticated language use and cultural understanding. Students will learn to express themselves fluently and spontaneously, understand complex texts, and use language flexibly and effectively for social, academic, and professional purposes. The course prepares students for the DELE C1 examination while building expert-level skills.",
    format: "Expert-level language training focusing on sophisticated expression and cultural nuances. Emphasis on perfecting all aspects of language use, including subtle meanings and cultural references. Regular practice sessions, research projects, and personalized feedback to ensure comprehensive progress.",
    objectives: [
      "Achieve near-native proficiency in Spanish",
      "Master sophisticated language structures and expressions",
      "Develop expert-level reading and writing skills",
      "Perfect listening and speaking abilities",
      "Prepare for the DELE C1 examination"
    ],
    outcomes: [
      "Understand a wide range of demanding, longer texts",
      "Express ideas fluently and spontaneously",
      "Use language flexibly and effectively for social, academic, and professional purposes",
      "Produce clear, well-structured, detailed text on complex subjects",
      "Understand subtle nuances and cultural references"
    ],
    targetAudience: "Students who have completed B2 or have advanced Spanish proficiency",
    certification: "DELE C1 Certificate",
    focusAreas: {
      speaking: [
        "Participating in complex discussions on abstract topics",
        "Presenting detailed arguments and analyses",
        "Expressing nuanced opinions and perspectives",
        "Handling sophisticated professional interactions",
        "Using subtle language nuances and cultural references"
      ],
      listening: [
        "Understanding complex speech in various contexts",
        "Following detailed academic and professional discussions",
        "Comprehending subtle nuances in communication",
        "Recognizing and understanding cultural references",
        "Understanding different regional accents and dialects"
      ],
      reading: [
        "Understanding complex texts on abstract topics",
        "Analyzing sophisticated literary and academic works",
        "Interpreting nuanced cultural content",
        "Following complex arguments and discussions",
        "Understanding implicit meanings and cultural references"
      ],
      writing: [
        "Writing sophisticated texts on complex subjects",
        "Composing detailed academic and professional documents",
        "Expressing nuanced ideas and arguments",
        "Creating well-structured and stylistically appropriate content",
        "Using appropriate register and style for different contexts"
      ]
    },
    courseMaterials: {
      coursebook: "Eñe 4",
      supplementary: [
        "Advanced academic and literary materials",
        "Professional and technical resources",
        "Cultural and historical texts",
        "Online learning platform with advanced exercises",
        "DELE C1 mock tests and preparation materials"
      ]
    },
    assessment: {
      continuous: "Advanced assessments including research papers, presentations, and projects",
      final: "Comprehensive examination with focus on sophisticated language use"
    },
    teachingMethods: [
      "Advanced academic discussion and debate",
      "Research and analysis projects",
      "Cultural immersion activities",
      "Professional communication practice",
      "Literary and media analysis"
    ],
    ctaText: "Achieve near-native proficiency and master Spanish at an advanced level."
  };

  return <SpanishLevelTemplate levelData={levelData} />;
};

export default SpanishLevelC1;
