import EnglishLevelTemplate from "./EnglishLevelTemplate";

const EnglishLevelA1 = () => {
  const levelData = {
    level: "A1",
    title: "English Language Course: A1 Level (Beginner)",
    tagline: "Build your foundation in English with essential communication skills",
    duration: {
      regular: "3 months",
      intensive: "3 months",
      accelerated: "1.5 months"
    },
    price: "Kes 20,000",
    overview: "The A1 level of the CEFRL framework is designed for absolute beginners in the English language. This level focuses on the basics of English, providing a strong foundation for further study. The course aims to help students develop basic communication skills for everyday situations.",
    format: "Interactive lessons with a focus on practical communication. Regular practice sessions, group activities, and personalized feedback to ensure steady progress.",
    objectives: [
      "Understand and use familiar everyday expressions and very basic phrases",
      "Introduce themselves and others, ask and answer questions about personal details",
      "Interact in a simple way with others who speak slowly and clearly",
      "Build a foundation for further language learning"
    ],
    outcomes: [
      "Communicate basic needs and wants in English",
      "Understand simple instructions and directions",
      "Read and write basic personal information",
      "Participate in simple conversations about familiar topics",
      "Recognize and use common vocabulary in daily situations"
    ],
    targetAudience: "Absolute beginners with no prior knowledge of English",
    certification: "CEFRL A1 English Proficiency Certificate",
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
        "Recognizing common signs and notices in public places",
        "Reading short, simple texts such as personal letters and postcards",
        "Understanding basic instructions and simple messages",
        "Identifying key information in short texts"
      ],
      writing: [
        "Writing short, simple messages and notes",
        "Filling in forms with personal details",
        "Composing simple sentences about themselves",
        "Writing basic descriptions of people and places"
      ]
    },
    courseMaterials: {
      coursebook: "English for Beginners (A1 Level)",
      supplementary: [
        "Audio CDs for pronunciation practice",
        "Flashcards for vocabulary building",
        "Online exercises and practice materials",
        "Interactive learning resources"
      ]
    },
    assessment: {
      continuous: "Regular quizzes and oral tests to track progress",
      final: "A written and oral exam to evaluate overall proficiency"
    },
    teachingMethods: [
      "Interactive classroom activities",
      "Role-playing and simulation exercises",
      "Audio-visual aids",
      "Group discussions and pair work"
    ],
    ctaText: "Start your English learning journey today and build a strong foundation for future success."
  };

  return <EnglishLevelTemplate levelData={levelData} />;
};

export default EnglishLevelA1;
