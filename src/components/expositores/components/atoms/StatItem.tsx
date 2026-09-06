import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface StatItemProps {
  icon: LucideIcon;
  value: string | number;
  label: string;
  iconColor?: string;
  hasBorder?: boolean;
}

export const StatItem: React.FC<StatItemProps> = ({
  icon: Icon,
  value,
  label,
  iconColor = 'text-primary',
  hasBorder = false,
}) => {
  return (
    <div
      className={`flex items-center gap-2 px-3 py-1 font-['Ambit',sans-serif] ${
        hasBorder ? 'border-r border-border' : ''
      }`}
    >
      <Icon className={`h-4 w-4 ${iconColor}`} />
      <div className="text-left">
        <span className="block text-sm font-bold text-foreground">{value}</span>
        <span className="block text-[10px] text-muted-foreground uppercase tracking-wider">{label}</span>
      </div>
    </div>
  );
};
