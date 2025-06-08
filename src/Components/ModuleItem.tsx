import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Module {
  id: number;
  title: string;
  level?: string;
}

interface ModuleItemProps {
  module: Module;
}

const getLevelColor = (level?: string) => {
  if (!level) return 'bg-gray-100 text-gray-800';
  const levelLower = level.toLowerCase();
  if (levelLower.includes('beginner')) return 'bg-green-100 text-green-800';
  if (levelLower.includes('intermediate')) return 'bg-blue-100 text-blue-800';
  if (levelLower.includes('advanced')) return 'bg-purple-100 text-purple-800';
  return 'bg-gray-100 text-gray-800';
};

const ModuleItem: React.FC<ModuleItemProps> = ({ module }) => {
  const levelColorClass = getLevelColor(module.level);

  return (
    <div className="group relative overflow-hidden rounded-xl bg-white border border-gray-100 hover:border-primary-500 transition-all duration-300 p-4 cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative flex items-center justify-between">
        <div>
          <h5 className="font-medium text-gray-900 mb-1">{module.title}</h5>
          {module.level && (
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${levelColorClass}`}>
              {module.level}
            </span>
          )}
        </div>
        <div className="transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
          <ArrowRight className="text-primary-500" size={20} />
        </div>
      </div>
    </div>
  );
};

export default ModuleItem;
