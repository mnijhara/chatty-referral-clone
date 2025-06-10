
import React from 'react';

interface AvatarGeneratorProps {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  colorIndex?: number;
  className?: string;
}

const AvatarGenerator = ({ name, size = 'md', colorIndex = 0, className = '' }: AvatarGeneratorProps) => {
  const initials = name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const colors = [
    'bg-indigo-500',
    'bg-pink-500', 
    'bg-blue-500',
    'bg-green-500',
    'bg-purple-500',
    'bg-rose-500',
    'bg-amber-500',
    'bg-cyan-500'
  ];

  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-12 h-12 text-sm',
    lg: 'w-16 h-16 text-base',
    xl: 'w-24 h-24 text-xl'
  };

  const bgColor = colors[colorIndex % colors.length];
  const sizeClass = sizeClasses[size];

  return (
    <div 
      className={`${bgColor} ${sizeClass} rounded-full flex items-center justify-center text-white font-semibold shadow-sm ${className}`}
    >
      {initials}
    </div>
  );
};

export default AvatarGenerator;
