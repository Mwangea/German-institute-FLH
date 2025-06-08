import DutchLevelTemplate from "./DutchLevelTemplate";

const DutchLevelA2 = () => {
  const levelData = {
    level: "A2",
    title: "Elementary Dutch",
    tagline: "Strengthening foundational skills for real-world use",
    overview: "Building upon your A1 foundation, this course helps you develop more confidence in using Dutch in everyday situations. You'll expand your vocabulary, improve your grammar, and enhance your ability to communicate in common social and practical contexts.",
    
    objectives: [
      "Expand vocabulary for daily life and social situations",
      "Master more complex grammar structures",
      "Improve conversational fluency",
      "Develop better reading and writing skills",
      "Enhance listening comprehension"
    ],
    
    outcomes: [
      "Communicate effectively in routine social situations",
      "Handle most travel and shopping interactions",
      "Describe experiences and immediate needs",
      "Write simple connected text on familiar topics",
      "Understand the main points of clear standard input"
    ],
    
    format: "Interactive lessons with practical exercises, role-plays, and group activities. Regular feedback and assessments to track progress.",
    
    targetAudience: "Students who have completed A1 or have basic Dutch knowledge",
    duration: "2 Months",
    certification: "Dutch A2 Level Certificate (CEFR)",
    focusAreas: "Social Interaction • Daily Life • Practical Communication",
    price: "Kes 20,000",
    ctaText: "Take your Dutch skills to the next level and communicate with confidence!",
    
    studyPlans: [
      {
        name: "Regular Study Plan",
        duration: "2 months",
        hoursPerDay: "1 hour/day"
      },
      {
        name: "Intensive Study Plan",
        duration: "2 months",
        hoursPerDay: "2 hours/day"
      },
      {
        name: "Super-Intensive Study Plan",
        duration: "2 months",
        hoursPerDay: "3 hours/day"
      },
      {
        name: "Accelerated Study Plan",
        duration: "2 months",
        hoursPerDay: "6 hours/day"
      }
    ],
    
    courseContent: [
      {
        title: "Expanded Vocabulary",
        items: [
          "Shopping and services vocabulary",
          "Health and medical terms",
          "Transportation and travel phrases",
          "Work and education terminology"
        ]
      },
      {
        title: "Grammar Development",
        items: [
          "Past tense and perfect tense",
          "Modal verbs and their usage",
          "Prepositions and conjunctions",
          "Comparative and superlative forms"
        ]
      },
      {
        title: "Speaking Skills",
        items: [
          "Expressing opinions and preferences",
          "Making requests and suggestions",
          "Describing past experiences",
          "Participating in group discussions"
        ]
      },
      {
        title: "Listening Comprehension",
        items: [
          "Understanding announcements and instructions",
          "Following conversations in social settings",
          "Comprehending basic news and media content"
        ]
      },
      {
        title: "Reading Skills",
        items: [
          "Reading short stories and articles",
          "Understanding forms and documents",
          "Interpreting simple instructions and guides"
        ]
      },
      {
        title: "Writing Practice",
        items: [
          "Writing personal letters and emails",
          "Composing short descriptions and stories",
          "Filling out forms and applications"
        ]
      }
    ],
    
    assessment: [
      "Regular vocabulary and grammar tests",
      "Speaking assessments and presentations",
      "Reading comprehension exercises",
      "Writing assignments and projects",
      "End-of-course examination"
    ],
    
    materials: {
      textbook: "Nederlands in Actie (Chapters 6–10)",
      additionalResources: [
        "Interactive online exercises",
        "Audio and video materials",
        "Vocabulary flashcards",
        "Practice worksheets",
        "Online discussion forums"
      ]
    },
    
    learningMethodology: "Our A2 course emphasizes practical communication through interactive activities, real-world scenarios, and collaborative learning. You'll practice language skills in authentic contexts while receiving personalized feedback to ensure steady progress."
  };

  return <DutchLevelTemplate levelData={levelData} />;
};

export default DutchLevelA2;

