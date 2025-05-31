import React from 'react';
import { BookOpen, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LanguageCardProps {
  title: string;
  level: string;
  link: string;
  isAvailable: boolean;
}

const LanguageCard: React.FC<LanguageCardProps> = ({ 
  title, 
  level, 
  link, 
  isAvailable 
}) => {
  return (
    <div 
      className={`rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg
        ${isAvailable 
          ? 'bg-white border-l-4 border-primary-500' 
          : 'bg-gray-50 border-l-4 border-gray-300'
        }`}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className={`text-xl font-bold ${isAvailable ? 'text-gray-900' : 'text-gray-700'}`}>
            {title}
          </h3>
          {isAvailable ? (
            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-primary-100 text-primary-700">
              Available
            </span>
          ) : (
            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-gray-200 text-gray-700">
              Coming Soon
            </span>
          )}
        </div>
        
        <p className="text-gray-600 mb-4">Level: {level}</p>
        
        <div className="flex items-center text-sm text-gray-500 mb-6">
          {isAvailable ? (
            <BookOpen className="h-4 w-4 mr-1" />
          ) : (
            <Clock className="h-4 w-4 mr-1" />
          )}
          <span>
            {isAvailable 
              ? 'Enrollment open' 
              : 'Registration opening soon'}
          </span>
        </div>
        
        {isAvailable ? (
          <Link 
            to={link}
            className="block w-full text-center py-2 px-4 rounded bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors duration-300"
          >
            Enroll Now
          </Link>
        ) : (
          <button 
            disabled
            className="block w-full text-center py-2 px-4 rounded bg-gray-300 text-gray-600 font-medium cursor-not-allowed"
          >
            Coming Soon
          </button>
        )}
      </div>
    </div>
  );
};

export default LanguageCard;