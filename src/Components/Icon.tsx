import React from 'react';
import * as LucideIcons from 'lucide-react';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, color, className = '' }) => {
  // Convert kebab-case to PascalCase for icon names
  const pascalCaseName = name.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');

  // Dynamically get the icon component from lucide-react
  const LucideIcon = (LucideIcons as any)[pascalCaseName] || LucideIcons.HelpCircle;

  return <LucideIcon size={size} color={color} className={className} />;
};

export default Icon;