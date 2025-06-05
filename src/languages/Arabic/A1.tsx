//import ArabicLevelTemplate from "../templates/ArabicLevelTemplate";

import ArabicLevelTemplate from "./ArabicLevelTemplate";

const ArabicBasic1 = () => {
  const levelData = {
    level: "Basic 1",
    title: "Introduction to Arabic Language",
    tagline: "Build foundational skills in Modern Standard Arabic",
    overview: "This beginner-level course offers a comprehensive introduction to the Arabic language. Students will build essential skills in listening, speaking, reading, and writing. Through interactive and practical lessons, learners will explore the Arabic alphabet, pronunciation, and core vocabulary centered around everyday life  including greetings, family, numbers, and daily activities.",
    
    objectives: [
      "Learn the Arabic alphabet and pronunciation fundamentals",
      "Build a core vocabulary for everyday communication",
      "Develop basic listening and speaking abilities for simple conversations",
      "Understand introductory grammar and sentence structure"
    ],
    
    outcomes: [
      "Identify and write all Arabic letters",
      "Accurately pronounce words and basic phrases",
      "Introduce themselves and others in Arabic",
      "Talk about family, routines, and common objects",
      "Respond to simple instructions and questions with confidence"
    ],
    
    format: "The course features interactive lessons, guided exercises, and multimedia content. Learners will practice language skills through role-plays, conversations, and group activities. Regular feedback and assessments will support continuous improvement and skill development.",
    
    targetAudience: "No prior knowledge needed  this course is designed for absolute beginners.",
    duration: "3-6 months (flexible schedule)",
    certification: "Arabic A1 Proficiency Certificate",
    focusAreas: "Alphabet • Greetings • Daily Life Vocabulary",
    price: "Kes 20,000",
    ctaText: "Join us to discover the richness of Arabic language and culture. Whether you're preparing for travel, career advancement, or personal growth, this course will provide the foundational tools to start speaking Arabic with confidence."
  };

  return <ArabicLevelTemplate levelData={levelData} />;
};

export default ArabicBasic1;