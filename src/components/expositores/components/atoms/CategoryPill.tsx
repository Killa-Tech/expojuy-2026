import React from 'react';

interface CategoryPillProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

export const CategoryPill: React.FC<CategoryPillProps> = ({ label, isSelected, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-semibold font-['Ambit',sans-serif] transition-all cursor-pointer ${
        isSelected
          ? 'bg-primary text-primary-foreground shadow-sm shadow-primary/25'
          : 'bg-muted text-muted-foreground hover:bg-foreground/10 hover:text-foreground'
      }`}
    >
      {label}
    </button>
  );
};
