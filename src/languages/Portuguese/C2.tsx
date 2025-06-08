import PortugueseLevelTemplate from './PortugueseLevelTemplate';
import { BookOpen, GraduationCap, Users, Award } from 'lucide-react';

const PortugueseC2 = () => {
  const levelData = {
    level: 'C2',
    title: 'Mastery Portuguese',
    tagline: 'Achieve native-like proficiency in Portuguese',
    description: 'Achieve native-like proficiency in Portuguese and master the language at its highest level.',
    duration: '3 months',
    price: 'Kes 30,000',
    overview: 'Our C2 Portuguese course is designed for students who have completed C1 or have near-native proficiency in Portuguese. You will develop your ability to understand with ease virtually everything heard or read, summarize information from different spoken and written sources, reconstructing arguments and accounts in a coherent presentation, and express yourself spontaneously, very fluently and precisely, differentiating finer shades of meaning even in the most complex situations.',
    format: 'Online and in-person classes available',
    objectives: [
      'Achieve native-like mastery of Portuguese',
      'Master the most complex language structures',
      'Develop expert-level cultural understanding',
      'Perfect professional and academic communication',
      'Excel in specialized language domains'
    ],
    studyPlan: [
      {
        week: 1,
        topics: ['Review of C1 content', 'Mastery of idiomatic expressions', 'Advanced stylistic devices']
      },
      {
        week: 2,
        topics: ['Advanced literary analysis', 'Critical theory', 'Advanced composition']
      },
      {
        week: 3,
        topics: ['Expert business communication', 'International negotiations', 'Advanced diplomacy']
      },
      {
        week: 4,
        topics: ['Advanced academic writing', 'Research publication', 'Peer review']
      },
      {
        week: 5,
        topics: ['Expert media analysis', 'Advanced journalism', 'Media production']
      },
      {
        week: 6,
        topics: ['Advanced cultural studies', 'Philosophical analysis', 'Intellectual discourse']
      },
      {
        week: 7,
        topics: ['Expert scientific writing', 'Research methodology', 'Advanced documentation']
      },
      {
        week: 8,
        topics: ['Advanced political analysis', 'Policy development', 'International relations']
      },
      {
        week: 9,
        topics: ['Global affairs', 'International diplomacy', 'Cross-cultural leadership']
      },
      {
        week: 10,
        topics: ['Expert translation', 'Advanced interpretation', 'Cultural expertise']
      },
      {
        week: 11,
        topics: ['Review of mastery-level content', 'Practice conversations', 'Cultural topics']
      },
      {
        week: 12,
        topics: ['Final review', 'Practice test', 'Course completion assessment']
      }
    ],
    materials: [
      'Course textbook and workbook',
      'Online learning platform access',
      'Audio materials for listening practice',
      'Practice exercises and worksheets',
      'Cultural resources and videos'
    ],
    assessment: 'Comprehensive evaluation through weekly quizzes, mid-term assessment, final examination, speaking assessment, and writing portfolio',
    outcomes: [
      'Understand with ease virtually everything heard or read',
      'Summarize information from different sources',
      'Express yourself spontaneously, very fluently and precisely',
      'Differentiate finer shades of meaning in complex situations',
      'Achieve native-like mastery of Portuguese'
    ],
    targetAudience: 'Advanced learners who have completed C1 level or have near-native proficiency in Portuguese',
    certification: 'Upon successful completion, you will receive a C2 level certificate recognized by the Common European Framework of Reference for Languages (CEFR).',
    focusAreas: 'Advanced language mastery, cultural expertise, professional communication, and academic excellence',
    ctaText: 'Start Your Journey to Portuguese Mastery',
    learningAreas: [
      {
        title: 'Advanced Language Mastery',
        description: 'Perfect your command of complex grammar structures and nuanced expressions',
        icon: GraduationCap
      },
      {
        title: 'Cultural Expertise',
        description: 'Deep dive into Portuguese culture, literature, and intellectual discourse',
        icon: BookOpen
      },
      {
        title: 'Professional Excellence',
        description: 'Master business, academic, and diplomatic communication',
        icon: Users
      },
      {
        title: 'Research & Analysis',
        description: 'Develop advanced research and analytical skills in Portuguese',
        icon: Award
      }
    ],
    resources: [
      'Comprehensive course materials',
      'Digital learning platform',
      'Audio-visual resources',
      'Practice materials',
      'Cultural resources'
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
      }
    ]
  };

  return <PortugueseLevelTemplate levelData={levelData} />;
};

export default PortugueseC2; 