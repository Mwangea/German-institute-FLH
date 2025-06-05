import DutchLevelTemplate from "./DutchLevelTemplate";

const DutchLevelB2 = () => {
  const levelData = {
    level: "B2",
    title: "Upper-Intermediate Dutch",
    tagline: "Mastering complex communication and professional Dutch",
    overview: "This advanced course enables you to interact with a degree of fluency and spontaneity that makes regular interaction with native speakers quite possible without strain for either party. You'll develop the ability to understand complex ideas and express yourself clearly and in detail on a wide range of topics.",
    
    objectives: [
      "Master sophisticated grammar and vocabulary",
      "Develop advanced professional communication skills",
      "Enhance critical thinking and analysis in Dutch",
      "Improve ability to understand complex texts",
      "Build confidence in academic and professional settings"
    ],
    
    outcomes: [
      "Understand complex technical and professional discussions",
      "Express ideas fluently and spontaneously",
      "Produce clear, detailed text on complex subjects",
      "Interact with native speakers with confidence",
      "Handle abstract and concrete topics effectively"
    ],
    
    format: "Interactive lessons with practical exercises, role-plays, and group activities. Regular feedback and assessments to track progress.",
    
    targetAudience: "Students who have completed B1 or have upper-intermediate Dutch knowledge",
    duration: "Flexible duration based on study plan",
    certification: "Dutch B2 Level Certificate (CEFR)",
    focusAreas: "Professional Excellence • Academic Dutch • Advanced Communication",
    price: "Kes 20,000",
    ctaText: "Achieve professional-level Dutch proficiency and open new career opportunities!",
    
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
        title: "Advanced Language Structures",
        items: [
          "Complex grammatical constructions",
          "Idiomatic expressions and nuances",
          "Advanced vocabulary and terminology",
          "Stylistic variations and registers"
        ]
      },
      {
        title: "Professional Dutch",
        items: [
          "Business negotiations and meetings",
          "Technical documentation and reports",
          "Professional presentations and speeches",
          "Industry-specific terminology"
        ]
      },
      {
        title: "Academic Skills",
        items: [
          "Academic writing and research",
          "Critical analysis and argumentation",
          "Literature review and synthesis",
          "Academic presentations"
        ]
      },
      {
        title: "Media and Culture",
        items: [
          "News analysis and commentary",
          "Cultural and social issues",
          "Literary works and criticism",
          "Contemporary Dutch society"
        ]
      },
      {
        title: "Advanced Communication",
        items: [
          "Complex negotiations and discussions",
          "Public speaking and presentations",
          "Professional networking",
          "Cross-cultural communication"
        ]
      },
      {
        title: "Specialized Topics",
        items: [
          "Legal and technical Dutch",
          "Medical and scientific terminology",
          "Economic and financial language",
          "Political and social discourse"
        ]
      }
    ],
    
    assessment: [
      "Advanced proficiency tests",
      "Professional presentations and projects",
      "Academic writing assignments",
      "Complex reading comprehension tasks",
      "Final examination and portfolio review"
    ],
    
    materials: {
      textbook: "Nederlands in Actie (Chapters 16–20)",
      additionalResources: [
        "Professional Dutch materials",
        "Academic resources and journals",
        "Business case studies",
        "Media analysis tools",
        "Specialized vocabulary databases"
      ]
    },
    
    learningMethodology: "Our B2 course focuses on professional and academic excellence through advanced language practice, specialized content, and real-world applications. You'll engage with authentic materials and participate in sophisticated discussions to develop near-native proficiency."
  };

  return <DutchLevelTemplate levelData={levelData} />;
};

export default DutchLevelB2;

