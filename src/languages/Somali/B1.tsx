import SomaliLevelTemplate from './SomaliLevelTemplate';
import { BookOpen, GraduationCap, Users, Award } from 'lucide-react';

const SomaliB1 = () => {
  const levelData = {
    level: 'B1',
    title: 'Intermediate Somali',
    tagline: 'Develop your Somali skills to handle most situations and express yourself on familiar topics.',
    duration: '3-6 months',
    price: 'Kes 20,000',
    overview: 'Our B1 Somali course is designed for students who have completed A2 or have a solid foundation in Somali. You will develop your ability to handle most situations that may arise while traveling in Somali-speaking regions, express yourself on familiar topics, and understand the main points of clear standard input on familiar matters regularly encountered in work, school, and leisure.',
    format: 'Online and in-person classes available',
    objectives: [
      'Master complex grammar structures and verb aspects',
      'Expand vocabulary for professional and academic contexts',
      'Develop advanced reading comprehension skills',
      'Enhance writing skills for various purposes',
      'Improve fluency in conversations and discussions'
    ],
    outcomes: [
      'Understand the main points of clear standard input on familiar matters',
      'Deal with most situations likely to arise while traveling',
      'Produce simple connected text on familiar topics',
      'Describe experiences, events, dreams, and ambitions',
      'Give reasons and explanations for opinions and plans'
    ],
    targetAudience: 'Intermediate learners who have completed A2 level or have a solid foundation in Somali',
    certification: 'Upon successful completion, you will receive a B1 level certificate recognized by the Common European Framework of Reference for Languages (CEFR).',
    focusAreas: 'Intermediate language skills, professional communication, and cultural understanding',
    ctaText: 'Start Your Journey to Intermediate Somali Proficiency',
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
        description: 'Deepen your understanding of Somali-speaking cultures',
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
        name: 'Regular Plan',
        duration: '6 months',
        hours: '120 hours'
      },
      {
        name: 'Intensive Plan',
        duration: '3 months',
        hours: '180 hours'
      },
      {
        name: 'Super-Intensive Plan',
        duration: '2 months',
        hours: '240 hours'
      },
      {
        name: 'Accelerated Plan',
        duration: '1 month',
        hours: '300 hours'
      }
    ]
  };

  return <SomaliLevelTemplate levelData={levelData} />;
};

export default SomaliB1;
