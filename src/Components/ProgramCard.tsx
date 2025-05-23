import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ModuleList from './ModuleList';
import Icon from './Icon';

interface Module {
  id: number;
  title: string;
  level: string;
}

interface Program {
  id: number;
  title: string;
  description: string;
  icon: string;
  modules: Module[];
}

interface ProgramCardProps {
  program: Program;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="p-8">
        <div className="flex items-start mb-4">
          <div className="flex-shrink-0 mr-4">
            <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-white">
              <Icon name={program.icon} size={24} />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>
            <p className="text-gray-700">{program.description}</p>
          </div>
        </div>
        
        <div className="mt-6">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-between w-full py-3 px-4 bg-gray-50 rounded-lg text-primary-500 font-medium transition-colors duration-200 hover:bg-primary-50"
          >
            <span>View {program.modules.length} Courses</span>
            {isExpanded ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </button>
        </div>
      </div>
      
      <div 
        className={`transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <ModuleList modules={program.modules} />
      </div>
    </div>
  );
};

export default ProgramCard;