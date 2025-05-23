import React from 'react';
import ModuleItem from './ModuleItem';

interface Module {
  id: number;
  title: string;
  level: string;
}

interface ModuleListProps {
  modules: Module[];
}

const ModuleList: React.FC<ModuleListProps> = ({ modules }) => {
  return (
    <div className="space-y-4">
      {modules.map(module => (
        <ModuleItem key={module.id} module={module} />
      ))}
    </div>
  );
}

export default ModuleList;