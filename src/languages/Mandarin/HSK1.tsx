import MandarinLevelTemplate from "./MandarinLevelTemplate";

const MandarinLevelHSK1 = () => {
  const levelData = {
    level: "HSK 1",
    title: "Mandarin Chinese Course: HSK 1 Level (Beginner)",
    tagline: "Build your foundation in Mandarin Chinese with essential communication skills",
    duration: {
      regular: "3-6 months",
      intensive: "2-3 months",
      accelerated: "1-2 months"
    },
    price: "Kes 20,000",
    overview: "The HSK 1 Preparation Course at KIFLAPS is designed for absolute beginners with little or no background in Chinese. This foundational program focuses on building essential language skills—listening, speaking, reading, and writing—while aligning closely with the requirements of the HSK Level 1 exam. It serves as an ideal starting point for learners aiming to gain confidence in Mandarin and work toward an internationally recognized certification.",
    format: "Interactive lessons combining theory and practice. Emphasis on Pinyin system, basic vocabulary, and essential grammar structures. Regular practice sessions, group activities, and personalized feedback to ensure steady progress.",
    objectives: [
      "Master the Pinyin system for accurate pronunciation",
      "Learn essential vocabulary for daily communication",
      "Understand and use basic grammatical structures",
      "Develop fundamental reading and writing skills",
      "Prepare for the HSK 1 examination"
    ],
    outcomes: [
      "Communicate basic needs and wants in Mandarin",
      "Understand simple instructions and directions",
      "Read and write basic Chinese characters",
      "Participate in simple conversations about familiar topics",
      "Recognize and use common vocabulary in daily situations"
    ],
    targetAudience: "Absolute beginners with no prior knowledge of Chinese",
    certification: "HSK Level 1 Certificate",
    focusAreas: {
      speaking: [
        "Basic greetings and introductions",
        "Simple conversations about personal information",
        "Asking and answering questions about daily activities",
        "Expressing likes and dislikes"
      ],
      listening: [
        "Understanding basic instructions and commands",
        "Comprehending simple questions and answers in conversation",
        "Recognizing familiar words and basic phrases",
        "Understanding information about themselves and their surroundings"
      ],
      reading: [
        "Recognizing common Chinese characters",
        "Reading short, simple texts such as personal letters and postcards",
        "Understanding basic instructions and simple messages",
        "Identifying key information in short texts"
      ],
      writing: [
        "Writing basic Chinese characters",
        "Composing simple sentences about themselves",
        "Writing short messages and notes",
        "Filling in forms with personal details"
      ]
    },
    courseMaterials: {
      coursebook: "HSK Standard Course 1",
      supplementary: [
        "Pinyin practice materials",
        "Character writing workbooks",
        "Audio materials for listening practice",
        "Online exercises and practice materials",
        "HSK 1 mock tests and preparation materials"
      ]
    },
    assessment: {
      continuous: "Regular quizzes, character writing tests, and speaking assessments",
      final: "Mock HSK 1 examination covering all language skills"
    },
    teachingMethods: [
      "Interactive classroom activities",
      "Pinyin and character writing practice",
      "Role-playing and simulation exercises",
      "Audio-visual aids",
      "Group discussions and pair work"
    ],
    ctaText: "Start your Mandarin learning journey today and build a strong foundation for future success."
  };

  return <MandarinLevelTemplate levelData={levelData} />;
};

export default MandarinLevelHSK1;
