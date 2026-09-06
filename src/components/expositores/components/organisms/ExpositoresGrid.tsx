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
    <div className="mt-10 font-['Ambit',sans-serif]">
      <div className="flex items-center justify-between mb-6 font-['Ambit',sans-serif]">
        <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2 font-['Ambit',sans-serif]">
          <span className="text-primary">★</span> Oradores Magistrales Confirmados
        </h2>
        <span className="text-xs text-muted-foreground font-medium font-['Ambit',sans-serif]">
          Mostrando <strong className="text-foreground">{expositores.length}</strong> disertantes
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
