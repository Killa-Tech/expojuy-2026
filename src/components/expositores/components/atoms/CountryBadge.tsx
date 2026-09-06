import React from 'react';

interface CountryBadgeProps {
  countryCode: string;
  className?: string;
}

export const CountryBadge: React.FC<CountryBadgeProps> = ({ countryCode, className = '' }) => {
  return (
    <div
      className={`inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md border border-white/20 ${className}`}
    >
      <span className="h-2 w-2 rounded-full bg-[#00b4d8]" />
      <span>{countryCode}</span>
    </div>
  );
};
