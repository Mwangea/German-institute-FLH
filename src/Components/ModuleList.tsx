import React from 'react';
import ModuleItem from './ModuleItem';
import { Link } from 'react-router-dom';

interface Module {
  id: number;
  title: string;
  level?: string;
  link: string;
}

interface ModuleListProps {
  modules: Module[];
}

const ModuleList: React.FC<ModuleListProps> = ({ modules }) => {
  return (
    <div className="space-y-4">
      {modules.map(module => (
        <Link to={module.link} key={module.id} className="block hover:no-underline">
          <ModuleItem module={module} />
        </Link>
      ))}
    </div>
  );
}

export default ModuleList;