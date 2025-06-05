import ArabicLevelTemplate from "./ArabicLevelTemplate";

const ArabicLevelB1 = () => {
  const levelData = {
    level: "B1",
    title: "Intermediate Arabic",
    tagline: "Towards language independence in real-world contexts",
    overview: "This course is tailored for learners who have mastered the basics and are ready to move toward greater language independence. Students will explore advanced grammatical structures and communicate across diverse topics including culture, society, and current events.",
    
    objectives: [
      "Strengthen command of intermediate grammar and sentence construction",
      "Broaden vocabulary for meaningful discussions on abstract topics",
      "Improve fluency in formal and informal conversations",
      "Advance reading/writing abilities for structured texts"
    ],
    
    outcomes: [
      "Participate in detailed conversations with personal views and arguments",
      "Comprehend moderately complex written and spoken Arabic",
      "Draft clear texts like reports, emails, and narratives",
      "Interact effectively in social and semi-professional settings"
    ],
    
    format: "Task-based lessons with debates, group discussions, role-plays, and listening comprehension. Includes reading tasks and compositions with personalized feedback.",
    
    targetAudience: "Students who completed A2 or equivalent. Requires confidence in basic communication.",
    duration: "3-6 months",
    certification: "Arabic Language Level B1 Certificate",
    focusAreas: "Debates • Current Events • Formal Writing",
    price: "Kes 20,000",
    ctaText: "Advance your fluency for academic, work, or personal goals with sophisticated conversation skills."
  };

  return <ArabicLevelTemplate levelData={levelData} />;
};

export default ArabicLevelB1;