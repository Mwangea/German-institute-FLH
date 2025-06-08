import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import ModuleList from './ModuleList';
import Icon from './Icon';

interface Module {
  id: number;
  title: string;
  level?: string;
  link: string;
}

interface Program {
  id: number;
  title: string;
  description: string;
  icon: string;
  link: string;
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
              <h3 className="text-3xl font-bold text-gray-900">
                <Link to={program.link} className="hover:text-primary-500 transition-colors">
                  {program.title}
                </Link>
              </h3>
            </div>
            <p className="text-lg text-gray-700 mb-6">{program.description}</p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                to={program.link}
                className="px-6 py-3 bg-button-50 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200"
              >
                Program Details
              </Link>
              
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="px-6 py-3 border border-primary-500 text-primary-500 rounded-lg hover:bg-primary-50 transition-colors duration-200"
              >
                <span className="flex items-center gap-2">
                  View {program.modules.length} Courses
                  {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
            </div>
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