import SomaliLevelTemplate from './SomaliLevelTemplate';
import { BookOpen, GraduationCap, Users, Award } from 'lucide-react';

const SomaliA1 = () => {
  const levelData = {
    level: 'A1',
    title: 'Beginner Somali',
    tagline: 'Start your Somali journey with essential vocabulary and basic communication skills.',
    duration: '3-6 months',
    price: 'Kes 20,000',
    overview: 'The A1 level of the Somali Language Course is designed for absolute beginners. This course provides foundational skills in Somali, enabling students to understand and use everyday expressions and basic phrases. By the end of the course, learners will be able to introduce themselves and others, ask and answer questions about personal details, and engage in simple interactions.',
    format: 'Online and in-person classes available',
    objectives: [
      'Understand and use basic Somali phrases and expressions',
      'Introduce oneself and others in Somali',
      'Ask and answer questions about personal details',
      'Interact in a simple manner with Somali speakers',
      'Master the Somali alphabet and basic pronunciation'
    ],
    outcomes: [
      'Recognize and use the Somali alphabet and sounds',
      'Greet and introduce themselves in Somali',
      'Use simple phrases and describe themselves and others',
      'Understand basic vocabulary related to common topics',
      'Participate in simple conversations about personal and everyday matters'
    ],
    targetAudience: 'Complete beginners with no prior knowledge of Somali',
    certification: 'Upon successful completion, you will receive an A1 level certificate recognized by the Common European Framework of Reference for Languages (CEFR).',
    focusAreas: 'Basic language skills, essential communication, and cultural introduction',
    ctaText: 'Start Your Somali Language Journey',
    learningAreas: [
      {
        title: 'Somali Alphabet',
        description: 'Master the Somali script and pronunciation',
        icon: GraduationCap
      },
      {
        title: 'Basic Grammar',
        description: 'Learn fundamental grammatical structures and expressions',
        icon: BookOpen
      },
      {
        title: 'Cultural Introduction',
        description: 'Discover Somali culture and traditions',
        icon: Users
      },
      {
        title: 'Basic Communication',
        description: 'Build confidence in simple everyday conversations',
        icon: Award
      }
    ],
    assessment: 'Regular quizzes and tests to track progress, oral and written assignments, and final exam to evaluate overall proficiency',
    resources: [
      'Custom A1 Somali textbook and workbook',
      'Audio-visual materials for listening and pronunciation',
      'Online resources for additional practice',
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

export default SomaliA1;
