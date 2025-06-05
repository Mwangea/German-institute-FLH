import EnglishLevelTemplate from "./EnglishLevelTemplate";

const EnglishLevelA2 = () => {
  const levelData = {
    level: "A2",
    title: "English Language Course: A2 Level (Elementary)",
    tagline: "Expand your basic English skills for everyday communication",
    duration: {
      regular: "3 months",
      intensive: "3 months",
      accelerated: "1.5 months"
    },
    price: "Kes 20,000",
    overview: "The A2 level builds upon the foundation established in A1, focusing on expanding vocabulary and grammar for more complex everyday situations. Students will develop greater confidence in using English for routine tasks and social interactions.",
    format: "Interactive lessons combining theory and practice. Emphasis on real-world communication scenarios and practical exercises to reinforce learning.",
    objectives: [
      "Communicate in simple and routine tasks requiring direct exchange of information",
      "Describe in simple terms aspects of background, immediate environment, and matters in areas of immediate need",
      "Handle short social exchanges and express opinions on familiar topics",
      "Understand and use common expressions related to areas of most immediate relevance"
    ],
    outcomes: [
      "Engage in basic conversations about familiar topics",
      "Understand and use common expressions for daily needs",
      "Write simple connected text on familiar topics",
      "Describe experiences, events, and future plans",
      "Handle most travel situations in English-speaking countries"
    ],
    targetAudience: "Students who have completed A1 level or have basic English knowledge",
    certification: "CEFRL A2 English Proficiency Certificate",
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
        "Understanding short, simple texts on familiar topics",
        "Finding specific information in everyday materials",
        "Reading and understanding simple personal letters",
        "Following simple written instructions"
      ],
      writing: [
        "Writing short, simple notes and messages",
        "Describing experiences and events",
        "Writing simple personal letters",
        "Composing short paragraphs about familiar topics"
      ]
    },
    courseMaterials: {
      coursebook: "English for Elementary Learners (A2 Level)",
      supplementary: [
        "Interactive online exercises",
        "Audio materials for listening practice",
        "Vocabulary flashcards and worksheets",
        "Practice tests and assessment materials"
      ]
    },
    assessment: {
      continuous: "Regular progress tests and speaking assessments",
      final: "Comprehensive written and oral examination"
    },
    teachingMethods: [
      "Task-based learning activities",
      "Pair and group work exercises",
      "Role-play and simulation tasks",
      "Interactive multimedia resources"
    ],
    ctaText: "Take your English skills to the next level and communicate with confidence in everyday situations."
  };

  return <EnglishLevelTemplate levelData={levelData} />;
};

export default EnglishLevelA2;
