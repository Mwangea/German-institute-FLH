import DutchLevelTemplate from "./DutchLevelTemplate";

const DutchLevelC1 = () => {
  const levelData = {
    level: "C1",
    title: "Advanced Dutch Proficiency",
    tagline: "Achieving near-native fluency and cultural mastery",
    overview: "This advanced course enables you to understand a wide range of demanding, longer texts, and recognize implicit meaning. You'll express yourself fluently and spontaneously without much obvious searching for expressions, and use language flexibly and effectively for social, academic, and professional purposes.",
    
    objectives: [
      "Master nuanced language use and cultural context",
      "Develop sophisticated communication strategies",
      "Enhance critical analysis and interpretation skills",
      "Achieve near-native fluency in all contexts",
      "Build expertise in specialized domains"
    ],
    
    outcomes: [
      "Understand complex texts and implicit meanings",
      "Express ideas fluently and spontaneously",
      "Use language flexibly for social and professional purposes",
      "Produce clear, well-structured, detailed text",
      "Handle complex academic and professional situations"
    ],
    
    format: "Interactive lessons with practical exercises, role-plays, and group activities. Regular feedback and assessments to track progress.",
    
    targetAudience: "Students who have completed B2 or have advanced Dutch knowledge",
    duration: "Flexible duration based on study plan",
    certification: "Dutch C1 Level Certificate (CEFR)",
    focusAreas: "Cultural Mastery • Academic Excellence • Professional Leadership",
    price: "Kes 20,000",
    ctaText: "Reach near-native proficiency and excel in Dutch-speaking environments!",
    
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
        title: "Advanced Language Mastery",
        items: [
          "Subtle nuances and cultural references",
          "Advanced idiomatic expressions",
          "Sophisticated vocabulary and terminology",
          "Stylistic excellence and register variation"
        ]
      },
      {
        title: "Academic Excellence",
        items: [
          "Advanced research and analysis",
          "Academic writing and publishing",
          "Complex argumentation and debate",
          "Specialized academic terminology"
        ]
      },
      {
        title: "Professional Leadership",
        items: [
          "Executive communication skills",
          "Strategic business language",
          "Professional negotiation and diplomacy",
          "Industry-specific expertise"
        ]
      },
      {
        title: "Cultural Depth",
        items: [
          "Literary analysis and criticism",
          "Cultural and historical context",
          "Contemporary social issues",
          "Regional and dialectal variations"
        ]
      },
      {
        title: "Media and Communication",
        items: [
          "Advanced media analysis",
          "Public speaking and rhetoric",
          "Journalistic writing and editing",
          "Digital communication strategies"
        ]
      },
      {
        title: "Specialized Domains",
        items: [
          "Legal and diplomatic Dutch",
          "Scientific and technical writing",
          "Medical and healthcare communication",
          "Financial and economic discourse"
        ]
      }
    ],
    
    assessment: [
      "Advanced proficiency evaluations",
      "Specialized domain assessments",
      "Research and analysis projects",
      "Professional portfolio development",
      "Comprehensive final examination"
    ],
    
    materials: {
      textbook: "Nederlands in Actie (Chapters 21–25)",
      additionalResources: [
        "Advanced academic materials",
        "Professional development resources",
        "Cultural and literary works",
        "Specialized domain materials",
        "Research and analysis tools"
      ]
    },
    
    learningMethodology: "Our C1 course emphasizes cultural immersion and professional excellence through advanced language practice, specialized content, and real-world applications. You'll engage with authentic materials and participate in sophisticated discussions to achieve near-native proficiency."
  };

  return <DutchLevelTemplate levelData={levelData} />;
};

export default DutchLevelC1;

