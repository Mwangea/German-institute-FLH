//import ArabicLevelTemplate from "../templates/ArabicLevelTemplate";

import ArabicLevelTemplate from "./ArabicLevelTemplate";

const ArabicLevelC2 = () => {
  const levelData = {
    level: "C2",
    title: "Mastering Arabic",
    tagline: "Attaining full linguistic and cultural mastery",
    overview: "For near-fluent learners seeking elite command of Arabic, emphasizing idiomatic precision, cultural depth, and rhetorical finesse for academic, diplomatic, or literary excellence.",
    
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
    certification: "Arabic Language Certificate – Level C2",
    focusAreas: "Literature • Rhetoric • Cross-Cultural Nuance",
    price: "Kes 20,000",
    ctaText: "Achieve linguistic finesse indistinguishable from native speakers."
  };

  return <ArabicLevelTemplate levelData={levelData} />;
};

export default ArabicLevelC2;