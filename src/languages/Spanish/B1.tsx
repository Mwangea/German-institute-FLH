import SpanishLevelTemplate from "./SpanishLevelTemplate";

const SpanishLevelB1 = () => {
  const levelData = {
    level: "B1",
    title: "Spanish Course: B1 Level (Intermediate)",
    tagline: "Develop your Spanish skills for independent communication",
    duration: {
      regular: "3 months",
      intensive: "3 months",
      superIntensive: "3 months",
      accelerated: "3 months"
    },
    price: "Kes 30,000",
    overview: "The Spanish B1 course focuses on developing independent language use. Students will learn to handle most situations likely to arise while traveling in Spanish-speaking countries and express themselves on familiar topics with reasonable fluency. The course prepares students for the DELE B1 examination while building practical communication skills.",
    format: "Combined approach of structured learning and practical application. Emphasis on developing fluency and accuracy in real-world contexts. Regular practice sessions, cultural activities, and personalized feedback to ensure comprehensive progress.",
    objectives: [
      "Develop independent language use in various contexts",
      "Master intermediate-level grammar and vocabulary",
      "Enhance reading and writing proficiency",
      "Improve listening and speaking fluency",
      "Prepare for the DELE B1 examination"
    ],
    outcomes: [
      "Communicate effectively in most travel situations",
      "Express opinions and explain viewpoints on familiar topics",
      "Write clear, detailed text on subjects of personal interest",
      "Understand the main points of clear standard speech",
      "Handle most situations likely to arise in daily life"
    ],
    targetAudience: "Students who have completed A2 or have elementary Spanish proficiency",
    certification: "DELE B1 Certificate",
    focusAreas: {
      speaking: [
        "Participating in conversations on familiar topics",
        "Expressing opinions and giving reasons",
        "Describing experiences and events in detail",
        "Handling most travel situations confidently",
        "Discussing future plans and aspirations"
      ],
      listening: [
        "Understanding main points in clear standard speech",
        "Following extended speech and complex lines of argument",
        "Understanding most TV news and current affairs programs",
        "Recognizing different styles of spoken Spanish",
        "Comprehending cultural references and idioms"
      ],
      reading: [
        "Understanding texts that consist mainly of high-frequency language",
        "Reading articles and reports on contemporary issues",
        "Understanding the description of events and feelings",
        "Following the main points in longer texts",
        "Analyzing different types of written materials"
      ],
      writing: [
        "Writing simple connected text on familiar topics",
        "Describing experiences and impressions",
        "Writing personal letters and emails",
        "Expressing opinions and giving reasons",
        "Creating structured paragraphs and short essays"
      ]
    },
    courseMaterials: {
      coursebook: "Aula Internacional 3",
      supplementary: [
        "Authentic reading materials and articles",
        "Video and audio resources for listening practice",
        "Grammar and vocabulary workbooks",
        "Online practice platform access",
        "DELE B1 mock tests and preparation materials"
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
    ctaText: "Advance your Spanish skills to communicate independently in various situations."
  };

  return <SpanishLevelTemplate levelData={levelData} />;
};

export default SpanishLevelB1;
