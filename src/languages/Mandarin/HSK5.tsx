import MandarinLevelTemplate from "./MandarinLevelTemplate";

const MandarinLevelHSK5 = () => {
  const levelData = {
    level: "HSK 5",
    title: "Mandarin Chinese Course: HSK 5 Level (Advanced)",
    tagline: "Achieve near-native proficiency in Mandarin",
    duration: {
      regular: "3-6 months",
      intensive: "2-3 months",
      accelerated: "1-2 months"
    },
    price: "Kes 20,000",
    overview: "The HSK 5 course is designed for advanced learners who want to achieve near-native proficiency in Mandarin. This level focuses on developing sophisticated language skills, including complex grammar structures, extensive vocabulary, and nuanced communication abilities. The course prepares students for the HSK Level 5 examination while building advanced skills for professional, academic, and cultural contexts.",
    format: "Advanced language training with emphasis on sophisticated language use, cultural nuances, and professional expertise. Focus on developing native-like fluency and accuracy. Regular practice sessions, research projects, and personalized feedback to ensure comprehensive progress.",
    objectives: [
      "Master sophisticated grammar and vocabulary",
      "Develop near-native language proficiency",
      "Enhance advanced reading and writing skills",
      "Improve listening and speaking fluency",
      "Prepare for the HSK 5 examination"
    ],
    outcomes: [
      "Communicate with near-native fluency and accuracy",
      "Understand complex ideas in both written and spoken Chinese",
      "Write sophisticated texts on complex subjects",
      "Express viewpoints with precision and subtlety",
      "Handle any situation in a Chinese-speaking environment"
    ],
    targetAudience: "Students who have completed HSK 4 or have upper-intermediate Mandarin proficiency",
    certification: "HSK Level 5 Certificate",
    focusAreas: {
      speaking: [
        "Participating in complex discussions on abstract topics",
        "Presenting detailed arguments and analyses",
        "Expressing nuanced opinions and perspectives",
        "Handling sophisticated professional interactions"
      ],
      listening: [
        "Understanding complex speech in various contexts",
        "Following detailed academic and professional discussions",
        "Comprehending subtle nuances in communication",
        "Recognizing and understanding cultural references"
      ],
      reading: [
        "Understanding complex texts on abstract topics",
        "Analyzing sophisticated literary and academic works",
        "Interpreting nuanced cultural content",
        "Following complex arguments and discussions"
      ],
      writing: [
        "Writing sophisticated texts on complex subjects",
        "Composing detailed academic and professional documents",
        "Expressing nuanced ideas and arguments",
        "Creating well-structured and stylistically appropriate content"
      ]
    },
    courseMaterials: {
      coursebook: "HSK Standard Course 5",
      supplementary: [
        "Advanced academic and literary materials",
        "Professional and technical resources",
        "Cultural and historical texts",
        "Online learning platform with advanced exercises",
        "HSK 5 mock tests and preparation materials"
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
    ctaText: "Achieve near-native proficiency and master Mandarin at an advanced level."
  };

  return <MandarinLevelTemplate levelData={levelData} />;
};

export default MandarinLevelHSK5;
