import EnglishLevelTemplate from "./EnglishLevelTemplate";

const EnglishLevelB1 = () => {
  const levelData = {
    level: "B1",
    title: "English Language Course: B1 Level (Intermediate)",
    tagline: "Develop your English skills for independent communication",
    duration: {
      regular: "3 months",
      intensive: "3 months",
      accelerated: "1.5 months"
    },
    price: "Kes 30,000",
    overview: "The B1 level focuses on developing independent language use. Students will learn to handle most situations likely to arise while traveling in English-speaking countries and express themselves on familiar topics with reasonable fluency.",
    format: "Combined approach of structured learning and practical application. Emphasis on developing fluency and accuracy in real-world contexts.",
    objectives: [
      "Understand the main points of clear standard input on familiar matters",
      "Deal with most situations likely to arise while traveling",
      "Produce simple connected text on familiar topics",
      "Describe experiences, events, dreams, and ambitions"
    ],
    outcomes: [
      "Communicate effectively in most travel situations",
      "Express opinions and explain viewpoints on familiar topics",
      "Write clear, detailed text on subjects of personal interest",
      "Understand the main points of clear standard speech",
      "Handle most situations likely to arise in daily life"
    ],
    targetAudience: "Students who have completed A2 level or have elementary English proficiency",
    certification: "CEFRL B1 English Proficiency Certificate",
    focusAreas: {
      speaking: [
        "Participating in conversations on familiar topics",
        "Expressing opinions and giving reasons",
        "Describing experiences and events in detail",
        "Handling most travel situations confidently"
      ],
      listening: [
        "Understanding main points in clear standard speech",
        "Following extended speech and complex lines of argument",
        "Understanding most TV news and current affairs programs",
        "Recognizing different styles of spoken English"
      ],
      reading: [
        "Understanding texts that consist mainly of high-frequency language",
        "Reading articles and reports on contemporary issues",
        "Understanding the description of events and feelings",
        "Following the main points in longer texts"
      ],
      writing: [
        "Writing simple connected text on familiar topics",
        "Describing experiences and impressions",
        "Writing personal letters and emails",
        "Expressing opinions and giving reasons"
      ]
    },
    courseMaterials: {
      coursebook: "English for Intermediate Learners (B1 Level)",
      supplementary: [
        "Authentic reading materials and articles",
        "Video and audio resources for listening practice",
        "Grammar and vocabulary workbooks",
        "Online practice platform access"
      ]
    },
    assessment: {
      continuous: "Regular progress tests, presentations, and writing assignments",
      final: "Comprehensive examination covering all language skills"
    },
    teachingMethods: [
      "Discussion-based learning",
      "Project work and presentations",
      "Authentic material analysis",
      "Interactive group activities"
    ],
    ctaText: "Advance your English skills to communicate independently in various situations."
  };

  return <EnglishLevelTemplate levelData={levelData} />;
};

export default EnglishLevelB1;
