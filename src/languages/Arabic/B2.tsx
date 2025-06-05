import ArabicLevelTemplate from "./ArabicLevelTemplate";

const ArabicLevelB2 = () => {
  const levelData = {
    level: "B2",
    title: "Upper-Intermediate Arabic",
    tagline: "Toward advanced fluency in professional contexts",
    overview: "For learners with strong Arabic skills ready to tackle complex grammar, sophisticated vocabulary, and meaningful discussions on real-world issues and cultural themes.",
    
    objectives: [
      "Master advanced grammatical structures",
      "Broaden vocabulary for nuanced discussions",
      "Improve fluency in diverse settings",
      "Strengthen complex reading/writing skills"
    ],
    
    outcomes: [
      "Confidently discuss abstract/current topics",
      "Interpret advanced texts and multimedia",
      "Write detailed reports and opinion pieces",
      "Communicate fluently in professional contexts"
    ],
    
    format: "Debates, scenario-based dialogues, collaborative projects, and analytical reading. Includes essay writing with consistent feedback.",
    
    targetAudience: "Completion of B1 or equivalent proficiency required",
    duration: "3-6 months",
    certification: "Level B2 Arabic Language Certificate",
    focusAreas: "Professional Arabic • Media Analysis • Formal Correspondence",
    price: "Kes 30,000",
    ctaText: "Elevate your skills for academic, career, or advanced cultural engagement."
  };

  return <ArabicLevelTemplate levelData={levelData} />;
};

export default ArabicLevelB2;