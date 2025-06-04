
interface LogoGeneratorProps {
  companyName: string;
  size?: 'sm' | 'md' | 'lg';
  colorIndex?: number;
  className?: string;
}

const LogoGenerator = ({ companyName, size = 'md', colorIndex = 0, className = '' }: LogoGeneratorProps) => {
  const initials = companyName
    .split(' ')
    .map(word => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  const colors = [
    'bg-indigo-600',
    'bg-blue-600',
    'bg-sky-600',
    'bg-emerald-600',
    'bg-violet-600',
    'bg-pink-600',
    'bg-rose-600',
    'bg-amber-600'
  ];

  const sizeClasses = {
    sm: 'w-5 h-5 text-xs',
    md: 'w-12 h-12 text-sm',
    lg: 'w-16 h-16 text-base'
  };

  const bgColor = colors[colorIndex % colors.length];
  const sizeClass = sizeClasses[size];

  return (
    <div 
      className={`${bgColor} ${sizeClass} rounded flex items-center justify-center text-white font-bold ${className}`}
    >
      {initials}
    </div>
  );
};

export default LogoGenerator;
