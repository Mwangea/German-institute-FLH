import PortugueseLevelTemplate from './PortugueseLevelTemplate';
import { BookOpen, GraduationCap, Users, Award } from 'lucide-react';

const PortugueseA1 = () => {
  const levelData = {
    level: 'A1',
    title: 'Beginner Portuguese',
    tagline: 'Start your Portuguese journey with essential vocabulary and basic communication skills.',
    description: 'Start your Portuguese journey with essential vocabulary and basic communication skills.',
    duration: '2 months',
    price: 'Kes 20,000',
    overview: 'Our A1 Portuguese course is designed for complete beginners. You will learn fundamental Portuguese vocabulary, basic grammar structures, and essential phrases for everyday situations. By the end of this course, you will be able to introduce yourself, ask and answer simple questions, and handle basic social interactions in Portuguese.',
    format: 'Online and in-person classes available',
    objectives: [
      'Master the Portuguese alphabet and pronunciation',
      'Learn essential vocabulary for daily life',
      'Understand and use basic grammar structures',
      'Develop basic reading and writing skills',
      'Build confidence in simple conversations'
    ],
    outcomes: [
      'Understand and use familiar everyday expressions',
      'Introduce yourself and others',
      'Ask and answer questions about personal details',
      'Interact in a simple way with Portuguese speakers',
      'Write simple sentences and short texts'
    ],
    targetAudience: 'Complete beginners with no prior knowledge of Portuguese',
    certification: 'Upon successful completion, you will receive an A1 level certificate recognized by the Common European Framework of Reference for Languages (CEFR).',
    focusAreas: 'Basic language skills, essential communication, and cultural introduction',
    ctaText: 'Start Your Portuguese Language Journey',
    learningAreas: [
      {
        title: 'Basic Grammar',
        description: 'Learn fundamental grammatical structures and expressions',
        icon: GraduationCap
      },
      {
        title: 'Essential Writing',
        description: 'Develop basic writing skills for simple communication',
        icon: BookOpen
      },
      {
        title: 'Cultural Introduction',
        description: 'Discover Portuguese-speaking cultures and traditions',
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
        duration: '1.5 months',
        hours: '180 hours'
      },
      {
        name: 'Flexible Plan',
        duration: '3 months',
        hours: '90 hours'
      },
      {
        name: 'Weekend Plan',
        duration: '4 months',
        hours: '60 hours'
      }
    ]
  };

  return <PortugueseLevelTemplate levelData={levelData} />;
};

export default PortugueseA1; 