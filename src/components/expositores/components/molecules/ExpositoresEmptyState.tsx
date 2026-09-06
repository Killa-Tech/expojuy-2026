import React from 'react';
import { SearchX } from 'lucide-react';

interface ExpositoresEmptyStateProps {
  onResetFilters: () => void;
}

export const ExpositoresEmptyState: React.FC<ExpositoresEmptyStateProps> = ({ onResetFilters }) => {
  return (
    <div className="rounded-2xl border-2 border-dashed border-border bg-card text-card-foreground p-12 text-center transition-colors font-['Ambit',sans-serif]">
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
        <SearchX className="h-6 w-6" />
      </div>
      <p className="text-base font-semibold text-foreground font-['Ambit',sans-serif]">No se encontraron expositores</p>
      <p className="mt-1 text-xs text-muted-foreground font-['Ambit',sans-serif]">
        Prueba ajustando los filtros temáticos o el término de búsqueda.
      </p>
      <button
        type="button"
        onClick={onResetFilters}
        className="mt-4 rounded-xl bg-muted px-4 py-2 text-xs font-semibold font-['Ambit',sans-serif] text-foreground hover:bg-muted/80 transition-colors cursor-pointer"
      >
        Limpiar Filtros
      </button>
    </div>
  );
};
