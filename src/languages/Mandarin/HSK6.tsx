import MandarinLevelTemplate from "./MandarinLevelTemplate";

const MandarinLevelHSK6 = () => {
  const levelData = {
    level: "HSK 6",
    title: "Mandarin Chinese Course: HSK 6 Level (Mastery)",
    tagline: "Attain complete mastery of the Mandarin language",
    duration: {
      regular: "3-6 months",
      intensive: "2-3 months",
      accelerated: "1-2 months"
    },
    price: "Kes 20,000",
    overview: "The HSK 6 course represents the highest level of Mandarin proficiency. This comprehensive program is designed for students who want to achieve complete mastery of the language, enabling them to understand virtually everything heard or read, and express themselves spontaneously, very fluently, and precisely. The course prepares students for the HSK Level 6 examination while building expert-level skills for professional, academic, and cultural contexts.",
    format: "Mastery-level language training focusing on perfecting all aspects of language use. Emphasis on cultural nuances, sophisticated expression, and professional expertise. Regular practice sessions, research projects, and personalized feedback to ensure comprehensive progress.",
    objectives: [
      "Achieve complete mastery of Mandarin",
      "Develop expert-level language proficiency",
      "Perfect reading and writing skills",
      "Master listening and speaking abilities",
      "Prepare for the HSK 6 examination"
    ],
    outcomes: [
      "Communicate with complete mastery in any situation",
      "Understand and use subtle nuances of meaning",
      "Write sophisticated texts with perfect style and accuracy",
      "Express complex ideas with precision and elegance",
      "Handle any professional or academic situation with ease"
    ],
    targetAudience: "Students who have completed HSK 5 or have advanced Mandarin proficiency",
    certification: "HSK Level 6 Certificate",
    focusAreas: {
      speaking: [
        "Participating in complex discussions on any topic",
        "Presenting sophisticated arguments and analyses",
        "Expressing nuanced ideas with perfect accuracy",
        "Handling any professional or academic situation"
      ],
      listening: [
        "Understanding any form of spoken Chinese",
        "Comprehending subtle nuances and cultural references",
        "Following complex discussions and presentations",
        "Recognizing and understanding regional variations"
      ],
      reading: [
        "Understanding any form of written Chinese",
        "Analyzing complex literary and academic works",
        "Interpreting sophisticated cultural content",
        "Following intricate arguments and discussions"
      ],
      writing: [
        "Writing sophisticated texts on any subject",
        "Composing complex academic and professional documents",
        "Expressing nuanced ideas with perfect accuracy",
        "Creating masterfully structured and stylistically perfect content"
      ]
    },
    courseMaterials: {
      coursebook: "HSK Standard Course 6",
      supplementary: [
        "Advanced literary and academic materials",
        "Professional and technical resources",
        "Cultural and historical texts",
        "Online learning platform with expert-level exercises",
        "HSK 6 mock tests and preparation materials"
      ]
    },
    assessment: {
      continuous: "Expert-level assessments including research papers, presentations, and projects",
      final: "Comprehensive examination with focus on complete language mastery"
    },
    teachingMethods: [
      "Expert-level academic discussion and debate",
      "Advanced research and analysis projects",
      "Cultural immersion activities",
      "Professional communication practice",
      "Literary and media analysis"
    ],
    ctaText: "Achieve complete mastery of Mandarin and communicate with perfect fluency and precision."
  };

  return <MandarinLevelTemplate levelData={levelData} />;
};

export default MandarinLevelHSK6;
