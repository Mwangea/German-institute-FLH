import SpanishLevelTemplate from "./SpanishLevelTemplate";

const SpanishLevelA1 = () => {
  const levelData = {
    level: "A1",
    title: "Spanish Course: A1 Level (Beginner)",
    tagline: "Build your foundation in Spanish with essential communication skills",
    duration: {
      regular: "6 months (1 hour per day)",
      intensive: "3 months (2 hours per day)",
      superIntensive: "2 months (3 hours per day)",
      accelerated: "1 month (6 hours per day)"
    },
    price: "Kes 20,000",
    overview: "The Spanish A1 course is ideal for absolute beginners or learners with minimal prior exposure to the language. This foundational program introduces essential vocabulary, basic grammar structures, and practical communication skills to help you navigate simple everyday interactions in Spanish. By the end of the course, you'll be able to introduce yourself, ask and answer basic questions, and understand and express common ideas in both spoken and written forms.",
    format: "Interactive lessons combining theory and practice. Emphasis on basic vocabulary, essential grammar structures, and practical communication scenarios. Regular practice sessions, group activities, and personalized feedback to ensure steady progress.",
    objectives: [
      "Master basic Spanish pronunciation and intonation",
      "Learn essential vocabulary for daily communication",
      "Understand and use basic grammatical structures",
      "Develop fundamental reading and writing skills",
      "Build confidence in basic Spanish conversations"
    ],
    outcomes: [
      "Introduce yourself and others in Spanish",
      "Ask and answer basic questions about personal information",
      "Understand and use common expressions for daily needs",
      "Read and write simple texts in Spanish",
      "Navigate basic social situations in Spanish-speaking countries"
    ],
    targetAudience: "Absolute beginners with no prior knowledge of Spanish",
    certification: "CEFR A1 Level Certificate",
    focusAreas: {
      speaking: [
        "Basic greetings and introductions",
        "Telling the time",
        "Describing people and places",
        "Expressing preferences",
        "Talking about routines and activities"
      ],
      listening: [
        "Understanding simple greetings and questions",
        "Comprehending basic directions and instructions",
        "Recognizing familiar words and phrases",
        "Understanding short announcements in common settings"
      ],
      reading: [
        "Recognizing familiar words and phrases in short texts",
        "Understanding simple signs and menus",
        "Reading basic emails and messages",
        "Following simple written instructions"
      ],
      writing: [
        "Constructing simple sentences",
        "Completing basic forms",
        "Writing simple descriptions",
        "Communicating basic personal information"
      ]
    },
    courseMaterials: {
      coursebook: "Aula Internacional 1",
      supplementary: [
        "Pronunciation practice materials",
        "Vocabulary flashcards and worksheets",
        "Audio materials for listening practice",
        "Online exercises and practice materials",
        "A1 level mock tests and preparation materials"
      ]
    },
    assessment: {
      continuous: "Regular quizzes, speaking assessments, and writing assignments",
      final: "Comprehensive examination covering all language skills"
    },
    teachingMethods: [
      "Interactive classroom activities",
      "Role-playing and simulation exercises",
      "Audio-visual aids",
      "Group discussions and pair work",
      "Cultural immersion activities"
    ],
    ctaText: "Start your Spanish learning journey today and build a strong foundation for future success."
  };

  return <SpanishLevelTemplate levelData={levelData} />;
};

export default SpanishLevelA1;
