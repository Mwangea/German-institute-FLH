import DutchLevelTemplate from "./DutchLevelTemplate";

const DutchLevelB1 = () => {
  const levelData = {
    level: "B1",
    title: "Intermediate Dutch",
    tagline: "Achieving independent language proficiency",
    overview: "This intermediate course helps you develop the ability to deal with most situations likely to arise while traveling in Dutch-speaking areas. You'll learn to express yourself on familiar topics and personal interests, and to describe experiences, events, dreams, and ambitions.",
    
    objectives: [
      "Master complex grammar structures and expressions",
      "Develop fluency in social and professional contexts",
      "Enhance ability to express opinions and arguments",
      "Improve comprehension of authentic materials",
      "Build confidence in formal and informal communication"
    ],
    
    outcomes: [
      "Handle most situations while traveling in Dutch-speaking areas",
      "Produce connected text on familiar topics",
      "Describe experiences, events, and ambitions",
      "Give reasons and explanations for opinions and plans",
      "Understand the main points of clear standard input"
    ],
    
    format: "Interactive lessons with practical exercises, role-plays, and group activities. Regular feedback and assessments to track progress.",
    
    targetAudience: "Students who have completed A2 or have intermediate Dutch knowledge",
    duration: "3 Months",
    certification: "Dutch B1 Level Certificate (CEFR)",
    focusAreas: "Independent Communication • Professional Contexts • Cultural Understanding",
    price: "Kes 30,000",
    ctaText: "Advance your Dutch proficiency and communicate with greater independence!",
    
    studyPlans: [
      {
        name: "Regular Study Plan",
        duration: "3 months",
        hoursPerDay: "1 hour/day"
      },
      {
        name: "Intensive Study Plan",
        duration: "3 months",
        hoursPerDay: "2 hours/day"
      },
      {
        name: "Super-Intensive Study Plan",
        duration: "3 months",
        hoursPerDay: "3 hours/day"
      },
      {
        name: "Accelerated Study Plan",
        duration: "3 months",
        hoursPerDay: "6 hours/day"
      }
    ],
    
    courseContent: [
      {
        title: "Advanced Grammar",
        items: [
          "Complex sentence structures",
          "Subjunctive mood and conditional sentences",
          "Passive voice and reported speech",
          "Advanced verb tenses and aspects"
        ]
      },
      {
        title: "Professional Communication",
        items: [
          "Business vocabulary and expressions",
          "Formal email and letter writing",
          "Meeting and presentation skills",
          "Professional networking language"
        ]
      },
      {
        title: "Cultural Topics",
        items: [
          "Dutch society and customs",
          "Current events and news analysis",
          "Cultural differences and similarities",
          "Regional variations in Dutch"
        ]
      },
      {
        title: "Speaking Skills",
        items: [
          "Debating and expressing opinions",
          "Giving presentations and speeches",
          "Participating in group discussions",
          "Handling complex social situations"
        ]
      },
      {
        title: "Reading Comprehension",
        items: [
          "Contemporary literature and articles",
          "Professional documents and reports",
          "News and media analysis",
          "Cultural and historical texts"
        ]
      },
      {
        title: "Writing Skills",
        items: [
          "Formal and informal correspondence",
          "Reports and summaries",
          "Opinion pieces and essays",
          "Creative writing exercises"
        ]
      }
    ],
    
    assessment: [
      "Regular progress tests and assignments",
      "Speaking presentations and debates",
      "Reading comprehension exercises",
      "Writing projects and essays",
      "Final examination and portfolio"
    ],
    
    materials: {
      textbook: "Nederlands in Actie (Chapters 11–15)",
      additionalResources: [
        "Authentic Dutch media materials",
        "Business and professional resources",
        "Online learning platform access",
        "Cultural materials and literature",
        "Practice tests and exercises"
      ]
    },
    
    learningMethodology: "Our B1 course combines structured learning with authentic materials and real-world applications. Through project-based learning, discussions, and cultural immersion, you'll develop the confidence to use Dutch independently in various contexts."
  };

  return <DutchLevelTemplate levelData={levelData} />;
};

export default DutchLevelB1;
