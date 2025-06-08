import TurkishLevelTemplate from './TurkishLevelTemplate';
import { BookOpen, GraduationCap, Users, Award } from 'lucide-react';

const TurkishC2 = () => {
  const levelData = {
    level: 'C2',
    title: 'Mastery Turkish',
    tagline: 'Achieve native-like proficiency in Turkish and master the language at its highest level.',
    duration: '3 months',
    price: 'Kes 30,000',
    overview: 'Our C2 Turkish course is designed for students who have completed C1 or have near-native proficiency in Turkish. You will develop your ability to understand with ease virtually everything heard or read, summarize information from different spoken and written sources, reconstructing arguments and accounts in a coherent presentation, and express yourself spontaneously, very fluently and precisely, differentiating finer shades of meaning even in the most complex situations.',
    format: 'Online and in-person classes available',
    objectives: [
      'Achieve native-like mastery of Turkish',
      'Master the most complex language structures',
      'Develop expert-level cultural understanding',
      'Perfect professional and academic communication',
      'Excel in specialized language domains'
    ],
    outcomes: [
      'Understand with ease virtually everything heard or read',
      'Summarize information from different spoken and written sources',
      'Express yourself spontaneously, very fluently and precisely',
      'Differentiate finer shades of meaning in complex situations',
      'Master specialized language in various professional contexts'
    ],
    targetAudience: 'Advanced learners who have completed C1 level or have near-native proficiency in Turkish',
    certification: 'Upon successful completion, you will receive a C2 level certificate recognized by the Common European Framework of Reference for Languages (CEFR).',
    focusAreas: 'Native-like mastery, cultural expertise, professional excellence, and academic leadership',
    ctaText: 'Start Your Journey to Turkish Language Mastery',
    learningAreas: [
      {
        title: 'Language Mastery',
        description: 'Achieve native-like command of Turkish language',
        icon: GraduationCap
      },
      {
        title: 'Expert Writing',
        description: 'Master sophisticated writing for any context',
        icon: BookOpen
      },
      {
        title: 'Cultural Expertise',
        description: 'Develop deep understanding of Turkish culture and society',
        icon: Users
      },
      {
        title: 'Professional Excellence',
        description: 'Excel in complex professional and academic contexts',
        icon: Award
      }
    ],
    assessment: 'Comprehensive evaluation through weekly quizzes, mid-term assessment, final examination, speaking assessment, and writing portfolio',
    resources: [
      'Advanced course materials and resources',
      'Online learning platform access',
      'Authentic Turkish media and literature',
      'Specialized practice materials',
      'Cultural immersion resources'
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

export default TurkishC2;
