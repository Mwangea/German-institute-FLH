import PortugueseLevelTemplate from './PortugueseLevelTemplate';
import { BookOpen, GraduationCap, Users, Award } from 'lucide-react';

const PortugueseC1 = () => {
  const levelData = {
    level: 'C1',
    title: 'Advanced Portuguese',
    tagline: 'Achieve near-native proficiency in Portuguese and master complex language structures.',
    description: 'Achieve near-native proficiency in Portuguese and master complex language structures.',
    duration: '3 months',
    price: 'Kes 20,000',
    overview: 'Our C1 Portuguese course is designed for students who have completed B2 or have an advanced level in Portuguese. You will develop your ability to understand a wide range of demanding, longer texts, and recognize implicit meaning. You will express yourself fluently and spontaneously without much obvious searching for expressions, use language flexibly and effectively for social, academic, and professional purposes, and produce clear, well-structured, detailed text on complex subjects.',
    format: 'Online and in-person classes available',
    objectives: [
      'Master nuanced grammar and expressions',
      'Develop sophisticated vocabulary',
      'Enhance critical analysis and interpretation',
      'Perfect academic and professional writing',
      'Achieve native-like fluency and accuracy'
    ],
    outcomes: [
      'Understand a wide range of demanding, longer texts',
      'Express ideas fluently and spontaneously',
      'Use language flexibly and effectively',
      'Produce clear, well-structured, detailed text on complex subjects',
      'Understand implicit meaning and subtle nuances'
    ],
    targetAudience: 'Advanced learners who have completed B2 level or have strong upper-intermediate proficiency in Portuguese',
    certification: 'Upon successful completion, you will receive a C1 level certificate recognized by the Common European Framework of Reference for Languages (CEFR).',
    focusAreas: 'Advanced language mastery, academic excellence, professional communication, and cultural expertise',
    ctaText: 'Start Your Journey to Advanced Portuguese Proficiency',
    learningAreas: [
      {
        title: 'Advanced Grammar',
        description: 'Master complex grammatical structures and nuanced expressions',
        icon: GraduationCap
      },
      {
        title: 'Academic Writing',
        description: 'Develop sophisticated writing skills for academic and professional contexts',
        icon: BookOpen
      },
      {
        title: 'Cultural Fluency',
        description: 'Deepen your understanding of Portuguese-speaking cultures and societies',
        icon: Users
      },
      {
        title: 'Professional Communication',
        description: 'Excel in complex professional and academic discussions',
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
        duration: '2 months',
        hours: '180 hours'
      },
      {
        name: 'Flexible Plan',
        duration: '4 months',
        hours: '90 hours'
      },
      {
        name: 'Weekend Plan',
        duration: '6 months',
        hours: '60 hours'
      }
    ]
  };

  return <PortugueseLevelTemplate levelData={levelData} />;
};

export default PortugueseC1; 