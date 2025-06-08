import SpanishLevelTemplate from "./SpanishLevelTemplate";

const SpanishLevelB2 = () => {
  const levelData = {
    level: "B2",
    title: "Spanish Course: B2 Level (Upper Intermediate)",
    tagline: "Master complex topics and express opinions with confidence",
    duration: {
      regular: "3 months",
      intensive: "3 months",
      superIntensive: "3 months",
      accelerated: "3 months"
    },
    price: "Kes 30,000",
    overview: "The Spanish B2 course focuses on developing advanced language skills for professional and academic contexts. Students will learn to understand complex ideas, express themselves fluently and spontaneously, and interact with native speakers with a high degree of fluency. The course prepares students for the DELE B2 examination while building sophisticated communication skills.",
    format: "Advanced language training focusing on complex topics and professional communication. Emphasis on developing sophisticated language use, cultural understanding, and academic skills. Regular practice sessions, research projects, and personalized feedback to ensure comprehensive progress.",
    objectives: [
      "Master complex grammatical structures and vocabulary",
      "Develop advanced reading and writing skills",
      "Enhance listening and speaking proficiency",
      "Build professional and academic language skills",
      "Prepare for the DELE B2 examination"
    ],
    outcomes: [
      "Understand complex ideas in both concrete and abstract topics",
      "Interact with native speakers with a high degree of fluency",
      "Produce clear, detailed text on a wide range of subjects",
      "Present clear, detailed descriptions of complex subjects",
      "Handle professional and academic situations effectively"
    ],
    targetAudience: "Students who have completed B1 or have intermediate Spanish proficiency",
    certification: "DELE B2 Certificate",
    focusAreas: {
      speaking: [
        "Participating in detailed discussions on complex topics",
        "Presenting clear, detailed descriptions and arguments",
        "Expressing viewpoints and defending opinions",
        "Handling professional and academic interactions",
        "Using appropriate register and style in different contexts"
      ],
      listening: [
        "Understanding extended speech and complex arguments",
        "Following academic lectures and professional presentations",
        "Understanding most TV news and current affairs programs",
        "Recognizing different accents and speech patterns",
        "Comprehending subtle nuances in communication"
      ],
      reading: [
        "Understanding complex texts on various topics",
        "Reading and analyzing academic articles",
        "Understanding contemporary literary prose",
        "Following complex lines of argument",
        "Interpreting cultural and social references"
      ],
      writing: [
        "Writing clear, detailed text on complex subjects",
        "Composing well-structured essays and reports",
        "Writing formal letters and professional emails",
        "Expressing viewpoints with supporting arguments",
        "Creating coherent and cohesive texts"
      ]
    },
    courseMaterials: {
      coursebook: "Aula Internacional 4",
      supplementary: [
        "Academic articles and research papers",
        "Professional communication materials",
        "Advanced grammar and vocabulary resources",
        "Online learning platform with practice exercises",
        "DELE B2 mock tests and preparation materials"
      ]
    },
    assessment: {
      continuous: "Regular assessments including presentations, essays, and projects",
      final: "Comprehensive examination with focus on professional and academic skills"
    },
    teachingMethods: [
      "Academic discussion and debate",
      "Professional communication practice",
      "Critical analysis of complex texts",
      "Project-based learning",
      "Research and presentation activities"
    ],
    ctaText: "Elevate your Spanish skills to professional and academic excellence."
  };

  return <SpanishLevelTemplate levelData={levelData} />;
};

export default SpanishLevelB2;
