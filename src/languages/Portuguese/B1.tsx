import PortugueseLevelTemplate from './PortugueseLevelTemplate';
import { BookOpen, GraduationCap, Users, Award } from 'lucide-react';

const PortugueseB1 = () => {
  const levelData = {
    level: 'B1',
    title: 'Intermediate Portuguese',
    tagline: 'Develop your Portuguese skills to handle most situations and express yourself on familiar topics.',
    description: 'Develop your Portuguese skills to handle most situations and express yourself on familiar topics.',
    duration: '3 months',
    price: 'Kes 30,000',
    overview: 'Our B1 Portuguese course is designed for students who have completed A2 or have a solid foundation in Portuguese. You will develop your ability to handle most situations that may arise while traveling in Portuguese-speaking countries, express yourself on familiar topics, and understand the main points of clear standard input on familiar matters regularly encountered in work, school, and leisure.',
    format: 'Online and in-person classes available',
    objectives: [
      'Master complex grammar structures',
      'Expand vocabulary for professional and academic contexts',
      'Develop advanced reading comprehension skills',
      'Enhance writing skills for various purposes',
      'Improve fluency in conversations'
    ],
    outcomes: [
      'Understand the main points of clear standard input on familiar matters',
      'Deal with most situations likely to arise while traveling',
      'Produce simple connected text on familiar topics',
      'Describe experiences, events, dreams, and ambitions',
      'Give reasons and explanations for opinions and plans'
    ],
    targetAudience: 'Intermediate learners who have completed A2 level or have a solid foundation in Portuguese',
    certification: 'Upon successful completion, you will receive a B1 level certificate recognized by the Common European Framework of Reference for Languages (CEFR).',
    focusAreas: 'Intermediate language skills, professional communication, and cultural understanding',
    ctaText: 'Start Your Journey to Intermediate Portuguese Proficiency',
    learningAreas: [
      {
        title: 'Grammar Mastery',
        description: 'Master complex grammatical structures and expressions',
        icon: GraduationCap
      },
      {
        title: 'Professional Writing',
        description: 'Develop writing skills for various professional contexts',
        icon: BookOpen
      },
      {
        title: 'Cultural Understanding',
        description: 'Deepen your understanding of Portuguese-speaking cultures',
        icon: Users
      },
      {
        title: 'Communication Skills',
        description: 'Enhance your ability to communicate effectively in various situations',
        icon: Award
      }
    ],
    assessment: 'Comprehensive evaluation through weekly quizzes, mid-term assessment, final examination, speaking assessment, and writing portfolio',
    resources: [
      'Course textbook and workbook',
      'Online learning platform access',
      'Audio materials for listening practice',
      'Practice exercises and worksheets',
      'Cultural resources and videos'
    ],
    studyPlans: [
      {
        name: 'Standard Plan',
        duration: '3 months',
        hours: '120 hours'
      },
      {
        name: 'Intensive Plan',
        duration: '3 months',
        hours: '180 hours'
      },
      {
        name: 'Flexible Plan',
        duration: '3 months',
        hours: '90 hours'
      },
      {
        name: 'Weekend Plan',
        duration: '3 months',
        hours: '60 hours'
      }
    ]
  };

  return <PortugueseLevelTemplate levelData={levelData} />;
};

export default PortugueseB1; 