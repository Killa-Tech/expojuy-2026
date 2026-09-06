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
      className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
        isSelected
          ? 'bg-[#6c35de] text-white shadow-sm'
          : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-800'
      }`}
    >
      {label}
    </button>
  );
};
