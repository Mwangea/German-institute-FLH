import RussianLevelTemplate from './RussianLevelTemplate';
import { BookOpen, GraduationCap, Users, Award } from 'lucide-react';

const RussianA1 = () => {
  const levelData = {
    level: 'A1',
    title: 'Beginner Russian',
    tagline: 'Start your Russian journey with essential vocabulary and basic communication skills.',
    description: 'Start your Russian journey with essential vocabulary and basic communication skills.',
    duration: '2 months',
    price: 'Kes 20,000',
    overview: 'The Russian A1 Beginner Course is designed for learners with no prior experience in the language. It focuses on developing basic communication skills through foundational vocabulary, grammar, and cultural exposure. Students will learn to understand and use everyday expressions and simple phrases to meet basic communication needs.',
    format: 'Online and in-person classes available',
    objectives: [
      'Understand and use familiar everyday expressions and basic phrases for common needs',
      'Introduce themselves and others, and ask/answer questions about personal details',
      'Engage in simple conversations, provided the other person speaks slowly and clearly',
      'Master the Cyrillic alphabet and basic pronunciation rules',
      'Build a foundation in basic grammar and vocabulary'
    ],
    outcomes: [
      'Understand and use familiar everyday expressions',
      'Introduce yourself and others',
      'Ask and answer questions about personal details',
      'Interact in a simple way with Russian speakers',
      'Write simple sentences and short texts'
    ],
    targetAudience: 'Complete beginners with no prior knowledge of Russian',
    certification: 'Upon successful completion, you will receive an A1 level certificate recognized by the Common European Framework of Reference for Languages (CEFR).',
    focusAreas: 'Basic language skills, essential communication, and cultural introduction',
    ctaText: 'Start Your Russian Language Journey',
    learningAreas: [
      {
        title: 'Cyrillic Alphabet',
        description: 'Master the Russian alphabet and basic phonetics',
        icon: GraduationCap
      },
      {
        title: 'Basic Grammar',
        description: 'Learn fundamental grammatical structures and expressions',
        icon: BookOpen
      },
      {
        title: 'Cultural Introduction',
        description: 'Discover Russian culture and traditions',
        icon: Users
      },
      {
        title: 'Basic Communication',
        description: 'Build confidence in simple everyday conversations',
        icon: Award
      }
    ],
    assessment: 'Comprehensive evaluation through weekly quizzes, mid-term assessment, final examination, speaking assessment, and writing portfolio',
    resources: [
      'Course textbook and workbook',
      'Online learning platform access',
      'Audio materials for pronunciation practice',
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

export default RussianA1;
