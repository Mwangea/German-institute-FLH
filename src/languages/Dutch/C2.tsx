import DutchLevelTemplate from "./DutchLevelTemplate";

const DutchLevelC2 = () => {
  const levelData = {
    level: "C2",
    title: "Mastering Dutch",
    tagline: "Attaining full linguistic and cultural mastery",
    overview: "For near-fluent learners seeking elite command of Dutch, emphasizing idiomatic precision, cultural depth, and rhetorical finesse for academic, diplomatic, or literary excellence.",
    
    objectives: [
      "Polish complex grammar and advanced syntax",
      "Deepen understanding of cultural subtleties",
      "Foster abstract text analysis",
      "Refine eloquence in all communication"
    ],
    
    outcomes: [
      "Lead nuanced discussions with cultural sensitivity",
      "Critique complex academic/literary materials",
      "Produce stylistically refined texts",
      "Communicate at native-level fluency"
    ],
    
    format: "Authentic media, literature, and academic journals. Advanced debates, critical reflections, and rhetorical writing with expert evaluations.",
    
    targetAudience: "Completion of C1 or native-like proficiency required",
    duration: "3-6 months",
    certification: "Dutch Language Certificate – Level C2",
    focusAreas: "Literature • Rhetoric • Cross-Cultural Nuance",
    price: "Kes 20,000",
    ctaText: "Achieve linguistic finesse indistinguishable from native speakers.",
    
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
        title: "Mastery of Language",
        items: [
          "Advanced rhetorical devices and literary techniques",
          "Sophisticated idiomatic expressions",
          "Nuanced cultural references and allusions",
          "Elite-level vocabulary and terminology"
        ]
      },
      {
        title: "Academic Excellence",
        items: [
          "Advanced research methodology",
          "Academic publishing and peer review",
          "Complex theoretical discourse",
          "Specialized academic terminology"
        ]
      },
      {
        title: "Professional Leadership",
        items: [
          "Executive-level communication",
          "Strategic business negotiations",
          "Diplomatic language and protocol",
          "Industry leadership terminology"
        ]
      },
      {
        title: "Cultural Mastery",
        items: [
          "Literary criticism and analysis",
          "Historical and cultural context",
          "Contemporary social discourse",
          "Regional and dialectal expertise"
        ]
      },
      {
        title: "Media and Communication",
        items: [
          "Advanced media analysis",
          "Public speaking and rhetoric",
          "Journalistic excellence",
          "Digital communication mastery"
        ]
      },
      {
        title: "Specialized Domains",
        items: [
          "Legal and diplomatic expertise",
          "Scientific and technical mastery",
          "Medical and healthcare leadership",
          "Financial and economic discourse"
        ]
      }
    ],
    
    assessment: [
      "Elite proficiency evaluations",
      "Specialized domain mastery assessments",
      "Advanced research projects",
      "Professional portfolio development",
      "Comprehensive final examination"
    ],
    
    materials: {
      textbook: "Nederlands in Actie (Chapters 26–30)",
      additionalResources: [
        "Advanced academic materials",
        "Professional leadership resources",
        "Cultural and literary masterworks",
        "Specialized domain expertise materials",
        "Research and analysis tools"
      ]
    },
    
    learningMethodology: "Our C2 course emphasizes cultural mastery and professional excellence through advanced language practice, specialized content, and real-world applications. You'll engage with authentic materials and participate in sophisticated discussions to achieve native-like proficiency."
  };

  return <DutchLevelTemplate levelData={levelData} />;
};

export default DutchLevelC2;

