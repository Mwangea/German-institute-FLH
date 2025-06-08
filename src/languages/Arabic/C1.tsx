//import ArabicLevelTemplate from "./templates/ArabicLevelTemplate";

import ArabicLevelTemplate from "./ArabicLevelTemplate";

const ArabicLevelC1 = () => {
  const levelData = {
    level: "C1",
    title: "Advanced Arabic Proficiency",
    tagline: "Refining fluency to near-native command",
    overview: "For high-proficiency learners ready to engage with complex topics like literature, current affairs, and political discourse through deep language immersion.",
    
    objectives: [
      "Master intricate grammar and syntax",
      "Expand topic-specific vocabulary",
      "Strengthen critical analysis skills",
      "Elevate academic/professional writing"
    ],
    
    outcomes: [
      "Lead high-level debates and presentations",
      "Critically assess literary/expository texts",
      "Compose articulate essays and reports",
      "Navigate diverse scenarios with ease"
    ],
    
    format: "News articles, documentaries, literary extracts. Analytical discussions, formal presentations, and academic writing with personalized feedback.",
    
    targetAudience: "Completion of B2 or equivalent mastery required",
    duration: "3 months",
    certification: "Level C1 Arabic Language Certificate",
    focusAreas: "Academic Arabic • Journalism • Diplomatic Language",
    price: "Kes 30,000",
    ctaText: "Excel in high-level Arabic for media, diplomacy, or academia."
  };

  return <ArabicLevelTemplate levelData={levelData} />;
};

export default ArabicLevelC1;