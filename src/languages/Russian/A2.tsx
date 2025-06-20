import RussianLevelTemplate from './RussianLevelTemplate';
import { BookOpen, GraduationCap, Users, Award } from 'lucide-react';

const RussianA2 = () => {
  const levelData = {
    level: 'A2',
    title: 'Elementary Russian',
    tagline: 'Build on your basic Russian skills and expand your ability to communicate in everyday situations.',
    description: 'Build on your basic Russian skills and expand your ability to communicate in everyday situations.',
    duration: '2 months',
    price: 'Kes 20,000',
    overview: 'Our A2 Russian course is designed for students who have completed A1 or have basic knowledge of Russian. You will expand your vocabulary, learn more complex grammar structures, and develop your ability to communicate in a wider range of everyday situations. By the end of this course, you will be able to handle most common social interactions and express yourself on familiar topics.',
    format: 'Online and in-person classes available',
    objectives: [
      'Expand vocabulary for common situations and daily activities',
      'Master more complex grammar structures and verb conjugations',
      'Improve reading comprehension of simple texts',
      'Develop writing skills for short texts and messages',
      'Enhance conversational abilities in familiar contexts'
    ],
    outcomes: [
      'Understand sentences and frequently used expressions',
      'Communicate in simple and routine tasks',
      'Describe aspects of your background and immediate environment',
      'Handle most travel situations in Russian-speaking countries',
      'Write short, simple notes and messages'
    ],
    targetAudience: 'Elementary learners who have completed A1 level or have basic knowledge of Russian',
    certification: 'Upon successful completion, you will receive an A2 level certificate recognized by the Common European Framework of Reference for Languages (CEFR).',
    focusAreas: 'Elementary language skills, everyday communication, and cultural awareness',
    ctaText: 'Start Your Journey to Elementary Russian Proficiency',
    learningAreas: [
      {
        title: 'Grammar Development',
        description: 'Master more complex grammatical structures and expressions',
        icon: GraduationCap
      },
      {
        title: 'Practical Writing',
        description: 'Develop writing skills for everyday situations',
        icon: BookOpen
      },
      {
        title: 'Cultural Awareness',
        description: 'Learn about Russian-speaking cultures and customs',
        icon: Users
      },
      {
        title: 'Communication Skills',
        description: 'Build confidence in everyday conversations',
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
        duration: '2 months',
        hours: '120 hours'
      },
      {
        name: 'Intensive Plan',
        duration: '2 months',
        hours: '180 hours'
      },
      {
        name: 'Flexible Plan',
        duration: '2 months',
        hours: '90 hours'
      },
      {
        name: 'Weekend Plan',
        duration: '2 months',
        hours: '60 hours'
      }
    ]
  };

  return <RussianLevelTemplate levelData={levelData} />;
};

export default RussianA2;
