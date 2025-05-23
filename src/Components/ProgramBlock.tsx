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

interface ProgramBlockProps {
  program: Program;
  isReversed?: boolean;
}

const ProgramBlock: React.FC<ProgramBlockProps> = ({ program, isReversed = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
      <div className="w-full lg:w-1/2">
        <div className={`relative group ${isReversed ? 'lg:pl-12' : 'lg:pr-12'}`}>
          <div className="absolute inset-0 bg-primary-500 rounded-3xl opacity-5 group-hover:opacity-10 transition-opacity duration-300" />
          <div className="relative p-8">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary-500 flex items-center justify-center text-white transform rotate-3 transition-transform group-hover:rotate-6 duration-300">
                <Icon name={program.icon} size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">{program.title}</h3>
            </div>
            <p className="text-lg text-gray-700 mb-8">{program.description}</p>
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 text-primary-500 font-medium hover:text-primary-600 transition-colors duration-200"
            >
              <span>View {program.modules.length} Courses</span>
              {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 lg:max-h-fit lg:opacity-100'
        }`}>
          <ModuleList modules={program.modules} />
        </div>
      </div>
    </div>
  );
};

export default ProgramBlock;