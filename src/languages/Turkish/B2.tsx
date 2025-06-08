import TurkishLevelTemplate from './TurkishLevelTemplate';
import { BookOpen, GraduationCap, Users, Award } from 'lucide-react';

const TurkishB2 = () => {
  const levelData = {
    level: 'B2',
    title: 'Upper Intermediate Turkish',
    tagline: 'Master complex Turkish language skills and express yourself fluently on a wide range of topics.',
    duration: '3 months',
    price: 'Kes 30,000',
    overview: 'Our B2 Turkish course is designed for students who have completed B1 or have a strong intermediate level in Turkish. You will develop your ability to understand the main ideas of complex text on both concrete and abstract topics, interact with a degree of fluency and spontaneity that makes regular interaction with native speakers quite possible without strain for either party, and produce clear, detailed text on a wide range of subjects.',
    format: 'Online and in-person classes available',
    objectives: [
      'Master advanced grammar structures and complex verb forms',
      'Expand specialized vocabulary for academic and professional use',
      'Develop critical reading and analysis skills',
      'Enhance academic and professional writing',
      'Achieve near-native fluency in conversations'
    ],
    outcomes: [
      'Understand the main ideas of complex text on both concrete and abstract topics',
      'Interact with a degree of fluency and spontaneity',
      'Produce clear, detailed text on a wide range of subjects',
      'Explain a viewpoint on a topical issue giving advantages and disadvantages',
      'Understand most TV news and current affairs programs'
    ],
    targetAudience: 'Upper-intermediate learners who have completed B1 level or have strong intermediate proficiency in Turkish',
    certification: 'Upon successful completion, you will receive a B2 level certificate recognized by the Common European Framework of Reference for Languages (CEFR).',
    focusAreas: 'Advanced language structures, professional communication, academic writing, and cultural understanding',
    ctaText: 'Start Your Journey to Upper-Intermediate Turkish Proficiency',
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
        description: 'Deepen your understanding of Turkish-speaking cultures and societies',
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
        name: 'Regular Plan',
        duration: '3 months',
        hours: '1 hour/day'
      },
      {
        name: 'Intensive Plan',
        duration: '3 months',
        hours: '2 hours/day'
      },
      {
        name: 'Super-Intensive Plan',
        duration: '3 months',
        hours: '3 hours/day'
      },
      {
        name: 'Accelerated Plan',
        duration: '3 months',
        hours: '6 hours/day'
      }
    ]
  };

  return <TurkishLevelTemplate levelData={levelData} />;
};

export default TurkishB2;
