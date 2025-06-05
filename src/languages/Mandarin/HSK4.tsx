import MandarinLevelTemplate from "./MandarinLevelTemplate";

const MandarinLevelHSK4 = () => {
  const levelData = {
    level: "HSK 4",
    title: "Mandarin Chinese Course: HSK 4 Level (Upper-Intermediate)",
    tagline: "Master Mandarin for professional and academic purposes",
    duration: {
      regular: "3-6 months",
      intensive: "2-3 months",
      accelerated: "1-2 months"
    },
    price: "Kes 20,000",
    overview: "The HSK 4 course is designed for students who want to achieve a higher level of Mandarin proficiency for professional and academic purposes. This level focuses on developing advanced language skills, including complex grammar structures, extensive vocabulary, and sophisticated communication abilities. The course prepares students for the HSK Level 4 examination while building practical skills for professional and academic contexts.",
    format: "Advanced language training with emphasis on professional and academic language use. Focus on developing sophisticated communication skills, cultural understanding, and practical application in various contexts. Regular practice sessions, research projects, and personalized feedback to ensure comprehensive progress.",
    objectives: [
      "Master advanced grammar and vocabulary",
      "Develop professional and academic language skills",
      "Enhance reading and writing proficiency",
      "Improve listening and speaking fluency",
      "Prepare for the HSK 4 examination"
    ],
    outcomes: [
      "Communicate effectively in professional settings",
      "Understand and use complex language structures",
      "Write clear, detailed text on various subjects",
      "Express viewpoints with supporting arguments",
      "Handle most professional and academic situations"
    ],
    targetAudience: "Students who have completed HSK 3 or have intermediate Mandarin proficiency",
    certification: "HSK Level 4 Certificate",
    focusAreas: {
      speaking: [
        "Participating in detailed discussions on complex topics",
        "Presenting clear, detailed descriptions and arguments",
        "Expressing viewpoints and defending opinions",
        "Handling professional and academic interactions"
      ],
      listening: [
        "Understanding extended speech and complex arguments",
        "Following academic lectures and professional presentations",
        "Understanding most TV news and current affairs programs",
        "Recognizing different accents and speech patterns"
      ],
      reading: [
        "Understanding complex texts on various topics",
        "Reading and analyzing academic articles",
        "Understanding contemporary literary prose",
        "Following complex lines of argument"
      ],
      writing: [
        "Writing clear, detailed text on complex subjects",
        "Composing well-structured essays and reports",
        "Writing formal letters and professional emails",
        "Expressing viewpoints with supporting arguments"
      ]
    },
    courseMaterials: {
      coursebook: "HSK Standard Course 4",
      supplementary: [
        "Academic articles and research papers",
        "Professional communication materials",
        "Advanced grammar and vocabulary resources",
        "Online learning platform with practice exercises",
        "HSK 4 mock tests and preparation materials"
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
    ctaText: "Elevate your Mandarin skills to professional and academic excellence."
  };

  return <MandarinLevelTemplate levelData={levelData} />;
};

export default MandarinLevelHSK4;
