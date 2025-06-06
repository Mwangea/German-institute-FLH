import TurkishLevelTemplate from './TurkishLevelTemplate';
import { BookOpen, GraduationCap, Users, Award } from 'lucide-react';

const TurkishA1 = () => {
  const levelData = {
    level: 'A1',
    title: 'Beginner Turkish',
    tagline: 'Start your Turkish journey with essential vocabulary and basic communication skills.',
    duration: '3-6 months',
    price: 'Kes 20,000',
    overview: 'Welcome to the A1 level of the Turkish Language Course. This beginner course is designed for students with no prior knowledge of Turkish, providing a foundation in basic language skills. By the end of this course, you will be able to understand and use familiar everyday expressions and very basic phrases aimed at satisfying concrete needs.',
    format: 'Online and in-person classes available',
    objectives: [
      'Introduce the Turkish alphabet and pronunciation',
      'Develop basic listening, speaking, reading, and writing skills',
      'Enable students to understand and use common greetings and introductions',
      'Provide the ability to ask and answer simple questions on familiar topics',
      'Master basic vocabulary for daily life situations'
    ],
    outcomes: [
      'Recognize and use the Turkish alphabet and sounds',
      'Greet and introduce themselves in Turkish',
      'Use simple phrases and describe themselves and others',
      'Understand basic vocabulary related to common topics',
      'Participate in simple conversations about personal and everyday matters'
    ],
    targetAudience: 'Complete beginners with no prior knowledge of Turkish',
    certification: 'Upon successful completion, you will receive an A1 level certificate recognized by the Common European Framework of Reference for Languages (CEFR).',
    focusAreas: 'Basic language skills, essential communication, and cultural introduction',
    ctaText: 'Start Your Turkish Language Journey',
    learningAreas: [
      {
        title: 'Turkish Alphabet',
        description: 'Master the Turkish alphabet and pronunciation',
        icon: GraduationCap
      },
      {
        title: 'Basic Grammar',
        description: 'Learn fundamental grammatical structures and expressions',
        icon: BookOpen
      },
      {
        title: 'Cultural Introduction',
        description: 'Discover Turkish culture and traditions',
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
      'Coursebook: Turkish for Beginners',
      'Audio-visual materials for listening and pronunciation',
      'Online resources for additional practice',
      'Practice exercises and worksheets',
      'Cultural resources and videos'
    ],
    studyPlans: [
      {
        name: 'Regular Plan',
        duration: '6 months',
        hours: '1 hour/day'
      },
      {
        name: 'Intensive Plan',
        duration: '3 months',
        hours: '2 hours/day'
      },
      {
        name: 'Super-Intensive Plan',
        duration: '2 months',
        hours: '3 hours/day'
      },
      {
        name: 'Accelerated Plan',
        duration: '1 month',
        hours: '6 hours/day'
      }
    ]
  };

  return <TurkishLevelTemplate levelData={levelData} />;
};

export default TurkishA1;
