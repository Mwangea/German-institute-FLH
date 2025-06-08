import SpanishLevelTemplate from "./SpanishLevelTemplate";

const SpanishLevelC2 = () => {
  const levelData = {
    level: "C2",
    title: "Spanish Course: C2 Level (Mastery)",
    tagline: "Attain complete mastery of the Spanish language",
    duration: {
      regular: "3 months",
      intensive: "3 months",
      superIntensive: "3 months",
      accelerated: "3 months"
    },
    price: "Kes 30,000",
    overview: "The Spanish C2 course represents the highest level of Spanish proficiency. This comprehensive program is designed for students who want to achieve complete mastery of the language, enabling them to understand virtually everything heard or read, and express themselves spontaneously, very fluently, and precisely. The course prepares students for the DELE C2 examination while building expert-level skills for professional, academic, and cultural contexts.",
    format: "Mastery-level language training focusing on perfecting all aspects of language use. Emphasis on cultural nuances, sophisticated expression, and professional expertise. Regular practice sessions, research projects, and personalized feedback to ensure comprehensive progress.",
    objectives: [
      "Achieve complete mastery of Spanish",
      "Develop expert-level language proficiency",
      "Perfect reading and writing skills",
      "Master listening and speaking abilities",
      "Prepare for the DELE C2 examination"
    ],
    outcomes: [
      "Communicate with complete mastery in any situation",
      "Understand and use subtle nuances of meaning",
      "Write sophisticated texts with perfect style and accuracy",
      "Express complex ideas with precision and elegance",
      "Handle any professional or academic situation with ease"
    ],
    targetAudience: "Students who have completed C1 or have advanced Spanish proficiency",
    certification: "DELE C2 Certificate",
    focusAreas: {
      speaking: [
        "Participating in any conversation or discussion with ease",
        "Presenting complex topics with perfect fluency and accuracy",
        "Expressing subtle shades of meaning precisely",
        "Handling any professional or academic situation",
        "Using idiomatic expressions and cultural references naturally"
      ],
      listening: [
        "Understanding any kind of spoken language with ease",
        "Following complex academic and professional discussions",
        "Comprehending subtle nuances and cultural references",
        "Understanding different regional accents and dialects",
        "Recognizing and interpreting implicit meanings"
      ],
      reading: [
        "Understanding any kind of written text with ease",
        "Analyzing complex literary and academic works",
        "Interpreting subtle cultural and social references",
        "Understanding implicit meanings and nuances",
        "Appreciating stylistic and cultural aspects of texts"
      ],
      writing: [
        "Writing sophisticated texts with perfect style and accuracy",
        "Composing complex academic and professional documents",
        "Expressing subtle nuances and complex ideas",
        "Creating well-structured and stylistically perfect content",
        "Using appropriate register and style for any context"
      ]
    },
    courseMaterials: {
      coursebook: "Eñe 5",
      supplementary: [
        "Advanced literary and academic materials",
        "Professional and technical resources",
        "Cultural and historical texts",
        "Online learning platform with expert-level exercises",
        "DELE C2 mock tests and preparation materials"
      ]
    },
    assessment: {
      continuous: "Expert-level assessments including research papers, presentations, and projects",
      final: "Comprehensive examination with focus on mastery-level language use"
    },
    teachingMethods: [
      "Expert-level academic discussion and debate",
      "Advanced research and analysis projects",
      "Cultural immersion activities",
      "Professional communication practice",
      "Literary and media analysis"
    ],
    ctaText: "Achieve complete mastery of Spanish and communicate with perfect fluency and precision."
  };

  return <SpanishLevelTemplate levelData={levelData} />;
};

export default SpanishLevelC2;
