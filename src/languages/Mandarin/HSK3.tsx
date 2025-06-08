import MandarinLevelTemplate from "./MandarinLevelTemplate";

const MandarinLevelHSK3 = () => {
  const levelData = {
    level: "HSK 3",
    title: "Mandarin Chinese Course: HSK 3 Level (Intermediate)",
    tagline: "Develop your Mandarin skills for independent communication",
    duration: {
      regular: "3 months",
      intensive: "3 months",
      accelerated: "3 months"
    },
    price: "Kes 30,000",
    overview: "The HSK 3 course focuses on developing independent language use. Students will learn to handle most situations likely to arise while traveling in Chinese-speaking countries and express themselves on familiar topics with reasonable fluency. The course prepares students for the HSK Level 3 examination while building practical communication skills.",
    format: "Combined approach of structured learning and practical application. Emphasis on developing fluency and accuracy in real-world contexts. Regular practice sessions, cultural activities, and personalized feedback to ensure comprehensive progress.",
    objectives: [
      "Develop independent language use in various contexts",
      "Master intermediate-level grammar and vocabulary",
      "Enhance reading and writing proficiency",
      "Improve listening and speaking fluency",
      "Prepare for the HSK 3 examination"
    ],
    outcomes: [
      "Communicate effectively in most travel situations",
      "Express opinions and explain viewpoints on familiar topics",
      "Write clear, detailed text on subjects of personal interest",
      "Understand the main points of clear standard speech",
      "Handle most situations likely to arise in daily life"
    ],
    targetAudience: "Students who have completed HSK 2 or have elementary Mandarin proficiency",
    certification: "HSK Level 3 Certificate",
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
        "Recognizing different styles of spoken Chinese"
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
      coursebook: "HSK Standard Course 3",
      supplementary: [
        "Authentic reading materials and articles",
        "Video and audio resources for listening practice",
        "Grammar and vocabulary workbooks",
        "Online practice platform access",
        "HSK 3 mock tests and preparation materials"
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
      "Interactive group activities",
      "Cultural exchange sessions"
    ],
    ctaText: "Advance your Mandarin skills to communicate independently in various situations."
  };

  return <MandarinLevelTemplate levelData={levelData} />;
};

export default MandarinLevelHSK3;
