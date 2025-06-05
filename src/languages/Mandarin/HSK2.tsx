import MandarinLevelTemplate from "./MandarinLevelTemplate";

const MandarinLevelHSK2 = () => {
  const levelData = {
    level: "HSK 2",
    title: "Mandarin Chinese Course: HSK 2 Level (Elementary)",
    tagline: "Expand your basic Mandarin skills for everyday communication",
    duration: {
      regular: "3-6 months",
      intensive: "2-3 months",
      accelerated: "1-2 months"
    },
    price: "Kes 20,000",
    overview: "The HSK 2 course builds upon the foundation established in HSK 1, focusing on expanding vocabulary and grammar for more complex everyday situations. Students will develop greater confidence in using Mandarin for routine tasks and social interactions, while preparing for the HSK Level 2 examination.",
    format: "Interactive lessons combining theory and practice. Emphasis on expanding vocabulary, more complex grammar structures, and practical communication scenarios. Regular practice sessions and personalized feedback to ensure steady progress.",
    objectives: [
      "Expand vocabulary for daily communication",
      "Master more complex grammatical structures",
      "Improve reading and writing skills",
      "Enhance listening and speaking abilities",
      "Prepare for the HSK 2 examination"
    ],
    outcomes: [
      "Communicate effectively in daily life situations",
      "Understand and use common expressions for daily needs",
      "Read and write more complex Chinese characters",
      "Participate in conversations about familiar topics",
      "Handle most travel situations in Chinese-speaking countries"
    ],
    targetAudience: "Students who have completed HSK 1 or have basic Mandarin knowledge",
    certification: "HSK Level 2 Certificate",
    focusAreas: {
      speaking: [
        "Describing daily routines and activities",
        "Expressing opinions and preferences",
        "Making simple plans and arrangements",
        "Handling basic social situations"
      ],
      listening: [
        "Understanding main points in clear standard speech",
        "Following short narratives and descriptions",
        "Comprehending simple announcements and instructions",
        "Recognizing key information in conversations"
      ],
      reading: [
        "Understanding short texts on familiar topics",
        "Reading and understanding simple personal letters",
        "Finding specific information in everyday materials",
        "Following simple written instructions"
      ],
      writing: [
        "Writing short notes and messages",
        "Describing experiences and events",
        "Writing simple personal letters",
        "Composing short paragraphs about familiar topics"
      ]
    },
    courseMaterials: {
      coursebook: "HSK Standard Course 2",
      supplementary: [
        "Character writing workbooks",
        "Audio materials for listening practice",
        "Vocabulary flashcards and worksheets",
        "Online exercises and practice materials",
        "HSK 2 mock tests and preparation materials"
      ]
    },
    assessment: {
      continuous: "Regular progress tests, character writing assessments, and speaking evaluations",
      final: "Mock HSK 2 examination covering all language skills"
    },
    teachingMethods: [
      "Task-based learning activities",
      "Pair and group work exercises",
      "Role-play and simulation tasks",
      "Interactive multimedia resources",
      "Cultural immersion activities"
    ],
    ctaText: "Take your Mandarin skills to the next level and communicate with confidence in everyday situations."
  };

  return <MandarinLevelTemplate levelData={levelData} />;
};

export default MandarinLevelHSK2;
