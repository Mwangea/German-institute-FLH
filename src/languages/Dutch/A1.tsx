import DutchLevelTemplate from "./DutchLevelTemplate";

const DutchLevelA1 = () => {
  const levelData = {
    level: "A1",
    title: "Introduction to Dutch Language",
    tagline: "Build foundational skills in Dutch",
    overview: "The Dutch A1 course is ideal for absolute beginners or those with minimal exposure to the language. This foundational course introduces essential vocabulary, grammar, and expressions to help you navigate everyday situations in Dutch-speaking environments. Whether you're learning for travel, work, or personal growth, this course sets the stage for confident communication.",
    
    objectives: [
      "Master basic Dutch greetings and introductions",
      "Build essential vocabulary for daily life",
      "Understand and use simple grammar structures",
      "Develop basic listening and speaking skills",
      "Learn to read and write simple Dutch texts"
    ],
    
    outcomes: [
      "Communicate in basic Dutch in everyday situations",
      "Understand and use familiar expressions",
      "Introduce yourself and others in Dutch",
      "Ask and answer simple questions",
      "Read and write basic Dutch texts"
    ],
    
    format: "Interactive lessons with practical exercises, role-plays, and group activities. Regular feedback and assessments to track progress.",
    
    targetAudience: "Absolute beginners or those with minimal Dutch knowledge",
    duration: "Flexible duration based on study plan",
    certification: "Dutch A1 Level Certificate (CEFR)",
    focusAreas: "Basic Communication • Daily Life • Essential Grammar",
    price: "Kes 20,000",
    ctaText: "Begin your Dutch language journey today and open doors to new opportunities!",
    
    studyPlans: [
      {
        name: "Regular Study Plan",
        duration: "6 months",
        hoursPerDay: "1 hour/day"
      },
      {
        name: "Intensive Study Plan",
        duration: "3 months",
        hoursPerDay: "2 hours/day"
      },
      {
        name: "Super-Intensive Study Plan",
        duration: "2 months",
        hoursPerDay: "3 hours/day"
      },
      {
        name: "Accelerated Study Plan",
        duration: "1 month",
        hoursPerDay: "6 hours/day"
      }
    ],
    
    courseContent: [
      {
        title: "Introduction to Dutch",
        items: [
          "Basic greetings and farewells",
          "Introducing yourself and others",
          "Essential everyday expressions"
        ]
      },
      {
        title: "Vocabulary Development",
        items: [
          "Numbers, colors, and days of the week",
          "Common objects, food, places, and activities",
          "Everyday topics like family, weather, and hobbies"
        ]
      },
      {
        title: "Grammar Fundamentals",
        items: [
          "Basic sentence structure and word order",
          "Conjugating verbs in the present tense",
          "Forming questions and negatives"
        ]
      },
      {
        title: "Listening Skills",
        items: [
          "Understanding short dialogues and instructions",
          "Recognizing familiar words in spoken contexts"
        ]
      },
      {
        title: "Speaking Practice",
        items: [
          "Engaging in simple conversations",
          "Asking for and giving basic information",
          "Pronunciation practice"
        ]
      },
      {
        title: "Reading Comprehension",
        items: [
          "Interpreting signs, forms, and short messages",
          "Reading beginner-level texts and announcements"
        ]
      },
      {
        title: "Writing Skills",
        items: [
          "Writing basic sentences and short messages",
          "Completing simple forms and composing brief emails"
        ]
      }
    ],
    
    assessment: [
      "Regular quizzes and vocabulary checks",
      "Speaking exercises and oral evaluations",
      "Written assignments and end-of-course exam"
    ],
    
    materials: {
      textbook: "Nederlands in Actie (Chapters 1–5)",
      additionalResources: [
        "Audio recordings",
        "Online exercises",
        "Flashcards",
        "Vocabulary lists"
      ]
    },
    
    learningMethodology: "Our classes are highly interactive, emphasizing real-life communication and practical language use. Through role-plays, dialogues, and group tasks, you'll build a strong foundation in a supportive and engaging environment."
  };

  return <DutchLevelTemplate levelData={levelData} />;
};

export default DutchLevelA1;

