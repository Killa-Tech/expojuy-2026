import React from 'react';
import type { Expositor } from '../../types';
import { ExpositorCard } from '../molecules/ExpositorCard';
import { ExpositoresEmptyState } from '../molecules/ExpositoresEmptyState';

interface ExpositoresGridProps {
  expositores: Expositor[];
  onEdit?: (expositor: Expositor) => void;
  onResetFilters: () => void;
}

export const ExpositoresGrid: React.FC<ExpositoresGridProps> = ({
  expositores,
  onEdit,
  onResetFilters,
}) => {
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
          <span className="text-[#6c35de]">★</span> Oradores Magistrales Confirmados
        </h2>
        <span className="text-xs text-slate-500 font-medium">
          Mostrando <strong className="text-slate-800">{expositores.length}</strong> disertantes
        </span>
      </div>

      {expositores.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expositores.map((exp) => (
            <ExpositorCard
              key={exp.id}
              expositor={exp}
              onEdit={onEdit}
            />
          ))}
        </div>
      ) : (
        <ExpositoresEmptyState onResetFilters={onResetFilters} />
      )}
    </div>
  );
};
