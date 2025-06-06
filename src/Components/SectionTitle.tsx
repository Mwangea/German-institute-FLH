import React from 'react';

interface SectionTitleProps {
  title: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, className = '' }) => {
  return (
    <div className="inline-block text-center py-6">
      <h2 className={`text-4xl font-bold text-gray-900 mb-4 ${className}`}>{title}</h2>
      <div className="h-1 bg-button-50 w-full"></div>
    </div>
  );
};

export default SectionTitle; 