import ArabicLevelTemplate from "./ArabicLevelTemplate";

const ArabicLevelA2 = () => {
  const levelData = {
    level: "A2",
    title: "Basic 2 Arabic",
    tagline: "Strengthening foundational skills for real-world use",
    overview: "Designed for learners with foundational Arabic, this course strengthens abilities across all areas. Students will broaden vocabulary, deepen grammar, and sharpen skills through real-life themes like travel, shopping, and health.",
    
    objectives: [
      "Broaden essential vocabulary and grammar proficiency",
      "Improve conversational fluency for structured dialogues",
      "Build confidence in reading/writing short texts",
      "Enhance listening comprehension"
    ],
    
    outcomes: [
      "Communicate effectively on familiar topics with basic opinions",
      "Understand short Arabic texts with greater ease",
      "Compose simple paragraphs, emails, and notes",
      "Follow spoken Arabic in everyday scenarios"
    ],
    
    format: "Dynamic lessons with discussions, role-plays, and group tasks. Includes targeted reading/writing exercises with regular assessments.",
    
    targetAudience: "Completion of Basic 1 (A1) or equivalent required",
    duration: "2 months",
    certification: "Level A2 Certificate in Arabic",
    focusAreas: "Daily Life • Shopping • Health",
    price: "Kes 20,000",
    ctaText: "Deepen your connection to Arabic culture and communicate more confidently."
  };

  return <ArabicLevelTemplate levelData={levelData} />;
};

export default ArabicLevelA2;